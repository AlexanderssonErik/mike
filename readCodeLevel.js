let readCodeLevel = {
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,

  notActiveAnymore: function(){

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

  }
}
