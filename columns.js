



let columns = {
    winningDampenerCount: 0,    
    gamePixels : 0,
    state : 0,
    lockedBlocks : [],
    color2x2 : [1,2,4,1],
    color2x4 : [1,2,4,1],
    locked2x2: false,
    locked2x4: false,

    notActiveAnymore: function(){

    },

    init: function(){
        //console.log("guidedBuildLevel.init()");
        //guidedBuildLevel.init();
        world.unHideBlocks();
    },
    /*setLevel : function(level, difficulty){
        guidedBuildLevel.setLevel(level, difficulty);

    },*/
    clear : function(){
        console.log("CLEEEAR");
        algoBlock.clearLed(world.block);
        this.color2x2 = this.generateColor();
        this.color2x4 = this.generateColor();
    },
    generateColor : function(){

        let color = [];
        for(let i = 0; i < 4; i++){                       
            color[i] = Math.floor(Math.random()*3) + 1;
            if(color[i] == 3){
                color[i] = 4;
            }
        }

        return color;

    },

    render: function (){
        //only use one of the inputs at time 2x4 or 2x2
        //new things can only be put down when finished
        //putting down a new things will make current state finished
       

        // 1----------------------- right blocks on base

        
        let lockedBlocksFulfilled = [];
        lockedBlocksFulfilled = algoBlock.differenceAndIntersect(world.block, this.lockedBlocks);

        //1.1 roation ok
        let foundBlockNotMatchRotation = false;
        for(let i = 0; i < lockedBlocksFulfilled[4].length ; i++ ){ 
            
            if(!lockedBlocksFulfilled[4][i]){
                foundBlockNotMatchRotation= true;
                lockedBlocksFulfilled[2][i].ledALeft = globalWorldColor.yellow;
                lockedBlocksFulfilled[2][i].ledALeftBlink = true;
    
                lockedBlocksFulfilled[2][i].ledARight = globalWorldColor.yellow;
                lockedBlocksFulfilled[2][i].ledARightBlink = true;
    
                lockedBlocksFulfilled[2][i].ledBLeft = globalWorldColor.yellow;
                lockedBlocksFulfilled[2][i].ledBLeftBlink = true;
    
                lockedBlocksFulfilled[2][i].ledBRight = globalWorldColor.yellow;
                lockedBlocksFulfilled[2][i].ledBRightBlink = true;
            }           
        }
        if(foundBlockNotMatchRotation){
            guiGame.showRotateBlockIndicator();
        }else{
            guiGame.hideRotateBlockIndicator();
        }

        //1.2
        if(lockedBlocksFulfilled[1].length != 0 || foundBlockNotMatchRotation){
            game.addBlocks(lockedBlocksFulfilled[1]);


        }else{
            let bringInBlocks = [];
            bringInBlocks = algoBlock.differenceAndIntersect(world.block, columnsLevel.getBlock());
            game.addBlocks(bringInBlocks[1]);

            bringInBlocks = algoBlock.differenceAndIntersect(world.block, columnsLevel.getBlock2x4());
            if(bringInBlocks[2].length != 0){
                bringInBlocks[2][0].ledALeft = this.color2x2[0];
                bringInBlocks[2][0].ledARight = this.color2x2[1];
                bringInBlocks[2][0].ledBLeft = this.color2x2[2];
                bringInBlocks[2][0].ledBRight = this.color2x2[3];
                this.locked2x4 = true;
            }

            bringInBlocks = algoBlock.differenceAndIntersect(world.block, columnsLevel.getBlock2x2());
            if(bringInBlocks[2].length == 2) {
                bringInBlocks[2][0].ledALeft = this.color2x2[0];
                bringInBlocks[2][0].ledARight = this.color2x2[1];
                bringInBlocks[2][1].ledALeft = this.color2x2[2];
                bringInBlocks[2][1].ledARight = this.color2x2[3];
                this.locked2x2 = true;
            }


            let gameBlocks = algoBlock.differenceAndIntersect(lockedBlocksFulfilled[0], columnsLevel.getBlock());

            this.lockedBlocks = this.lockedBlocks.concat(gameBlocks[0] );
        }

/*
        let blockPixels;
        
 
            for(let i = 0; i < world.block.length; i++ ){
                    
                let blockPixel = algoBlockPixel.create([world.block[i]]); 
                let redPixel = algoBlockPixel.differenceAndIntersect(blockPixel, tetrisLevel.redPixel)
                let greenPixel = algoBlockPixel.differenceAndIntersect(blockPixel, tetrisLevel.greenPixel)
                let bluePixel = algoBlockPixel.differenceAndIntersect(blockPixel, tetrisLevel.bluePixel)
    
                if(redPixel[0].length == 0 ){                    
                    //this.brushColor = globalWorldColor.red;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.red, false);
                //break;
                }else if(greenPixel[0].length == 0 ){                    
                    //this.brushColor = globalWorldColor.green;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.green, false);
                //break;
                }else if(bluePixel[0].length == 0 ){                    
                    //this.brushColor = globalWorldColor.blue;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.blue, false);
                //break;
                }
    
            }

            blockPixels = algoBlockPixel.create(world.block); 
            let newGamePixels = algoBlockPixel.differenceAndIntersect(blockPixels, tetrisLevel.redPixel.concat(tetrisLevel.greenPixel, tetrisLevel.bluePixel));
    
            newGamePixels = algoBlockPixel.differenceAndIntersect(newGamePixels[0], this.gamePixels);
    
            algoBlockPixel.setColor(newGamePixels[0], this.brushColor, true, false, false );
    
            this.gamePixels = [];
            this.gamePixels = newGamePixels[0].concat(newGamePixels[2] );


            blockPixels = this.gamePixels;*/

/*


        let notInterSectBlocks = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, tetrisLevel.getBlock());


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

     /*   game.addBlocks(notInterSectBlocks[1]);

        if(notInterSectBlocks[0].length == 0 && notInterSectBlocks[1].length == 0){

            if(this.winningDampenerCount < 4){
                this.winningDampenerCount++;
            }else if(this.winningDampenerCount == 4){
                this.winningDampenerCount++;                
                activeGame.win();
                
            }

        }else{
            this.winningDampenerCount = 0;
        }*/

       

        


    }
};