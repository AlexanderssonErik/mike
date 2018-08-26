



let memo = {
    currentPlayer: 0,
    currentPlayerScore: [0,0],
    advancedTextureCommand: 0,
    textCommand: 0,
    textScorePlayer: [],
    state: 0,
    okButtonTriggered: false,
    memorizeBlocks : 0,
    timeOutRunning: false,    
    timeOut: 0,
    brushColor: 0,
    gamePixels: 0,
    notActiveAnymore: function(){
        guiGame.okButton.hide();
        world.unHideBlocks();

        game.addBlocks([]);

        this.textCommand.text = "";

        this.textScorePlayer[0].text = "";
        this.textScorePlayer[1].text = "";
    },
    timeOutFunction : function(){
        clearTimeout(this.timeOut); 
        this.timeOutRunning = false;    
    },
  
    init: function(){

        world.unHideBlocks();

        this.advancedTextureCommand = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
       

        this.textCommand = new BABYLON.GUI.TextBlock();
        this.textCommand.text = "Player 1: Build! ";
        this.basePlayerColor(0);
        this.textCommand.color = "white";
        this.textCommand.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this.textCommand.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    
        this.textCommand.fontSize = 60;
        advancedTextureFPS.addControl(this.textCommand);   

        this.textScorePlayer[0] = new BABYLON.GUI.TextBlock();
        this.textScorePlayer[1] = new BABYLON.GUI.TextBlock();


        this.textScorePlayer[0].text = "Score Player 1: 0 ";
        this.textScorePlayer[1].text = "Score Player 2: 0 ";
        this.textScorePlayer[0].color = "magenta";
        this.textScorePlayer[1].color = "cyan";
        this.textScorePlayer[0].textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this.textScorePlayer[0].textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.textScorePlayer[1].textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this.textScorePlayer[1].textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;    
        this.textScorePlayer[0].fontSize = 40;
        this.textScorePlayer[1].fontSize = 40;

        this.textScorePlayer[0].top =80;
        this.textScorePlayer[1].top = 80; 

        this.textScorePlayer[0].left =250;
        this.textScorePlayer[1].left = -250; 
        advancedTextureFPS.addControl( this.textScorePlayer[0]);        
        advancedTextureFPS.addControl( this.textScorePlayer[1]);

        guiGame.okButton.initCallBack(this.clickOk, buttonTrigger.up);
        guiGame.okButton.show();
        
    },
    basePlayerColor : function(player){
        if(player == 0){
            base.ledSetBack(globalWorldColor.magenta);

        }else{
            base.ledSetBack(globalWorldColor.cyan);

        }

    },

    clear : function(){
        world.unHideBlocks();
        algoBlock.clearLed(world.block);
        this.state = 0;
        guiGame.okButton.show();
        this.currentPlayer = 0;
this.currentPlayerScore[0]= 0;
this.currentPlayerScore[1]= 0;
        this.textCommand.text = "Player 1: Build! ";
        this.basePlayerColor(0);

        this.textScorePlayer[0].text = "Score Player 1: 0 ";
        this.textScorePlayer[1].text = "Score Player 2: 0 ";

        game.addBlocks([]);


    },
    clickOk : function(){
        memo.okButtonTriggered = true;
        console.log("memo OK");
    },
    render: function (){

        if(memoLevel.useColor()){
        for(let i = 0; i < world.block.length; i++ ){
                
            let blockPixel = algoBlockPixel.create([world.block[i]]); 
            let redPixel = algoBlockPixel.differenceAndIntersect(blockPixel, memoLevel.redPixel)
            let greenPixel = algoBlockPixel.differenceAndIntersect(blockPixel, memoLevel.greenPixel)
            let bluePixel = algoBlockPixel.differenceAndIntersect(blockPixel, memoLevel.bluePixel)

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
        let newGamePixels = algoBlockPixel.differenceAndIntersect(worldPixels, memoLevel.redPixel.concat(memoLevel.greenPixel, memoLevel.bluePixel));

        newGamePixels = algoBlockPixel.differenceAndIntersect(newGamePixels[0], this.gamePixels);

        algoBlockPixel.setColor(newGamePixels[0], this.brushColor, true, false, false );

        this.gamePixels = [];
        this.gamePixels = newGamePixels[0].concat(newGamePixels[2] );


    }

        //color to show which player
        if(this.state == 0){
            if(this.okButtonTriggered ){
                this.okButtonTriggered = false;
                this.textCommand.text = "Memorize - Remove all blocks";
                this.state = 1;
                this.memorizeBlocks = world.block;
                this.currentPlayer = (this.currentPlayer +1)%2;
                

                base.ledAllFlash(globalWorldColor.blue, 0, 2000 );
            }
        }else if(this.state == 1){
            if(!base.ledFlashRunning && world.block.length == 0){
                this.textCommand.text = "Player " + (this.currentPlayer +1)  + " - Reproduze";
                this.state = 2;
                this.basePlayerColor(this.currentPlayer);

                if(memoLevel.timeOutZeroBlock() != 0){
                
                    clearTimeout(this.timeOut); 
                    this.timeOutRunning = true;
                    this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), memoLevel.timeOutZeroBlock() + this.memorizeBlocks.length*memoLevel.timeOutPerBlock());
                }

            }

        }else if(this.state == 2){

            let notInterSectBlocks = [];

            notInterSectBlocks = algoBlockPixel.differenceAndIntersect( algoBlockPixel.create(world.block), algoBlockPixel.create(this.memorizeBlocks), memoLevel.useColor());

            if((memoLevel.continuouslyCheck() || this.okButtonTriggered) && notInterSectBlocks[0].length == 0 && notInterSectBlocks[1].length == 0){

                
                this.okButtonTriggered = false;
                this.currentPlayerScore[this.currentPlayer] += 10;

                this.textScorePlayer[this.currentPlayer].text = "Score Player " + (this.currentPlayer +1)  + ": " + this.currentPlayerScore[this.currentPlayer];
               

                this.textCommand.text = "Player " + (this.currentPlayer +1)  + " - Build!";
                this.basePlayerColor(this.currentPlayer);
                this.state = 0;

                sound.correct(1);
                base.ledAllFlash(globalWorldColor.green, 0, 2000 );
                
            }


            if(this.okButtonTriggered || (memoLevel.timeOutZeroBlock() != 0 && !this.timeOutRunning) ){
   
                this.okButtonTriggered = false;
                if(memoLevel.buildPlayerRemember()){
                    if(memoLevel.timeOutZeroBlock() != 0){
                
                        clearTimeout(this.timeOut); 
                        this.timeOutRunning = true;
                        this.timeOut = setTimeout(function() {this.timeOutFunction();}.bind(this), memoLevel.timeOutZeroBlock() + this.memorizeBlocks.length*memoLevel.timeOutPerBlock());
                    }

                    this.textCommand.text = "Player " + ((this.currentPlayer +1)%2  +1) + " - Remember?";
                    this.basePlayerColor((this.currentPlayer +1)%2 );
                    activeGame.fail();
                    base.ledAllFlash(globalWorldColor.red, 2, 300 );
                    this.state = 3;
                }else{
                    world.hideBlocks();
    
                    game.addBlocks(this.memorizeBlocks);
                    this.textCommand.text = "Correct Combination";
                base.ledSetBack(0);
                    this.state = 4;
                    activeGame.fail();
                    base.ledAllFlash(globalWorldColor.red, 2, 300 );
                }
            }


        }else if(this.state == 3){

            let notInterSectBlocks = [];


            notInterSectBlocks = algoBlockPixel.differenceAndIntersect( algoBlockPixel.create(world.block), algoBlockPixel.create(this.memorizeBlocks), memoLevel.useColor());


            if((memoLevel.continuouslyCheck() || this.okButtonTriggered) && notInterSectBlocks[0].length == 0 && notInterSectBlocks[1].length == 0){

                
                this.okButtonTriggered = false;

                this.textCommand.text = "Player " + (this.currentPlayer +1)  + " - Build!";
                this.basePlayerColor(this.currentPlayer);
                activeGame.progression(0, 1, 1);
                base.ledAllFlash(globalWorldColor.green, 0, 2000 );
                this.state = 0;
                
            }


            if(this.okButtonTriggered || (memoLevel.timeOutZeroBlock() != 0 && !this.timeOutRunning) ){

                this.currentPlayerScore[(this.currentPlayer +1)%2 ] -= 5;
                this.textScorePlayer[(this.currentPlayer +1)%2].text = "Score Player " + ((this.currentPlayer +1)%2 +1) + ": " + this.currentPlayerScore[(this.currentPlayer +1)%2 ];
       
                this.okButtonTriggered = false;  

                world.hideBlocks();
    
                game.addBlocks(this.memorizeBlocks);

                this.textCommand.text = "Correct Combination";
                base.ledSetBack(0);
                this.state = 4;
                activeGame.fail();
                base.ledAllFlash(globalWorldColor.red, 2, 300 );
                
            }

        }else if(this.state == 4){


            if(!base.ledFlashRunning && this.okButtonTriggered){
                game.addBlocks([]);
                world.unHideBlocks();
                this.okButtonTriggered = false;
                this.textCommand.text = "Player " + (this.currentPlayer +1)  + " - Build!";
                this.basePlayerColor(this.currentPlayer);
                this.state = 0;

            }

        }



    }
};