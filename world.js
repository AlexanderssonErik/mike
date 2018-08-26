let worldRenderBlock = {
  mesh: [],
  bodyLine: 0,
  nippleLine : [],

};

let world = {
  update: false,
  pitchY: 1.19,
  block: [],
  blockLength: 0,
  blockTmp: [],
  blockTmpIndex: 0,  
  blockMaterials: [],
  scene: 0,
  renderBlocks: [],
  blockChamf: [],
  blockChamfTemplate: 0,
  blockNoChamf: [],
  blockNoChamfTemplate: 0,
  blockNippleLine: [],
  blockNippleLineTemplate: 0,
  block2x2Line: [],
  block2x2LineTemplate: 0,
  block2x4Line: [],
  block2x4LineTemplate: 0,
  timeOut: 0,
  timeOutFrequency: 500,
  blinkLEDOff: false,
  hide: false,

  printBlock: function (level, difficulty, stage){

    if(stage == 0){
      console.log("this.score[" + level + "][" +  difficulty + "] = 0;" );
      console.log("this.block[" + level + "][" +  difficulty + "] = [];" );
      
      
      }
      
      console.log("this.block[" + level + "][" +  difficulty + "][" + stage +"] = [];" );

    let str = "this.block " +"[" + level  +"]" +"[" + difficulty  +"]" +"[" + stage  +"]" 

    for(let i =0; i < this.block.length; i++){     
      let str2 = str + "[" + i + "]";
      console.log ( str2 +  " =  Object.create(block);");     
      console.log ( str2 + ".x = " + this.block[i].x + ";");
      console.log ( str2 + ".y = " + this.block[i].y + ";");
      console.log ( str2 + ".z = " + this.block[i].z + ";");
      console.log ( str2 + ".rotation = " + this.block[i].rotation + ";");
      console.log ( str2 + ".twobytwo = " + this.block[i].twobytwo + ";");
      console.log ( str2 + ".ledALeft = " + this.block[i].ledALeft + ";");
      console.log ( str2 + ".ledARight = " + this.block[i].ledARight + ";");
      console.log ( str2 + ".ledBLeft = " + this.block[i].ledBLeft + ";");
      console.log ( str2 + ".ledBRight = " + this.block[i].ledBRight + ";");

    }

  },

  blink: function(){
    world.blinkLEDOff = !world.blinkLEDOff;  
    world.timeOut = setTimeout(world.blink, world.timeOutFrequency);    
    world.update = true;
  },
  
  init : function(scene){
  this.scene = scene;
  this.timeOut = setTimeout(world.blink, this.timeOutFrequency);

    for(let i = 0; i <100; i++){
      //this.block[i] = Object.create(block); 
     //this.blockTmp[i]  = Object.create(block); 
     this.renderBlocks[i] = Object.create(worldRenderBlock); 
    }

 // nipple -------------------------------------------------------

 let  nippleShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
  new BABYLON.Vector3(0.21,0, -0.29), 
  new BABYLON.Vector3(0.29,0, -0.21),    
  new BABYLON.Vector3(0.29,0, 0.21), 
  new BABYLON.Vector3(0.21,0, 0.29), 
  new BABYLON.Vector3(-0.21,0, 0.29), 
  new BABYLON.Vector3(-0.29,0, 0.21), 
  new BABYLON.Vector3(-0.29, 0, -0.21) 		                    
];

let  nippleLineShapeA = [ new BABYLON.Vector3(-0.21,1.35, -0.29),		
  new BABYLON.Vector3(0.21,1.35, -0.29), 
  new BABYLON.Vector3(0.29,1.35, -0.21),    
  new BABYLON.Vector3(0.29,1.35, 0.21), 
  new BABYLON.Vector3(0.21,1.35, 0.29), 
  new BABYLON.Vector3(-0.21,1.35, 0.29), 
  new BABYLON.Vector3(-0.29,1.35, 0.21), 
  new BABYLON.Vector3(-0.29, 1.35, -0.21),
  new BABYLON.Vector3(-0.21,1.35, -0.29)			                    
];


//----------------------------
let chamfBlockShape = [	
          
              
            
         
  new BABYLON.Vector3(-0.3,0,-0.48 ) , 
  new BABYLON.Vector3( 1.3,0,-0.48), 
  new BABYLON.Vector3( 1.48,0, -0.3),
  new BABYLON.Vector3( 1.48,0,0.5),  
  new BABYLON.Vector3( -0.48,0,0.5), 
  new BABYLON.Vector3( -0.48,0,-0.3)	
  ];


let noChamfBlockShape = [ 		
  
  
  new BABYLON.Vector3( 1.48,0,-0.5), 
  new BABYLON.Vector3( 1.48,0,0.5), 
  new BABYLON.Vector3(-0.48,0,0.5 ), 
  new BABYLON.Vector3( -0.48,0,-0.5)                            
  ];



let blockSmallLineShape = [ new BABYLON.Vector3( -0.48,1.18,-0.3),		
  new BABYLON.Vector3( -0.48,1.18,1.3), 
  new BABYLON.Vector3( -0.3,1.18,1.48), 
  new BABYLON.Vector3( 1.3,1.18,1.48), 
  new BABYLON.Vector3( 1.48,1.18,1.3),     
  new BABYLON.Vector3( 1.48,1.18, -0.3), 
  new BABYLON.Vector3( 1.3,1.18,-0.48), 
  new BABYLON.Vector3(-0.3,1.18,-0.48 ),
  new BABYLON.Vector3( -0.48,1.18,-0.3),                             
  ];



let blockBigLineShape = [ new BABYLON.Vector3( -0.48,1.18,-0.3),		
      new BABYLON.Vector3( -0.48,1.18,1.3), 
      new BABYLON.Vector3( -0.3,1.18,1.48), 
      new BABYLON.Vector3( 3.3,1.18,1.48), 
      new BABYLON.Vector3( 3.48,1.18,1.3),     
      new BABYLON.Vector3( 3.48,1.18, -0.3), 
      new BABYLON.Vector3( 3.3,1.18,-0.48), 
      new BABYLON.Vector3(-0.3,1.18,-0.48 ),
      new BABYLON.Vector3( -0.48,1.18,-0.3),                             
      ];

let blockChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:chamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockChamfBody.rotation.z = Math.PI;
blockChamfBody.rotation.y = Math.PI/2;;

let blockNoChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygonx", {shape:noChamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockNoChamfBody.rotation.z = Math.PI;
blockNoChamfBody.rotation.y = Math.PI/2;;




this.block2x2LineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: blockSmallLineShape}, this.scene); 
this.block2x2LineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.block2x2LineTemplate.isPickable = false;
this.scene.meshes.pop();

