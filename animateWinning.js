let animateWinning = {
    pitchY: 1.19,
   particleSystem: 0,
   starTemplate: 0,
    star: [],

    


 //starAnimateScale:0,
   materialsStar: [],
   timeOut: 0,
   timeOutRunning: false,
   scene: 0,
   blockLastColor: 0, //??
   blockAnimateY: -1, //??
   blockAnimateYdirection: -1, //??
   

 
  init: function(scene){
    this.scene = scene;

 // star shape ----------------
 let starShape = [ new BABYLON.Vector3( 0,0.3,0),		
  new BABYLON.Vector3( 0.069,0.094,0),	
  new BABYLON.Vector3( 0.285,0.093,0), 
  new BABYLON.Vector3( 0.111,-0.036,0),    
  new BABYLON.Vector3( 0.176,-0.243,0), 
  new BABYLON.Vector3( 0,-0.117,0),        
  new BABYLON.Vector3( -0.176,-0.243,0),  
  new BABYLON.Vector3( -0.111,-0.036,0),  
  new BABYLON.Vector3( -0.285,0.093,0),   
  new BABYLON.Vector3( -0.069,0.094,0), 
  new BABYLON.Vector3( 0,0.3,0)
                    
];


var starPath = [
  new BABYLON.Vector3(0, 0, 0),
  new BABYLON.Vector3(0, 0, 0.1)
 // new BABYLON.Vector3(0, 0, 0.1)
  

  ];



var starScaling = function(i, distance) {
  if(i == 0){
      return 1;
  }else if(i == 1){
      return 0;
  }else if(i == 2){
      return 0;
  }else if(i == 3){
      return 0.9;
  }

};

this.materialsStar[0] = new BABYLON.StandardMaterial("STAR STEEL", scene);
this.materialsStar[0].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
this.materialsStar[0].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

this.materialsStar[1] = new BABYLON.StandardMaterial("STAR BRONZE", scene);
this.materialsStar[1].diffuseColor = new BABYLON.Color3(0.9, 0.4, 0.1);
this.materialsStar[1].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

this.materialsStar[2] = new BABYLON.StandardMaterial("STAR SILVER", scene);
this.materialsStar[2].diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
this.materialsStar[2].emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
//materialsStar[2].specularColor = new BABYLON.Color3(0.6, 0.6, 0.6);

this.materialsStar[3] = new BABYLON.StandardMaterial("STAR GOLD", scene);
this.materialsStar[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
this.materialsStar[3].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.1);

this.materialsStar[4] = new BABYLON.StandardMaterial("STAR WHITE", scene);
this.materialsStar[4].diffuseColor = new BABYLON.Color3(1, 1, 1);
this.materialsStar[4].emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.1);

let shapesStarA = BABYLON.MeshBuilder.ExtrudeShapeCustom("shapesStar1", {shape: starShape, path: starPath, scaleFunction: starScaling, sideOrientation: BABYLON.Mesh.BACKSIDE, updatable: false}, scene);
shapesStarA.rotation.x = Math.PI;
shapesStarA.rotation.y = Math.PI + Math.PI/2;
shapesStarA.rotation.z = Math.PI;
shapesStarA.isPickable = false;
shapesStarA.scaling = new BABYLON.Vector3(3, 3, 3);

let shapesStarB = shapesStarA.clone("shapesStar2");
shapesStarB.isPickable = false;
shapesStarB.rotation.y = Math.PI/2;

shapesStar2Array = [shapesStarA, shapesStarB];
this.starTemplate = BABYLON.Mesh.MergeMeshes(shapesStar2Array); 
this.starTemplate.material = this.materialsStar[0];
this.starTemplate.setEnabled(0); 
this.starTemplate.isPickable = false;
scene.meshes.pop();


    
      
  var url = "http://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg";
      
  // Create a particle system
  this.particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            
  //Texture of each particle
  this.particleSystem.particleTexture = new BABYLON.Texture(url, scene);
            
  // Where the particles come from
 // this.particleSystem.emitter = this.shapesStar; // the starting object, the emitter
  this.particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
  this.particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
            
  // Colors of all particles
  this.particleSystem.color1 = new BABYLON.Color4(0.9, 1, 0, 1.0);
  this.particleSystem.color2 = new BABYLON.Color4(0.8, 0.9, 0, 1.0);
  this.particleSystem.colorDead = new BABYLON.Color4(0.7, 0.8, 0, 0.5);
            
  // Size of each particle (random between...
  this.particleSystem.minSize = 0.05;
  this.particleSystem.maxSize = 0.3;
            
  // Life time of each particle (random between...
  this.particleSystem.minLifeTime = 0.3;
  this.particleSystem.maxLifeTime = 1;
            
  // Emission rate
  this.particleSystem.emitRate = 200;
            
  // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
  this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            
  // Set the gravity of all particles
  this.particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            
  // Direction of each particle after it has been emitted      
  this.particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
  this.particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
            
  // Angular speed, in radians
  this.particleSystem.minAngularSpeed = 0;
  this.particleSystem.maxAngularSpeed = Math.PI;
            
  // Speed
  this.particleSystem.minEmitPower = 1;
  this.particleSystem.maxEmitPower = 3;
  this.particleSystem.updateSpeed = 0.005;
  },

  stop: function(){

   // console.log("animate winning stop");
    clearTimeout(this.timeOut); 
    this.timeOutRunning = false;

    //%guiLevelNext.isVisible = false;
    //%guiLevelNextImage.isVisible = false;

    this.particleSystem.stop();
    this.particleSystem.emitter = null;
    
    

    while(this.star.length > 0){
      this.star[this.star.length -1].dispose();  
      this.star.pop();
    }


},




 start: function(wins, maxY, displayParticle){
    
//console.log("WINNS!! : " + wins);

    maxY += 3;

    let animateFrameRate = 10;
    let starAnimateKeyFrames = []; 
    let starAnimateScaleKeyFrames = []; 
    let starAnimateScaleKeyFrames2 = []; 

    let starAnimateYR;
    let starAnimateScale2;
   
    let nextColor;
    let starAnimateScale;
        
        //block animate
        //console.log("AAAAAAAAAAAAA");

   /*% if(guiAnimateflashColorsAtEnd){
        this.blockLastColor = 0;
        this.blockAnimateY = -1;
        this.blockAnimateYdirection = -1;
        clearTimeout(this.timeOut);       
        this.timeOut = setTimeout(animateWinning.timeOutFunction, 1000);
        this.timeOutRunning = true;
    }
    


        //----

        let maxY = 0;
        let y = blocksOffset;




    while( y < blocksCount + blocksOffset ){

        if(blocksY[y] > maxY){
            maxY = blocksY[y];
        }
        y++;

    }
    maxY +=4;
*/
   // let maxY = 4;

    if(this.star[0] == null){
        this.star[0] = this.starTemplate.clone("S");
    }
   
    
    this.star[0].position.y =maxY * this.pitchY; 
    
    this.star[0].position.x =4.5;        
    this.star[0].position.z =4.5;
            
    if(Math.floor(wins/3) < 4){
      this.star[0].material =  this.materialsStar[Math.floor(wins/3)];
      nextColor = Math.floor(wins/3) + 1;    
    }else{
      this.star[0].material =  this.materialsStar[4];
      nextColor = 4;
    }
    
       
    
       
    if(wins% 3 == 2 ){
      if(this.star[1] == null){
        this.star[1] = this.starTemplate.clone("S");
        this.star[1].material = this.star[0].material ;
      }
      if(this.star[2] == null){
        this.star[2] = this.starTemplate.clone("S");   
        this.star[2].material = this.star[0].material ;
      }

      this.star[1].position.y =maxY*  this.pitchY; 
      this.star[2].position.y =maxY *  this.pitchY; 

      this.star[1].position.x =4.5;         
      this.star[1].position.z =6.5;
                  
      this.star[2].position.x =4.5;         
      this.star[2].position.z =2.5;
    
    }
        
       
        
    starAnimateYR = new BABYLON.Animation("starAnimateYR", "rotation.y", animateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE );
    starAnimateScale = new BABYLON.Animation("starAnimateScale", "scaling", animateFrameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE );
    if(wins% 3 == 2 ){
      starAnimateScale2 = new BABYLON.Animation("starAnimateScale", "scaling", animateFrameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT );
    }
        
    starAnimateKeyFrames.push({
            frame: 0,
            value: 0
    });        
    starAnimateKeyFrames.push({
            frame: animateFrameRate,
            value: Math.PI
    });        
    starAnimateKeyFrames.push({
            frame: animateFrameRate*2,
            value: Math.PI*2
    });        
        
    starAnimateScaleKeyFrames.push({
            frame: 0,
            value: new BABYLON.Vector3(1, 1, 1)
    });        
    starAnimateScaleKeyFrames.push({
            frame: animateFrameRate,
            value: new BABYLON.Vector3(1.5, 1.5, 1.5)
    });
    starAnimateScaleKeyFrames.push({
            frame: animateFrameRate*2,
            value: new BABYLON.Vector3(1, 1, 1)
    });
        
    if(wins% 3 ==2 ){
    
      starAnimateScaleKeyFrames2.push({
            frame: 0,
            value: new BABYLON.Vector3(1, 1, 1)
      });        
      starAnimateScaleKeyFrames2.push({
            frame: animateFrameRate,
            value: new BABYLON.Vector3(0.6, 0.6, 0.6)
      });        
      starAnimateScaleKeyFrames2.push({
            frame: animateFrameRate*2,
            value: new BABYLON.Vector3(0, 0, 0)
      });
        
    }

    this.scene.beginDirectAnimation( this.star[0], [starAnimateYR], 0, 2 * animateFrameRate, true);
    this.scene.beginDirectAnimation( this.star[0], [starAnimateScale], 0, 2 *   animateFrameRate, true);
    
    if(wins% 3 == 2 ){
      this.scene.beginDirectAnimation( this.star[1], [starAnimateYR], 0, 2 * animateFrameRate, true);
      this.scene.beginDirectAnimation( this.star[2], [starAnimateYR], 0, 2 * animateFrameRate, true);       
      this.scene.beginDirectAnimation( this.star[1], [starAnimateScale2], 0, 2 *   animateFrameRate, false);
      this.scene.beginDirectAnimation( this.star[2], [starAnimateScale2], 0, 2 *   animateFrameRate, false, 1, function (){animateWinning.star[0].material = animateWinning.materialsStar[nextColor];;});
    }
            
    starAnimateYR.setKeys(starAnimateKeyFrames);
    starAnimateScale.setKeys(starAnimateScaleKeyFrames);
    if(wins% 3 == 2 ){
      starAnimateScale2.setKeys(starAnimateScaleKeyFrames2);
    }

    if(displayParticle){
       // console.log("Disp parti");
        this.particleSystem.emitter = this.star[0];
        this.particleSystem.start();

        
    }else{     
        //console.log("no Disp parti") ;
        this.particleSystem.stop();
        this.particleSystem.emitter =null;  
        
    }

    },
