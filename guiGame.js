let guiGameOkButtonPath = "./icon/ok.svg"


let guiGame = {
    sizeSetting : 1,
    enabled : false,    
    buttonsLevel: [],
    buttonsGame: [],
    sizeButton: 0,
    okButton : 0,
    rotateBlockIndicator: 0,
    scene: 0,
    menuLevelActive: false,   
    menuGameActive: false, 
    moveLevelLastLevel: -1,
    moveLevelLastDifficulty: -1,
    
    
    initLevelSelect : function(rowColumnCount){

        for(let i = this.buttonsLevel.length - 1; i >-1; i--  ){
            for(let z = this.buttonsLevel[i].length - 1; z >-1; z--  ){
                this.buttonsLevel[i][z].dispose();
                this.buttonsLevel[i].pop();
            }
            this.buttonsLevel.pop();
        }
        

        let iconPathLevelCount = [];
        iconPathLevelCount[0] = "./icon/level/lvl_main.svg";
        iconPathLevelCount[1] = "./icon/level/lvl1.svg";
        iconPathLevelCount[2] = "./icon/level/lvl2.svg";
        iconPathLevelCount[3] = "./icon/level/lvl3.svg";
        iconPathLevelCount[4] = "./icon/level/lvl4.svg";
        iconPathLevelCount[5] = "./icon/level/lvl5.svg";

        let iconPathLevel = [];

        for(let i = 0; i < rowColumnCount.length; i++){
            iconPathLevel[i] = [];           
            for(let z =0; z < rowColumnCount[i]; z++){
                iconPathLevel[i][z] = iconPathLevelCount[z];
            }

        }

        for(let i =0; i < iconPathLevel.length; i++){


            this.buttonsLevel[i] = [];

            for(let z =0; z< iconPathLevel[i].length; z++){

                this.buttonsLevel[i][z] = Object.create(buttonExpandable); 
                this.buttonsLevel[i][z].init(buttonPosition.right,buttonPosition.top, iconPathLevel[i][z] );
                this.buttonsLevel[i][z].position(i,-z);
                if( z !=0 ){
                    this.buttonsLevel[i][z].initCallBack((function() {this.clickLevel(i, z-1);}.bind(this)), buttonTrigger.up);
                    this.buttonsLevel[i][z].initCallBackAdditionalMove((function() {this.moveLevel(i, z-1);}.bind(this)));
                }

            }
        }



        for(let i =0; i < iconPathLevel.length; i++){
            let tmp = [];
            let z;
            for(z =0; z< iconPathLevel[i].length; z++){
                if(z!=0){
                    tmp[z-1] = this.buttonsLevel[i][z];
                }
                let tmp2 = [];
                let tmp2index = 0
                for(let x = 0; x <iconPathLevel[i].length; x++){
                    if(x != z){
                        tmp2[tmp2index] = this.buttonsLevel[i][x];
                        tmp2index++;   
                    }
                }
                if(z == 0){
                    for(let x = 0; x <iconPathLevel.length; x++){
                        if(x != i){
                            tmp2[tmp2index] = this.buttonsLevel[x][0];
                            tmp2index++;
                        }
                    }
                    let tmp3 = [];
                    let tmp3index = 0;
                    for(let x = 0; x < iconPathLevel.length; x++){
                        if(x != i){
                            for(let y = 1; y < iconPathLevel[x].length; y++){
                                tmp3[tmp3index] = this.buttonsLevel[x][y];
                                tmp3index++;
                            }
                        }
                    }
                    this.buttonsLevel[i][z].onMoveHide(tmp3);
                }
                this.buttonsLevel[i][z].onMoveUnHighlight(tmp2)
            
            }
            
            if(i ==0){
                let tmp2 = [];
                for(let x = 1; x < iconPathLevel.length; x++){
                    tmp2[x-1] =   this.buttonsLevel[x][0]
                }               
                this.buttonsLevel[0][0].onMoveShow(tmp.concat(tmp2));
                this.buttonsLevel[0][0].onDownShow(tmp.concat(tmp2));
            }else{
                this.buttonsLevel[i][0].onMoveShow(tmp);
            }
        }

        this.sizeChange(guiGame.sizeSetting);
        this.buttonsLevel[0][0].show();

    },
    init : function(scene ){
        this.scene = scene;

        let iconPathOkButton = "./icon/ok.svg"
        let iconPathRotateBlockIndicator = "./icon/rotate_block.svg"
  

        let iconPathGame = [];

       // "./icon/game/guided_build.svg"
        //"./icon/game/tangram.svg"
        //"./icon/game/color_match.svg"
        //"./icon/game/shape_hunter.svg"
        //"./icon/game/free_build.svg"
        //"./icon/game/programming.svg"
        //"./icon/game/math.svg"
       // "./icon/game/tangram_free.svg"

        iconPathGame[0] = [];
        iconPathGame[0][0] = "./icon/game/start.svg";
        iconPathGame[0][1] = "./icon/game/guided_build.svg";
        iconPathGame[0][2] = "./icon/game/free_build.svg";


        iconPathGame[1] = [];
        iconPathGame[1][0] = "./icon/game/tangram.svg";
        iconPathGame[1][1] = "./icon/game/tangram.svg";
        iconPathGame[1][2] = "./icon/game/tangram_free.svg"
        iconPathGame[1][3] = "./icon/game/tangram_free.svg"

        
        iconPathGame[2] = [];
        iconPathGame[2][0] = "./icon/game/programming.svg";
        iconPathGame[2][1] = "./icon/game/math.svg";
        iconPathGame[2][2] = "./icon/game/programming.svg";
        //iconPathGame[2][3] = "./icon/game/programming.svg";

        iconPathGame[3] = [];
        iconPathGame[3][0] =  "./icon/game/color_match.svg";
        iconPathGame[3][1] =  "./icon/game/color_match.svg";
        iconPathGame[3][2] = "./icon/game/shape_hunter.svg";
        iconPathGame[3][3] =  "./icon/game/color_match.svg";

    //    iconPathGame[4] = [];
     //   iconPathGame[4][0] =  "./icon/game/color_match.svg";
    //    iconPathGame[4][1] =  "./icon/game/color_match.svg";
        /*iconPathGame[4][2] =  "./icon/game/color_match.svg";*/


        
//Games -------------- 
      for(let i =0; i < iconPathGame.length; i++){


            this.buttonsGame[i] = [];;

            for(z =0; z< iconPathGame[i].length; z++){

                this.buttonsGame[i][z] = Object.create(buttonExpandable); 
                this.buttonsGame[i][z].init(buttonPosition.left,buttonPosition.top, iconPathGame[i][z] );
                this.buttonsGame[i][z].position(i,z);

            }
        }



        for(let i =0; i < iconPathGame.length; i++){
            let tmp = [];
            let z;
            for(z =0; z< iconPathGame[i].length; z++){
                if(z!=0){
                    tmp[z-1] = this.buttonsGame[i][z];
                }
                let tmp2 = [];
                let tmp2index = 0
                for(let x = 0; x <iconPathGame[i].length; x++){
                    if(x != z){
                        tmp2[tmp2index] = this.buttonsGame[i][x];
                        tmp2index++;   
                    }
                }
                if(z == 0){
                    for(let x = 0; x <iconPathGame.length; x++){
                        if(x != i){
                            tmp2[tmp2index] = this.buttonsGame[x][0];
                            tmp2index++;
                        }
                    }
                    let tmp3 = [];
                    let tmp3index = 0;
                    for(let x = 0; x < iconPathGame.length; x++){
                        if(x != i){
                            for(let y = 1; y < iconPathGame[x].length; y++){
                                tmp3[tmp3index] = this.buttonsGame[x][y];
                                tmp3index++;
                            }
                        }
                    }
                    this.buttonsGame[i][z].onMoveHide(tmp3);
                }
                this.buttonsGame[i][z].onMoveUnHighlight(tmp2)
            
            }
            
            if(i ==0){
                let tmp2 = [];
                for(let x = 1; x < iconPathGame.length; x++){
                    tmp2[x-1] =   this.buttonsGame[x][0]
                }               
                this.buttonsGame[0][0].onMoveShow(tmp.concat(tmp2));
                this.buttonsGame[0][0].onDownShow(tmp.concat(tmp2));
            }else{
                this.buttonsGame[i][0].onMoveShow(tmp);
            }
        }
        //function() {this.ledStartBlink(ms);}.bind(this)

        //this.buttonsGame[0][0].initCallBack(this.clickGame, buttonTrigger.down);
        this.buttonsGame[0][1].initCallBack(function() {activeGame.setGame(games.guidedBuild)}, buttonTrigger.up);
        this.buttonsGame[0][2].initCallBack(function() {activeGame.setGame(games.freeBuild)}, buttonTrigger.up);
        

        //this.buttonsGame[1][1].initCallBack(function() {activeGame.setGame(games.tangram)}, buttonTrigger.up);
        this.buttonsGame[1][1].initCallBack(function() {activeGame.setGame(games.tangram)}, buttonTrigger.up);
        this.buttonsGame[1][2].initCallBack(function() {activeGame.setGame(games.tangramFree)}, buttonTrigger.up);
        this.buttonsGame[1][3].initCallBack(function() {activeGame.setGame(games.tangram2D)}, buttonTrigger.up);
        
        this.buttonsGame[2][1].initCallBack(function() {activeGame.setGame(games.math)}, buttonTrigger.up);
        this.buttonsGame[2][2].initCallBack(function() {activeGame.setGame(games.programming)}, buttonTrigger.up);
        //this.buttonsGame[2][2].initCallBack(function() {activeGame.setGame(games.readCode)}, buttonTrigger.up);
        //this.buttonsGame[2][3].initCallBack(function() {activeGame.setGame(games.programming)}, buttonTrigger.up);

        this.buttonsGame[3][1].initCallBack(function() {activeGame.setGame(games.colorMatch)}, buttonTrigger.up);
        this.buttonsGame[3][2].initCallBack(function() {activeGame.setGame(games.shapeHunter)}, buttonTrigger.up);
        this.buttonsGame[3][3].initCallBack(function() {activeGame.setGame(games.memo)}, buttonTrigger.up);

      //  this.buttonsGame[4][1].initCallBack(function() {activeGame.setGame(games.columns)}, buttonTrigger.up);
       // this.buttonsGame[4][2].initCallBack(function() {activeGame.setGame(games.tetris)}, buttonTrigger.up);
        
        this.buttonsGame[0][0].show();
        

//Level --------------

        this.okButton = Object.create(buttonSimple); 
        this.okButton.init(buttonPosition.center,buttonPosition.bottom, iconPathOkButton );
  

        this.rotateBlockIndicator = Object.create(buttonSimple); 
        this.rotateBlockIndicator.init(buttonPosition.center,buttonPosition.center, iconPathRotateBlockIndicator );

        
        this.enabled = true;

    },
    click : function(){
        console.log("click");

  

    },
    clickGame : function(){
        console.log("click game");

  

    },
    
    clickLevel : function(level, difficulty){
        //console.log("click level: " + level+ ", "+ difficulty);
        activeGame.setLevel(level, difficulty);
    },
    moveLevel : function(level, difficulty){        
       if(level != this.moveLevelLastLevel || difficulty != this.moveLevelLastDifficulty){          
        activeGame.displayLevelScore(level, difficulty);
        this.moveLevelLastLevel = level;
        this.moveLevelLastDifficult = difficulty;
       }
    },
    pointerMove: function(){
        
        if(this.menuLevelActive){            
            for(let row = 0; row < this.buttonsLevel.length; row++){
                for(let col = 0; col < this.buttonsLevel[row].length; col++){
                    if(this.scene.pointerX < canvas.width + col *  buttonExpandable.size[this.sizeSetting] && this.scene.pointerX > canvas.width - (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY < (row+1) * buttonExpandable.size[this.sizeSetting]&& this.scene.pointerY >  row * buttonExpandable.size[this.sizeSetting]
                    ){                        
                        this.buttonsLevel[row][col].move();
                        break;
                    }
                }
            }
        }


        if(this.menuGameActive){
            for(let row = 0; row < this.buttonsGame.length; row++){
                for(let col = 0; col < this.buttonsGame[row].length; col++){
                    if(this.scene.pointerX > col * buttonExpandable.size[this.sizeSetting] && this.scene.pointerX < (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY >  row * buttonExpandable.size[this.sizeSetting] && this.scene.pointerY <  (row + 1) * buttonExpandable.size[this.sizeSetting]
                    ){
                        this.buttonsGame[row][col].move();
                        break;
                    }
                }
            }
        }
    },
    pointerDown: function(){
        
        if(this.scene.pointerX < canvas.width && this.scene.pointerX > canvas.width - buttonExpandable.size[this.sizeSetting] &&
            this.scene.pointerY > 0  && this.scene.pointerY <  buttonExpandable.size[this.sizeSetting] 
            ){
                if(help.active){
                    help.clickForHelp(activeGame.gameIndex);
                    return;
                }

                sound.buttonAction();
                camera.lock();
                this.buttonsLevel[0][0].down();
                this.menuLevelActive = true;
            }

        if(this.scene.pointerX > 0 && this.scene.pointerX <  buttonExpandable.size[this.sizeSetting] &&
            this.scene.pointerY > 0 && this.scene.pointerY <   buttonExpandable.size[this.sizeSetting]
            ){
                if(help.active){
                    help.clickForHelp(helpType.game);
                    return;
                }

                sound.buttonAction();
                camera.lock();
                this.buttonsGame[0][0].down();
                this.menuGameActive = true;
                
            }

            
    },
    pointerUp: function(){
        if(this.menuLevelActive){

            this.moveLevelLastLevel = -1;
            this.moveLevelLastDifficulty = -1;

            activeGame.stopDisplayLevelScore();

            camera.unlock();

            for(let row = 0; row < this.buttonsLevel.length; row++){
                for(let col = 0; col < this.buttonsLevel[row].length; col++){
                    if(this.scene.pointerX < canvas.width + col *  buttonExpandable.size[this.sizeSetting] && this.scene.pointerX > canvas.width - (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY < (row+1) * buttonExpandable.size[this.sizeSetting]&& this.scene.pointerY >  row * buttonExpandable.size[this.sizeSetting]
                    ){
                        this.buttonsLevel[row][col].up();
                        break;
                    }
                }
            }
        
        
            this.menuLevelActive = false;
            for(let i =0; i < this.buttonsLevel.length; i++){
                for(let z =0; z< this.buttonsLevel[i].length; z++){
                    if(!(i == 0 && z ==0)){                    
                        this.buttonsLevel[i][z].hide(); 
                    }
                }
            }
            this.buttonsLevel[0][0].resetAlpha(); 
            
           
        }

        // ???????? guiSettings.okButton.resetAlpha(); 

        if(this.menuGameActive){
            camera.unlock();

            for(let row = 0; row < this.buttonsGame.length; row++){
                for(let col = 0; col < this.buttonsGame[row].length; col++){
                    if(this.scene.pointerX > col * buttonExpandable.size[this.sizeSetting] && this.scene.pointerX < (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY >  row * buttonExpandable.size[this.sizeSetting] && this.scene.pointerY <  (row + 1) * buttonExpandable.size[this.sizeSetting]
                    ){
                        this.buttonsGame[row][col].up();
                        break;
                    }
                }
            }
        
        
            this.menuGameActive = false;
            for(let i =0; i < this.buttonsGame.length; i++){
                for(let z =0; z< this.buttonsGame[i].length; z++){
                    if(!(i == 0 && z ==0)){                    
                        this.buttonsGame[i][z].hide(); 
                    }
                }
            }
            this.buttonsGame[0][0].resetAlpha(); 
            
            
        }
    },
    showRotateBlockIndicator: function(){
        this.rotateBlockIndicator.show();
    },
    hideRotateBlockIndicator: function(){
        this.rotateBlockIndicator.hide();
    },    
    sizeChange : function(size){
        guiGame.sizeSetting = size;

        guiGame.rotateBlockIndicator.changeSize(guiGame.sizeSetting);
        guiGame.okButton.changeSize(guiGame.sizeSetting);
        for(let i =0; i < guiGame.buttonsLevel.length; i++){
            for(let z =0; z< guiGame.buttonsLevel[i].length; z++){
                guiGame.buttonsLevel[i][z].changeSize(guiGame.sizeSetting);
                
            }
        }

        for(let i =0; i < guiGame.buttonsGame.length; i++){
            for(let z =0; z< guiGame.buttonsGame[i].length; z++){
                guiGame.buttonsGame[i][z].changeSize(guiGame.sizeSetting);
                
            }
        }
    }
}