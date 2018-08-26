



let freeBuild = {
    //winningDampenerCount: 0,    
    brushColor: 0,
    gamePixels: 0,

    notActiveAnymore: function(){
       // game.addBlocks([]);
    },
    init: function(){
        //console.log("guidedBuildLevel.init()");
        //guidedBuildLevel.init();
        //world.unHideBlocks();
    },
    /*setLevel : function(level, difficulty){
        guidedBuildLevel.setLevel(level, difficulty);

    },*/
    clear : function(){
        //algoBlock.clearLed(world.block);
    },
    render: function (){

        if(freeBuildLevel.colorOnBase()){
            for(let i = 0; i < world.block.length; i++ ){
                    
                let blockPixel = algoBlockPixel.create([world.block[i]]); 
                let redPixel = algoBlockPixel.differenceAndIntersect(blockPixel, freeBuildLevel.redPixel)
                let greenPixel = algoBlockPixel.differenceAndIntersect(blockPixel, freeBuildLevel.greenPixel)
                let bluePixel = algoBlockPixel.differenceAndIntersect(blockPixel, freeBuildLevel.bluePixel)
    
                if(redPixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.red;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.red, false);
    
                }else if(greenPixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.green;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.green, false);
    
                }else if(bluePixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.blue;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.blue, false);
    
                }
    
            }
    
            let worldPixels = algoBlockPixel.create(world.block); 
            let newGamePixels = algoBlockPixel.differenceAndIntersect(worldPixels, freeBuildLevel.redPixel.concat(freeBuildLevel.greenPixel, freeBuildLevel.bluePixel));
    
            newGamePixels = algoBlockPixel.differenceAndIntersect(newGamePixels[0], this.gamePixels);
    
            algoBlockPixel.setColor(newGamePixels[0], this.brushColor, true, false, false );
    
            this.gamePixels = [];
            this.gamePixels = newGamePixels[0].concat(newGamePixels[2] );
    
    
        }
/*
        let notInterSectBlocks = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, guidedBuildLevel.getBlock());


        for(let i = 0; i < notInterSectBlocks[0].length ; i++ ){            
            notInterSectBlocks[0][i].ledALeft = globalWorldColor.red;
            notInterSectBlocks[0][i].ledALeftBlink = true;

            notInterSectBlocks[0][i].ledARight = globalWorldColor.red;
            notInterSectBlocks[0][i].ledARightBlink = true;

            notInterSectBlocks[0][i].ledBLeft = globalWorldColor.red;
            notInterSectBlocks[0][i].ledBLeftBlink = true;

            notInterSectBlocks[0][i].ledBRight = globalWorldColor.red;
            notInterSectBlocks[0][i].ledBRightBlink = true;
        }*/
        //needeed?
        /*
        for(let i = 0; i < notInterSectBlocks[2].length ; i++ ){            
            notInterSectBlocks[2][i].ledALeft = globalWorldColor.black;
            notInterSectBlocks[2][i].ledALeftBlink = false;

            notInterSectBlocks[2][i].ledARight = globalWorldColor.black;
            notInterSectBlocks[2][i].ledARightBlink = false;

            notInterSectBlocks[2][i].ledBLeft = globalWorldColor.black;
            notInterSectBlocks[2][i].ledBLeftBlink = false;

            notInterSectBlocks[2][i].ledBRight = globalWorldColor.black;
            notInterSectBlocks[2][i].ledBRightBlink = false;
        }*/
/*
        game.addBlocks(notInterSectBlocks[1]);

        if(notInterSectBlocks[0].length == 0 && notInterSectBlocks[1].length == 0){

            if(this.winningDampenerCount < 4){
                this.winningDampenerCount++;
            }else if(this.winningDampenerCount == 4){
                this.winningDampenerCount++;                
                activeGame.win();
                
            }

        }else{
            this.winningDampenerCount = 0;
        }

       */

        


    }
};