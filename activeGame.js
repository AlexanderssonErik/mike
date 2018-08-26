let games = {
  guidedBuild: 0,
  tangram: 1,
  tangramFree: 2,
  shapeHunter : 3,
  colorMatch: 4,
  memo: 5,  
  math: 6,
  tangram2D: 7,
  freeBuild: 8,
  tetris : 9,
  columns : 10,
  readCode: 11,
  programming: 12
//wackamole
//gears from airplane
//guess the code
}



let activeGame = {
  game: [],
  level: [],
  gameIndex: -1,
  ignoreWin: false,
  timeOutOkClick: 0,
  wrongCount: 0,
  okCount: 0, 
  totalCount: 0,
  rightCount: 0,
  timeOutOkClickFunction : function(){
      clearTimeout(this.timeOutOkClick);
      this.clickOk(); 
        
  },
  setGame: function(game){  
    
    
    if(game == this.gameIndex){
      return;
    }

    if( this.game[this.gameIndex] != null){
      this.game[this.gameIndex].notActiveAnymore();
      this.level[this.gameIndex].notActiveAnymore();

      if(activeGame.ignoreWin ){
        clearTimeout(activeGame.timeOutOkClick);
        activeGame.ignoreWin = false;
        guiGame.okButton.hide();
        animateWinning.stop();
      }
    }
    
    if(game == games.guidedBuild){
      if(this.game[game] == null){      
        this.game[game] = guidedBuild;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = guidedBuildLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.tangram){     
      if(this.game[game] == null){      
        this.game[game] = tangram;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tangramLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
     }else if(game == games.tangramFree){
      if(this.game[game] == null){      
        this.game[game] = tangramFree;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tangramFreeLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.shapeHunter){
      if(this.game[game] == null){      
        this.game[game] = shapeHunter;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = shapeHunterLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.colorMatch){
      if(this.game[game] == null){      
        this.game[game] = colorMatch;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = colorMatchLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.memo){    
      if(this.game[game] == null){      
        this.game[game] = memo;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = memoLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.tetris){    
      if(this.game[game] == null){      
        this.game[game] = tetris;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tetrisLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.columns){    
      if(this.game[game] == null){      
        this.game[game] = columns;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = columnsLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.math){    
      if(this.game[game] == null){      
        this.game[game] = math;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = mathLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.tangram2D){    
      if(this.game[game] == null){      
        this.game[game] = tangram2D;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tangram2DLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.freeBuild){    
      if(this.game[game] == null){      
        this.game[game] = freeBuild;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = freeBuildLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.readCode){    
      if(this.game[game] == null){      
        this.game[game] = readCode;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = readCodeLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.programming){    
      if(this.game[game] == null){      
        this.game[game] = programming;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = programmingLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }
    

    base.ledSetBack(0);
    base.ledSetLeft(globalWorldColor.cyan);
    base.ledSetFront(0);
    base.ledSetRight(globalWorldColor.magenta);

    //neeed to reset this.ignoreWin = false;

    this.gameIndex = game;
    this.level[this.gameIndex].setLevel(0, 0);
    this.game[this.gameIndex].clear();

  },  

  resetAfterHelp : function(){

    if(this.gameIndex != -1){
      this.level[this.gameIndex].setLevel(0, 0);
      this.game[this.gameIndex].clear();
    }

  },

  setLevel : function(level, difficulty){
    animateWinning.stop();
    guiGame.okButton.hide();
    this.ignoreWin = false;
    this.level[this.gameIndex].setLevel(level, difficulty);
    this.game[this.gameIndex].clear();

  },
  resetBaseLed : function(){
    base.ledClear();
    base.ledSetLeft(globalWorldColor.cyan);
    base.ledSetRight(globalWorldColor.magenta);
  },
  resetCamera : function(){

  },
  stopDisplayLevelScore : function(){
    animateWinning.stop();

  },
  displayLevelScore  : function(level, difficulty){

    if(activeGame.level[activeGame.gameIndex].getScore(level, difficulty) != 0){   
      let score = activeGame.level[activeGame.gameIndex].getScore(level, difficulty);
      score -= score %3;
      animateWinning.start( score ,  algoBlock.findMaxY(world.block), false );
    }else{     
      animateWinning.stop();
    }
  },
  render: function(){ 
    if(this.gameIndex > -1){
      this.game[this.gameIndex].render();
    }
  },
  win:  function(timeout){
    if(!this.ignoreWin){
      sound.win();
      animateWinning.start(activeGame.level[activeGame.gameIndex].win(),  algoBlock.findMaxY(world.block), true);
      guiGame.okButton.initCallBack(this.clickOk, buttonTrigger.up);
      guiGame.okButton.show();
      this.ignoreWin = true;

      if(timeout != null){
        clearTimeout(this.timeOutOkClick);         
        this.timeOutOkClick = setTimeout(function() {this.timeOutOkClickFunction();}.bind(this), timeout);   

      }
    }
  },
  fail: function(){
    sound.fail();

  },

  clickOk: function(){   
    clearTimeout(activeGame.timeOutOkClick);
    activeGame.ignoreWin = false;
    guiGame.okButton.hide();
    animateWinning.stop();
    //if(activeGame.gameIndex == games.guidedBuild){
      activeGame.level[activeGame.gameIndex].new();
    //}
  },

  progression: function(wrongCount, okCount, totalCount)
  {

    if(this.wrongCount < wrongCount){
     // console.log("okCount: " + okCount);
     // console.log("totalCount: " + totalCount);
      sound.wrong(okCount/totalCount);

    }else if(this.okCount < okCount){
    //  console.log("okCount: " + okCount);
     // console.log("totalCount: " + totalCount);
      sound.correct(okCount/totalCount);
    }

    this.wrongCount = wrongCount;
    this.okCount = okCount;
    this.totalCount = totalCount;

  },

 


};
