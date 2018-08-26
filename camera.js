
let cameraAlpha= {
  front: -Math.PI,
  left: Math.PI/2,
  back: 0,
  right:  -Math.PI/2
}

let cameraSnap = {
  off: 0,
  diagonal: 1,
  vertical: 2,
  deg: 3
}

let camera = {
  scene: 0,
  arcRotateCamera : 0,
  lastTargetAngle: 0,
  animateFrameRate : 30,
  animateFrameTime : 6, 
  animate : 0,
  animateFrames : [],
  animatable: 0,
  pointerActive: false,
  snap: 0, //1 = diagonal, 2= vertical, 3= 45 deg
  init : function(scene){

    this.scene = scene;
    this.arcRotateCamera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);  
    this.arcRotateCamera.setPosition(new BABYLON.Vector3(15,15,15));
    this.arcRotateCamera.lowerBetaLimit =Math.PI/8;
    this.arcRotateCamera.upperBetaLimit  = Math.PI - Math.PI/2; 
    this.arcRotateCamera.lowerRadiusLimit = 5;
    this.arcRotateCamera.upperRadiusLimit = 40;
    this.arcRotateCamera.attachControl(canvas, true);  
    this.arcRotateCamera.angularSensibilityX = 2000;
    this.arcRotateCamera.angularSensibilityY = 3000;
    this.arcRotateCamera.angularSensibilityZ = 2000;
    this.arcRotateCamera.wheelPrecision = 50;   
    this.arcRotateCamera.radius = 20;

    this.arcRotateCamera.useBouncingBehavior = false;
   
    this.arcRotateCamera.alpha =  cameraAlpha.front; 
    this.animate = new BABYLON.Animation("cameraAnimate", "alpha", this.animateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT  );
      

    let light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5,0), scene);
            
    light0.specular = new BABYLON.Color3(0, 0, 0);
    light0.specularPower = 0;
    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.intensity =0.75;

    let light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(4.5, -5, 4.5), scene);
    
    light1.specular = new BABYLON.Color3(0, 0, 0);
    light1.specularPower = 0;
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.intensity =0.15;

  },
  zoomToStartPos : function(){
    this.arcRotateCamera.radius = 20;
    this.arcRotateCamera.setTarget(new BABYLON.Vector3(4.5,0 ,4.5));
  },
  lock : function(){
    this.scene.activeCamera.detachControl(canvas);
  },
  unlock : function(){
    this.scene.activeCamera.attachControl(canvas); 
  },
  setAlpha: function(angle, noFilter){

    if(!this.pointerActive && (noFilter || Math.abs(this.lastTargetAngle - angle) > Math.PI/40 )){     
 
      this.lastTargetAngle = angle;
      let startAlpha = (this.arcRotateCamera.alpha%(2*Math.PI));

      if(this.snap != 0){        
        angle = this.calcSnap(angle);
      }

      if(startAlpha  - angle > Math.PI){      
        angle += 2*Math.PI;
      }else if(startAlpha  - angle < -Math.PI){      
        angle -= 2*Math.PI;
      }
      if(this.animatable != 0){
        this.animatable.stop();
      }
      this.animateFrames.pop();
      this.animateFrames.pop();
      this.animateFrames.pop();

      let dampener = Math.PI/20000;
      if(angle > startAlpha){
        dampener = -Math.PI/20000;
      }

      this.animateFrames.push({
        frame: 0,
        value: startAlpha
      });
      this.animateFrames.push({
        frame: 1 + this.animateFrameTime* Math.abs(startAlpha - angle),
        value: angle + dampener                                
      });
      this.animateFrames.push({
        frame: 15 + this.animateFrameTime* Math.abs(startAlpha - angle),
        value: angle                                 
      });
  
      this.animate.setKeys(this.animateFrames);                                
      this.animatable = this.scene.beginDirectAnimation(this.arcRotateCamera, [this.animate], 0, 2 * this.animateFrameRate, false);
                     
    }
    
    
  },
  pointerDown: function(){
    this.pointerActive = true;
    this.arcRotateCamera.inertia = 0.9;

  },
  pointerUp: function(){
    this.pointerActive = false;   
    if(this.snap != 0){
      this.setAlpha(this.arcRotateCamera.alpha, true);
    }
    
  },
  calcSnap: function(angle){
    let snapAngle = Math.PI/2;
    let diagonal = 0;

    if(this.snap == 1){
      diagonal = Math.PI/4; 
    }else if(this.snap == 3){
      snapAngle = Math.PI/4;   
    }

    let direction = 1;
    if(angle > 0 && angle % snapAngle < diagonal + snapAngle/2 ){
      direction = 0;      
    }else if( angle < 0 && angle % snapAngle < diagonal -snapAngle/2){
      direction = 0;        
    }

    return diagonal + snapAngle* Math.floor(angle/(snapAngle)) + direction*snapAngle;
  }
  
};
