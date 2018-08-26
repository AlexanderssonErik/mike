let tetrisLevel = {
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  redPixel: [],   
  greenPixel: [],  
  bluePixel: [],

  notActiveAnymore: function(){
 
    basePlane.disposeMesh();
  },

  setLevel : function(level, difficulty){
    this.level = level;
    this.difficulty = difficulty;
    this.new();
  },
  win : function(){
    return this.score [this.level][this.difficulty]++;
  },
  getScore : function(level, difficulty){
    return this.score [level][difficulty];
  }, 
  new : function (){
    let nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    
    while(nextStage == this.stage){
      nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    }
    this.stage = nextStage;
  },
  getBlock: function(){

    return this.block [this.level][this.difficulty][ this.stage];
  },
 init: function(){

      basePlane.renderFlat([1.5, 0.5, 1.5], [0.5, 4.5, 8.5], [4,2,4], [2,6,2], [globalWorldColor.blue, globalWorldColor.green, globalWorldColor.red] );


      this.rowColumnCount[0] = 2;
      this.rowColumnCount[1] = 2;

      //--

      this.score[0] = [];
      this.score[0][0] = 0;

      this.block [0] = []; 
      this.block [0][0] = [];
      this.block [0][0][0] = [];
      
      this.block [0][0][0][0] = Object.create(block); 
      this.block [0][0][0][1] = Object.create(block); 

      this.block [0][0][0][0].x = 0;
      this.block [0][0][0][0].y = 0;
      this.block [0][0][0][0].z = 0;
      this.block [0][0][0][0].rotation = 0;
      this.block [0][0][0][0].twobytwo = true;

      this.block [0][0][0][1].x = 2;
      this.block [0][0][0][1].y = 0;
      this.block [0][0][0][1].z = 0;
      this.block [0][0][0][1].rotation = 0;
      this.block [0][0][0][1].twobytwo = true;

      this.block [0][0][1] = [];
      
      this.block [0][0][1][0] = Object.create(block); 
      this.block [0][0][1][1] = Object.create(block); 

      this.block [0][0][1][0].x = 0;
      this.block [0][0][1][0].y = 0;
      this.block [0][0][1][0].z = 0;
      this.block [0][0][1][0].rotation = 0;
      this.block [0][0][1][0].twobytwo = true;

      this.block [0][0][1][1].x = 3;
      this.block [0][0][1][1].y = 0;
      this.block [0][0][1][1].z = 0;
      this.block [0][0][1][1].rotation = 0;
      this.block [0][0][1][1].twobytwo = true;



      //--

      this.score[1] = [];
      this.score[1][0] = 0;

      this.block [1] = []; 
      this.block [1][0] = [];
      this.block [1][0][0] = [];
      
      this.block [1][0][0][0] = Object.create(block); 
      this.block [1][0][0][1] = Object.create(block); 

      this.block [1][0][0][0].x = 0;
      this.block [1][0][0][0].y = 0;
      this.block [1][0][0][0].z = 2;
      this.block [1][0][0][0].rotation = 0;
      this.block [1][0][0][0].twobytwo = true;

      this.block [1][0][0][1].x = 2;
      this.block [1][0][0][1].y = 0;
      this.block [1][0][0][1].z = 2;
      this.block [1][0][0][1].rotation = 0;
      this.block [1][0][0][1].twobytwo = true;

      this.block [1][0][1] = [];
      
      this.block [1][0][1][0] = Object.create(block); 
      this.block [1][0][1][1] = Object.create(block); 

      this.block [1][0][1][0].x = 0;
      this.block [1][0][1][0].y = 0;
      this.block [1][0][1][0].z = 2;
      this.block [1][0][1][0].rotation = 0;
      this.block [1][0][1][0].twobytwo = true;

      this.block [1][0][1][1].x = 3;
      this.block [1][0][1][1].y = 0;
      this.block [1][0][1][1].z = 2;
      this.block [1][0][1][1].rotation = 0;
      this.block [1][0][1][1].twobytwo = true;



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
