let helpType = {
  ble: 100,
  size: 101,
  settings: 102,
  game : 103,
}

let help = {
  scene: 0,
  videoPlane: 0,
  videoMaterial: 0,
  videoTexture: 0,
  videoActive: false,
  active: false,
  showBleButton: false,
  helpButton : 0,
  videosGame: [],
  videosOther: [],
  showedHelpForHelp: false,
   


  init : function(scene){
    this.scene = scene;

    this.videoMaterial = new BABYLON.StandardMaterial("videoMaterial", this.scene);
    this.videoMaterial.emissiveColor = new BABYLON.Color3(1,1,1);


    let iconPathHelpButton = "./icon/help.svg"

    this.helpButton = Object.create(buttonSimple); 
    //this.helpButton = Object.create(buttonExpandable);    
    this.helpButton.init(buttonPosition.right,buttonPosition.bottom, iconPathHelpButton );
    this.helpButton.position(-1,0);
    this.helpButton.initCallBack(this.clickHelp, buttonTrigger.down);
    this.helpButton.show();

    this.videosOther[helpType.ble -100] = "./help/ble.mp4";
    this.videosOther[helpType.size -100] = "./help/size.mp4";
    this.videosOther[helpType.settings -100] = "./help/settings.mp4";
    this.videosOther[helpType.game -100] = "./help/game.mp4";


    this.videosGame[games.guidedBuild] = "./help/guidedbuild.mp4";
    this.videosGame[games.tangram] = "./help/tangram.mp4";
    this.videosGame[games.tangramFree] = "./help/tangramfree.mp4";
    this.videosGame[games.shapeHunter] = "./help/shapehunter.mp4";
    this.videosGame[games.colorMatch] = "./help/colormatch.mp4";
    this.videosGame[games.memo] = "./help/memo.mp4";
    this.videosGame[games.math] = "./help/math.mp4";
    this.videosGame[games.tangram2D] = "./help/tangram2d.mp4";
    this.videosGame[games.freeBuild] = "./help/freebuild.mp4";




  },

  sizeChange : function(sizeSetting){

    if(guiSettings.sizeSetting ==0  ){
      this.helpButton.changeSize(1);
      this.helpButton.position(-1,0);
      this.helpButton.changeSize(sizeSetting);
      
    }else{
      this.helpButton.changeSize(sizeSetting);
      this.helpButton.position(-1,0);
    }
    
  },

  clickHelp : function() {
    //console.log("help!!");

    if(help.active){

      if(help.videoActive){
        help.closeVideo();
        return;
      }

      camera.arcRotateCamera.beta = Math.PI/3; 
      camera.unlock(); 

      activeGame.resetAfterHelp();
      help.helpButton.elipse.background = "#505050";
      help.active = false;
      return;
    }

    help.helpButton.elipse.background = "#FF0000";

    help.active = true;

    camera.snap = cameraSnap.off;
    camera.arcRotateCamera.setTarget(new BABYLON.Vector3(4.5,0 ,4.5));
    camera.arcRotateCamera.radius = 20;
    camera.arcRotateCamera.beta = Math.PI/2;      
    camera.setAlpha(cameraAlpha.front, true);    
    camera.lock();


    if(!help.showedHelpForHelp){
      help.playVideo("./help/help.mp4");
      help.showedHelpForHelp = true;
    }

},
clickForHelp : function(id){

  if(help.videoActive){    
    return;
  }
  console.log("click for help");

  if(id < 100){
    help.playVideo(this.videosGame[id]);
  }else{
    console.log("id: " + id);
    help.playVideo(this.videosOther[id-100]);
  }
  

},

  closeVideo : function(){

    //if(this.videoActive){
      
      this.videoPlane.dispose(); 
      this.videoTexture.dispose();   

      this.videoActive = false;
      if(this.showBleButton){
        ble.connectButton.show();
        this.showBleButton = false;
      }

  


    //  return;
    //}

  },


  playVideo : function(path){




    this.videoPlane = BABYLON.MeshBuilder.CreatePlane("vieoPlane", {width: 13, height: 7}, this.scene);
    this.videoPlane.isPickable = false;
    this.videoPlane.position.x = -2;
    this.videoPlane.position.z = 4.5;
    this.videoPlane.rotation.y =  Math.PI/2;


    if(ble.connectButton.elipse.isVisible == true){

      this.showBleButton = true;
      ble.connectButton.hide();
    }
    


    this.videoTexture = new BABYLON.VideoTexture("video", [path], scene, true);

    this.videoMaterial.diffuseTexture = this.videoTexture;
    this.videoPlane.material = this.videoMaterial;
    
    //scene.onPointerUp = function () {
      this.videoTexture.video.play();


      this.videoActive = true;
    //}





  }


}