this.block2x4LineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: blockBigLineShape}, this.scene); 
this.block2x4LineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.block2x4LineTemplate.isPickable = false;
this.scene.meshes.pop();

let blockChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockChamfNipple1.position.y =1.19;
blockChamfNipple1.rotation.z = Math.PI;

this.blockNippleLineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShapeA}, this.scene); 
this.blockNippleLineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.blockNippleLineTemplate.isPickable = false;
this.scene.meshes.pop();

let blockChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockChamfNipple2.position.z =1;//!
blockChamfNipple2.position.y =1.19;
blockChamfNipple2.rotation.z = Math.PI;

let blockNoChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockNoChamfNipple1.position.y =1.19;
blockNoChamfNipple1.rotation.z = Math.PI;


let blockNoChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
blockNoChamfNipple2.position.z =1;//!
blockNoChamfNipple2.position.y =1.19;
blockNoChamfNipple2.rotation.z = Math.PI;




//--


let blockChamfArray = [blockChamfBody, blockChamfNipple1, blockChamfNipple2];
this.blockChamfTemplate = BABYLON.Mesh.MergeMeshes(blockChamfArray); 
this.scene.meshes.pop();

let blockNoChamfArray = [blockNoChamfBody, blockNoChamfNipple1, blockNoChamfNipple2];
this.blockNoChamfTemplate = BABYLON.Mesh.MergeMeshes(blockNoChamfArray); 
this.scene.meshes.pop();




let emissiveColor = 0.2;

