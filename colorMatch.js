



let colorMatch = {
    winningDampenerCount: 0, 
    brushColor: 0,
    gamePixels: [],
    gameState: 0,
    

    showMemorizeBlockIndex: 0,
    timeOutRunning: false,    
    timeOut: 0,
    timeOutFunction : function(){
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;    
    },
    init: function(){     
        world.unHideBlocks();

    },
    notActiveAnymore : function(){
        game.addBlocks([]);
        
    },
    clear : function(){
        algoBlock.clearLed(world.block);

        
        this.gameState = 0;
        
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;
        this.showMemorizeBlockIndex = 0;
        this.winningDampenerCount = 0;

        base.ledClear();
        base.ledSetLeft(globalWorldColor.red);
        base.ledSetFront(globalWorldColor.green);
        base.ledSetRight(globalWorldColor.blue);

    },
    render: function (){

        if(this.winningDampenerCount > 4){
            return;
        }



        let notInterSectBlocks = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, colorMatchLevel.getBlock());


        if(notInterSectBlocks[1].length != 0){
            game.addBlocks([notInterSectBlocks[1][0]]);
        }else{
            game.addBlocks([]);
            if(this.gameState == 0){
                if(this.timeOutRunning){
                    return;
                }else{
                    algoBlock.clearLed(notInterSectBlocks[2]);
                    if(this.showMemorizeBlockIndex < notInterSectBlocks[2].length){
                        if(colorMatchLevel.showAllBlocks()){
                            for(let i = 0; i < notInterSectBlocks[2].length; i++){
                                algoBlock.setAllLed(notInterSectBlocks[2][i], colorMatchLevel.color[i], false);
                            }

                            this.showMemorizeBlockIndex = notInterSectBlocks[2].length; 
                                         
                            clearTimeout(this.timeOut); 
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 3000);

                        }else{
                            algoBlock.setAllLed(notInterSectBlocks[2][this.showMemorizeBlockIndex], colorMatchLevel.color[this.showMemorizeBlockIndex], false);
                            this.showMemorizeBlockIndex++; 
                                         
                            clearTimeout(this.timeOut); 
                            this.timeOutRunning = true;
                            this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 1000);   
                        }
                    }else {
                        this.showMemorize = false;
                        this.gameState = 1;
                        clearTimeout(this.timeOut); 
                        this.timeOutRunning = true;
                        let levelBlock = colorMatchLevel.getBlock();
                        this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), colorMatchLevel.timeOutOffset() + colorMatchLevel.timeOutProportion()*levelBlock.length );   

                    }      
            
                }

   
            }else if(this.gameState == 1){

                if(!this.timeOutRunning){

                    let levelBlock = colorMatchLevel.getBlock();

                    for(let i = 0; i < levelBlock.length; i++){
                       let block =  algoBlock.differenceAndIntersect(notInterSectBlocks[2], [levelBlock[i]]);
                        algoBlock.setAllLed(block[2][0], colorMatchLevel.color[i], false);
                    }

                    this.gameState =2; 
                    clearTimeout(this.timeOut); 
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), 3000);   

                    activeGame.fail();
                    base.ledSetBack(globalWorldColor.red);
                    base.ledSetLeft(globalWorldColor.red);
                    base.ledSetFront(globalWorldColor.red);
                    base.ledSetRight(globalWorldColor.red);


                }

                for(let i = 0; i < notInterSectBlocks[0].length; i++ ){
                
                    let blockPixel = algoBlockPixel.create([notInterSectBlocks[0][i]]); 
                    let redPixel = algoBlockPixel.differenceAndIntersect(blockPixel, colorMatchLevel.redPixel)
                    let greenPixel = algoBlockPixel.differenceAndIntersect(blockPixel, colorMatchLevel.greenPixel)
                    let bluePixel = algoBlockPixel.differenceAndIntersect(blockPixel, colorMatchLevel.bluePixel)

                    if(redPixel[0].length == 0 ){                    
                        this.brushColor = globalWorldColor.red;
                        algoBlock.setAllLed(notInterSectBlocks[0][i], globalWorldColor.red, false);
                    //break;
                    }else if(greenPixel[0].length == 0 ){                    
                        this.brushColor = globalWorldColor.green;
                        algoBlock.setAllLed(notInterSectBlocks[0][i], globalWorldColor.green, false);
                    //break;
                    }else if(bluePixel[0].length == 0 ){                    
                        this.brushColor = globalWorldColor.blue;
                        algoBlock.setAllLed(notInterSectBlocks[0][i], globalWorldColor.blue, false);
                    //break;
                    }

                }

                let worldPixels = algoBlockPixel.create(notInterSectBlocks[0]); 
                let newGamePixels = algoBlockPixel.differenceAndIntersect(worldPixels, colorMatchLevel.redPixel.concat(colorMatchLevel.greenPixel, colorMatchLevel.bluePixel));

                newGamePixels = algoBlockPixel.differenceAndIntersect(newGamePixels[0], this.gamePixels);

                algoBlockPixel.setColor(newGamePixels[0], this.brushColor, true, false, false );

                this.gamePixels = [];
                this.gamePixels = newGamePixels[0].concat(newGamePixels[2] );

                let diffAndIntFree = algoBlockPixel.differenceAndIntersectFree(this.gamePixels,  colorMatchLevel.currentLevelCorrectPixel, true, true);

                if(diffAndIntFree != null && diffAndIntFree[1] == 0){

                    if(this.winningDampenerCount < 4){
                        this.winningDampenerCount++;
                    }else if(this.winningDampenerCount == 4){
                        this.winningDampenerCount++;          
                        
                        let levelBlock = colorMatchLevel.getBlock();

                        for(let i = 0; i < levelBlock.length; i++){


                           let block =  algoBlock.differenceAndIntersect(notInterSectBlocks[2], [levelBlock[i]]);
                            algoBlock.setAllLed(block[2][0], colorMatchLevel.color[i], false);
                        }
                        
                        base.ledSetBack(globalWorldColor.green);
                        base.ledSetLeft(globalWorldColor.green);
                        base.ledSetFront(globalWorldColor.green);
                        base.ledSetRight(globalWorldColor.green);

                        activeGame.win(5000);
                        
                    }
        

                }else{
                    this.winningDampenerCount = 0;
                }


            }else if(this.gameState == 2){
                if(!this.timeOutRunning){
                    colorMatchLevel.new();
                }
            }



        }

       

        


    }
};