/*
    function guiAnimateBlock(){

        let maxY = -1;
        let y = blocksOffset;


blockLastColor++;
       

blockLastColor %= 8;   
if(blockLastColor == 0){
    blockLastColor =1;
}

while( y < blocksCount + blocksOffset ){

    if(blocksY[y] > maxY){
        maxY = blocksY[y];
    }
    y++;

}

if(maxY < blockAnimateY){
    
    blockAnimateY = -1;
    blockAnimateYdirection = -1;

}

//console.log("blockAnimateY: " + blockAnimateY);
  //      console.log("blockLastColor: " + blockLastColor);

        if(blockAnimateY == -1){
            baseLED[0] = (blockLastColor <<3) + blockLastColor; // 0x12;
            baseLED[1] = (blockLastColor <<3) + blockLastColor;// 0x12;
        }else{
            baseLED[0] = 0x00;
            baseLED[1] = 0x00;
        }

y = blocksOffset;

        while( y < blocksCount + blocksOffset ){

            if(blocksY[y] == blockAnimateY){
                blockLED2x2[y] = (blockLastColor <<3) + blockLastColor; //0x12;
                blockLED2x4[y] = (blockLastColor <<3) + blockLastColor;//0x12;
            }else{
                blockLED2x2[y] = 0x00;
                blockLED2x4[y] = 0x00;
            }

            y++;
        }


        if(maxY == blockAnimateY || blockAnimateY == -1){

            blockAnimateYdirection = -blockAnimateYdirection;
        }
             
        
        blockAnimateY += blockAnimateYdirection;


        animateTimeOut = setTimeout(animateTimeOutFunction, 600);
        animateTimeOutRunning = true;
        blocksRender = 1;

     //   console.log(((Date.now() / 1000) - 1521943566));
        
        
        

    }
    
*/

     timeOutFunction: function() {
        //console.log("BBBBBBBBBBBBBBB");
        clearTimeout(this.timeOut);
        this.timeOutRunning = false;
        //guiAnimateBlock();
        //guiAnimateFlahBlock();
    }
/*
    function guiAnimateFlahBlock(){

        let y = blocksOffset;

        blockLastColor++;
       

        blockLastColor %= 8;     



        baseLED[0] = (blockLastColor <<3) + blockLastColor;
        baseLED[1] = (blockLastColor <<3) + blockLastColor;

        while( y < blocksCount + blocksOffset ){

            
            blockLED2x2[y] = (blockLastColor <<3) + blockLastColor;
            blockLED2x4[y] = (blockLastColor <<3) + blockLastColor;


            y++;
        }


        animateTimeOut = setTimeout(animateTimeOutFunction, 1000);
        animateTimeOutRunning = true;
        blocksRender = 1;


    }*/


}