this.blockMaterials[0] = new BABYLON.StandardMaterial("NA", this.scene);
this.blockMaterials[1] = new BABYLON.StandardMaterial("RED", this.scene);
this.blockMaterials[2] = new BABYLON.StandardMaterial("GREEN", this.scene);
this.blockMaterials[3] = new BABYLON.StandardMaterial("YELLOW", this.scene);
this.blockMaterials[4] = new BABYLON.StandardMaterial("BLUE", this.scene);
this.blockMaterials[5] = new BABYLON.StandardMaterial("PURPLE", this.scene);
this.blockMaterials[6] = new BABYLON.StandardMaterial("CYAN", this.scene);
this.blockMaterials[7] = new BABYLON.StandardMaterial("WHITE", this.scene);

    
this.blockMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
this.blockMaterials[0].emissiveColor = new BABYLON.Color3(0.12, 0.12, 0.12);
this.blockMaterials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
this.blockMaterials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
this.blockMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
this.blockMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
this.blockMaterials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
this.blockMaterials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
this.blockMaterials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
this.blockMaterials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
this.blockMaterials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
this.blockMaterials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
this.blockMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
this.blockMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
this.blockMaterials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
this.blockMaterials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);





  },

  addBlock: function(x,y,z,rotation,twobytwo,plasticColor){

    this.blockTmp[this.blockTmpIndex]  = Object.create(block); 

    this.blockTmp[this.blockTmpIndex].x = x;
    this.blockTmp[this.blockTmpIndex].y = y;
    this.blockTmp[this.blockTmpIndex].z = z;

    if ( this.blockTmp[this.blockTmpIndex].x > 127){
      this.blockTmp[this.blockTmpIndex].x -= 256;                             
  }
  if ( this.blockTmp[this.blockTmpIndex].y > 127){
    this.blockTmp[this.blockTmpIndex].y -= 256;                             
  }
  if ( this.blockTmp[this.blockTmpIndex].z > 127){
    this.blockTmp[this.blockTmpIndex].z -= 256;                             
  }

    this.blockTmp[this.blockTmpIndex].rotation = rotation;
    this.blockTmp[this.blockTmpIndex].twobytwo = twobytwo;
    this.blockTmp[this.blockTmpIndex].color = plasticColor;
    //this.blockTmp[this.blockTmpIndex].plasticColor = plasticColor;
    /*this.blockTmp[this.blockTmpIndex].ledALeft = 0;
    this.blockTmp[this.blockTmpIndex].ledARight = 0 ;
    this.blockTmp[this.blockTmpIndex].ledBLeft = 0;
    this.blockTmp[this.blockTmpIndex].ledBRight  = 0 ;*/
    this.blockTmpIndex++; //remove??

  },
  endAddBlock: function(){
    let tmp; 
    //transfer led settings

    algoBlock.copyColorSetting(this.blockTmp, this.block);
    this.block = this.blockTmp;

    this.blockLength = this.blockTmpIndex;
    this.blockTmpIndex = 0;

    this.blockTmp = [];

    this.update = true;

  },
  dispose : function(startI, mesh){

    for(let i = mesh.length - 1; i >= startI; i--){
      mesh[i].dispose();      
      mesh.pop();

    }
  },
  hideBlocks(){
    this.update = true;
    this.hide =true;
  },
  unHideBlocks(){
    if(this.hide){
      this.update = true;
      this.hide =false;
    }
  },
  render: function(){


    if(!this.update){
      return;
    }
    this.update = false;
  
    let bci = 0;
    let bnci = 0;
    let bnli = 0;
    let b2li = 0;
    let b4li = 0;
if(!this.hide){
    for(let i = 0; i < this.blockLength; i++){

      let lineCount;

      let solidBody = false;

      
      if(this.block[i].twobytwo){
        lineCount = 4;
        if(this.block2x2Line[b2li] == null){          
          this.block2x2Line[b2li] = this.block2x2LineTemplate.clone("L");
          this.block2x2Line[b2li].isPickable = false;
        }
        this.renderBlocks[i].bodyLine = this.block2x2Line[b2li]; 
        b2li++;

        if(this.blockChamf[bci] == null){          
          this.blockChamf[bci] = this.blockChamfTemplate.clone("T" + i);
        }
        this.renderBlocks[i].mesh[0] = this.blockChamf[bci]; 
        this.renderBlocks[i].mesh[0].name = "T" +i;
        bci++;

        if(this.blockChamf[bci] == null){          
          this.blockChamf[bci] = this.blockChamfTemplate.clone("T" + i);
        }        
        this.renderBlocks[i].mesh[1] = this.blockChamf[bci];
        this.renderBlocks[i].mesh[1].name = "T" +i;
        bci++;

      }else{
        lineCount = 8;
        if(this.block2x4Line[b4li] == null){          
          this.block2x4Line[b4li] = this.block2x4LineTemplate.clone("L");
          this.block2x4Line[b4li].isPickable = false;
        }
        this.renderBlocks[i].bodyLine = this.block2x4Line[b4li]; 
        b4li++;


        if(this.blockChamf[bci] == null){          
          this.blockChamf[bci] = this.blockChamfTemplate.clone("F" + i);
        }
        this.renderBlocks[i].mesh[0] = this.blockChamf[bci]; 
        this.renderBlocks[i].mesh[0].name = "F" +i;
        bci++;

        if(this.blockNoChamf[bnci] == null){          
          this.blockNoChamf[bnci] = this.blockNoChamfTemplate.clone("F" + i);
        }
        this.renderBlocks[i].mesh[1] = this.blockNoChamf[bnci]; 
        this.renderBlocks[i].mesh[1].name = "F" +i;
        bnci++;

        if(this.blockNoChamf[bnci] == null){          
          this.blockNoChamf[bnci] = this.blockNoChamfTemplate.clone("G" + i);
        }
        this.renderBlocks[i].mesh[2] = this.blockNoChamf[bnci]; 
        this.renderBlocks[i].mesh[2].name = "G" +i;
        bnci++;

        if(this.blockChamf[bci] == null){          
          this.blockChamf[bci] = this.blockChamfTemplate.clone("G" + i);
        }        
        this.renderBlocks[i].mesh[3] = this.blockChamf[bci];
        this.renderBlocks[i].mesh[3].name = "G" +i;
        bci++;




      }

      for(let p=0; p< lineCount; p++){
        if(this.blockNippleLine[bnli] == null){
          this.blockNippleLine[bnli] = this.blockNippleLineTemplate.clone("L");
          this.blockNippleLine[bnli].isPickable = false;
        }
        this.renderBlocks[i].nippleLine[p] = this.blockNippleLine[bnli]; 
        bnli++;
      }



        this.renderBlocks[i].mesh[0].position.y = this.block[i].y * this.pitchY;;
        this.renderBlocks[i].mesh[0].position.x = this.block[i].x;
        this.renderBlocks[i].mesh[0].position.z = this.block[i].z;
        this.renderBlocks[i].mesh[0].rotation.y = this.block[i].rotation *Math.PI/2;
        if(this.blinkLEDOff && this.block[i].ledALeftBlink){
          this.renderBlocks[i].mesh[0].material = this.blockMaterials[0];
        }else{
          this.renderBlocks[i].mesh[0].material = this.blockMaterials[this.block[i].ledALeft];
        }
        this.renderBlocks[i].mesh[0].setEnabled(1);  
        
        this.renderBlocks[i].bodyLine.position.x = this.block[i].x;
        this.renderBlocks[i].bodyLine.position.z = this.block[i].z;
        this.renderBlocks[i].bodyLine.position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].bodyLine.rotation.y = this.block[i].rotation *Math.PI/2;
        this.renderBlocks[i].bodyLine.setEnabled(1); 
        
        this.renderBlocks[i].nippleLine[0].position.x = this.block[i].x;
        this.renderBlocks[i].nippleLine[0].position.z = this.block[i].z;
        this.renderBlocks[i].nippleLine[0].position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].nippleLine[0].setEnabled(1); 

        
        this.renderBlocks[i].nippleLine[1].position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].nippleLine[1].rotation.y = this.block[i].rotation *Math.PI/2;
        this.renderBlocks[i].nippleLine[1].setEnabled(1); 

        this.renderBlocks[i].nippleLine[2].position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].nippleLine[2].setEnabled(1); 

        this.renderBlocks[i].nippleLine[3].position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].nippleLine[3].rotation.y  = this.block[i].rotation *Math.PI/2 -Math.PI;
        this.renderBlocks[i].nippleLine[3].setEnabled(1); 
            
        this.renderBlocks[i].mesh[1].position.y = this.block[i].y* this.pitchY;;
        this.renderBlocks[i].mesh[1].rotation.y  = this.block[i].rotation *Math.PI/2 -Math.PI;
        if(this.blinkLEDOff && this.block[i].ledARightBlink){
          this.renderBlocks[i].mesh[1].material = this.blockMaterials[0];
        }else{
          this.renderBlocks[i].mesh[1].material = this.blockMaterials[this.block[i].ledARight];
        }
        this.renderBlocks[i].mesh[1].setEnabled(1);  
          
        /*if(this.blinkLEDOff && this.block[i].ledALeftBlink){          
          this.renderBlocks[i].mesh[0].material = this.blockMaterials[0];
          this.renderBlocks[i].mesh[1].material = this.blockMaterials[0];

        }*/

        if(!this.block[i].twobytwo){
          this.renderBlocks[i].mesh[2].position.y = this.block[i].y* this.pitchY;;
          this.renderBlocks[i].mesh[2].rotation.y  = this.block[i].rotation *Math.PI/2;
          if(this.blinkLEDOff && this.block[i].ledBLeftBlink){
            this.renderBlocks[i].mesh[2].material = this.blockMaterials[0];
          }else{
            this.renderBlocks[i].mesh[2].material = this.blockMaterials[this.block[i].ledBLeft];
          }       
          this.renderBlocks[i].mesh[2].setEnabled(1);  

          this.renderBlocks[i].mesh[3].position.y = this.block[i].y* this.pitchY;;
          this.renderBlocks[i].mesh[3].rotation.y  = this.block[i].rotation *Math.PI/2 -Math.PI;
          if(this.blinkLEDOff && this.block[i].ledBRightBlink){
            this.renderBlocks[i].mesh[3].material = this.blockMaterials[0];
          }else{
            this.renderBlocks[i].mesh[3].material = this.blockMaterials[this.block[i].ledBRight];
          }
          this.renderBlocks[i].mesh[3].setEnabled(1);  

          if(this.blinkLEDOff && this.block[i].blink){
            this.renderBlocks[i].mesh[2].material = this.blockMaterials[0];
            this.renderBlocks[i].mesh[3].material = this.blockMaterials[0];  
          }

          this.renderBlocks[i].nippleLine[4].position.y = this.block[i].y * this.pitchY;
          this.renderBlocks[i].nippleLine[4].setEnabled(1); 

          this.renderBlocks[i].nippleLine[5].position.y = this.block[i].y * this.pitchY;
          this.renderBlocks[i].nippleLine[5].setEnabled(1); 

          this.renderBlocks[i].nippleLine[6].position.y = this.block[i].y * this.pitchY;
          this.renderBlocks[i].nippleLine[6].setEnabled(1); 

          this.renderBlocks[i].nippleLine[7].position.y =this.block[i].y * this.pitchY;
          this.renderBlocks[i].nippleLine[7].setEnabled(1); 


        }



        if(this.block[i].rotation == 0 ){
          this.renderBlocks[i].mesh[1].position.x = this.block[i].x+1;
          this.renderBlocks[i].mesh[1].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z+1;

          if(!this.block[i].twobytwo){
            this.renderBlocks[i].mesh[2].position.x = this.block[i].x+2;
            this.renderBlocks[i].mesh[2].position.z = this.block[i].z;

            this.renderBlocks[i].mesh[3].position.x = this.block[i].x+3;
            this.renderBlocks[i].mesh[3].position.z = this.block[i].z+1;

            this.renderBlocks[i].nippleLine[4].position.x = this.block[i].x+2;
            this.renderBlocks[i].nippleLine[4].position.z = this.block[i].z;

            this.renderBlocks[i].nippleLine[5].position.x = this.block[i].x+2;
            this.renderBlocks[i].nippleLine[5].position.z = this.block[i].z+1;

            this.renderBlocks[i].nippleLine[6].position.x = this.block[i].x+3;
            this.renderBlocks[i].nippleLine[6].position.z = this.block[i].z;

            this.renderBlocks[i].nippleLine[7].position.x = this.block[i].x+3;
            this.renderBlocks[i].nippleLine[7].position.z = this.block[i].z+1;

          }


      
        }else if(this.block[i].rotation == 1 ){
          this.renderBlocks[i].mesh[1].position.x = this.block[i].x+1;
          this.renderBlocks[i].mesh[1].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z-1;

          if(!this.block[i].twobytwo){
            this.renderBlocks[i].mesh[2].position.x = this.block[i].x;
            this.renderBlocks[i].mesh[2].position.z = this.block[i].z-2;

            this.renderBlocks[i].mesh[3].position.x = this.block[i].x+1;
            this.renderBlocks[i].mesh[3].position.z = this.block[i].z-3;

            this.renderBlocks[i].nippleLine[4].position.x = this.block[i].x;
            this.renderBlocks[i].nippleLine[4].position.z = this.block[i].z-2;

            this.renderBlocks[i].nippleLine[5].position.x = this.block[i].x+1;
            this.renderBlocks[i].nippleLine[5].position.z = this.block[i].z-2;

            this.renderBlocks[i].nippleLine[6].position.x = this.block[i].x;
            this.renderBlocks[i].nippleLine[6].position.z = this.block[i].z-3;

            this.renderBlocks[i].nippleLine[7].position.x = this.block[i].x+1;
            this.renderBlocks[i].nippleLine[7].position.z = this.block[i].z-3;


          }

      }else if(this.block[i].rotation == 2 ){
          this.renderBlocks[i].mesh[1].position.x = this.block[i].x-1;
          this.renderBlocks[i].mesh[1].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z-1;

          if(!this.block[i].twobytwo){
            this.renderBlocks[i].mesh[2].position.x = this.block[i].x-2;
            this.renderBlocks[i].mesh[2].position.z = this.block[i].z;

            this.renderBlocks[i].mesh[3].position.x = this.block[i].x-3;
            this.renderBlocks[i].mesh[3].position.z = this.block[i].z-1;

            this.renderBlocks[i].nippleLine[4].position.x = this.block[i].x-2;
            this.renderBlocks[i].nippleLine[4].position.z = this.block[i].z;

            this.renderBlocks[i].nippleLine[5].position.x = this.block[i].x-2;
            this.renderBlocks[i].nippleLine[5].position.z = this.block[i].z-1;

            this.renderBlocks[i].nippleLine[6].position.x = this.block[i].x-3;
            this.renderBlocks[i].nippleLine[6].position.z = this.block[i].z;

            this.renderBlocks[i].nippleLine[7].position.x = this.block[i].x-3;
            this.renderBlocks[i].nippleLine[7].position.z = this.block[i].z-1;

          }

      } else if(this.block[i].rotation == 3 ){
          this.renderBlocks[i].mesh[1].position.x = this.block[i].x-1;
          this.renderBlocks[i].mesh[1].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z+1;

          if(!this.block[i].twobytwo){
            this.renderBlocks[i].mesh[2].position.x = this.block[i].x;
            this.renderBlocks[i].mesh[2].position.z = this.block[i].z+2;

            this.renderBlocks[i].mesh[3].position.x = this.block[i].x-1;
            this.renderBlocks[i].mesh[3].position.z = this.block[i].z+3;

            this.renderBlocks[i].nippleLine[4].position.x = this.block[i].x;
            this.renderBlocks[i].nippleLine[4].position.z = this.block[i].z+2;

            this.renderBlocks[i].nippleLine[5].position.x = this.block[i].x-1;
            this.renderBlocks[i].nippleLine[5].position.z = this.block[i].z+2;

            this.renderBlocks[i].nippleLine[6].position.x = this.block[i].x;
            this.renderBlocks[i].nippleLine[6].position.z = this.block[i].z+3;

            this.renderBlocks[i].nippleLine[7].position.x = this.block[i].x-1;
            this.renderBlocks[i].nippleLine[7].position.z = this.block[i].z+3;


          }


      }  



    }
  }
   this.dispose(bci, this.blockChamf);    
    this.dispose(bnci, this.blockNoChamf);    
    this.dispose(bnli, this.blockNippleLine);    
    this.dispose(b2li, this.block2x2Line);    
    this.dispose(b4li, this.block2x4Line);


  }


  


};