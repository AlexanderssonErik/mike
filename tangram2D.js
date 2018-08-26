let tangram2D = {
    winningDampenerCount: 0, 
    timeOut: 0,
    timeOutRunning: false,
    okButtonTriggered: false,

    notActiveAnymore: function(){
        guiGame.okButton.hide();
        guiPaint.hide();
        camera.unlock();
        game.addBlocks([]);
        guiColorSelect.enabled = true;
        world.unHideBlocks();
      },
    
    clickOk : function(){
        tangram2D.okButtonTriggered = true;
      
    },

  
    timeOutFunction : function(){
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;   

        tangram2DLevel.nextSide();
        guiPaint.clear();
       
    },
    timeOutFunctionError : function(){
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;   

        tangram2DLevel.new();      
        guiPaint.clear();
       
    },
    init: function(){
        
       
    },

    clear : function(){
        algoBlock.clearLed(world.block);
        guiColorSelect.enabled = false;
    },
    render: function (){

        if(this.timeOutRunning){
            return;
        }

        let notInterSectBlocks = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, tangram2DLevel.getBlock());


        for(let i = 0; i < notInterSectBlocks[0].length ; i++ ){            
            notInterSectBlocks[0][i].ledALeft = globalWorldColor.red;
            notInterSectBlocks[0][i].ledALeftBlink = true;

            notInterSectBlocks[0][i].ledARight = globalWorldColor.red;
            notInterSectBlocks[0][i].ledARightBlink = true;

            notInterSectBlocks[0][i].ledBLeft = globalWorldColor.red;
            notInterSectBlocks[0][i].ledBLeftBlink = true;

            notInterSectBlocks[0][i].ledBRight = globalWorldColor.red;
            notInterSectBlocks[0][i].ledBRightBlink = true;
        }

        game.addBlocks(notInterSectBlocks[1]);

        let sBlocks = tangram2DLevel.getBlock();
        for(let i = 0; i < notInterSectBlocks[2].length; i++){
           
            let sIndex = algoBlock.findBlockShape(notInterSectBlocks[2][i], sBlocks );
            if(sIndex != null){
                notInterSectBlocks[2][i].ledALeft =  sBlocks[sIndex[0]].ledALeft ;
                notInterSectBlocks[2][i].ledARight = sBlocks[sIndex[0]].ledARight ;
                notInterSectBlocks[2][i].ledBLeft = sBlocks[sIndex[0]].ledBLeft ;
                notInterSectBlocks[2][i].ledBRight = sBlocks[sIndex[0]].ledBRight ;
            }

        }


        if(notInterSectBlocks[0].length == 0 && notInterSectBlocks[1].length == 0){
            
            guiPaint.show();
            camera.lock();
            world.hideBlocks();

            if(tangram2DLevel.getSide() == 0){
                base.ledSetBack(0);
                base.ledSetLeft(globalWorldColor.yellow);
                base.ledSetFront(0);
                base.ledSetRight(0);
                

                let diffAndIntsTmp = algoProjection.differenceAndIntersect(tangram2DLevel.getSideProjection(), guiPaint.createProjectionPixels(0, false), true);

                if(tangram2DLevel. needToClickButton()){
                    if(this.okButtonTriggered ){
                        this.okButtonTriggered = false;
                        if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                            sound.correct(1);                              
                            base.ledSetLeft(globalWorldColor.green);
        
                        }else{
                            activeGame.fail();
                            base.ledSetBack(globalWorldColor.red);
                            base.ledSetLeft(globalWorldColor.red);
                            base.ledSetFront(globalWorldColor.red);
                            base.ledSetRight(globalWorldColor.red);
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunctionError();}.bind(this), 2000);  

                        }


                    }
                }else if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                    sound.correct(1);
                    base.ledSetLeft(globalWorldColor.green);

                }


            }else if(tangram2DLevel.getSide() == 1){

                base.ledSetBack(0);
                base.ledSetLeft(0);
                base.ledSetFront(globalWorldColor.yellow);
                base.ledSetRight(0);

                let diffAndIntsTmp = algoProjection.differenceAndIntersect(tangram2DLevel.getSideProjection(), guiPaint.createProjectionPixels(1, false), true);

                if(tangram2DLevel. needToClickButton()){
                    if(this.okButtonTriggered ){
                        this.okButtonTriggered = false;
                        if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                            sound.correct(1);
                            base.ledSetFront(globalWorldColor.green);
        
                        }else{
                            activeGame.fail();
                            base.ledSetBack(globalWorldColor.red);
                            base.ledSetLeft(globalWorldColor.red);
                            base.ledSetFront(globalWorldColor.red);
                            base.ledSetRight(globalWorldColor.red);
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunctionError();}.bind(this), 2000);  

                        }


                    }
                }else if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0 ){
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000); 
                    sound.correct(1);
                    base.ledSetFront(globalWorldColor.green);
                }

                
            }else if(tangram2DLevel.getSide() == 2){

                base.ledSetBack(0);
                base.ledSetLeft(0);
                base.ledSetFront(0);
                base.ledSetRight(globalWorldColor.yellow);

                let diffAndIntsTmp = algoProjection.differenceAndIntersect(tangram2DLevel.getSideProjection(), guiPaint.createProjectionPixels(0, true), true);

                if(tangram2DLevel. needToClickButton()){
                    if(this.okButtonTriggered ){
                        this.okButtonTriggered = false;
                        if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                            sound.correct(1);
                            base.ledSetRight(globalWorldColor.green);
        
                        }else{
                            activeGame.fail();
                            base.ledSetBack(globalWorldColor.red);
                            base.ledSetLeft(globalWorldColor.red);
                            base.ledSetFront(globalWorldColor.red);
                            base.ledSetRight(globalWorldColor.red);
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunctionError();}.bind(this), 2000);  

                        }


                    }
                }else if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0 ){
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);  
                    sound.correct(1);
                    base.ledSetRight(globalWorldColor.green);
                }

                
            }else if(tangram2DLevel.getSide() == 3){

                base.ledSetBack(globalWorldColor.yellow);
                base.ledSetLeft(0);
                base.ledSetFront(0);
                base.ledSetRight(0);

                let diffAndIntsTmp = algoProjection.differenceAndIntersect(tangram2DLevel.getSideProjection(), guiPaint.createProjectionPixels(1, true), true);

                if(tangram2DLevel. needToClickButton()){
                    if(this.okButtonTriggered ){
                        this.okButtonTriggered = false;
                        if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                            sound.correct(1);
                            base.ledSetBack(globalWorldColor.green);
        
                        }else{
                            activeGame.fail();
                            base.ledSetBack(globalWorldColor.red);
                            base.ledSetLeft(globalWorldColor.red);
                            base.ledSetFront(globalWorldColor.red);
                            base.ledSetRight(globalWorldColor.red);
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunctionError();}.bind(this), 2000);  

                        }


                    }
                }else if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0 ){
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);  
                    sound.correct(1);
                    base.ledSetBack(globalWorldColor.green);
                    
                }

                
            }else if(tangram2DLevel.getSide() == 4){

                base.ledSetBack(0);
                base.ledSetLeft(globalWorldColor.yellow);
                base.ledSetFront(globalWorldColor.yellow);
                base.ledSetRight(globalWorldColor.yellow);

                let diffAndIntsTmp = algoProjection.differenceAndIntersect(tangram2DLevel.getSideProjection(), guiPaint.createProjectionPixels(2, false), true);

                if(tangram2DLevel. needToClickButton()){
                    if(this.okButtonTriggered ){
                        this.okButtonTriggered = false;
                        if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0){

                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);   
                            sound.correct(1);
                            base.ledSetLeft(globalWorldColor.green);
                            base.ledSetFront(globalWorldColor.green);
                            base.ledSetRight(globalWorldColor.green);
        
                        }else{
                            activeGame.fail();
                            base.ledSetBack(globalWorldColor.red);
                            base.ledSetLeft(globalWorldColor.red);
                            base.ledSetFront(globalWorldColor.red);
                            base.ledSetRight(globalWorldColor.red);
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunctionError();}.bind(this), 2000);  

                        }


                    }
                }else if(diffAndIntsTmp[0].length == 0 && diffAndIntsTmp[1].length == 0 ){
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 2000);  
                    sound.correct(1);
                    base.ledSetLeft(globalWorldColor.green);
                    base.ledSetFront(globalWorldColor.green);
                    base.ledSetRight(globalWorldColor.green);
                
                    activeGame.win(3000);
                }
                
            }

        }else{
            world.unHideBlocks();
            guiPaint.hide();
            camera.unlock();
            this.winningDampenerCount = 0;
        }

    }
};