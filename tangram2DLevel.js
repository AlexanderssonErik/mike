let tangram2DLevel = {
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  side : 0,
  blockPixels : 0,
  projectionPixels : 0,
  projectionPixelsSecond : [],
  notActiveAnymore: function(){
    guiGame.okButton.hide();
  },


  setLevel : function(level, difficulty){
    this.level = level;
    this.difficulty = difficulty;
    this.new();
  },

  nextSide : function (){
    this.side++;
    this.side%=5;
  },
  needToClickButton(){

    if(this.level == 1 ){
      return true;
    }
    return false;
    
  }, 

  getSide : function (){
    return this.side;
  },
  getSideProjection : function (){

    if(this.side == 0){
      return this.projectionPixels[0];
    }else if(this.side == 1){
      return this.projectionPixels[1];
    }else if(this.side == 2){
      return this.projectionPixelsSecond[0];
    }else if(this.side == 3){
      return this.projectionPixelsSecond[1];
    }else if(this.side == 4){
      return this.projectionPixels[2];
    }
  },
  win : function(){
    return this.score [this.level][this.difficulty]++;
  },
  getScore : function(level, difficulty){
    return this.score [level][difficulty];
  }, 
  new : function (){
    base.ledSetBack(0);
    base.ledSetLeft(globalWorldColor.cyan);
    base.ledSetFront(0);
    base.ledSetRight(globalWorldColor.magenta);

    this.side = 0;
    tangram2D.okButtonTriggered = false;
    if( tangram2DLevel.needToClickButton()){
      guiGame.okButton.initCallBack(tangram2D.clickOk, buttonTrigger.up);
      guiGame.okButton.show();
  }else{
      guiGame.okButton.hide();
  }

    let nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    
    while(nextStage == this.stage){
      nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    }
    this.stage = nextStage;

    this.initLevel(this.getBlock());
  },
  getBlock: function(){

    return this.block [this.level][this.difficulty][ this.stage];
  },

  initLevel : function(blocks){    

    this.blockPixels = algoBlockPixel.create(blocks);

    this.projectionPixels = algoProjection.create(this.blockPixels);

      this.projectionPixelsSecond[0] = algoProjection.copy(this.projectionPixels[0]);
      this.projectionPixelsSecond[1] = algoProjection.copy(this.projectionPixels[1]);

      algoProjection.colorNoMix(this.projectionPixels[0], this.blockPixels, 0, false);
      algoProjection.colorNoMix(this.projectionPixelsSecond[0], this.blockPixels, 0, true);
      
      algoProjection.colorNoMix(this.projectionPixels[1], this.blockPixels, 1, false);
      algoProjection.colorNoMix(this.projectionPixelsSecond[1], this.blockPixels, 1, true);


      algoProjection.colorNoMix(this.projectionPixels[2], this.blockPixels, 2, false); //  true);
    
  },
 init: function(){

      guiColorSelect.enabled = false;

      this.rowColumnCount[0] = 4;
      this.rowColumnCount[1] = 4;

      //--
      this.score[0] = [];
      this.block [0] = []; 


      this.score[0][0] = 0;
      this.block[0][0] = [];
      this.block[0][0][0] = [];
      this.block [0][0][0][0] =  Object.create(block);
      this.block [0][0][0][0].x = 2;
      this.block [0][0][0][0].y = 0;
      this.block [0][0][0][0].z = 7;
      this.block [0][0][0][0].rotation = 3;
      this.block [0][0][0][0].twobytwo = true;
      this.block [0][0][0][0].ledALeft = 1;
      this.block [0][0][0][0].ledARight = 1;
      this.block [0][0][0][0].ledBLeft = 1;
      this.block [0][0][0][0].ledBRight = 1;
      this.block [0][0][0][1] =  Object.create(block);
      this.block [0][0][0][1].x = 2;
      this.block [0][0][0][1].y = 0;
      this.block [0][0][0][1].z = 5;
      this.block [0][0][0][1].rotation = 0;
      this.block [0][0][0][1].twobytwo = true;
      this.block [0][0][0][1].ledALeft = 4;
      this.block [0][0][0][1].ledARight = 4;
      this.block [0][0][0][1].ledBLeft = 4;
      this.block [0][0][0][1].ledBRight = 4;
      this.block[0][0][1] = [];
      this.block [0][0][1][0] =  Object.create(block);
      this.block [0][0][1][0].x = 5;
      this.block [0][0][1][0].y = 0;
      this.block [0][0][1][0].z = 3;
      this.block [0][0][1][0].rotation = 3;
      this.block [0][0][1][0].twobytwo = true;
      this.block [0][0][1][0].ledALeft = 4;
      this.block [0][0][1][0].ledARight = 4;
      this.block [0][0][1][0].ledBLeft = 4;
      this.block [0][0][1][0].ledBRight = 4;
      this.block [0][0][1][1] =  Object.create(block);
      this.block [0][0][1][1].x = 3;
      this.block [0][0][1][1].y = 0;
      this.block [0][0][1][1].z = 1;
      this.block [0][0][1][1].rotation = 0;
      this.block [0][0][1][1].twobytwo = true;
      this.block [0][0][1][1].ledALeft = 1;
      this.block [0][0][1][1].ledARight = 1;
      this.block [0][0][1][1].ledBLeft = 1;
      this.block [0][0][1][1].ledBRight = 1;

      //--

      this.score[0][1] = 0;
      this.block[0][1] = [];
      this.block[0][1][0] = [];
      this.block [0][1][0][0] =  Object.create(block);
      this.block [0][1][0][0].x = 3;
      this.block [0][1][0][0].y = 0;
      this.block [0][1][0][0].z = 9;
      this.block [0][1][0][0].rotation = 1;
      this.block [0][1][0][0].twobytwo = false;
      this.block [0][1][0][0].ledALeft = 4;
      this.block [0][1][0][0].ledARight = 4;
      this.block [0][1][0][0].ledBLeft = 4;
      this.block [0][1][0][0].ledBRight = 4;
      this.block [0][1][0][1] =  Object.create(block);
      this.block [0][1][0][1].x = 7;
      this.block [0][1][0][1].y = 0;
      this.block [0][1][0][1].z = 7;
      this.block [0][1][0][1].rotation = 2;
      this.block [0][1][0][1].twobytwo = true;
      this.block [0][1][0][1].ledALeft = 2;
      this.block [0][1][0][1].ledARight = 2;
      this.block [0][1][0][1].ledBLeft = 2;
      this.block [0][1][0][1].ledBRight = 2;
      this.block [0][1][0][2] =  Object.create(block);
      this.block [0][1][0][2].x = 3;
      this.block [0][1][0][2].y = 0;
      this.block [0][1][0][2].z = 3;
      this.block [0][1][0][2].rotation = 0;
      this.block [0][1][0][2].twobytwo = false;
      this.block [0][1][0][2].ledALeft = 1;
      this.block [0][1][0][2].ledARight = 1;
      this.block [0][1][0][2].ledBLeft = 1;
      this.block [0][1][0][2].ledBRight = 1;
      this.block [0][1][0][3] =  Object.create(block);
      this.block [0][1][0][3].x = 6;
      this.block [0][1][0][3].y = 0;
      this.block [0][1][0][3].z = 2;
      this.block [0][1][0][3].rotation = 2;
      this.block [0][1][0][3].twobytwo = false;
      this.block [0][1][0][3].ledALeft = 1;
      this.block [0][1][0][3].ledARight = 1;
      this.block [0][1][0][3].ledBLeft = 1;
      this.block [0][1][0][3].ledBRight = 1;
      this.block [0][1][0][4] =  Object.create(block);
      this.block [0][1][0][4].x = 7;
      this.block [0][1][0][4].y = 1;
      this.block [0][1][0][4].z = 7;
      this.block [0][1][0][4].rotation = 2;
      this.block [0][1][0][4].twobytwo = true;
      this.block [0][1][0][4].ledALeft = 2;
      this.block [0][1][0][4].ledARight = 2;
      this.block [0][1][0][4].ledBLeft = 2;
      this.block [0][1][0][4].ledBRight = 2;
      this.block [0][1][0][5] =  Object.create(block);
      this.block [0][1][0][5].x = 4;
      this.block [0][1][0][5].y = 1;
      this.block [0][1][0][5].z = 1;
      this.block [0][1][0][5].rotation = 3;
      this.block [0][1][0][5].twobytwo = false;
      this.block [0][1][0][5].ledALeft = 1;
      this.block [0][1][0][5].ledARight = 1;
      this.block [0][1][0][5].ledBLeft = 1;
      this.block [0][1][0][5].ledBRight = 1;
      this.block [0][1][0][6] =  Object.create(block);
      this.block [0][1][0][6].x = 5;
      this.block [0][1][0][6].y = 1;
      this.block [0][1][0][6].z = 4;
      this.block [0][1][0][6].rotation = 1;
      this.block [0][1][0][6].twobytwo = false;
      this.block [0][1][0][6].ledALeft = 1;
      this.block [0][1][0][6].ledARight = 1;
      this.block [0][1][0][6].ledBLeft = 1;
      this.block [0][1][0][6].ledBRight = 1;
      this.block [0][1][0][7] =  Object.create(block);
      this.block [0][1][0][7].x = 7;
      this.block [0][1][0][7].y = 2;
      this.block [0][1][0][7].z = 6;
      this.block [0][1][0][7].rotation = 3;
      this.block [0][1][0][7].twobytwo = true;
      this.block [0][1][0][7].ledALeft = 2;
      this.block [0][1][0][7].ledARight = 2;
      this.block [0][1][0][7].ledBLeft = 2;
      this.block [0][1][0][7].ledBRight = 2;
      this.block[0][1][1] = [];
      this.block [0][1][1][0] =  Object.create(block);
      this.block [0][1][1][0].x = 2;
      this.block [0][1][1][0].y = 0;
      this.block [0][1][1][0].z = 8;
      this.block [0][1][1][0].rotation = 0;
      this.block [0][1][1][0].twobytwo = false;
      this.block [0][1][1][0].ledALeft = 1;
      this.block [0][1][1][0].ledARight = 1;
      this.block [0][1][1][0].ledBLeft = 1;
      this.block [0][1][1][0].ledBRight = 1;
      this.block [0][1][1][1] =  Object.create(block);
      this.block [0][1][1][1].x = 5;
      this.block [0][1][1][1].y = 0;
      this.block [0][1][1][1].z = 7;
      this.block [0][1][1][1].rotation = 2;
      this.block [0][1][1][1].twobytwo = false;
      this.block [0][1][1][1].ledALeft = 1;
      this.block [0][1][1][1].ledARight = 1;
      this.block [0][1][1][1].ledBLeft = 1;
      this.block [0][1][1][1].ledBRight = 1;
      this.block [0][1][1][2] =  Object.create(block);
      this.block [0][1][1][2].x = 6;
      this.block [0][1][1][2].y = 0;
      this.block [0][1][1][2].z = 3;
      this.block [0][1][1][2].rotation = 3;
      this.block [0][1][1][2].twobytwo = true;
      this.block [0][1][1][2].ledALeft = 4;
      this.block [0][1][1][2].ledARight = 4;
      this.block [0][1][1][2].ledBLeft = 4;
      this.block [0][1][1][2].ledBRight = 4;
      this.block [0][1][1][3] =  Object.create(block);
      this.block [0][1][1][3].x = 6;
      this.block [0][1][1][3].y = 0;
      this.block [0][1][1][3].z = 0;
      this.block [0][1][1][3].rotation = 0;
      this.block [0][1][1][3].twobytwo = false;
      this.block [0][1][1][3].ledALeft = 2;
      this.block [0][1][1][3].ledARight = 2;
      this.block [0][1][1][3].ledBLeft = 2;
      this.block [0][1][1][3].ledBRight = 2;
      this.block [0][1][1][4] =  Object.create(block);
      this.block [0][1][1][4].x = 3;
      this.block [0][1][1][4].y = 1;
      this.block [0][1][1][4].z = 6;
      this.block [0][1][1][4].rotation = 3;
      this.block [0][1][1][4].twobytwo = false;
      this.block [0][1][1][4].ledALeft = 1;
      this.block [0][1][1][4].ledARight = 1;
      this.block [0][1][1][4].ledBLeft = 1;
      this.block [0][1][1][4].ledBRight = 1;
      this.block [0][1][1][5] =  Object.create(block);
      this.block [0][1][1][5].x = 4;
      this.block [0][1][1][5].y = 1;
      this.block [0][1][1][5].z = 9;
      this.block [0][1][1][5].rotation = 1;
      this.block [0][1][1][5].twobytwo = false;
      this.block [0][1][1][5].ledALeft = 1;
      this.block [0][1][1][5].ledARight = 1;
      this.block [0][1][1][5].ledBLeft = 1;
      this.block [0][1][1][5].ledBRight = 1;
      this.block [0][1][1][6] =  Object.create(block);
      this.block [0][1][1][6].x = 6;
      this.block [0][1][1][6].y = 1;
      this.block [0][1][1][6].z = 3;
      this.block [0][1][1][6].rotation = 3;
      this.block [0][1][1][6].twobytwo = true;
      this.block [0][1][1][6].ledALeft = 4;
      this.block [0][1][1][6].ledARight = 4;
      this.block [0][1][1][6].ledBLeft = 4;
      this.block [0][1][1][6].ledBRight = 4;
      this.block [0][1][1][7] =  Object.create(block);
      this.block [0][1][1][7].x = 5;
      this.block [0][1][1][7].y = 2;
      this.block [0][1][1][7].z = 3;
      this.block [0][1][1][7].rotation = 0;
      this.block [0][1][1][7].twobytwo = true;
      this.block [0][1][1][7].ledALeft = 4;
      this.block [0][1][1][7].ledARight = 4;
      this.block [0][1][1][7].ledBLeft = 4;
      this.block [0][1][1][7].ledBRight = 4;
      this.block[0][1][2] = [];
      this.block [0][1][2][0] =  Object.create(block);
      this.block [0][1][2][0].x = 2;
      this.block [0][1][2][0].y = 0;
      this.block [0][1][2][0].z = 8;
      this.block [0][1][2][0].rotation = 0;
      this.block [0][1][2][0].twobytwo = false;
      this.block [0][1][2][0].ledALeft = 4;
      this.block [0][1][2][0].ledARight = 4;
      this.block [0][1][2][0].ledBLeft = 4;
      this.block [0][1][2][0].ledBRight = 4;
      this.block [0][1][2][1] =  Object.create(block);
      this.block [0][1][2][1].x = 5;
      this.block [0][1][2][1].y = 0;
      this.block [0][1][2][1].z = 7;
      this.block [0][1][2][1].rotation = 2;
      this.block [0][1][2][1].twobytwo = false;
      this.block [0][1][2][1].ledALeft = 4;
      this.block [0][1][2][1].ledARight = 4;
      this.block [0][1][2][1].ledBLeft = 4;
      this.block [0][1][2][1].ledBRight = 4;
      this.block [0][1][2][2] =  Object.create(block);
      this.block [0][1][2][2].x = 7;
      this.block [0][1][2][2].y = 0;
      this.block [0][1][2][2].z = 3;
      this.block [0][1][2][2].rotation = 3;
      this.block [0][1][2][2].twobytwo = true;
      this.block [0][1][2][2].ledALeft = 2;
      this.block [0][1][2][2].ledARight = 2;
      this.block [0][1][2][2].ledBLeft = 2;
      this.block [0][1][2][2].ledBRight = 2;
      this.block [0][1][2][3] =  Object.create(block);
      this.block [0][1][2][3].x = 1;
      this.block [0][1][2][3].y = 0;
      this.block [0][1][2][3].z = 1;
      this.block [0][1][2][3].rotation = 0;
      this.block [0][1][2][3].twobytwo = false;
      this.block [0][1][2][3].ledALeft = 1;
      this.block [0][1][2][3].ledARight = 1;
      this.block [0][1][2][3].ledBLeft = 1;
      this.block [0][1][2][3].ledBRight = 1;
      this.block [0][1][2][4] =  Object.create(block);
      this.block [0][1][2][4].x = 3;
      this.block [0][1][2][4].y = 1;
      this.block [0][1][2][4].z = 6;
      this.block [0][1][2][4].rotation = 3;
      this.block [0][1][2][4].twobytwo = false;
      this.block [0][1][2][4].ledALeft = 4;
      this.block [0][1][2][4].ledARight = 4;
      this.block [0][1][2][4].ledBLeft = 4;
      this.block [0][1][2][4].ledBRight = 4;
      this.block [0][1][2][5] =  Object.create(block);
      this.block [0][1][2][5].x = 4;
      this.block [0][1][2][5].y = 1;
      this.block [0][1][2][5].z = 9;
      this.block [0][1][2][5].rotation = 1;
      this.block [0][1][2][5].twobytwo = false;
      this.block [0][1][2][5].ledALeft = 4;
      this.block [0][1][2][5].ledARight = 4;
      this.block [0][1][2][5].ledBLeft = 4;
      this.block [0][1][2][5].ledBRight = 4;
      this.block [0][1][2][6] =  Object.create(block);
      this.block [0][1][2][6].x = 7;
      this.block [0][1][2][6].y = 1;
      this.block [0][1][2][6].z = 3;
      this.block [0][1][2][6].rotation = 3;
      this.block [0][1][2][6].twobytwo = true;
      this.block [0][1][2][6].ledALeft = 2;
      this.block [0][1][2][6].ledARight = 2;
      this.block [0][1][2][6].ledBLeft = 2;
      this.block [0][1][2][6].ledBRight = 2;
      this.block [0][1][2][7] =  Object.create(block);
      this.block [0][1][2][7].x = 6;
      this.block [0][1][2][7].y = 2;
      this.block [0][1][2][7].z = 3;
      this.block [0][1][2][7].rotation = 0;
      this.block [0][1][2][7].twobytwo = true;
      this.block [0][1][2][7].ledALeft = 2;
      this.block [0][1][2][7].ledARight = 2;
      this.block [0][1][2][7].ledBLeft = 2;
      this.block [0][1][2][7].ledBRight = 2;











//------------------------------------------------------------------------------------------
this.score[0][2] = 0;
this.block[0][2] = [];
this.block[0][2][0] = [];
this.block [0][2][0][0] =  Object.create(block);
this.block [0][2][0][0].x = 3;
this.block [0][2][0][0].y = 0;
this.block [0][2][0][0].z = 6;
this.block [0][2][0][0].rotation = 3;
this.block [0][2][0][0].twobytwo = true;
this.block [0][2][0][0].ledALeft = 4;
this.block [0][2][0][0].ledARight = 4;
this.block [0][2][0][0].ledBLeft = 4;
this.block [0][2][0][0].ledBRight = 4;
this.block [0][2][0][1] =  Object.create(block);
this.block [0][2][0][1].x = 5;
this.block [0][2][0][1].y = 0;
this.block [0][2][0][1].z = 8;
this.block [0][2][0][1].rotation = 1;
this.block [0][2][0][1].twobytwo = true;
this.block [0][2][0][1].ledALeft = 1;
this.block [0][2][0][1].ledARight = 1;
this.block [0][2][0][1].ledBLeft = 1;
this.block [0][2][0][1].ledBRight = 1;
this.block [0][2][0][2] =  Object.create(block);
this.block [0][2][0][2].x = 8;
this.block [0][2][0][2].y = 0;
this.block [0][2][0][2].z = 8;
this.block [0][2][0][2].rotation = 1;
this.block [0][2][0][2].twobytwo = false;
this.block [0][2][0][2].ledALeft = 4;
this.block [0][2][0][2].ledARight = 4;
this.block [0][2][0][2].ledBLeft = 4;
this.block [0][2][0][2].ledBRight = 4;
this.block [0][2][0][3] =  Object.create(block);
this.block [0][2][0][3].x = 2;
this.block [0][2][0][3].y = 0;
this.block [0][2][0][3].z = 4;
this.block [0][2][0][3].rotation = 1;
this.block [0][2][0][3].twobytwo = false;
this.block [0][2][0][3].ledALeft = 4;
this.block [0][2][0][3].ledARight = 4;
this.block [0][2][0][3].ledBLeft = 4;
this.block [0][2][0][3].ledBRight = 4;
this.block [0][2][0][4] =  Object.create(block);
this.block [0][2][0][4].x = 7;
this.block [0][2][0][4].y = 0;
this.block [0][2][0][4].z = 3;
this.block [0][2][0][4].rotation = 0;
this.block [0][2][0][4].twobytwo = true;
this.block [0][2][0][4].ledALeft = 2;
this.block [0][2][0][4].ledARight = 2;
this.block [0][2][0][4].ledBLeft = 2;
this.block [0][2][0][4].ledBRight = 2;
this.block [0][2][0][5] =  Object.create(block);
this.block [0][2][0][5].x = 7;
this.block [0][2][0][5].y = 0;
this.block [0][2][0][5].z = 1;
this.block [0][2][0][5].rotation = 1;
this.block [0][2][0][5].twobytwo = true;
this.block [0][2][0][5].ledALeft = 1;
this.block [0][2][0][5].ledARight = 1;
this.block [0][2][0][5].ledBLeft = 1;
this.block [0][2][0][5].ledBRight = 1;
this.block [0][2][0][6] =  Object.create(block);
this.block [0][2][0][6].x = 6;
this.block [0][2][0][6].y = 1;
this.block [0][2][0][6].z = 8;
this.block [0][2][0][6].rotation = 2;
this.block [0][2][0][6].twobytwo = false;
this.block [0][2][0][6].ledALeft = 2;
this.block [0][2][0][6].ledARight = 2;
this.block [0][2][0][6].ledBLeft = 2;
this.block [0][2][0][6].ledBRight = 2;
this.block [0][2][0][7] =  Object.create(block);
this.block [0][2][0][7].x = 2;
this.block [0][2][0][7].y = 1;
this.block [0][2][0][7].z = 4;
this.block [0][2][0][7].rotation = 0;
this.block [0][2][0][7].twobytwo = true;
this.block [0][2][0][7].ledALeft = 2;
this.block [0][2][0][7].ledARight = 2;
this.block [0][2][0][7].ledBLeft = 2;
this.block [0][2][0][7].ledBRight = 2;
this.block [0][2][0][8] =  Object.create(block);
this.block [0][2][0][8].x = 6;
this.block [0][2][0][8].y = 1;
this.block [0][2][0][8].z = 3;
this.block [0][2][0][8].rotation = 0;
this.block [0][2][0][8].twobytwo = true;
this.block [0][2][0][8].ledALeft = 4;
this.block [0][2][0][8].ledARight = 4;
this.block [0][2][0][8].ledBLeft = 4;
this.block [0][2][0][8].ledBRight = 4;
this.block [0][2][0][9] =  Object.create(block);
this.block [0][2][0][9].x = 7;
this.block [0][2][0][9].y = 1;
this.block [0][2][0][9].z = 1;
this.block [0][2][0][9].rotation = 0;
this.block [0][2][0][9].twobytwo = true;
this.block [0][2][0][9].ledALeft = 2;
this.block [0][2][0][9].ledARight = 2;
this.block [0][2][0][9].ledBLeft = 2;
this.block [0][2][0][9].ledBRight = 2;
this.block [0][2][0][10] =  Object.create(block);
this.block [0][2][0][10].x = 3;
this.block [0][2][0][10].y = 2;
this.block [0][2][0][10].z = 1;
this.block [0][2][0][10].rotation = 3;
this.block [0][2][0][10].twobytwo = false;
this.block [0][2][0][10].ledALeft = 1;
this.block [0][2][0][10].ledARight = 1;
this.block [0][2][0][10].ledBLeft = 1;
this.block [0][2][0][10].ledBRight = 1;
this.block [0][2][0][11] =  Object.create(block);
this.block [0][2][0][11].x = 7;
this.block [0][2][0][11].y = 2;
this.block [0][2][0][11].z = 2;
this.block [0][2][0][11].rotation = 0;
this.block [0][2][0][11].twobytwo = true;
this.block [0][2][0][11].ledALeft = 4;
this.block [0][2][0][11].ledARight = 4;
this.block [0][2][0][11].ledBLeft = 4;
this.block [0][2][0][11].ledBRight = 4;
this.block [0][2][0][12] =  Object.create(block);
this.block [0][2][0][12].x = 6;
this.block [0][2][0][12].y = 2;
this.block [0][2][0][12].z = 2;
this.block [0][2][0][12].rotation = 3;
this.block [0][2][0][12].twobytwo = false;
this.block [0][2][0][12].ledALeft = 1;
this.block [0][2][0][12].ledARight = 1;
this.block [0][2][0][12].ledBLeft = 1;
this.block [0][2][0][12].ledBRight = 1;
this.block[0][2][1] = [];
this.block [0][2][1][0] =  Object.create(block);
this.block [0][2][1][0].x = 2;
this.block [0][2][1][0].y = 0;
this.block [0][2][1][0].z = 7;
this.block [0][2][1][0].rotation = 3;
this.block [0][2][1][0].twobytwo = true;
this.block [0][2][1][0].ledALeft = 1;
this.block [0][2][1][0].ledARight = 1;
this.block [0][2][1][0].ledBLeft = 1;
this.block [0][2][1][0].ledBRight = 1;
this.block [0][2][1][1] =  Object.create(block);
this.block [0][2][1][1].x = 4;
this.block [0][2][1][1].y = 0;
this.block [0][2][1][1].z = 6;
this.block [0][2][1][1].rotation = 0;
this.block [0][2][1][1].twobytwo = true;
this.block [0][2][1][1].ledALeft = 2;
this.block [0][2][1][1].ledARight = 2;
this.block [0][2][1][1].ledBLeft = 2;
this.block [0][2][1][1].ledBRight = 2;
this.block [0][2][1][2] =  Object.create(block);
this.block [0][2][1][2].x = 7;
this.block [0][2][1][2].y = 0;
this.block [0][2][1][2].z = 7;
this.block [0][2][1][2].rotation = 0;
this.block [0][2][1][2].twobytwo = true;
this.block [0][2][1][2].ledALeft = 4;
this.block [0][2][1][2].ledARight = 4;
this.block [0][2][1][2].ledBLeft = 4;
this.block [0][2][1][2].ledBRight = 4;
this.block [0][2][1][3] =  Object.create(block);
this.block [0][2][1][3].x = 3;
this.block [0][2][1][3].y = 0;
this.block [0][2][1][3].z = 5;
this.block [0][2][1][3].rotation = 1;
this.block [0][2][1][3].twobytwo = true;
this.block [0][2][1][3].ledALeft = 4;
this.block [0][2][1][3].ledARight = 4;
this.block [0][2][1][3].ledBLeft = 4;
this.block [0][2][1][3].ledBRight = 4;
this.block [0][2][1][4] =  Object.create(block);
this.block [0][2][1][4].x = 2;
this.block [0][2][1][4].y = 0;
this.block [0][2][1][4].z = 1;
this.block [0][2][1][4].rotation = 3;
this.block [0][2][1][4].twobytwo = true;
this.block [0][2][1][4].ledALeft = 4;
this.block [0][2][1][4].ledARight = 4;
this.block [0][2][1][4].ledBLeft = 4;
this.block [0][2][1][4].ledBRight = 4;
this.block [0][2][1][5] =  Object.create(block);
this.block [0][2][1][5].x = 4;
this.block [0][2][1][5].y = 0;
this.block [0][2][1][5].z = 2;
this.block [0][2][1][5].rotation = 0;
this.block [0][2][1][5].twobytwo = false;
this.block [0][2][1][5].ledALeft = 1;
this.block [0][2][1][5].ledARight = 1;
this.block [0][2][1][5].ledBLeft = 1;
this.block [0][2][1][5].ledBRight = 1;
this.block [0][2][1][6] =  Object.create(block);
this.block [0][2][1][6].x = 2;
this.block [0][2][1][6].y = 1;
this.block [0][2][1][6].z = 7;
this.block [0][2][1][6].rotation = 3;
this.block [0][2][1][6].twobytwo = true;
this.block [0][2][1][6].ledALeft = 4;
this.block [0][2][1][6].ledARight = 4;
this.block [0][2][1][6].ledBLeft = 4;
this.block [0][2][1][6].ledBRight = 4;
this.block [0][2][1][7] =  Object.create(block);
this.block [0][2][1][7].x = 6;
this.block [0][2][1][7].y = 1;
this.block [0][2][1][7].z = 7;
this.block [0][2][1][7].rotation = 0;
this.block [0][2][1][7].twobytwo = true;
this.block [0][2][1][7].ledALeft = 1;
this.block [0][2][1][7].ledARight = 1;
this.block [0][2][1][7].ledBLeft = 1;
this.block [0][2][1][7].ledBRight = 1;
this.block [0][2][1][8] =  Object.create(block);
this.block [0][2][1][8].x = 4;
this.block [0][2][1][8].y = 1;
this.block [0][2][1][8].z = 4;
this.block [0][2][1][8].rotation = 0;
this.block [0][2][1][8].twobytwo = true;
this.block [0][2][1][8].ledALeft = 2;
this.block [0][2][1][8].ledARight = 2;
this.block [0][2][1][8].ledBLeft = 2;
this.block [0][2][1][8].ledBRight = 2;
this.block [0][2][1][9] =  Object.create(block);
this.block [0][2][1][9].x = 3;
this.block [0][2][1][9].y = 1;
this.block [0][2][1][9].z = 2;
this.block [0][2][1][9].rotation = 2;
this.block [0][2][1][9].twobytwo = true;
this.block [0][2][1][9].ledALeft = 2;
this.block [0][2][1][9].ledARight = 2;
this.block [0][2][1][9].ledBLeft = 2;
this.block [0][2][1][9].ledBRight = 2;
this.block [0][2][1][10] =  Object.create(block);
this.block [0][2][1][10].x = 8;
this.block [0][2][1][10].y = 1;
this.block [0][2][1][10].z = 2;
this.block [0][2][1][10].rotation = 3;
this.block [0][2][1][10].twobytwo = false;
this.block [0][2][1][10].ledALeft = 4;
this.block [0][2][1][10].ledARight = 4;
this.block [0][2][1][10].ledBLeft = 4;
this.block [0][2][1][10].ledBRight = 4;
this.block [0][2][1][11] =  Object.create(block);
this.block [0][2][1][11].x = 2;
this.block [0][2][1][11].y = 2;
this.block [0][2][1][11].z = 6;
this.block [0][2][1][11].rotation = 3;
this.block [0][2][1][11].twobytwo = true;
this.block [0][2][1][11].ledALeft = 4;
this.block [0][2][1][11].ledARight = 4;
this.block [0][2][1][11].ledBLeft = 4;
this.block [0][2][1][11].ledBRight = 4;
this.block [0][2][1][12] =  Object.create(block);
this.block [0][2][1][12].x = 4;
this.block [0][2][1][12].y = 2;
this.block [0][2][1][12].z = 3;
this.block [0][2][1][12].rotation = 3;
this.block [0][2][1][12].twobytwo = false;
this.block [0][2][1][12].ledALeft = 4;
this.block [0][2][1][12].ledARight = 4;
this.block [0][2][1][12].ledBLeft = 4;
this.block [0][2][1][12].ledBRight = 4;
this.block [0][2][1][13] =  Object.create(block);
this.block [0][2][1][13].x = 7;
this.block [0][2][1][13].y = 2;
this.block [0][2][1][13].z = 1;
this.block [0][2][1][13].rotation = 0;
this.block [0][2][1][13].twobytwo = true;
this.block [0][2][1][13].ledALeft = 1;
this.block [0][2][1][13].ledARight = 1;
this.block [0][2][1][13].ledBLeft = 1;
this.block [0][2][1][13].ledBRight = 1;
this.block [0][2][1][14] =  Object.create(block);
this.block [0][2][1][14].x = 2;
this.block [0][2][1][14].y = 3;
this.block [0][2][1][14].z = 4;
this.block [0][2][1][14].rotation = 3;
this.block [0][2][1][14].twobytwo = false;
this.block [0][2][1][14].ledALeft = 2;
this.block [0][2][1][14].ledARight = 2;
this.block [0][2][1][14].ledBLeft = 2;
this.block [0][2][1][14].ledBRight = 2;
this.block [0][2][1][15] =  Object.create(block);
this.block [0][2][1][15].x = 4;
this.block [0][2][1][15].y = 3;
this.block [0][2][1][15].z = 8;
this.block [0][2][1][15].rotation = 1;
this.block [0][2][1][15].twobytwo = false;
this.block [0][2][1][15].ledALeft = 4;
this.block [0][2][1][15].ledARight = 4;
this.block [0][2][1][15].ledBLeft = 4;
this.block [0][2][1][15].ledBRight = 4;


//////////////////////////////////////////////////////////////////////////////////////////////

//1
//--
this.score[1] = [];
this.block [1] = []; 

//1.0
//-------------------------
this.score[1][0] = 0;
this.block[1][0] = this.block[0][0];


//1.1
//-------------------------
this.score[1][1] = 0;
this.block[1][1] = this.block[0][1];

//1.2
//-------------------------
this.score[1][2] = 0;
this.block[1][2] = this.block[0][2];

      this.initLevel(this.block[0][0][0]);

  }
}
