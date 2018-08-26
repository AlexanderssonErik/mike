let freeBuildLevel = {
 // block : [], // level, stage, block
  //score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  redPixel: [],   
  greenPixel: [],  
  bluePixel: [],
 

  notActiveAnymore: function(){
    guiColorSelect.enableRgbColorWheel(true);
    basePlane.disposeMesh();
  },
  colorOnBase: function(){
    if(this.level == 2){
      return true;
    }
  },

  setLevel : function(level, difficulty){
    this.level = level;
    this.difficulty = difficulty;
    this.new();
  },

  getScore : function(level, difficulty){
    return 0;
  }, 
  new : function (){
    if(this.level == 0){
      guiColorSelect.enableRgbColorWheel(true);
      basePlane.disposeMesh();
    }else if(this.level == 1){
      guiColorSelect.enableRgbColorWheel(false);
      basePlane.disposeMesh();
    }else {
      guiColorSelect.enableRgbColorWheel(false);
      basePlane.renderFlat([1.5, 0.5, 1.5], [0.5, 4.5, 8.5], [4,2,4], [2,6,2], [globalWorldColor.blue, globalWorldColor.green, globalWorldColor.red] );

      freeBuild.gamePixels = algoBlockPixel.create(world.block); 

   

    }
 /*   let nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    
    while(nextStage == this.stage){
      nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    }
    this.stage = nextStage;*/
  },

 init: function(){

      this.rowColumnCount[0] = 2; 
      this.rowColumnCount[1] = 2; // color sections
      this.rowColumnCount[2] = 2; // color select on plane

      //--

      let redBlock = [];
      
redBlock[0] =  Object.create(block);
redBlock[0].x = 3;
redBlock[0].y = 0;
redBlock[0].z = 9;
redBlock[0].rotation = 2;
redBlock[0].twobytwo = false;
redBlock[0].ledALeft = globalWorldColor.red;
redBlock[0].ledARight = globalWorldColor.red;
redBlock[0].ledBLeft = globalWorldColor.red;
redBlock[0].ledBRight = globalWorldColor.red;

this.redPixel =  algoBlockPixel.create(redBlock);


let greenBlock = [];
greenBlock[0] =  Object.create(block);
greenBlock[0].x = 1;
greenBlock[0].y = 0;
greenBlock[0].z = 4;
greenBlock[0].rotation = 3;
greenBlock[0].twobytwo = false;
greenBlock[0].ledALeft = globalWorldColor.green;
greenBlock[0].ledARight = globalWorldColor.green;
greenBlock[0].ledBLeft = globalWorldColor.green;
greenBlock[0].ledBRight = globalWorldColor.green;
greenBlock[1] =  Object.create(block);
greenBlock[1].x = 0;
greenBlock[1].y = 0;
greenBlock[1].z = 2;
greenBlock[1].rotation = 0;
greenBlock[1].twobytwo = true;
greenBlock[1].ledALeft = globalWorldColor.green;
greenBlock[1].ledARight = globalWorldColor.green;
greenBlock[1].ledBLeft = globalWorldColor.green;
greenBlock[1].ledBRight = globalWorldColor.green;

this.greenPixel =  algoBlockPixel.create(greenBlock);

let blueBlock = [];

blueBlock[0] =  Object.create(block);
blueBlock[0].x = 3;
blueBlock[0].y = 0;
blueBlock[0].z = 1;
blueBlock[0].rotation = 2;
blueBlock[0].twobytwo = false;
blueBlock[0].ledALeft = globalWorldColor.blue;
blueBlock[0].ledARight = globalWorldColor.blue;
blueBlock[0].ledBLeft = globalWorldColor.blue;
blueBlock[0].ledBRight = globalWorldColor.blue;

this.bluePixel =  algoBlockPixel.create(blueBlock);


  }
}
