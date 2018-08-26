let compass = {
  hex: [0,0,0],
  caliX: [0,0,0,0],
  caliZ: [0,0,0,0],
  zeroX: 0,
  zeroZ: 0,
  zeroAngle: [0,0,0,0],
  sensAngle: [1,1,1,1],
  realAngle: [cameraAlpha.front, cameraAlpha.right, cameraAlpha.back, cameraAlpha.left],
  lastAngle: 0,
  timeOutRunning: false,
  calibrationState: 0,
  enabled : false,
  calibrationRunning: false,
  timeOut: 0,
  base : 0,
  scene : 0,
  okClick: false,
  init : function(biloScene, base ){
    this.base = base;
    this.scene = biloScene;
  },
  angleXZ: function(compensate){

    if ( this.hex[0] > 32767){
      this.hex[0] -= 65536;                             
    }
    if ( this.hex[1] > 32767){
      this.hex[1] -= 65536;                             
    }

    let x = this.hex[0] - this.zeroX;
    let z = this.hex[1] - this.zeroZ;
    let angle = 0;    

    if(x >= 0 && z >= 0){
        angle=  Math.atan (z /x);
    }else if (x < 0 && z >= 0){
        angle =  Math.PI/2 - Math.atan (x/z);
    }else if (x < 0 && z < 0){
        angle=  -Math.PI/2 - Math.atan (x /z);
    }else if (x >= 0 && z < 0){
        angle=  Math.atan (z/x);
    }

    if(!compensate){
        return angle;
    }

    for(let i = 0; i < 4; i++ ){

        if( Math.abs(this.zeroAngle[i] - this.zeroAngle[(i+1)%4]) < Math.PI &&         
        (angle <= this.zeroAngle[i] &&  angle >= this.zeroAngle[(i+1)%4])){
            this.lastAngle = this.realAngle[i] - (angle - this.zeroAngle[i])/this.sensAngle[i];
            return this.lastAngle;
        }
    
    }

    for(let i = 0; i < 4; i++ ){
        if(Math.abs(this.zeroAngle[i] - this.zeroAngle[(i+1)%4]) > Math.PI){
            if(angle <= this.zeroAngle[i]){
                this.lastAngle = this.realAngle[i] - (angle - this.zeroAngle[i])/this.sensAngle[i];
                return this.lastAngle;
            }else{
                this.lastAngle = this.realAngle[i] + (-angle + this.zeroAngle[i] + 2*Math.PI)/this.sensAngle[i];
                return this.lastAngle;
            }
        } 
    }

    return 0;

    }, 
    calcSens : function(angle1, angle2){

        if(Math.abs(angle1 - angle2) > Math.PI){
            if(angle1 > angle2){
                return (angle2 - angle1 + 2*Math.PI)/(Math.PI/2) 
            }else{
                return (angle1 - angle2 + 2*Math.PI)/(Math.PI/2) 
            }
        }else{
            return Math.abs(angle1 - angle2) / (Math.PI/2);
    
        }
    
    },
    assignSign : function(val){
        if ( val > 32767){
            return val -= 65536;                             
        }
        return val;
    },
    timeOutFunction : function(){
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;    
    },
    enable : function(){
        this.enabled = false;        
        camera.lock();
        this.calibrationState = 0;
        this.calibrationRunning = true;
        this.calibrate();
    },
    disable : function(){
        this.enabled = false;

    },
    render : function(){
        if(this.calibrationRunning){
            this.calibrate();
            return;
        }  
        if(this.enabled){
            camera.setAlpha(this.angleXZ(true)); 
        }  
    },
    clickOk : function(){
        compass.okClick = true;
        guiSettings.okButton.hide();
    },
    calibrate : function(){
        if(this.timeOutRunning){
            return;
        }    

        if(this.calibrationState % 2 == 0 ){         
            this.base.ledClear();         
            if(this.calibrationState == 0){
                this.base.ledSetFront(globalWorldColor.red);
                camera.setAlpha(cameraAlpha.front);
            }else if(this.calibrationState == 2){
                this.base.ledSetRight(globalWorldColor.red);
                camera.setAlpha(cameraAlpha.right);
            }else if(this.calibrationState == 4){
                this.base.ledSetBack(globalWorldColor.red);
                camera.setAlpha(cameraAlpha.back);
            }else if(this.calibrationState == 6){
                this.base.ledSetLeft(globalWorldColor.red);
                camera.setAlpha(cameraAlpha.left);
            }else if (this.calibrationState == 8){                
                this.calibrationRunning = false;
    
                let max = -9999;
                let min = 9999;     
                for(let i = 0; i < 4; i++){
                    this.caliX[i] = this.assignSign(this.caliX[i]);
                    if(this.caliX[i] > max){
                        max = this.caliX[i];
                    }
                    if(this.caliX[i] < min){
                        min = this.caliX[i];
                    }                    
                }
                this.zeroX = (max + min) /2;
    
                max = -9999;
                min = 9999; 
                for(let i = 0; i < 4; i++){
                    this.caliZ[i] = this.assignSign(this.caliZ[i]);
                    if(this.caliZ[i] > max){
                            max = this.caliZ[i];
                    }
                    if(this.caliZ[i] < min){
                            min = this.caliZ[i];
                    }                    
                }
                this.zeroZ = (max + min) /2;

                for(let i =0; i < 4; i++){
                    this.hex[0] = this.caliX[i];
                    this.hex[1] = this.caliZ[i];
                    this.zeroAngle[i] = this.angleXZ(false);                       
                }
    
                for(let i =0; i < 4; i++){
                    this.sensAngle[i] =  this.calcSens(this.zeroAngle[i], this.zeroAngle[(i+1)%4]);
                }

                this.enabled = true;                
                camera.unlock();
                activeGame.resetBaseLed();
                activeGame.resetCamera();
                return;
            }
            this.okClick = false;
            guiSettings.okButton.initCallBack(this.clickOk, buttonTrigger.up);
            guiSettings.okButton.show();
            
    
            this.base.ledStartBlink(500);            
            this.calibrationState++;
                
        }else if(this.okClick){
                
            this.okClick = false;
            this.caliX[Math.floor(this.calibrationState / 2) ] = this.hex[0];
            this.caliZ[Math.floor(this.calibrationState / 2)] = this.hex[1];
    
            this.base.ledStopBlink();  
    
            if(this.calibrationState == 1){
                this.base.ledSetFront(globalWorldColor.green);
            }else if(this.calibrationState == 3){
                this.base.ledSetRight(globalWorldColor.green);
            }else if(this.calibrationState == 5){
                this.base.ledSetBack(globalWorldColor.green);
            }else if(this.calibrationState == 7){
                this.base.ledSetLeft(globalWorldColor.green);
            }
    
            this.calibrationState++;
            clearTimeout(this.timeOut); 
            this.timeOutRunning = true;
            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 500);         
    
        }
       
    
    }

};
