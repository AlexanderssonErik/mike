let colorMatchLevel = {
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  redPixel: [],   
  greenPixel: [],  
  bluePixel: [],
  color: [],
  currentLevelCorrectPixel : [],

  notActiveAnymore : function(){
    basePlane.disposeMesh();        
  },
 
  showAllBlocks(){
    console.log("this.level" + this.level)
    if(this.level == 0){
      return true;
    }
    return false;
  },   
  timeOutOffset(){
    if(this.level == 0 || this.level == 1){
      return 6000;
    }
    return 5000;
  }, 
  timeOutProportion(){
    if(this.level == 0 || this.level == 1){
      return 4000;
    }
    return 3000;
  } ,


  setLevel : function(level, difficulty){
    this.level = level;
    this.difficulty = difficulty;
    this.initLevel();
    this.new();
  },
  win : function(){
    return this.score [this.level][this.difficulty]++;
  },
  getScore : function(level, difficulty){
    return this.score [level][difficulty];
  }, 
  new : function (){
    this.color = [];

    for(let i = 0; i < this.block [this.level][this.difficulty][ this.stage].length; i++){
      let color = Math.floor(Math.random()*3);

      if(color == 0){
        this.color[i] = globalWorldColor.red;
        algoBlock.setAllLed( this.block [this.level][this.difficulty][ this.stage][i], globalWorldColor.red, false);
      }else if(color == 1){
        this.color[i] = globalWorldColor.green;
        algoBlock.setAllLed( this.block [this.level][this.difficulty][ this.stage][i], globalWorldColor.green, false);
      }else{
        this.color[i] = globalWorldColor.blue;
        algoBlock.setAllLed( this.block [this.level][this.difficulty][ this.stage][i], globalWorldColor.blue, false);
      }

      


    }

    this.currentLevelCorrectPixel = algoBlockPixel.create(this.block [this.level][this.difficulty][ this.stage]); 


    

    algoBlock.clearLed(this.block [this.level][this.difficulty][ this.stage]);

    colorMatch.clear();


  },
  initLevel : function(){  



    basePlane.renderFlat([1.5, 0.5, 1.5], [0.5, 4.5, 8.5], [4,2,4], [2,6,2], [globalWorldColor.blue, globalWorldColor.green, globalWorldColor.red] );

  },
  getBlock: function(){

    return this.block [this.level][this.difficulty][ this.stage];
  },
 init: function(){

      this.rowColumnCount[0] = 6;
      this.rowColumnCount[1] = 6;
      this.rowColumnCount[2] = 6;
      this.rowColumnCount[3] = 6;
      this.rowColumnCount[4] = 4;

/*
time out 6 + 4, all
0 
  0 one block
  1 two block
  2 three block
  3 four block
  4 five block

time out 6 + 4, one by one
1 
  0 one block
  1 two block
  2 three block
  3 four block
  4 five block

time out 4 + 2, one by one
2 
  0 one block
  1 two block
  2 three block
  3 four block
  4 five block

shape time out 4 + 2, one by one
3 
  0 one block
  1 two block
  2 three block
  3 four block
  4 five block



*/
      //--

      //0
      //--
      this.score[0] = [];
      this.block [0] = []; 



//0.0
//-------------------------
      this.score[0][0] = 0;
      this.block[0][0] = [];
      this.block[0][0][0] = [];
      this.block [0][0][0][0] =  Object.create(block);
      this.block [0][0][0][0].x = 8;
      this.block [0][0][0][0].y = 0;
      this.block [0][0][0][0].z = 4; 
      this.block [0][0][0][0].rotation = 0;
      this.block [0][0][0][0].twobytwo = true;
      this.block [0][0][0][0].ledALeft = 0;
      this.block [0][0][0][0].ledARight = 0;
      this.block [0][0][0][0].ledBLeft = 0;
      this.block [0][0][0][0].ledBRight = 0;

//0.1
//-------------------------
this.score[0][1] = 0;
this.block[0][1] = [];
this.block[0][1][0] = [];
this.block [0][1][0][0] =  Object.create(block);
this.block [0][1][0][0].x = 8;
this.block [0][1][0][0].y = 0;
this.block [0][1][0][0].z = 5;
this.block [0][1][0][0].rotation = 0;
this.block [0][1][0][0].twobytwo = true;
this.block [0][1][0][0].ledALeft = 0;
this.block [0][1][0][0].ledARight = 0;
this.block [0][1][0][0].ledBLeft = 0;
this.block [0][1][0][0].ledBRight = 0;
this.block [0][1][0][1] =  Object.create(block);
this.block [0][1][0][1].x = 8;
this.block [0][1][0][1].y = 0;
this.block [0][1][0][1].z = 3;
this.block [0][1][0][1].rotation = 0;
this.block [0][1][0][1].twobytwo = true;
this.block [0][1][0][1].ledALeft = 0;
this.block [0][1][0][1].ledARight = 0;
this.block [0][1][0][1].ledBLeft = 0;
this.block [0][1][0][1].ledBRight = 0;

//0.2
//-------------------------

this.score[0][2] = 0;
 this.block[0][2] = [];
 this.block[0][2][0] = [];
 this.block [0][2][0][0] =  Object.create(block);
 this.block [0][2][0][0].x = 8;
 this.block [0][2][0][0].y = 0;
 this.block [0][2][0][0].z = 6;
 this.block [0][2][0][0].rotation = 0;
 this.block [0][2][0][0].twobytwo = true;
 this.block [0][2][0][0].ledALeft = 0;
 this.block [0][2][0][0].ledARight = 0;
 this.block [0][2][0][0].ledBLeft = 0;
 this.block [0][2][0][0].ledBRight = 0;
 this.block [0][2][0][1] =  Object.create(block);
 this.block [0][2][0][1].x = 8;
 this.block [0][2][0][1].y = 0;
 this.block [0][2][0][1].z = 4;
 this.block [0][2][0][1].rotation = 0;
 this.block [0][2][0][1].twobytwo = true;
 this.block [0][2][0][1].ledALeft = 0;
 this.block [0][2][0][1].ledARight = 0;
 this.block [0][2][0][1].ledBLeft = 0;
 this.block [0][2][0][1].ledBRight = 0;
 this.block [0][2][0][2] =  Object.create(block);
 this.block [0][2][0][2].x = 9;
 this.block [0][2][0][2].y = 0;
 this.block [0][2][0][2].z = 2;
 this.block [0][2][0][2].rotation = 3;
 this.block [0][2][0][2].twobytwo = true;
 this.block [0][2][0][2].ledALeft = 0;
 this.block [0][2][0][2].ledARight = 0;
 this.block [0][2][0][2].ledBLeft = 0;
 this.block [0][2][0][2].ledBRight = 0;

//0.3
//-------------------------

 this.score[0][3] = 0;
 this.block[0][3] = [];
 this.block[0][3][0] = [];
 this.block [0][3][0][0] =  Object.create(block);
 this.block [0][3][0][0].x = 9;
 this.block [0][3][0][0].y = 0;
 this.block [0][3][0][0].z = 7;
 this.block [0][3][0][0].rotation = 3;
 this.block [0][3][0][0].twobytwo = true;
 this.block [0][3][0][0].ledALeft = 0;
 this.block [0][3][0][0].ledARight = 0;
 this.block [0][3][0][0].ledBLeft = 0;
 this.block [0][3][0][0].ledBRight = 0;
 this.block [0][3][0][1] =  Object.create(block);
 this.block [0][3][0][1].x = 9;
 this.block [0][3][0][1].y = 0;
 this.block [0][3][0][1].z = 6;
 this.block [0][3][0][1].rotation = 2;
 this.block [0][3][0][1].twobytwo = true;
 this.block [0][3][0][1].ledALeft = 0;
 this.block [0][3][0][1].ledARight = 0;
 this.block [0][3][0][1].ledBLeft = 0;
 this.block [0][3][0][1].ledBRight = 0;
 this.block [0][3][0][2] =  Object.create(block);
 this.block [0][3][0][2].x = 9;
 this.block [0][3][0][2].y = 0;
 this.block [0][3][0][2].z = 3;
 this.block [0][3][0][2].rotation = 3;
 this.block [0][3][0][2].twobytwo = true;
 this.block [0][3][0][2].ledALeft = 0;
 this.block [0][3][0][2].ledARight = 0;
 this.block [0][3][0][2].ledBLeft = 0;
 this.block [0][3][0][2].ledBRight = 0;
 this.block [0][3][0][3] =  Object.create(block);
 this.block [0][3][0][3].x = 8;
 this.block [0][3][0][3].y = 0;
 this.block [0][3][0][3].z = 1;
 this.block [0][3][0][3].rotation = 0;
 this.block [0][3][0][3].twobytwo = true;
 this.block [0][3][0][3].ledALeft = 0;
 this.block [0][3][0][3].ledARight = 0;
 this.block [0][3][0][3].ledBLeft = 0;
 this.block [0][3][0][3].ledBRight = 0;

//0.4
//-------------------------

 this.score[0][4] = 0;
 this.block[0][4] = [];
 this.block[0][4][0] = [];
 this.block [0][4][0][0] =  Object.create(block);
 this.block [0][4][0][0].x = 9;
 this.block [0][4][0][0].y = 0;
 this.block [0][4][0][0].z = 8;
 this.block [0][4][0][0].rotation = 3;
 this.block [0][4][0][0].twobytwo = true;
 this.block [0][4][0][0].ledALeft = 0;
 this.block [0][4][0][0].ledARight = 0;
 this.block [0][4][0][0].ledBLeft = 0;
 this.block [0][4][0][0].ledBRight = 0;
 this.block [0][4][0][1] =  Object.create(block);
 this.block [0][4][0][1].x = 9;
 this.block [0][4][0][1].y = 0;
 this.block [0][4][0][1].z = 7;
 this.block [0][4][0][1].rotation = 2;
 this.block [0][4][0][1].twobytwo = true;
 this.block [0][4][0][1].ledALeft = 0;
 this.block [0][4][0][1].ledARight = 0;
 this.block [0][4][0][1].ledBLeft = 0;
 this.block [0][4][0][1].ledBRight = 0;
 this.block [0][4][0][2] =  Object.create(block);
 this.block [0][4][0][2].x = 9;
 this.block [0][4][0][2].y = 0;
 this.block [0][4][0][2].z = 4;
 this.block [0][4][0][2].rotation = 3;
 this.block [0][4][0][2].twobytwo = true;
 this.block [0][4][0][2].ledALeft = 0;
 this.block [0][4][0][2].ledARight = 0;
 this.block [0][4][0][2].ledBLeft = 0;
 this.block [0][4][0][2].ledBRight = 0;
 this.block [0][4][0][3] =  Object.create(block);
 this.block [0][4][0][3].x = 8;
 this.block [0][4][0][3].y = 0;
 this.block [0][4][0][3].z = 2;
 this.block [0][4][0][3].rotation = 0;
 this.block [0][4][0][3].twobytwo = true;
 this.block [0][4][0][3].ledALeft = 0;
 this.block [0][4][0][3].ledARight = 0;
 this.block [0][4][0][3].ledBLeft = 0;
 this.block [0][4][0][3].ledBRight = 0;
 this.block [0][4][0][4] =  Object.create(block);
 this.block [0][4][0][4].x = 8;
 this.block [0][4][0][4].y = 0;
 this.block [0][4][0][4].z = 0;
 this.block [0][4][0][4].rotation = 0;
 this.block [0][4][0][4].twobytwo = true;
 this.block [0][4][0][4].ledALeft = 0;
 this.block [0][4][0][4].ledARight = 0;
 this.block [0][4][0][4].ledBLeft = 0;
 this.block [0][4][0][4].ledBRight = 0;



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

//1.3
//-------------------------
this.score[1][3] = 0;
this.block[1][3] = this.block[0][3];

//1.4
//-------------------------
this.score[1][4] = 0;
this.block[1][4] = this.block[0][4];

//-------------------------


///////////////////////////////////////////////////////////////////////////////////////////////

//2
//--
this.score[2] = [];
this.block [2] = []; 

//2.0
//-------------------------
this.score[2][0] = 0;
this.block[2][0] = this.block[0][0];


//2.1
//-------------------------
this.score[2][1] = 0;
this.block[2][1] = this.block[0][1];

//2.2
//-------------------------
this.score[2][2] = 0;
this.block[2][2] = this.block[0][2];

//2.3
//-------------------------
this.score[2][3] = 0;
this.block[2][3] = this.block[0][3];

//2.4
//-------------------------
this.score[2][4] = 0;
this.block[2][4] = this.block[0][4];

//-------------------------

///////////////////////////////////////////////////////////////////////////////////////////////

//3
//--
this.score[3] = [];
this.block [3] = []; 

//3.0
//-------------------------


this.score[3][0] = 0;
this.block[3][0] = [];
this.block[3][0][0] = [];
this.block [3][0][0][0] =  Object.create(block);
this.block [3][0][0][0].x = 9;
this.block [3][0][0][0].y = 0;
this.block [3][0][0][0].z = 3;
this.block [3][0][0][0].rotation = 3;
this.block [3][0][0][0].twobytwo = false;
this.block [3][0][0][0].ledALeft = 0;
this.block [3][0][0][0].ledARight = 0;
this.block [3][0][0][0].ledBLeft = 0;
this.block [3][0][0][0].ledBRight = 0;
this.block [3][0][0][1] =  Object.create(block);
this.block [3][0][0][1].x = 6;
this.block [3][0][0][1].y = 0;
this.block [3][0][0][1].z = 5;
this.block [3][0][0][1].rotation = 0;
this.block [3][0][0][1].twobytwo = true;
this.block [3][0][0][1].ledALeft = 0;
this.block [3][0][0][1].ledARight = 0;
this.block [3][0][0][1].ledBLeft = 0;
this.block [3][0][0][1].ledBRight = 0;
this.block [3][0][0][2] =  Object.create(block);
this.block [3][0][0][2].x = 6;
this.block [3][0][0][2].y = 0;
this.block [3][0][0][2].z = 3;
this.block [3][0][0][2].rotation = 0;
this.block [3][0][0][2].twobytwo = true;
this.block [3][0][0][2].ledALeft = 0;
this.block [3][0][0][2].ledARight = 0;
this.block [3][0][0][2].ledBLeft = 0;
this.block [3][0][0][2].ledBRight = 0;

//3.1
//-------------------------

this.score[3][1] = 0;
this.block[3][1] = [];
this.block[3][1][0] = [];
this.block [3][1][0][0] =  Object.create(block);
this.block [3][1][0][0].x = 9;
this.block [3][1][0][0].y = 0;
this.block [3][1][0][0].z = 3;
this.block [3][1][0][0].rotation = 3;
this.block [3][1][0][0].twobytwo = false;
this.block [3][1][0][0].ledALeft = 0;
this.block [3][1][0][0].ledARight = 0;
this.block [3][1][0][0].ledBLeft = 0;
this.block [3][1][0][0].ledBRight = 0;
this.block [3][1][0][1] =  Object.create(block);
this.block [3][1][0][1].x = 6;
this.block [3][1][0][1].y = 0;
this.block [3][1][0][1].z = 5;
this.block [3][1][0][1].rotation = 0;
this.block [3][1][0][1].twobytwo = true;
this.block [3][1][0][1].ledALeft = 0;
this.block [3][1][0][1].ledARight = 0;
this.block [3][1][0][1].ledBLeft = 0;
this.block [3][1][0][1].ledBRight = 0;
this.block [3][1][0][2] =  Object.create(block);
this.block [3][1][0][2].x = 6;
this.block [3][1][0][2].y = 0;
this.block [3][1][0][2].z = 3;
this.block [3][1][0][2].rotation = 0;
this.block [3][1][0][2].twobytwo = true;
this.block [3][1][0][2].ledALeft = 0;
this.block [3][1][0][2].ledARight = 0;
this.block [3][1][0][2].ledBLeft = 0;
this.block [3][1][0][2].ledBRight = 0;
this.block [3][1][0][3] =  Object.create(block);
this.block [3][1][0][3].x = 9;
this.block [3][1][0][3].y = 1;
this.block [3][1][0][3].z = 4;
this.block [3][1][0][3].rotation = 2;
this.block [3][1][0][3].twobytwo = true;
this.block [3][1][0][3].ledALeft = 0;
this.block [3][1][0][3].ledARight = 0;
this.block [3][1][0][3].ledBLeft = 0;
this.block [3][1][0][3].ledBRight = 0;
this.block [3][1][0][4] =  Object.create(block);
this.block [3][1][0][4].x = 9;
this.block [3][1][0][4].y = 1;
this.block [3][1][0][4].z = 5;
this.block [3][1][0][4].rotation = 3;
this.block [3][1][0][4].twobytwo = true;
this.block [3][1][0][4].ledALeft = 0;
this.block [3][1][0][4].ledARight = 0;
this.block [3][1][0][4].ledBLeft = 0;
this.block [3][1][0][4].ledBRight = 0;
this.block [3][1][0][5] =  Object.create(block);
this.block [3][1][0][5].x = 7;
this.block [3][1][0][5].y = 1;
this.block [3][1][0][5].z = 3;
this.block [3][1][0][5].rotation = 3;
this.block [3][1][0][5].twobytwo = false;
this.block [3][1][0][5].ledALeft = 0;
this.block [3][1][0][5].ledARight = 0;
this.block [3][1][0][5].ledBLeft = 0;
this.block [3][1][0][5].ledBRight = 0;

//3.2
//-------------------------

this.score[3][2] = 0;
this.block[3][2] = [];
this.block[3][2][0] = [];
this.block [3][2][0][0] =  Object.create(block);
this.block [3][2][0][0].x = 9;
this.block [3][2][0][0].y = 0;
this.block [3][2][0][0].z = 3;
this.block [3][2][0][0].rotation = 3;
this.block [3][2][0][0].twobytwo = false;
this.block [3][2][0][0].ledALeft = 0;
this.block [3][2][0][0].ledARight = 0;
this.block [3][2][0][0].ledBLeft = 0;
this.block [3][2][0][0].ledBRight = 0;
this.block [3][2][0][1] =  Object.create(block);
this.block [3][2][0][1].x = 6;
this.block [3][2][0][1].y = 0;
this.block [3][2][0][1].z = 5;
this.block [3][2][0][1].rotation = 0;
this.block [3][2][0][1].twobytwo = true;
this.block [3][2][0][1].ledALeft = 0;
this.block [3][2][0][1].ledARight = 0;
this.block [3][2][0][1].ledBLeft = 0;
this.block [3][2][0][1].ledBRight = 0;
this.block [3][2][0][2] =  Object.create(block);
this.block [3][2][0][2].x = 6;
this.block [3][2][0][2].y = 0;
this.block [3][2][0][2].z = 3;
this.block [3][2][0][2].rotation = 0;
this.block [3][2][0][2].twobytwo = true;
this.block [3][2][0][2].ledALeft = 0;
this.block [3][2][0][2].ledARight = 0;
this.block [3][2][0][2].ledBLeft = 0;
this.block [3][2][0][2].ledBRight = 0;
this.block [3][2][0][3] =  Object.create(block);
this.block [3][2][0][3].x = 9;
this.block [3][2][0][3].y = 1;
this.block [3][2][0][3].z = 4;
this.block [3][2][0][3].rotation = 2;
this.block [3][2][0][3].twobytwo = true;
this.block [3][2][0][3].ledALeft = 0;
this.block [3][2][0][3].ledARight = 0;
this.block [3][2][0][3].ledBLeft = 0;
this.block [3][2][0][3].ledBRight = 0;
this.block [3][2][0][4] =  Object.create(block);
this.block [3][2][0][4].x = 9;
this.block [3][2][0][4].y = 1;
this.block [3][2][0][4].z = 5;
this.block [3][2][0][4].rotation = 3;
this.block [3][2][0][4].twobytwo = true;
this.block [3][2][0][4].ledALeft = 0;
this.block [3][2][0][4].ledARight = 0;
this.block [3][2][0][4].ledBLeft = 0;
this.block [3][2][0][4].ledBRight = 0;
this.block [3][2][0][5] =  Object.create(block);
this.block [3][2][0][5].x = 7;
this.block [3][2][0][5].y = 1;
this.block [3][2][0][5].z = 3;
this.block [3][2][0][5].rotation = 3;
this.block [3][2][0][5].twobytwo = false;
this.block [3][2][0][5].ledALeft = 0;
this.block [3][2][0][5].ledARight = 0;
this.block [3][2][0][5].ledBLeft = 0;
this.block [3][2][0][5].ledBRight = 0;
this.block [3][2][0][6] =  Object.create(block);
this.block [3][2][0][6].x = 9;
this.block [3][2][0][6].y = 2;
this.block [3][2][0][6].z = 3;
this.block [3][2][0][6].rotation = 3;
this.block [3][2][0][6].twobytwo = false;
this.block [3][2][0][6].ledALeft = 0;
this.block [3][2][0][6].ledARight = 0;
this.block [3][2][0][6].ledBLeft = 0;
this.block [3][2][0][6].ledBRight = 0;

//3.3
//-------------------------

this.score[3][3] = 0;
this.block[3][3] = [];
this.block[3][3][0] = [];
this.block [3][3][0][0] =  Object.create(block);
this.block [3][3][0][0].x = 9;
this.block [3][3][0][0].y = 0;
this.block [3][3][0][0].z = 3;
this.block [3][3][0][0].rotation = 3;
this.block [3][3][0][0].twobytwo = false;
this.block [3][3][0][0].ledALeft = 0;
this.block [3][3][0][0].ledARight = 0;
this.block [3][3][0][0].ledBLeft = 0;
this.block [3][3][0][0].ledBRight = 0;
this.block [3][3][0][1] =  Object.create(block);
this.block [3][3][0][1].x = 6;
this.block [3][3][0][1].y = 0;
this.block [3][3][0][1].z = 5;
this.block [3][3][0][1].rotation = 0;
this.block [3][3][0][1].twobytwo = true;
this.block [3][3][0][1].ledALeft = 0;
this.block [3][3][0][1].ledARight = 0;
this.block [3][3][0][1].ledBLeft = 0;
this.block [3][3][0][1].ledBRight = 0;
this.block [3][3][0][2] =  Object.create(block);
this.block [3][3][0][2].x = 6;
this.block [3][3][0][2].y = 0;
this.block [3][3][0][2].z = 3;
this.block [3][3][0][2].rotation = 0;
this.block [3][3][0][2].twobytwo = true;
this.block [3][3][0][2].ledALeft = 0;
this.block [3][3][0][2].ledARight = 0;
this.block [3][3][0][2].ledBLeft = 0;
this.block [3][3][0][2].ledBRight = 0;
this.block [3][3][0][3] =  Object.create(block);
this.block [3][3][0][3].x = 9;
this.block [3][3][0][3].y = 1;
this.block [3][3][0][3].z = 4;
this.block [3][3][0][3].rotation = 2;
this.block [3][3][0][3].twobytwo = true;
this.block [3][3][0][3].ledALeft = 0;
this.block [3][3][0][3].ledARight = 0;
this.block [3][3][0][3].ledBLeft = 0;
this.block [3][3][0][3].ledBRight = 0;
this.block [3][3][0][4] =  Object.create(block);
this.block [3][3][0][4].x = 9;
this.block [3][3][0][4].y = 1;
this.block [3][3][0][4].z = 5;
this.block [3][3][0][4].rotation = 3;
this.block [3][3][0][4].twobytwo = true;
this.block [3][3][0][4].ledALeft = 0;
this.block [3][3][0][4].ledARight = 0;
this.block [3][3][0][4].ledBLeft = 0;
this.block [3][3][0][4].ledBRight = 0;
this.block [3][3][0][5] =  Object.create(block);
this.block [3][3][0][5].x = 7;
this.block [3][3][0][5].y = 1;
this.block [3][3][0][5].z = 3;
this.block [3][3][0][5].rotation = 3;
this.block [3][3][0][5].twobytwo = false;
this.block [3][3][0][5].ledALeft = 0;
this.block [3][3][0][5].ledARight = 0;
this.block [3][3][0][5].ledBLeft = 0;
this.block [3][3][0][5].ledBRight = 0;
this.block [3][3][0][6] =  Object.create(block);
this.block [3][3][0][6].x = 9;
this.block [3][3][0][6].y = 2;
this.block [3][3][0][6].z = 3;
this.block [3][3][0][6].rotation = 3;
this.block [3][3][0][6].twobytwo = false;
this.block [3][3][0][6].ledALeft = 0;
this.block [3][3][0][6].ledARight = 0;
this.block [3][3][0][6].ledBLeft = 0;
this.block [3][3][0][6].ledBRight = 0;
this.block [3][3][0][7] =  Object.create(block);
this.block [3][3][0][7].x = 6;
this.block [3][3][0][7].y = 2;
this.block [3][3][0][7].z = 3;
this.block [3][3][0][7].rotation = 0;
this.block [3][3][0][7].twobytwo = true;
this.block [3][3][0][7].ledALeft = 0;
this.block [3][3][0][7].ledARight = 0;
this.block [3][3][0][7].ledBLeft = 0;
this.block [3][3][0][7].ledBRight = 0;

//3.4
//-------------------------


this.score[3][4] = 0;
this.block[3][4] = [];
this.block[3][4][0] = [];
this.block [3][4][0][0] =  Object.create(block);
this.block [3][4][0][0].x = 9;
this.block [3][4][0][0].y = 0;
this.block [3][4][0][0].z = 3;
this.block [3][4][0][0].rotation = 3;
this.block [3][4][0][0].twobytwo = false;
this.block [3][4][0][0].ledALeft = 0;
this.block [3][4][0][0].ledARight = 0;
this.block [3][4][0][0].ledBLeft = 0;
this.block [3][4][0][0].ledBRight = 0;
this.block [3][4][0][1] =  Object.create(block);
this.block [3][4][0][1].x = 6;
this.block [3][4][0][1].y = 0;
this.block [3][4][0][1].z = 5;
this.block [3][4][0][1].rotation = 0;
this.block [3][4][0][1].twobytwo = true;
this.block [3][4][0][1].ledALeft = 0;
this.block [3][4][0][1].ledARight = 0;
this.block [3][4][0][1].ledBLeft = 0;
this.block [3][4][0][1].ledBRight = 0;
this.block [3][4][0][2] =  Object.create(block);
this.block [3][4][0][2].x = 6;
this.block [3][4][0][2].y = 0;
this.block [3][4][0][2].z = 3;
this.block [3][4][0][2].rotation = 0;
this.block [3][4][0][2].twobytwo = true;
this.block [3][4][0][2].ledALeft = 0;
this.block [3][4][0][2].ledARight = 0;
this.block [3][4][0][2].ledBLeft = 0;
this.block [3][4][0][2].ledBRight = 0;
this.block [3][4][0][3] =  Object.create(block);
this.block [3][4][0][3].x = 9;
this.block [3][4][0][3].y = 1;
this.block [3][4][0][3].z = 4;
this.block [3][4][0][3].rotation = 2;
this.block [3][4][0][3].twobytwo = true;
this.block [3][4][0][3].ledALeft = 0;
this.block [3][4][0][3].ledARight = 0;
this.block [3][4][0][3].ledBLeft = 0;
this.block [3][4][0][3].ledBRight = 0;
this.block [3][4][0][4] =  Object.create(block);
this.block [3][4][0][4].x = 9;
this.block [3][4][0][4].y = 1;
this.block [3][4][0][4].z = 5;
this.block [3][4][0][4].rotation = 3;
this.block [3][4][0][4].twobytwo = true;
this.block [3][4][0][4].ledALeft = 0;
this.block [3][4][0][4].ledARight = 0;
this.block [3][4][0][4].ledBLeft = 0;
this.block [3][4][0][4].ledBRight = 0;
this.block [3][4][0][5] =  Object.create(block);
this.block [3][4][0][5].x = 7;
this.block [3][4][0][5].y = 1;
this.block [3][4][0][5].z = 3;
this.block [3][4][0][5].rotation = 3;
this.block [3][4][0][5].twobytwo = false;
this.block [3][4][0][5].ledALeft = 0;
this.block [3][4][0][5].ledARight = 0;
this.block [3][4][0][5].ledBLeft = 0;
this.block [3][4][0][5].ledBRight = 0;
this.block [3][4][0][6] =  Object.create(block);
this.block [3][4][0][6].x = 9;
this.block [3][4][0][6].y = 2;
this.block [3][4][0][6].z = 3;
this.block [3][4][0][6].rotation = 3;
this.block [3][4][0][6].twobytwo = false;
this.block [3][4][0][6].ledALeft = 0;
this.block [3][4][0][6].ledARight = 0;
this.block [3][4][0][6].ledBLeft = 0;
this.block [3][4][0][6].ledBRight = 0;
this.block [3][4][0][7] =  Object.create(block);
this.block [3][4][0][7].x = 6;
this.block [3][4][0][7].y = 2;
this.block [3][4][0][7].z = 3;
this.block [3][4][0][7].rotation = 0;
this.block [3][4][0][7].twobytwo = true;
this.block [3][4][0][7].ledALeft = 0;
this.block [3][4][0][7].ledARight = 0;
this.block [3][4][0][7].ledBLeft = 0;
this.block [3][4][0][7].ledBRight = 0;
this.block [3][4][0][8] =  Object.create(block);
this.block [3][4][0][8].x = 7;
this.block [3][4][0][8].y = 2;
this.block [3][4][0][8].z = 5;
this.block [3][4][0][8].rotation = 3;
this.block [3][4][0][8].twobytwo = true;
this.block [3][4][0][8].ledALeft = 0;
this.block [3][4][0][8].ledARight = 0;
this.block [3][4][0][8].ledBLeft = 0;
this.block [3][4][0][8].ledBRight = 0;

///////////////////////////////////////////////////////////////////////////////////////////////

//4
//--
this.score[4] = [];
this.block [4] = []; 

//4.0
//-------------------------
this.score[4][0] = 0;
this.block[4][0] = [];
this.block[4][0][0] = [];
this.block [4][0][0][0] =  Object.create(block);
this.block [4][0][0][0].x = 9;
this.block [4][0][0][0].y = 0;
this.block [4][0][0][0].z = 3;
this.block [4][0][0][0].rotation = 3;
this.block [4][0][0][0].twobytwo = false;
this.block [4][0][0][0].ledALeft = 0;
this.block [4][0][0][0].ledARight = 0;
this.block [4][0][0][0].ledBLeft = 0;
this.block [4][0][0][0].ledBRight = 0;
this.block [4][0][0][1] =  Object.create(block);
this.block [4][0][0][1].x = 6;
this.block [4][0][0][1].y = 1;
this.block [4][0][0][1].z = 4;
this.block [4][0][0][1].rotation = 0;
this.block [4][0][0][1].twobytwo = false;
this.block [4][0][0][1].ledALeft = 0;
this.block [4][0][0][1].ledARight = 0;
this.block [4][0][0][1].ledBLeft = 0;
this.block [4][0][0][1].ledBRight = 0;
this.block [4][0][0][2] =  Object.create(block);
this.block [4][0][0][2].x = 8;
this.block [4][0][0][2].y = 1;
this.block [4][0][0][2].z = 2;
this.block [4][0][0][2].rotation = 0;
this.block [4][0][0][2].twobytwo = true;
this.block [4][0][0][2].ledALeft = 0;
this.block [4][0][0][2].ledARight = 0;
this.block [4][0][0][2].ledBLeft = 0;
this.block [4][0][0][2].ledBRight = 0;
this.block [4][0][0][3] =  Object.create(block);
this.block [4][0][0][3].x = 9;
this.block [4][0][0][3].y = 1;
this.block [4][0][0][3].z = 6;
this.block [4][0][0][3].rotation = 3;
this.block [4][0][0][3].twobytwo = true;
this.block [4][0][0][3].ledALeft = 0;
this.block [4][0][0][3].ledARight = 0;
this.block [4][0][0][3].ledBLeft = 0;
this.block [4][0][0][3].ledBRight = 0;
this.block [4][0][0][4] =  Object.create(block);
this.block [4][0][0][4].x = 6;
this.block [4][0][0][4].y = 2;
this.block [4][0][0][4].z = 4;
this.block [4][0][0][4].rotation = 0;
this.block [4][0][0][4].twobytwo = true;
this.block [4][0][0][4].ledALeft = 0;
this.block [4][0][0][4].ledARight = 0;
this.block [4][0][0][4].ledBLeft = 0;
this.block [4][0][0][4].ledBRight = 0;


//4.1
//-------------------------

this.score[4][1] = 0;
this.block[4][1] = [];
this.block[4][1][0] = [];
this.block [4][1][0][0] =  Object.create(block);
this.block [4][1][0][0].x = 9;
this.block [4][1][0][0].y = 0;
this.block [4][1][0][0].z = 3;
this.block [4][1][0][0].rotation = 3;
this.block [4][1][0][0].twobytwo = false;
this.block [4][1][0][0].ledALeft = 0;
this.block [4][1][0][0].ledARight = 0;
this.block [4][1][0][0].ledBLeft = 0;
this.block [4][1][0][0].ledBRight = 0;
this.block [4][1][0][1] =  Object.create(block);
this.block [4][1][0][1].x = 9;
this.block [4][1][0][1].y = 1;
this.block [4][1][0][1].z = 1;
this.block [4][1][0][1].rotation = 3;
this.block [4][1][0][1].twobytwo = false;
this.block [4][1][0][1].ledALeft = 0;
this.block [4][1][0][1].ledARight = 0;
this.block [4][1][0][1].ledBLeft = 0;
this.block [4][1][0][1].ledBRight = 0;
this.block [4][1][0][2] =  Object.create(block);
this.block [4][1][0][2].x = 9;
this.block [4][1][0][2].y = 1;
this.block [4][1][0][2].z = 6;
this.block [4][1][0][2].rotation = 3;
this.block [4][1][0][2].twobytwo = true;
this.block [4][1][0][2].ledALeft = 0;
this.block [4][1][0][2].ledARight = 0;
this.block [4][1][0][2].ledBLeft = 0;
this.block [4][1][0][2].ledBRight = 0;
this.block [4][1][0][3] =  Object.create(block);
this.block [4][1][0][3].x = 9;
this.block [4][1][0][3].y = 2;
this.block [4][1][0][3].z = 0;
this.block [4][1][0][3].rotation = 3;
this.block [4][1][0][3].twobytwo = true;
this.block [4][1][0][3].ledALeft = 0;
this.block [4][1][0][3].ledARight = 0;
this.block [4][1][0][3].ledBLeft = 0;
this.block [4][1][0][3].ledBRight = 0;
this.block [4][1][0][4] =  Object.create(block);
this.block [4][1][0][4].x = 8;
this.block [4][1][0][4].y = 2;
this.block [4][1][0][4].z = 3;
this.block [4][1][0][4].rotation = 0;
this.block [4][1][0][4].twobytwo = false;
this.block [4][1][0][4].ledALeft = 0;
this.block [4][1][0][4].ledARight = 0;
this.block [4][1][0][4].ledBLeft = 0;
this.block [4][1][0][4].ledBRight = 0;
this.block [4][1][0][5] =  Object.create(block);
this.block [4][1][0][5].x = 11;
this.block [4][1][0][5].y = 3;
this.block [4][1][0][5].z = 4;
this.block [4][1][0][5].rotation = 2;
this.block [4][1][0][5].twobytwo = true;
this.block [4][1][0][5].ledALeft = 0;
this.block [4][1][0][5].ledARight = 0;
this.block [4][1][0][5].ledBLeft = 0;
this.block [4][1][0][5].ledBRight = 0;


//4.2
//-------------------------

this.score[4][2] = 0;
this.block[4][2] = [];
this.block[4][2][0] = [];
this.block [4][2][0][0] =  Object.create(block);
this.block [4][2][0][0].x = 9;
this.block [4][2][0][0].y = 0;
this.block [4][2][0][0].z = 3;
this.block [4][2][0][0].rotation = 3;
this.block [4][2][0][0].twobytwo = false;
this.block [4][2][0][0].ledALeft = 0;
this.block [4][2][0][0].ledARight = 0;
this.block [4][2][0][0].ledBLeft = 0;
this.block [4][2][0][0].ledBRight = 0;
this.block [4][2][0][1] =  Object.create(block);
this.block [4][2][0][1].x = 9;
this.block [4][2][0][1].y = 1;
this.block [4][2][0][1].z = 1;
this.block [4][2][0][1].rotation = 3;
this.block [4][2][0][1].twobytwo = false;
this.block [4][2][0][1].ledALeft = 0;
this.block [4][2][0][1].ledARight = 0;
this.block [4][2][0][1].ledBLeft = 0;
this.block [4][2][0][1].ledBRight = 0;
this.block [4][2][0][2] =  Object.create(block);
this.block [4][2][0][2].x = 9;
this.block [4][2][0][2].y = 1;
this.block [4][2][0][2].z = 6;
this.block [4][2][0][2].rotation = 3;
this.block [4][2][0][2].twobytwo = true;
this.block [4][2][0][2].ledALeft = 0;
this.block [4][2][0][2].ledARight = 0;
this.block [4][2][0][2].ledBLeft = 0;
this.block [4][2][0][2].ledBRight = 0;
this.block [4][2][0][3] =  Object.create(block);
this.block [4][2][0][3].x = 9;
this.block [4][2][0][3].y = 2;
this.block [4][2][0][3].z = 0;
this.block [4][2][0][3].rotation = 3;
this.block [4][2][0][3].twobytwo = true;
this.block [4][2][0][3].ledALeft = 0;
this.block [4][2][0][3].ledARight = 0;
this.block [4][2][0][3].ledBLeft = 0;
this.block [4][2][0][3].ledBRight = 0;
this.block [4][2][0][4] =  Object.create(block);
this.block [4][2][0][4].x = 8;
this.block [4][2][0][4].y = 2;
this.block [4][2][0][4].z = 3;
this.block [4][2][0][4].rotation = 0;
this.block [4][2][0][4].twobytwo = false;
this.block [4][2][0][4].ledALeft = 0;
this.block [4][2][0][4].ledARight = 0;
this.block [4][2][0][4].ledBLeft = 0;
this.block [4][2][0][4].ledBRight = 0;
this.block [4][2][0][5] =  Object.create(block);
this.block [4][2][0][5].x = 8;
this.block [4][2][0][5].y = 2;
this.block [4][2][0][5].z = 5;
this.block [4][2][0][5].rotation = 0;
this.block [4][2][0][5].twobytwo = true;
this.block [4][2][0][5].ledALeft = 0;
this.block [4][2][0][5].ledARight = 0;
this.block [4][2][0][5].ledBLeft = 0;
this.block [4][2][0][5].ledBRight = 0;
this.block [4][2][0][6] =  Object.create(block);
this.block [4][2][0][6].x = 7;
this.block [4][2][0][6].y = 3;
this.block [4][2][0][6].z = 3;
this.block [4][2][0][6].rotation = 0;
this.block [4][2][0][6].twobytwo = true;
this.block [4][2][0][6].ledALeft = 0;
this.block [4][2][0][6].ledARight = 0;
this.block [4][2][0][6].ledBLeft = 0;
this.block [4][2][0][6].ledBRight = 0;
this.block [4][2][0][7] =  Object.create(block);
this.block [4][2][0][7].x = 11;
this.block [4][2][0][7].y = 3;
this.block [4][2][0][7].z = 4;
this.block [4][2][0][7].rotation = 2;
this.block [4][2][0][7].twobytwo = true;
this.block [4][2][0][7].ledALeft = 0;
this.block [4][2][0][7].ledARight = 0;
this.block [4][2][0][7].ledBLeft = 0;
this.block [4][2][0][7].ledBRight = 0;



/*
      
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

*/

      //--
/*
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
      this.block [1][0][1][1].twobytwo = true;*/







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

      this.initLevel();
      this.new();

     // this.initLevel(this.block[0][0][0]);

  }
}
