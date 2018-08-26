let tangramFreeLevel = {
  sideZBlock : [],
  sideXBlock : [],
  sideZPlane : 0,
  sideXPlane : 0,
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  blockPixels : 0,
  projectionPixels : 0,
  notActiveAnymore: function(){

  },
  getSideBlocks : function(){
    return this.sideXBlock [this.level][this.difficulty].concat(this.sideZBlock [this.level][this.difficulty]);
   // return this.sideZBlock [this.level][this.difficulty].concat(this.sideXBlock [this.level][this.difficulty]);
  },
  getSideZBlocks : function(){
    return this.sideZBlock [this.level][this.difficulty];
  },
  getSideXBlocks : function(){
    return this.sideXBlock [this.level][this.difficulty];
  },
  projectAllSides : function(){
    if(this.level == 0 || this.level == 1){
      return false;
    }
    return true;
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
    console.log("level:" + this.level);
    let nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    
    while(nextStage == this.stage){
      nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    }
    this.stage = nextStage;
    //console.log("F1");
    this.initLevel(this.block[this.level][this.difficulty][this.stage]);
    //console.log("F2");
  },

  initLevel : function(blocks){    

    //console.log("G1");
    this.blockPixels = algoBlockPixel.create(blocks);
    //console.log("G2");
    this.projectionPixels = algoProjection.create(this.blockPixels);


    let sideZBlockPixels = algoBlockPixel.create(tangramFreeLevel.getSideZBlocks());
    let sideZBlockProjectionPixels = algoProjection.create(sideZBlockPixels);

    let sideXBlockPixels = algoBlockPixel.create(tangramFreeLevel.getSideXBlocks());
    let sideXBlockProjectionPixels = algoProjection.create(sideXBlockPixels);


    let sideZDiffAndIntersect;
    sideZDiffAndIntersect = algoProjection.differenceAndIntersect( sideZBlockProjectionPixels[1] ,tangramFreeLevel.projectionPixels[1], false);
    this.sideZPlane = sideZDiffAndIntersect[2];

    let sideXDiffAndIntersect;
    sideXDiffAndIntersect = algoProjection.differenceAndIntersect( sideXBlockProjectionPixels[0] ,tangramFreeLevel.projectionPixels[0], false);

    this.sideXPlane = sideXDiffAndIntersect[2];
    //console.log("G3");

   /* if(this.colorCavity()){
      algoProjection.colorCavity(this.projectionPixels[0]);
      algoProjection.colorCavity(this.projectionPixels[1]);
      algoProjection.colorCavity(this.projectionPixels[2]);
    }*/

   /* for(let i = 0; i < this.blockPixels.length; i++){
      console.log("i: " + i + ", x " + this.blockPixels[i].x);
    }*/
  },
 init: function(){

      this.rowColumnCount[0] = 4;
      this.rowColumnCount[1] = 4;
      this.rowColumnCount[2] = 4;
      this.rowColumnCount[3] = 4;
      this.rowColumnCount[4] = 2;
      //--
      /*
      0
      one side one height
     
      0.0  one block
      0.1  two block
      0.2  four blocks
    
      
      1
      one side 3 height
     
      0.0  two block
      0.1  four block
      0.2  six blocks

      2
      two side one height

      2.0 one block
      2.1 two block
      2.2 four blocks 
 

      3 
      two side 3 height
      
      
      3.0 one block
      3.1 two block
      3.2 four blocks 
      3.3  ~8 blocks
      3.4  ~all blocks


      4 
      cavity
      don't show changes
      3.1 one block
      2.2 two block
      2.3 four blocks 
      2.4  ~8 blocks
      2.5  ~all blocks

      */

//sideZBlocks

//0
//---------
      
this.sideZBlock [0] = []; 

//0.0  
//------------------------

this.sideZBlock[0][0] = []

 this.sideZBlock [0][0][0] =  Object.create(block);
 this.sideZBlock [0][0][0].x = 8;
 this.sideZBlock [0][0][0].y = 0;
 this.sideZBlock [0][0][0].z = 1;
 this.sideZBlock [0][0][0].rotation = 1;
 this.sideZBlock [0][0][0].twobytwo = true;

 this.sideZBlock [0][0][1] =  Object.create(block);
 this.sideZBlock [0][0][1].x = 8;
 this.sideZBlock [0][0][1].y = 0;
 this.sideZBlock [0][0][1].z = 3;
 this.sideZBlock [0][0][1].rotation = 1;
 this.sideZBlock [0][0][1].twobytwo = true;

 this.sideZBlock [0][0][2] =  Object.create(block);
 this.sideZBlock [0][0][2].x = 8;
 this.sideZBlock [0][0][2].y = 0;
 this.sideZBlock [0][0][2].z = 7;
 this.sideZBlock [0][0][2].rotation = 1;
 this.sideZBlock [0][0][2].twobytwo = false;


//0.1  
//------------------------
this.sideZBlock[0][1] = this.sideZBlock[0][0]; 


//0.2  
//------------------------
this.sideZBlock[0][2] = this.sideZBlock[0][0]; 


//sideXBlocks
//0
//---------
this.sideXBlock [0] = [];
//0.0  
//------------------------
 this.sideXBlock[0][0] = [];
 //0.1  
//------------------------
this.sideXBlock[0][1] = [];
//0.2  
//------------------------
this.sideXBlock[0][2] = [];

/////////////////////////////////////////////////////////////////////////////

//sideZBlocks

//1
//---------
      
this.sideZBlock [1] = []; 

//1.0  
//------------------------

this.sideZBlock[1][0] = []

 this.sideZBlock [1][0][0] =  Object.create(block);
 this.sideZBlock [1][0][0].x = 8;
 this.sideZBlock [1][0][0].y = 0;
 this.sideZBlock [1][0][0].z = 1;
 this.sideZBlock [1][0][0].rotation = 1;
 this.sideZBlock [1][0][0].twobytwo = true;

 this.sideZBlock [1][0][1] =  Object.create(block);
 this.sideZBlock [1][0][1].x = 8;
 this.sideZBlock [1][0][1].y = 0;
 this.sideZBlock [1][0][1].z = 3;
 this.sideZBlock [1][0][1].rotation = 1;
 this.sideZBlock [1][0][1].twobytwo = true;

 this.sideZBlock [1][0][2] =  Object.create(block);
 this.sideZBlock [1][0][2].x = 8;
 this.sideZBlock [1][0][2].y = 0;
 this.sideZBlock [1][0][2].z = 7;
 this.sideZBlock [1][0][2].rotation = 1;
 this.sideZBlock [1][0][2].twobytwo = false;

 this.sideZBlock [1][0][3] =  Object.create(block);
 this.sideZBlock [1][0][3].x = 8;
 this.sideZBlock [1][0][3].y = 1;
 this.sideZBlock [1][0][3].z = 7;
 this.sideZBlock [1][0][3].rotation = 1;
 this.sideZBlock [1][0][3].twobytwo = true;

 this.sideZBlock [1][0][4] =  Object.create(block);
 this.sideZBlock [1][0][4].x = 8;
 this.sideZBlock [1][0][4].y = 1;
 this.sideZBlock [1][0][4].z = 5;
 this.sideZBlock [1][0][4].rotation = 1;
 this.sideZBlock [1][0][4].twobytwo = true;

 this.sideZBlock [1][0][5] =  Object.create(block);
 this.sideZBlock [1][0][5].x = 8;
 this.sideZBlock [1][0][5].y = 1;
 this.sideZBlock [1][0][5].z = 3;
 this.sideZBlock [1][0][5].rotation = 1;
 this.sideZBlock [1][0][5].twobytwo = false;


 this.sideZBlock [1][0][6] =  Object.create(block);
 this.sideZBlock [1][0][6].x = 8;
 this.sideZBlock [1][0][6].y = 2;
 this.sideZBlock [1][0][6].z = 1;
 this.sideZBlock [1][0][6].rotation = 1;
 this.sideZBlock [1][0][6].twobytwo = true;

 this.sideZBlock [1][0][7] =  Object.create(block);
 this.sideZBlock [1][0][7].x = 8;
 this.sideZBlock [1][0][7].y = 2;
 this.sideZBlock [1][0][7].z = 3;
 this.sideZBlock [1][0][7].rotation = 1;
 this.sideZBlock [1][0][7].twobytwo = true;

 this.sideZBlock [1][0][8] =  Object.create(block);
 this.sideZBlock [1][0][8].x = 8;
 this.sideZBlock [1][0][8].y = 2;
 this.sideZBlock [1][0][8].z = 7;
 this.sideZBlock [1][0][8].rotation = 1;
 this.sideZBlock [1][0][8].twobytwo = false;


//1.1  
//------------------------
this.sideZBlock[1][1] = this.sideZBlock[1][0]; 


//1.2  
//------------------------
this.sideZBlock[1][2] = this.sideZBlock[1][0]; 


//sideXBlocks
//1
//---------
this.sideXBlock [1] = [];
//1.0  
//------------------------
 this.sideXBlock[1][0] = [];
 //1.1  
//------------------------
this.sideXBlock[1][1] = [];
//1.2  
//------------------------
this.sideXBlock[1][2] = [];

/////////////////////////////////////////////////////////////////////////////////////

//sideZBlocks

//2
//---------
      
this.sideZBlock [2] = []; 

//2.0  
//------------------------

this.sideZBlock[2][0] = this.sideZBlock[0][0]; 




//2.1  
//------------------------
this.sideZBlock[2][1] = this.sideZBlock[0][0]; 


//2.2  
//------------------------
this.sideZBlock[2][2] = this.sideZBlock[0][0]; 


//sideXBlocks
//2
//---------
this.sideXBlock [2] = [];
//2.0  
//------------------------
 this.sideXBlock[2][0] = [];

 this.sideXBlock [2][0][0] =  Object.create(block);
 this.sideXBlock [2][0][0].x = 0;
 this.sideXBlock [2][0][0].y = 0;
 this.sideXBlock [2][0][0].z = 8;
 this.sideXBlock [2][0][0].rotation = 0;
 this.sideXBlock [2][0][0].twobytwo = true;

 this.sideXBlock [2][0][1] =  Object.create(block);
 this.sideXBlock [2][0][1].x = 2;
 this.sideXBlock [2][0][1].y = 0;
 this.sideXBlock [2][0][1].z = 8;
 this.sideXBlock [2][0][1].rotation = 0;
 this.sideXBlock [2][0][1].twobytwo = true;

 this.sideXBlock [2][0][2] =  Object.create(block);
 this.sideXBlock [2][0][2].x = 4;
 this.sideXBlock [2][0][2].y = 0;
 this.sideXBlock [2][0][2].z = 8;
 this.sideXBlock [2][0][2].rotation = 0;
 this.sideXBlock [2][0][2].twobytwo = false;

 //2.1  
//------------------------
this.sideXBlock[2][1] = this.sideXBlock[2][0]; 
//2.2  
//------------------------
this.sideXBlock[2][2] = this.sideXBlock[2][0]; 


////////////////////////////////////////////////////////////////////////////////////////////



//sideZBlocks

//3
//---------
      
this.sideZBlock [3] = []; 

//3.0  
//------------------------

this.sideZBlock[3][0] = []

 this.sideZBlock [3][0][0] =  Object.create(block);
 this.sideZBlock [3][0][0].x = 8;
 this.sideZBlock [3][0][0].y = 0;
 this.sideZBlock [3][0][0].z = 3;
 this.sideZBlock [3][0][0].rotation = 1;
 this.sideZBlock [3][0][0].twobytwo = true;

 this.sideZBlock [3][0][1] =  Object.create(block);
 this.sideZBlock [3][0][1].x = 8;
 this.sideZBlock [3][0][1].y = 0;
 this.sideZBlock [3][0][1].z = 5;
 this.sideZBlock [3][0][1].rotation = 1;
 this.sideZBlock [3][0][1].twobytwo = true;


 this.sideZBlock [3][0][2] =  Object.create(block);
 this.sideZBlock [3][0][2].x = 8;
 this.sideZBlock [3][0][2].y = 1;
 this.sideZBlock [3][0][2].z = 5;
 this.sideZBlock [3][0][2].rotation = 1;
 this.sideZBlock [3][0][2].twobytwo = false;



 this.sideZBlock [3][0][3] =  Object.create(block);
 this.sideZBlock [3][0][3].x = 8;
 this.sideZBlock [3][0][3].y = 2;
 this.sideZBlock [3][0][3].z = 3;
 this.sideZBlock [3][0][3].rotation = 1;
 this.sideZBlock [3][0][3].twobytwo = true;

 this.sideZBlock [3][0][4] =  Object.create(block);
 this.sideZBlock [3][0][4].x = 8;
 this.sideZBlock [3][0][4].y = 2;
 this.sideZBlock [3][0][4].z = 5;
 this.sideZBlock [3][0][4].rotation = 1;
 this.sideZBlock [3][0][4].twobytwo = true;




//3.1  
//------------------------
this.sideZBlock[3][1] = this.sideZBlock[3][0]; 


//3.2  
//------------------------
this.sideZBlock[3][2] = this.sideZBlock[3][0]; 


//sideXBlocks
//3
//---------
this.sideXBlock [3] = [];
//3.0  
//------------------------
 this.sideXBlock[3][0] = [];




 this.sideXBlock [3][0][0] =  Object.create(block);
 this.sideXBlock [3][0][0].x = 2;
 this.sideXBlock [3][0][0].y = 0;
 this.sideXBlock [3][0][0].z = 8;
 this.sideXBlock [3][0][0].rotation = 0;
 this.sideXBlock [3][0][0].twobytwo = false;



 this.sideXBlock [3][0][1] =  Object.create(block);
 this.sideXBlock [3][0][1].x = 2;
 this.sideXBlock [3][0][1].y = 1;
 this.sideXBlock [3][0][1].z = 8;
 this.sideXBlock [3][0][1].rotation = 0;
 this.sideXBlock [3][0][1].twobytwo = true;

 this.sideXBlock [3][0][2] =  Object.create(block);
 this.sideXBlock [3][0][2].x = 4;
 this.sideXBlock [3][0][2].y = 1;
 this.sideXBlock [3][0][2].z = 8;
 this.sideXBlock [3][0][2].rotation = 0;
 this.sideXBlock [3][0][2].twobytwo = true;


 this.sideXBlock [3][0][3] =  Object.create(block);
 this.sideXBlock [3][0][3].x = 2;
 this.sideXBlock [3][0][3].y = 2;
 this.sideXBlock [3][0][3].z = 8;
 this.sideXBlock [3][0][3].rotation = 0;
 this.sideXBlock [3][0][3].twobytwo = false;


 //3.1  
//------------------------
this.sideXBlock[3][1] = this.sideXBlock[3][0]; 
//3.2  
//------------------------
this.sideXBlock[3][2] = this.sideXBlock[3][0]; 


////////////////////////////////////////////////////////////////////////////////////////////



//sideZBlocks

//4
//---------
      
this.sideZBlock [4] = []; 

//4.0  
//------------------------

this.sideZBlock[4][0] = []

 this.sideZBlock [4][0][0] =  Object.create(block);
 this.sideZBlock [4][0][0].x = 8;
 this.sideZBlock [4][0][0].y = 0;
 this.sideZBlock [4][0][0].z = 2;
 this.sideZBlock [4][0][0].rotation = 1;
 this.sideZBlock [4][0][0].twobytwo = true;

 this.sideZBlock [4][0][1] =  Object.create(block);
 this.sideZBlock [4][0][1].x = 8;
 this.sideZBlock [4][0][1].y = 0;
 this.sideZBlock [4][0][1].z = 6;
 this.sideZBlock [4][0][1].rotation = 1;
 this.sideZBlock [4][0][1].twobytwo = true;


 this.sideZBlock [4][0][2] =  Object.create(block);
 this.sideZBlock [4][0][2].x = 8;
 this.sideZBlock [4][0][2].y = 1;
 this.sideZBlock [4][0][2].z = 5;
 this.sideZBlock [4][0][2].rotation = 1;
 this.sideZBlock [4][0][2].twobytwo = false;



 this.sideZBlock [4][0][3] =  Object.create(block);
 this.sideZBlock [4][0][3].x = 8;
 this.sideZBlock [4][0][3].y = 2;
 this.sideZBlock [4][0][3].z = 3;
 this.sideZBlock [4][0][3].rotation = 1;
 this.sideZBlock [4][0][3].twobytwo = true;

 this.sideZBlock [4][0][4] =  Object.create(block);
 this.sideZBlock [4][0][4].x = 8;
 this.sideZBlock [4][0][4].y = 3;
 this.sideZBlock [4][0][4].z = 3;
 this.sideZBlock [4][0][4].rotation = 1;
 this.sideZBlock [4][0][4].twobytwo = true;




//4.1  
//------------------------
this.sideZBlock[4][1] = this.sideZBlock[4][0]; 


//4.2  
//------------------------
this.sideZBlock[4][2] = this.sideZBlock[4][0]; 


//sideXBlocks
//4
//---------
this.sideXBlock [4] = [];
//4.0  
//------------------------
 this.sideXBlock[4][0] = [];




 this.sideXBlock [4][0][0] =  Object.create(block);
 this.sideXBlock [4][0][0].x = 1;
 this.sideXBlock [4][0][0].y = 0;
 this.sideXBlock [4][0][0].z = 8;
 this.sideXBlock [4][0][0].rotation = 0;
 this.sideXBlock [4][0][0].twobytwo = false;



 this.sideXBlock [4][0][1] =  Object.create(block);
 this.sideXBlock [4][0][1].x = 2;
 this.sideXBlock [4][0][1].y = 1;
 this.sideXBlock [4][0][1].z = 8;
 this.sideXBlock [4][0][1].rotation = 0;
 this.sideXBlock [4][0][1].twobytwo = true;

 this.sideXBlock [4][0][2] =  Object.create(block);
 this.sideXBlock [4][0][2].x = 6;
 this.sideXBlock [4][0][2].y = 0;
 this.sideXBlock [4][0][2].z = 8;
 this.sideXBlock [4][0][2].rotation = 0;
 this.sideXBlock [4][0][2].twobytwo = true;


 this.sideXBlock [4][0][3] =  Object.create(block);
 this.sideXBlock [4][0][3].x = 2;
 this.sideXBlock [4][0][3].y = 2;
 this.sideXBlock [4][0][3].z = 8;
 this.sideXBlock [4][0][3].rotation = 0;
 this.sideXBlock [4][0][3].twobytwo = false;


 //4.1  
//------------------------
this.sideXBlock[4][1] = this.sideXBlock[4][0]; 
//4.2  
//------------------------
this.sideXBlock[4][2] = this.sideXBlock[4][0]; 


/////////////////////////////////////////////////////////////////////////////////////
//0
//---------
      
      
      this.score[0] = [];
      this.block [0] = []; 
      
      

 
     

//0.0  
//------------------------
this.score[0][0] = 0;
 this.block[0][0] = [];
 this.block[0][0][0] = [];
 this.block [0][0][0][0] =  Object.create(block);
 this.block [0][0][0][0].x = 6;
 this.block [0][0][0][0].y = 0;
 this.block [0][0][0][0].z = 5;
 this.block [0][0][0][0].rotation = 3;
 this.block [0][0][0][0].twobytwo = true;
 this.block [0][0][0][0].ledALeft = 0;
 this.block [0][0][0][0].ledARight = 0;
 this.block [0][0][0][0].ledBLeft = 0;
 this.block [0][0][0][0].ledBRight = 0;
 this.block[0][0][1] = [];
 this.block [0][0][1][0] =  Object.create(block);
 this.block [0][0][1][0].x = 4;
 this.block [0][0][1][0].y = 0;
 this.block [0][0][1][0].z = 3;
 this.block [0][0][1][0].rotation = 3;
 this.block [0][0][1][0].twobytwo = true;
 this.block [0][0][1][0].ledALeft = 0;
 this.block [0][0][1][0].ledARight = 0;
 this.block [0][0][1][0].ledBLeft = 0;
 this.block [0][0][1][0].ledBRight = 0;

 /*
 this.block [0][0][1][1] =  Object.create(block);
 this.block [0][0][1][1].x = 4;
 this.block [0][0][1][1].y = 0;
 this.block [0][0][1][1].z = 4;
 this.block [0][0][1][1].rotation = 0;
 this.block [0][0][1][1].twobytwo = true;
*/




//0.1  
//------------------------

this.score[0][1] = 0;
this.block[0][1] = [];
this.block[0][1][0] = [];
this.block [0][1][0][0] =  Object.create(block);
this.block [0][1][0][0].x = 6;
this.block [0][1][0][0].y = 0;
this.block [0][1][0][0].z = 5;
this.block [0][1][0][0].rotation = 3;
this.block [0][1][0][0].twobytwo = true;
this.block [0][1][0][0].ledALeft = 0;
this.block [0][1][0][0].ledARight = 0;
this.block [0][1][0][0].ledBLeft = 0;
this.block [0][1][0][0].ledBRight = 0;
this.block [0][1][0][1] =  Object.create(block);
this.block [0][1][0][1].x = 4;
this.block [0][1][0][1].y = 0;
this.block [0][1][0][1].z = 3;
this.block [0][1][0][1].rotation = 3;
this.block [0][1][0][1].twobytwo = true;
this.block [0][1][0][1].ledALeft = 0;
this.block [0][1][0][1].ledARight = 0;
this.block [0][1][0][1].ledBLeft = 0;
this.block [0][1][0][1].ledBRight = 0;
this.block[0][1][1] = [];
this.block [0][1][1][0] =  Object.create(block);
this.block [0][1][1][0].x = 3;
this.block [0][1][1][0].y = 0;
this.block [0][1][1][0].z = 3;
this.block [0][1][1][0].rotation = 3;
this.block [0][1][1][0].twobytwo = true;
this.block [0][1][1][0].ledALeft = 0;
this.block [0][1][1][0].ledARight = 0;
this.block [0][1][1][0].ledBLeft = 0;
this.block [0][1][1][0].ledBRight = 0;
this.block [0][1][1][1] =  Object.create(block);
this.block [0][1][1][1].x = 5;
this.block [0][1][1][1].y = 0;
this.block [0][1][1][1].z = 4;
this.block [0][1][1][1].rotation = 3;
this.block [0][1][1][1].twobytwo = true;
this.block [0][1][1][1].ledALeft = 0;
this.block [0][1][1][1].ledARight = 0;
this.block [0][1][1][1].ledBLeft = 0;
this.block [0][1][1][1].ledBRight = 0;



//0.2
//-------------------------
this.score[0][2] = 0;
this.block[0][2] = [];
this.block[0][2][0] = [];
this.block [0][2][0][0] =  Object.create(block);
this.block [0][2][0][0].x = 3;
this.block [0][2][0][0].y = 0;
this.block [0][2][0][0].z = 6;
this.block [0][2][0][0].rotation = 2;
this.block [0][2][0][0].twobytwo = true;
this.block [0][2][0][0].ledALeft = 0;
this.block [0][2][0][0].ledARight = 0;
this.block [0][2][0][0].ledBLeft = 0;
this.block [0][2][0][0].ledBRight = 0;
this.block [0][2][0][1] =  Object.create(block);
this.block [0][2][0][1].x = 2;
this.block [0][2][0][1].y = 0;
this.block [0][2][0][1].z = 3;
this.block [0][2][0][1].rotation = 3;
this.block [0][2][0][1].twobytwo = true;
this.block [0][2][0][1].ledALeft = 0;
this.block [0][2][0][1].ledARight = 0;
this.block [0][2][0][1].ledBLeft = 0;
this.block [0][2][0][1].ledBRight = 0;
this.block [0][2][0][2] =  Object.create(block);
this.block [0][2][0][2].x = 6;
this.block [0][2][0][2].y = 0;
this.block [0][2][0][2].z = 5;
this.block [0][2][0][2].rotation = 3;
this.block [0][2][0][2].twobytwo = true;
this.block [0][2][0][2].ledALeft = 0;
this.block [0][2][0][2].ledARight = 0;
this.block [0][2][0][2].ledBLeft = 0;
this.block [0][2][0][2].ledBRight = 0;
this.block [0][2][0][3] =  Object.create(block);
this.block [0][2][0][3].x = 4;
this.block [0][2][0][3].y = 0;
this.block [0][2][0][3].z = 2;
this.block [0][2][0][3].rotation = 1;
this.block [0][2][0][3].twobytwo = false;
this.block [0][2][0][3].ledALeft = 0;
this.block [0][2][0][3].ledARight = 0;
this.block [0][2][0][3].ledBLeft = 0;
this.block [0][2][0][3].ledBRight = 0;
this.block[0][2][1] = [];
this.block [0][2][1][0] =  Object.create(block);
this.block [0][2][1][0].x = 2;
this.block [0][2][1][0].y = 0;
this.block [0][2][1][0].z = 5;
this.block [0][2][1][0].rotation = 2;
this.block [0][2][1][0].twobytwo = false;
this.block [0][2][1][0].ledALeft = 0;
this.block [0][2][1][0].ledARight = 0;
this.block [0][2][1][0].ledBLeft = 0;
this.block [0][2][1][0].ledBRight = 0;
this.block [0][2][1][1] =  Object.create(block);
this.block [0][2][1][1].x = 5;
this.block [0][2][1][1].y = 0;
this.block [0][2][1][1].z = 5;
this.block [0][2][1][1].rotation = 2;
this.block [0][2][1][1].twobytwo = true;
this.block [0][2][1][1].ledALeft = 0;
this.block [0][2][1][1].ledARight = 0;
this.block [0][2][1][1].ledBLeft = 0;
this.block [0][2][1][1].ledBRight = 0;
this.block [0][2][1][2] =  Object.create(block);
this.block [0][2][1][2].x = 5;
this.block [0][2][1][2].y = 0;
this.block [0][2][1][2].z = 1;
this.block [0][2][1][2].rotation = 0;
this.block [0][2][1][2].twobytwo = true;
this.block [0][2][1][2].ledALeft = 0;
this.block [0][2][1][2].ledARight = 0;
this.block [0][2][1][2].ledBLeft = 0;
this.block [0][2][1][2].ledBRight = 0;
this.block [0][2][1][3] =  Object.create(block);
this.block [0][2][1][3].x = 3;
this.block [0][2][1][3].y = 0;
this.block [0][2][1][3].z = 0;
this.block [0][2][1][3].rotation = 0;
this.block [0][2][1][3].twobytwo = true;
this.block [0][2][1][3].ledALeft = 0;
this.block [0][2][1][3].ledARight = 0;
this.block [0][2][1][3].ledBLeft = 0;
this.block [0][2][1][3].ledBRight = 0;








//////////////////////////////////////////////////////////////////////////////////////////////

//1
//--
this.score[1] = [];
this.block [1] = []; 

//1.0
//-------------------------
this.score[1][0] = 0;
this.block[1][0] = [];
this.block[1][0][0] = [];
this.block [1][0][0][0] =  Object.create(block);
this.block [1][0][0][0].x = 5;
this.block [1][0][0][0].y = 0;
this.block [1][0][0][0].z = 5;
this.block [1][0][0][0].rotation = 2;
this.block [1][0][0][0].twobytwo = true;
this.block [1][0][0][0].ledALeft = 0;
this.block [1][0][0][0].ledARight = 0;
this.block [1][0][0][0].ledBLeft = 0;
this.block [1][0][0][0].ledBRight = 0;
this.block [1][0][0][1] =  Object.create(block);
this.block [1][0][0][1].x = 4;
this.block [1][0][0][1].y = 1;
this.block [1][0][0][1].z = 4;
this.block [1][0][0][1].rotation = 0;
this.block [1][0][0][1].twobytwo = true;
this.block [1][0][0][1].ledALeft = 0;
this.block [1][0][0][1].ledARight = 0;
this.block [1][0][0][1].ledBLeft = 0;
this.block [1][0][0][1].ledBRight = 0;
this.block[1][0][1] = [];
this.block [1][0][1][0] =  Object.create(block);
this.block [1][0][1][0].x = 5;
this.block [1][0][1][0].y = 0;
this.block [1][0][1][0].z = 3;
this.block [1][0][1][0].rotation = 2;
this.block [1][0][1][0].twobytwo = true;
this.block [1][0][1][0].ledALeft = 0;
this.block [1][0][1][0].ledARight = 0;
this.block [1][0][1][0].ledBLeft = 0;
this.block [1][0][1][0].ledBRight = 0;
this.block [1][0][1][1] =  Object.create(block);
this.block [1][0][1][1].x = 4;
this.block [1][0][1][1].y = 1;
this.block [1][0][1][1].z = 3;
this.block [1][0][1][1].rotation = 0;
this.block [1][0][1][1].twobytwo = true;
this.block [1][0][1][1].ledALeft = 0;
this.block [1][0][1][1].ledARight = 0;
this.block [1][0][1][1].ledBLeft = 0;
this.block [1][0][1][1].ledBRight = 0;

//1.1
//-------------------------
this.score[1][1] = 0;
this.block[1][1] = [];
this.block[1][1][0] = [];
this.block [1][1][0][0] =  Object.create(block);
this.block [1][1][0][0].x = 4;
this.block [1][1][0][0].y = 0;
this.block [1][1][0][0].z = 8;
this.block [1][1][0][0].rotation = 1;
this.block [1][1][0][0].twobytwo = true;
this.block [1][1][0][0].ledALeft = 0;
this.block [1][1][0][0].ledARight = 0;
this.block [1][1][0][0].ledBLeft = 0;
this.block [1][1][0][0].ledBRight = 0;
this.block [1][1][0][1] =  Object.create(block);
this.block [1][1][0][1].x = 5;
this.block [1][1][0][1].y = 0;
this.block [1][1][0][1].z = 3;
this.block [1][1][0][1].rotation = 2;
this.block [1][1][0][1].twobytwo = true;
this.block [1][1][0][1].ledALeft = 0;
this.block [1][1][0][1].ledARight = 0;
this.block [1][1][0][1].ledBLeft = 0;
this.block [1][1][0][1].ledBRight = 0;
this.block [1][1][0][2] =  Object.create(block);
this.block [1][1][0][2].x = 5;
this.block [1][1][0][2].y = 1;
this.block [1][1][0][2].z = 6;
this.block [1][1][0][2].rotation = 3;
this.block [1][1][0][2].twobytwo = true;
this.block [1][1][0][2].ledALeft = 0;
this.block [1][1][0][2].ledARight = 0;
this.block [1][1][0][2].ledBLeft = 0;
this.block [1][1][0][2].ledBRight = 0;
this.block [1][1][0][3] =  Object.create(block);
this.block [1][1][0][3].x = 4;
this.block [1][1][0][3].y = 1;
this.block [1][1][0][3].z = 3;
this.block [1][1][0][3].rotation = 0;
this.block [1][1][0][3].twobytwo = true;
this.block [1][1][0][3].ledALeft = 0;
this.block [1][1][0][3].ledARight = 0;
this.block [1][1][0][3].ledBLeft = 0;
this.block [1][1][0][3].ledBRight = 0;
this.block[1][1][1] = [];
this.block [1][1][1][0] =  Object.create(block);
this.block [1][1][1][0].x = 3;
this.block [1][1][1][0].y = 0;
this.block [1][1][1][0].z = 5;
this.block [1][1][1][0].rotation = 1;
this.block [1][1][1][0].twobytwo = true;
this.block [1][1][1][0].ledALeft = 0;
this.block [1][1][1][0].ledARight = 0;
this.block [1][1][1][0].ledBLeft = 0;
this.block [1][1][1][0].ledBRight = 0;
this.block [1][1][1][1] =  Object.create(block);
this.block [1][1][1][1].x = 4;
this.block [1][1][1][1].y = 1;
this.block [1][1][1][1].z = 3;
this.block [1][1][1][1].rotation = 3;
this.block [1][1][1][1].twobytwo = false;
this.block [1][1][1][1].ledALeft = 0;
this.block [1][1][1][1].ledARight = 0;
this.block [1][1][1][1].ledBLeft = 0;
this.block [1][1][1][1].ledBRight = 0;
this.block [1][1][1][2] =  Object.create(block);
this.block [1][1][1][2].x = 4;
this.block [1][1][1][2].y = 2;
this.block [1][1][1][2].z = 4;
this.block [1][1][1][2].rotation = 3;
this.block [1][1][1][2].twobytwo = true;
this.block [1][1][1][2].ledALeft = 0;
this.block [1][1][1][2].ledARight = 0;
this.block [1][1][1][2].ledBLeft = 0;
this.block [1][1][1][2].ledBRight = 0;
this.block [1][1][1][3] =  Object.create(block);
this.block [1][1][1][3].x = 3;
this.block [1][1][1][3].y = 2;
this.block [1][1][1][3].z = 2;
this.block [1][1][1][3].rotation = 0;
this.block [1][1][1][3].twobytwo = true;
this.block [1][1][1][3].ledALeft = 0;
this.block [1][1][1][3].ledARight = 0;
this.block [1][1][1][3].ledBLeft = 0;
this.block [1][1][1][3].ledBRight = 0;

//1.2
//-------------------------
this.score[1][2] = 0;
this.block[1][2] = [];
this.block[1][2][0] = [];
this.block [1][2][0][0] =  Object.create(block);
this.block [1][2][0][0].x = 5;
this.block [1][2][0][0].y = 0;
this.block [1][2][0][0].z = 7;
this.block [1][2][0][0].rotation = 3;
this.block [1][2][0][0].twobytwo = true;
this.block [1][2][0][0].ledALeft = 0;
this.block [1][2][0][0].ledARight = 0;
this.block [1][2][0][0].ledBLeft = 0;
this.block [1][2][0][0].ledBRight = 0;
this.block [1][2][0][1] =  Object.create(block);
this.block [1][2][0][1].x = 4;
this.block [1][2][0][1].y = 0;
this.block [1][2][0][1].z = 3;
this.block [1][2][0][1].rotation = 0;
this.block [1][2][0][1].twobytwo = true;
this.block [1][2][0][1].ledALeft = 0;
this.block [1][2][0][1].ledARight = 0;
this.block [1][2][0][1].ledBLeft = 0;
this.block [1][2][0][1].ledBRight = 0;
this.block [1][2][0][2] =  Object.create(block);
this.block [1][2][0][2].x = 5;
this.block [1][2][0][2].y = 0;
this.block [1][2][0][2].z = 0;
this.block [1][2][0][2].rotation = 3;
this.block [1][2][0][2].twobytwo = true;
this.block [1][2][0][2].ledALeft = 0;
this.block [1][2][0][2].ledARight = 0;
this.block [1][2][0][2].ledBLeft = 0;
this.block [1][2][0][2].ledBRight = 0;
this.block [1][2][0][3] =  Object.create(block);
this.block [1][2][0][3].x = 5;
this.block [1][2][0][3].y = 1;
this.block [1][2][0][3].z = 4;
this.block [1][2][0][3].rotation = 3;
this.block [1][2][0][3].twobytwo = false;
this.block [1][2][0][3].ledALeft = 0;
this.block [1][2][0][3].ledARight = 0;
this.block [1][2][0][3].ledBLeft = 0;
this.block [1][2][0][3].ledBRight = 0;
this.block [1][2][0][4] =  Object.create(block);
this.block [1][2][0][4].x = 5;
this.block [1][2][0][4].y = 2;
this.block [1][2][0][4].z = 6;
this.block [1][2][0][4].rotation = 2;
this.block [1][2][0][4].twobytwo = true;
this.block [1][2][0][4].ledALeft = 0;
this.block [1][2][0][4].ledARight = 0;
this.block [1][2][0][4].ledBLeft = 0;
this.block [1][2][0][4].ledBRight = 0;
this.block[1][2][1] = [];
this.block [1][2][1][0] =  Object.create(block);
this.block [1][2][1][0].x = 2;
this.block [1][2][1][0].y = 0;
this.block [1][2][1][0].z = 4;
this.block [1][2][1][0].rotation = 3;
this.block [1][2][1][0].twobytwo = true;
this.block [1][2][1][0].ledALeft = 0;
this.block [1][2][1][0].ledARight = 0;
this.block [1][2][1][0].ledBLeft = 0;
this.block [1][2][1][0].ledBRight = 0;
this.block [1][2][1][1] =  Object.create(block);
this.block [1][2][1][1].x = 5;
this.block [1][2][1][1].y = 0;
this.block [1][2][1][1].z = 5;
this.block [1][2][1][1].rotation = 3;
this.block [1][2][1][1].twobytwo = true;
this.block [1][2][1][1].ledALeft = 0;
this.block [1][2][1][1].ledARight = 0;
this.block [1][2][1][1].ledBLeft = 0;
this.block [1][2][1][1].ledBRight = 0;
this.block [1][2][1][2] =  Object.create(block);
this.block [1][2][1][2].x = 4;
this.block [1][2][1][2].y = 1;
this.block [1][2][1][2].z = 5;
this.block [1][2][1][2].rotation = 0;
this.block [1][2][1][2].twobytwo = true;
this.block [1][2][1][2].ledALeft = 0;
this.block [1][2][1][2].ledARight = 0;
this.block [1][2][1][2].ledBLeft = 0;
this.block [1][2][1][2].ledBRight = 0;
this.block [1][2][1][3] =  Object.create(block);
this.block [1][2][1][3].x = 5;
this.block [1][2][1][3].y = 2;
this.block [1][2][1][3].z = 3;
this.block [1][2][1][3].rotation = 3;
this.block [1][2][1][3].twobytwo = false;
this.block [1][2][1][3].ledALeft = 0;
this.block [1][2][1][3].ledARight = 0;
this.block [1][2][1][3].ledBLeft = 0;
this.block [1][2][1][3].ledBRight = 0;
this.block [1][2][1][4] =  Object.create(block);
this.block [1][2][1][4].x = 5;
this.block [1][2][1][4].y = 1;
this.block [1][2][1][4].z = 3;
this.block [1][2][1][4].rotation = 2;
this.block [1][2][1][4].twobytwo = true;
this.block [1][2][1][4].ledALeft = 0;
this.block [1][2][1][4].ledARight = 0;
this.block [1][2][1][4].ledBLeft = 0;
this.block [1][2][1][4].ledBRight = 0;


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


//-------------------------

///////////////////////////////////////////////////////////////////////////////////////////

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
this.block [3][0][0][0].x = 4;
this.block [3][0][0][0].y = 0;
this.block [3][0][0][0].z = 3;
this.block [3][0][0][0].rotation = 0;
this.block [3][0][0][0].twobytwo = true;
this.block [3][0][0][0].ledALeft = 0;
this.block [3][0][0][0].ledARight = 0;
this.block [3][0][0][0].ledBLeft = 0;
this.block [3][0][0][0].ledBRight = 0;
this.block [3][0][0][1] =  Object.create(block);
this.block [3][0][0][1].x = 5;
this.block [3][0][0][1].y = 1;
this.block [3][0][0][1].z = 3;
this.block [3][0][0][1].rotation = 3;
this.block [3][0][0][1].twobytwo = true;
this.block [3][0][0][1].ledALeft = 0;
this.block [3][0][0][1].ledARight = 0;
this.block [3][0][0][1].ledBLeft = 0;
this.block [3][0][0][1].ledBRight = 0;
this.block[3][0][1] = [];
this.block [3][0][1][0] =  Object.create(block);
this.block [3][0][1][0].x = 3;
this.block [3][0][1][0].y = 0;
this.block [3][0][1][0].z = 3;
this.block [3][0][1][0].rotation = 0;
this.block [3][0][1][0].twobytwo = true;
this.block [3][0][1][0].ledALeft = 0;
this.block [3][0][1][0].ledARight = 0;
this.block [3][0][1][0].ledBLeft = 0;
this.block [3][0][1][0].ledBRight = 0;
this.block [3][0][1][1] =  Object.create(block);
this.block [3][0][1][1].x = 4;
this.block [3][0][1][1].y = 1;
this.block [3][0][1][1].z = 2;
this.block [3][0][1][1].rotation = 3;
this.block [3][0][1][1].twobytwo = true;
this.block [3][0][1][1].ledALeft = 0;
this.block [3][0][1][1].ledARight = 0;
this.block [3][0][1][1].ledBLeft = 0;
this.block [3][0][1][1].ledBRight = 0;


//3.1
//-------------------------

this.score[3][1] = 0;
this.block[3][1] = [];
this.block[3][1][0] = [];
this.block [3][1][0][0] =  Object.create(block);
this.block [3][1][0][0].x = 2;
this.block [3][1][0][0].y = 0;
this.block [3][1][0][0].z = 5;
this.block [3][1][0][0].rotation = 2;
this.block [3][1][0][0].twobytwo = true;
this.block [3][1][0][0].ledALeft = 0;
this.block [3][1][0][0].ledARight = 0;
this.block [3][1][0][0].ledBLeft = 0;
this.block [3][1][0][0].ledBRight = 0;
this.block [3][1][0][1] =  Object.create(block);
this.block [3][1][0][1].x = 6;
this.block [3][1][0][1].y = 0;
this.block [3][1][0][1].z = 2;
this.block [3][1][0][1].rotation = 2;
this.block [3][1][0][1].twobytwo = true;
this.block [3][1][0][1].ledALeft = 0;
this.block [3][1][0][1].ledARight = 0;
this.block [3][1][0][1].ledBLeft = 0;
this.block [3][1][0][1].ledBRight = 0;
this.block [3][1][0][2] =  Object.create(block);
this.block [3][1][0][2].x = 2;
this.block [3][1][0][2].y = 1;
this.block [3][1][0][2].z = 3;
this.block [3][1][0][2].rotation = 3;
this.block [3][1][0][2].twobytwo = false;
this.block [3][1][0][2].ledALeft = 0;
this.block [3][1][0][2].ledARight = 0;
this.block [3][1][0][2].ledBLeft = 0;
this.block [3][1][0][2].ledBRight = 0;
this.block [3][1][0][3] =  Object.create(block);
this.block [3][1][0][3].x = 5;
this.block [3][1][0][3].y = 1;
this.block [3][1][0][3].z = 3;
this.block [3][1][0][3].rotation = 1;
this.block [3][1][0][3].twobytwo = true;
this.block [3][1][0][3].ledALeft = 0;
this.block [3][1][0][3].ledARight = 0;
this.block [3][1][0][3].ledBLeft = 0;
this.block [3][1][0][3].ledBRight = 0;
this.block[3][1][1] = [];
this.block [3][1][1][0] =  Object.create(block);
this.block [3][1][1][0].x = 3;
this.block [3][1][1][0].y = 0;
this.block [3][1][1][0].z = 4;
this.block [3][1][1][0].rotation = 2;
this.block [3][1][1][0].twobytwo = true;
this.block [3][1][1][0].ledALeft = 0;
this.block [3][1][1][0].ledARight = 0;
this.block [3][1][1][0].ledBLeft = 0;
this.block [3][1][1][0].ledBRight = 0;
this.block [3][1][1][1] =  Object.create(block);
this.block [3][1][1][1].x = 6;
this.block [3][1][1][1].y = 0;
this.block [3][1][1][1].z = 1;
this.block [3][1][1][1].rotation = 3;
this.block [3][1][1][1].twobytwo = true;
this.block [3][1][1][1].ledALeft = 0;
this.block [3][1][1][1].ledARight = 0;
this.block [3][1][1][1].ledBLeft = 0;
this.block [3][1][1][1].ledBRight = 0;
this.block [3][1][1][2] =  Object.create(block);
this.block [3][1][1][2].x = 3;
this.block [3][1][1][2].y = 1;
this.block [3][1][1][2].z = 3;
this.block [3][1][1][2].rotation = 3;
this.block [3][1][1][2].twobytwo = false;
this.block [3][1][1][2].ledALeft = 0;
this.block [3][1][1][2].ledARight = 0;
this.block [3][1][1][2].ledBLeft = 0;
this.block [3][1][1][2].ledBRight = 0;
this.block [3][1][1][3] =  Object.create(block);
this.block [3][1][1][3].x = 7;
this.block [3][1][1][3].y = 1;
this.block [3][1][1][3].z = 2;
this.block [3][1][1][3].rotation = 2;
this.block [3][1][1][3].twobytwo = true;
this.block [3][1][1][3].ledALeft = 0;
this.block [3][1][1][3].ledARight = 0;
this.block [3][1][1][3].ledBLeft = 0;
this.block [3][1][1][3].ledBRight = 0;

//3.2
//-------------------------
this.score[3][2] = 0;
this.block[3][2] = [];
this.block[3][2][0] = [];
this.block [3][2][0][0] =  Object.create(block);
this.block [3][2][0][0].x = 1;
this.block [3][2][0][0].y = 0;
this.block [3][2][0][0].z = 6;
this.block [3][2][0][0].rotation = 3;
this.block [3][2][0][0].twobytwo = true;
this.block [3][2][0][0].ledALeft = 0;
this.block [3][2][0][0].ledARight = 0;
this.block [3][2][0][0].ledBLeft = 0;
this.block [3][2][0][0].ledBRight = 0;
this.block [3][2][0][1] =  Object.create(block);
this.block [3][2][0][1].x = 6;
this.block [3][2][0][1].y = 0;
this.block [3][2][0][1].z = 6;
this.block [3][2][0][1].rotation = 0;
this.block [3][2][0][1].twobytwo = true;
this.block [3][2][0][1].ledALeft = 0;
this.block [3][2][0][1].ledARight = 0;
this.block [3][2][0][1].ledBLeft = 0;
this.block [3][2][0][1].ledBRight = 0;
this.block [3][2][0][2] =  Object.create(block);
this.block [3][2][0][2].x = 5;
this.block [3][2][0][2].y = 0;
this.block [3][2][0][2].z = 2;
this.block [3][2][0][2].rotation = 3;
this.block [3][2][0][2].twobytwo = true;
this.block [3][2][0][2].ledALeft = 0;
this.block [3][2][0][2].ledARight = 0;
this.block [3][2][0][2].ledBLeft = 0;
this.block [3][2][0][2].ledBRight = 0;
this.block [3][2][0][3] =  Object.create(block);
this.block [3][2][0][3].x = 0;
this.block [3][2][0][3].y = 1;
this.block [3][2][0][3].z = 7;
this.block [3][2][0][3].rotation = 1;
this.block [3][2][0][3].twobytwo = true;
this.block [3][2][0][3].ledALeft = 0;
this.block [3][2][0][3].ledARight = 0;
this.block [3][2][0][3].ledBLeft = 0;
this.block [3][2][0][3].ledBRight = 0;
this.block [3][2][0][4] =  Object.create(block);
this.block [3][2][0][4].x = 7;
this.block [3][2][0][4].y = 1;
this.block [3][2][0][4].z = 4;
this.block [3][2][0][4].rotation = 3;
this.block [3][2][0][4].twobytwo = false;
this.block [3][2][0][4].ledALeft = 0;
this.block [3][2][0][4].ledARight = 0;
this.block [3][2][0][4].ledBLeft = 0;
this.block [3][2][0][4].ledBRight = 0;
this.block [3][2][0][5] =  Object.create(block);
this.block [3][2][0][5].x = 3;
this.block [3][2][0][5].y = 2;
this.block [3][2][0][5].z = 7;
this.block [3][2][0][5].rotation = 2;
this.block [3][2][0][5].twobytwo = false;
this.block [3][2][0][5].ledALeft = 0;
this.block [3][2][0][5].ledARight = 0;
this.block [3][2][0][5].ledBLeft = 0;
this.block [3][2][0][5].ledBRight = 0;
this.block [3][2][0][6] =  Object.create(block);
this.block [3][2][0][6].x = 3;
this.block [3][2][0][6].y = 1;
this.block [3][2][0][6].z = 7;
this.block [3][2][0][6].rotation = 2;
this.block [3][2][0][6].twobytwo = true;
this.block [3][2][0][6].ledALeft = 0;
this.block [3][2][0][6].ledARight = 0;
this.block [3][2][0][6].ledBLeft = 0;
this.block [3][2][0][6].ledBRight = 0;
this.block[3][2][1] = [];
this.block [3][2][1][0] =  Object.create(block);
this.block [3][2][1][0].x = 1;
this.block [3][2][1][0].y = 0;
this.block [3][2][1][0].z = 6;
this.block [3][2][1][0].rotation = 2;
this.block [3][2][1][0].twobytwo = true;
this.block [3][2][1][0].ledALeft = 0;
this.block [3][2][1][0].ledARight = 0;
this.block [3][2][1][0].ledBLeft = 0;
this.block [3][2][1][0].ledBRight = 0;
this.block [3][2][1][1] =  Object.create(block);
this.block [3][2][1][1].x = 5;
this.block [3][2][1][1].y = 0;
this.block [3][2][1][1].z = 2;
this.block [3][2][1][1].rotation = 3;
this.block [3][2][1][1].twobytwo = true;
this.block [3][2][1][1].ledALeft = 0;
this.block [3][2][1][1].ledARight = 0;
this.block [3][2][1][1].ledBLeft = 0;
this.block [3][2][1][1].ledBRight = 0;
this.block [3][2][1][2] =  Object.create(block);
this.block [3][2][1][2].x = 4;
this.block [3][2][1][2].y = 1;
this.block [3][2][1][2].z = 3;
this.block [3][2][1][2].rotation = 1;
this.block [3][2][1][2].twobytwo = true;
this.block [3][2][1][2].ledALeft = 0;
this.block [3][2][1][2].ledARight = 0;
this.block [3][2][1][2].ledBLeft = 0;
this.block [3][2][1][2].ledBRight = 0;
this.block [3][2][1][3] =  Object.create(block);
this.block [3][2][1][3].x = 3;
this.block [3][2][1][3].y = 2;
this.block [3][2][1][3].z = 2;
this.block [3][2][1][3].rotation = 0;
this.block [3][2][1][3].twobytwo = false;
this.block [3][2][1][3].ledALeft = 0;
this.block [3][2][1][3].ledARight = 0;
this.block [3][2][1][3].ledBLeft = 0;
this.block [3][2][1][3].ledBRight = 0;
this.block [3][2][1][4] =  Object.create(block);
this.block [3][2][1][4].x = 4;
this.block [3][2][1][4].y = 3;
this.block [3][2][1][4].z = 2;
this.block [3][2][1][4].rotation = 3;
this.block [3][2][1][4].twobytwo = false;
this.block [3][2][1][4].ledALeft = 0;
this.block [3][2][1][4].ledARight = 0;
this.block [3][2][1][4].ledBLeft = 0;
this.block [3][2][1][4].ledBRight = 0;
this.block [3][2][1][5] =  Object.create(block);
this.block [3][2][1][5].x = 2;
this.block [3][2][1][5].y = 2;
this.block [3][2][1][5].z = 5;
this.block [3][2][1][5].rotation = 0;
this.block [3][2][1][5].twobytwo = true;
this.block [3][2][1][5].ledALeft = 0;
this.block [3][2][1][5].ledARight = 0;
this.block [3][2][1][5].ledBLeft = 0;
this.block [3][2][1][5].ledBRight = 0;
this.block [3][2][1][6] =  Object.create(block);
this.block [3][2][1][6].x = 5;
this.block [3][2][1][6].y = 2;
this.block [3][2][1][6].z = 5;
this.block [3][2][1][6].rotation = 3;
this.block [3][2][1][6].twobytwo = true;
this.block [3][2][1][6].ledALeft = 0;
this.block [3][2][1][6].ledARight = 0;
this.block [3][2][1][6].ledBLeft = 0;
this.block [3][2][1][6].ledBRight = 0;




//////////////////////////////////////////////////////////////////////////////////////////////

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
this.block [4][0][0][0].x = 5;
this.block [4][0][0][0].y = 0;
this.block [4][0][0][0].z = 4;
this.block [4][0][0][0].rotation = 2;
this.block [4][0][0][0].twobytwo = true;
this.block [4][0][0][0].ledALeft = 0;
this.block [4][0][0][0].ledARight = 0;
this.block [4][0][0][0].ledBLeft = 0;
this.block [4][0][0][0].ledBRight = 0;
this.block [4][0][0][1] =  Object.create(block);
this.block [4][0][0][1].x = 4;
this.block [4][0][0][1].y = 1;
this.block [4][0][0][1].z = 6;
this.block [4][0][0][1].rotation = 1;
this.block [4][0][0][1].twobytwo = false;
this.block [4][0][0][1].ledALeft = 0;
this.block [4][0][0][1].ledARight = 0;
this.block [4][0][0][1].ledBLeft = 0;
this.block [4][0][0][1].ledBRight = 0;
this.block [4][0][0][2] =  Object.create(block);
this.block [4][0][0][2].x = 6;
this.block [4][0][0][2].y = 2;
this.block [4][0][0][2].z = 2;
this.block [4][0][0][2].rotation = 3;
this.block [4][0][0][2].twobytwo = true;
this.block [4][0][0][2].ledALeft = 0;
this.block [4][0][0][2].ledARight = 0;
this.block [4][0][0][2].ledBLeft = 0;
this.block [4][0][0][2].ledBRight = 0;
this.block [4][0][0][3] =  Object.create(block);
this.block [4][0][0][3].x = 5;
this.block [4][0][0][3].y = 3;
this.block [4][0][0][3].z = 3;
this.block [4][0][0][3].rotation = 0;
this.block [4][0][0][3].twobytwo = true;
this.block [4][0][0][3].ledALeft = 0;
this.block [4][0][0][3].ledARight = 0;
this.block [4][0][0][3].ledBLeft = 0;
this.block [4][0][0][3].ledBRight = 0;
this.block [4][0][0][4] =  Object.create(block);
this.block [4][0][0][4].x = 3;
this.block [4][0][0][4].y = 4;
this.block [4][0][0][4].z = 4;
this.block [4][0][0][4].rotation = 0;
this.block [4][0][0][4].twobytwo = false;
this.block [4][0][0][4].ledALeft = 0;
this.block [4][0][0][4].ledARight = 0;
this.block [4][0][0][4].ledBLeft = 0;
this.block [4][0][0][4].ledBRight = 0;
this.block [4][0][0][5] =  Object.create(block);
this.block [4][0][0][5].x = 2;
this.block [4][0][0][5].y = 3;
this.block [4][0][0][5].z = 4;
this.block [4][0][0][5].rotation = 0;
this.block [4][0][0][5].twobytwo = true;
this.block [4][0][0][5].ledALeft = 0;
this.block [4][0][0][5].ledARight = 0;
this.block [4][0][0][5].ledBLeft = 0;
this.block [4][0][0][5].ledBRight = 0;
this.block[4][0][1] = [];
this.block [4][0][1][0] =  Object.create(block);
this.block [4][0][1][0].x = 6;
this.block [4][0][1][0].y = 0;
this.block [4][0][1][0].z = 6;
this.block [4][0][1][0].rotation = 2;
this.block [4][0][1][0].twobytwo = true;
this.block [4][0][1][0].ledALeft = 0;
this.block [4][0][1][0].ledARight = 0;
this.block [4][0][1][0].ledBLeft = 0;
this.block [4][0][1][0].ledBRight = 0;
this.block [4][0][1][1] =  Object.create(block);
this.block [4][0][1][1].x = 5;
this.block [4][0][1][1].y = 1;
this.block [4][0][1][1].z = 5;
this.block [4][0][1][1].rotation = 0;
this.block [4][0][1][1].twobytwo = true;
this.block [4][0][1][1].ledALeft = 0;
this.block [4][0][1][1].ledARight = 0;
this.block [4][0][1][1].ledBLeft = 0;
this.block [4][0][1][1].ledBRight = 0;
this.block [4][0][1][2] =  Object.create(block);
this.block [4][0][1][2].x = 5;
this.block [4][0][1][2].y = 2;
this.block [4][0][1][2].z = 6;
this.block [4][0][1][2].rotation = 1;
this.block [4][0][1][2].twobytwo = false;
this.block [4][0][1][2].ledALeft = 0;
this.block [4][0][1][2].ledARight = 0;
this.block [4][0][1][2].ledBLeft = 0;
this.block [4][0][1][2].ledBRight = 0;
this.block [4][0][1][3] =  Object.create(block);
this.block [4][0][1][3].x = 2;
this.block [4][0][1][3].y = 3;
this.block [4][0][1][3].z = 5;
this.block [4][0][1][3].rotation = 0;
this.block [4][0][1][3].twobytwo = false;
this.block [4][0][1][3].ledALeft = 0;
this.block [4][0][1][3].ledARight = 0;
this.block [4][0][1][3].ledBLeft = 0;
this.block [4][0][1][3].ledBRight = 0;
this.block [4][0][1][4] =  Object.create(block);
this.block [4][0][1][4].x = 6;
this.block [4][0][1][4].y = 1;
this.block [4][0][1][4].z = 2;
this.block [4][0][1][4].rotation = 3;
this.block [4][0][1][4].twobytwo = true;
this.block [4][0][1][4].ledALeft = 0;
this.block [4][0][1][4].ledARight = 0;
this.block [4][0][1][4].ledBLeft = 0;
this.block [4][0][1][4].ledBRight = 0;
this.block [4][0][1][5] =  Object.create(block);
this.block [4][0][1][5].x = 2;
this.block [4][0][1][5].y = 2;
this.block [4][0][1][5].z = 6;
this.block [4][0][1][5].rotation = 1;
this.block [4][0][1][5].twobytwo = true;
this.block [4][0][1][5].ledALeft = 0;
this.block [4][0][1][5].ledARight = 0;
this.block [4][0][1][5].ledBLeft = 0;
this.block [4][0][1][5].ledBRight = 0;
this.block[4][0][2] = [];
this.block [4][0][2][0] =  Object.create(block);
this.block [4][0][2][0].x = 2;
this.block [4][0][2][0].y = 0;
this.block [4][0][2][0].z = 5;
this.block [4][0][2][0].rotation = 0;
this.block [4][0][2][0].twobytwo = true;
this.block [4][0][2][0].ledALeft = 0;
this.block [4][0][2][0].ledARight = 0;
this.block [4][0][2][0].ledBLeft = 0;
this.block [4][0][2][0].ledBRight = 0;
this.block [4][0][2][1] =  Object.create(block);
this.block [4][0][2][1].x = 4;
this.block [4][0][2][1].y = 1;
this.block [4][0][2][1].z = 4;
this.block [4][0][2][1].rotation = 3;
this.block [4][0][2][1].twobytwo = true;
this.block [4][0][2][1].ledALeft = 0;
this.block [4][0][2][1].ledARight = 0;
this.block [4][0][2][1].ledBLeft = 0;
this.block [4][0][2][1].ledBRight = 0;
this.block [4][0][2][2] =  Object.create(block);
this.block [4][0][2][2].x = 3;
this.block [4][0][2][2].y = 2;
this.block [4][0][2][2].z = 5;
this.block [4][0][2][2].rotation = 0;
this.block [4][0][2][2].twobytwo = false;
this.block [4][0][2][2].ledALeft = 0;
this.block [4][0][2][2].ledARight = 0;
this.block [4][0][2][2].ledBLeft = 0;
this.block [4][0][2][2].ledBRight = 0;
this.block [4][0][2][3] =  Object.create(block);
this.block [4][0][2][3].x = 4;
this.block [4][0][2][3].y = 3;
this.block [4][0][2][3].z = 4;
this.block [4][0][2][3].rotation = 0;
this.block [4][0][2][3].twobytwo = true;
this.block [4][0][2][3].ledALeft = 0;
this.block [4][0][2][3].ledARight = 0;
this.block [4][0][2][3].ledBLeft = 0;
this.block [4][0][2][3].ledBRight = 0;
this.block [4][0][2][4] =  Object.create(block);
this.block [4][0][2][4].x = 5;
this.block [4][0][2][4].y = 1;
this.block [4][0][2][4].z = 5;
this.block [4][0][2][4].rotation = 1;
this.block [4][0][2][4].twobytwo = false;
this.block [4][0][2][4].ledALeft = 0;
this.block [4][0][2][4].ledARight = 0;
this.block [4][0][2][4].ledBLeft = 0;
this.block [4][0][2][4].ledBRight = 0;
this.block [4][0][2][5] =  Object.create(block);
this.block [4][0][2][5].x = 4;
this.block [4][0][2][5].y = 4;
this.block [4][0][2][5].z = 3;
this.block [4][0][2][5].rotation = 0;
this.block [4][0][2][5].twobytwo = true;
this.block [4][0][2][5].ledALeft = 0;
this.block [4][0][2][5].ledARight = 0;
this.block [4][0][2][5].ledBLeft = 0;
this.block [4][0][2][5].ledBRight = 0;
this.block [4][0][2][6] =  Object.create(block);
this.block [4][0][2][6].x = 6;
this.block [4][0][2][6].y = 0;
this.block [4][0][2][6].z = 6;
this.block [4][0][2][6].rotation = 2;
this.block [4][0][2][6].twobytwo = true;
this.block [4][0][2][6].ledALeft = 0;
this.block [4][0][2][6].ledARight = 0;
this.block [4][0][2][6].ledBLeft = 0;
this.block [4][0][2][6].ledBRight = 0;
this.block [4][0][2][7] =  Object.create(block);
this.block [4][0][2][7].x = 4;
this.block [4][0][2][7].y = 3;
this.block [4][0][2][7].z = 2;
this.block [4][0][2][7].rotation = 0;
this.block [4][0][2][7].twobytwo = true;
this.block [4][0][2][7].ledALeft = 0;
this.block [4][0][2][7].ledARight = 0;
this.block [4][0][2][7].ledBLeft = 0;
this.block [4][0][2][7].ledBRight = 0;
this.block[4][0][3] = [];
this.block [4][0][3][0] =  Object.create(block);
this.block [4][0][3][0].x = 0;
this.block [4][0][3][0].y = 0;
this.block [4][0][3][0].z = 3;
this.block [4][0][3][0].rotation = 0;
this.block [4][0][3][0].twobytwo = true;
this.block [4][0][3][0].ledALeft = 0;
this.block [4][0][3][0].ledARight = 0;
this.block [4][0][3][0].ledBLeft = 0;
this.block [4][0][3][0].ledBRight = 0;
this.block [4][0][3][1] =  Object.create(block);
this.block [4][0][3][1].x = 5;
this.block [4][0][3][1].y = 0;
this.block [4][0][3][1].z = 4;
this.block [4][0][3][1].rotation = 2;
this.block [4][0][3][1].twobytwo = true;
this.block [4][0][3][1].ledALeft = 0;
this.block [4][0][3][1].ledARight = 0;
this.block [4][0][3][1].ledBLeft = 0;
this.block [4][0][3][1].ledBRight = 0;
this.block [4][0][3][2] =  Object.create(block);
this.block [4][0][3][2].x = 1;
this.block [4][0][3][2].y = 1;
this.block [4][0][3][2].z = 2;
this.block [4][0][3][2].rotation = 0;
this.block [4][0][3][2].twobytwo = false;
this.block [4][0][3][2].ledALeft = 0;
this.block [4][0][3][2].ledARight = 0;
this.block [4][0][3][2].ledBLeft = 0;
this.block [4][0][3][2].ledBRight = 0;
this.block [4][0][3][3] =  Object.create(block);
this.block [4][0][3][3].x = 4;
this.block [4][0][3][3].y = 1;
this.block [4][0][3][3].z = 4;
this.block [4][0][3][3].rotation = 0;
this.block [4][0][3][3].twobytwo = true;
this.block [4][0][3][3].ledALeft = 0;
this.block [4][0][3][3].ledARight = 0;
this.block [4][0][3][3].ledBLeft = 0;
this.block [4][0][3][3].ledBRight = 0;
this.block [4][0][3][4] =  Object.create(block);
this.block [4][0][3][4].x = 4;
this.block [4][0][3][4].y = 2;
this.block [4][0][3][4].z = 1;
this.block [4][0][3][4].rotation = 0;
this.block [4][0][3][4].twobytwo = true;
this.block [4][0][3][4].ledALeft = 0;
this.block [4][0][3][4].ledARight = 0;
this.block [4][0][3][4].ledBLeft = 0;
this.block [4][0][3][4].ledBRight = 0;
this.block [4][0][3][5] =  Object.create(block);
this.block [4][0][3][5].x = 3;
this.block [4][0][3][5].y = 2;
this.block [4][0][3][5].z = 5;
this.block [4][0][3][5].rotation = 0;
this.block [4][0][3][5].twobytwo = true;
this.block [4][0][3][5].ledALeft = 0;
this.block [4][0][3][5].ledARight = 0;
this.block [4][0][3][5].ledBLeft = 0;
this.block [4][0][3][5].ledBRight = 0;


//4.1
//-------------------------
this.score[4][1] = 0;
this.block[4][1] = this.block[0][1];

//4.2
//-------------------------
this.score[4][2] = 0;
this.block[4][2] = this.block[0][2];

//4.3
//-------------------------
this.score[4][3] = 0;
this.block[4][3] = this.block[0][3];

//4.4
//-------------------------
this.score[4][4] = 0;
this.block[4][4] = this.block[0][4];

//-------------------------

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
      this.block [1][0][1][1].twobytwo = true;


      */
     
      this.initLevel(this.block[0][0][0]);

  }
}
