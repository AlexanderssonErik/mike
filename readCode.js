

//display start point
//display code

let readCode = {
    winningDampenerCount: 0,    

    notActiveAnymore: function(){
        game.addBlocks([]);
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
        algoBlock.clearLed(world.block);
    },
    render: function (){

        let notInterSectBlocks = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, readCodeLevel.getBlock());


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

       

        


    }
};