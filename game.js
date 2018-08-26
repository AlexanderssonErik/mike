let gameRenderBlock = {
  mesh: [],
  bodyLine: 0,
  nippleLine : [],
};

let game = {
  update: false,
  pitchY: 1.19,
  block: [],
  blockLength: 0,
  blockTmp: [],
  blockTmpIndex: 0,  
  blockMaterials: [],
  scene: 0,
  renderBlocks: [],
  blockFull2x2:[],
  blockFull2x2Template:0,
  blockFull2x4:[],
  blockFull2x4Template:0,
  blockNippleLine: [],
  blockNippleLineTemplate: 0,
  block2x2Line: [],
  block2x2LineTemplate: 0,
  block2x4Line: [],
  block2x4LineTemplate: 0,  
  init : function(scene){
  this.scene = scene;
    for(let i = 0; i <100; i++){
      this.block[i] = Object.create(block); 
     this.blockTmp[i]  = Object.create(block); 
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

    let block2x2Shape = [ 		
      new BABYLON.Vector3( -0.48,1.18,-0.3),   
      new BABYLON.Vector3(-0.3,1.18,-0.48 ),   
      new BABYLON.Vector3( 1.3,1.18,-0.48),         
      new BABYLON.Vector3( 1.48,1.18, -0.3),   
      new BABYLON.Vector3( 1.48,1.18,1.3),   
      new BABYLON.Vector3( 1.3,1.18,1.48), 
      new BABYLON.Vector3( -0.3,1.18,1.48), 
      new BABYLON.Vector3( -0.48,1.18,1.3),
      new BABYLON.Vector3( -0.48,1.18,-0.3),         
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

    let block2x4Shape = [ 	
    
      
      new BABYLON.Vector3( -0.48,1.18,-0.3),  
      new BABYLON.Vector3(-0.3,1.18,-0.48 ),   
      new BABYLON.Vector3( 3.3,1.18,-0.48),  
      new BABYLON.Vector3( 3.48,1.18, -0.3), 
      new BABYLON.Vector3( 3.48,1.18,1.3),        
      new BABYLON.Vector3( 3.3,1.18,1.48),
      new BABYLON.Vector3( -0.3,1.18,1.48), 
      new BABYLON.Vector3( -0.48,1.18,1.3),  
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


let block2x2Body = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:block2x2Shape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x2Body.rotation.z = Math.PI;
block2x2Body.rotation.y = Math.PI/2;

let block2x4Body = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:block2x4Shape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Body.rotation.z = Math.PI;
block2x4Body.position.z = 1;
block2x4Body.rotation.y = Math.PI;


this.block2x2LineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: blockSmallLineShape}, this.scene); 
this.block2x2LineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.block2x2LineTemplate.isPickable = false;
this.scene.meshes.pop();

this.block2x4LineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: blockBigLineShape}, this.scene); 
this.block2x4LineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.block2x4LineTemplate.isPickable = false;
this.scene.meshes.pop();

this.blockNippleLineTemplate = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShapeA}, this.scene); 
this.blockNippleLineTemplate.color = new BABYLON.Color3(0.6, 0.6, 0.6);
this.blockNippleLineTemplate.isPickable = false;
this.scene.meshes.pop();

//-

let block2x2Nipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x2Nipple1.position.y =1.19;
block2x2Nipple1.rotation.z = Math.PI;

let block2x2Nipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x2Nipple2.position.z =1;//!
block2x2Nipple2.position.y =1.19;
block2x2Nipple2.rotation.z = Math.PI;

let block2x2Nipple3 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x2Nipple3.position.x =1;
block2x2Nipple3.position.y =1.19;
block2x2Nipple3.rotation.z = Math.PI;

let block2x2Nipple4 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x2Nipple4.position.x =1;
block2x2Nipple4.position.z =1;//!
block2x2Nipple4.position.y =1.19;
block2x2Nipple4.rotation.z = Math.PI;

//-

let block2x4Nipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple1.position.y =1.19;
block2x4Nipple1.rotation.z = Math.PI;

let block2x4Nipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple2.position.z =1;//!
block2x4Nipple2.position.y =1.19;
block2x4Nipple2.rotation.z = Math.PI;

let block2x4Nipple3 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple3.position.x =1;
block2x4Nipple3.position.y =1.19;
block2x4Nipple3.rotation.z = Math.PI;

let block2x4Nipple4 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple4.position.x =1;
block2x4Nipple4.position.z =1;//!
block2x4Nipple4.position.y =1.19;
block2x4Nipple4.rotation.z = Math.PI;

let block2x4Nipple5 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple5.position.x =2;
block2x4Nipple5.position.y =1.19;
block2x4Nipple5.rotation.z = Math.PI;

let block2x4Nipple6 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple6.position.x =2;
block2x4Nipple6.position.z =1;//!
block2x4Nipple6.position.y =1.19;
block2x4Nipple6.rotation.z = Math.PI;

let block2x4Nipple7 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple7.position.x =3;
block2x4Nipple7.position.y =1.19;
block2x4Nipple7.rotation.z = Math.PI;

let block2x4Nipple8 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, this.scene);
block2x4Nipple8.position.x =3;
block2x4Nipple8.position.z =1;//!
block2x4Nipple8.position.y =1.19;
block2x4Nipple8.rotation.z = Math.PI;

//--

let block2x2Array = [block2x2Body, block2x2Nipple1, block2x2Nipple2,block2x2Nipple3,block2x2Nipple4];
this.blockFull2x2Template = BABYLON.Mesh.MergeMeshes(block2x2Array); 
this.scene.meshes.pop();

let block2x4Array = [block2x4Body, block2x4Nipple1, block2x4Nipple2,block2x4Nipple3,block2x4Nipple4,block2x4Nipple5,block2x4Nipple6,block2x4Nipple7,block2x4Nipple8];

this.blockFull2x4Template = BABYLON.Mesh.MergeMeshes(block2x4Array); 
this.scene.meshes.pop();


let emissiveColor = 0.2;
let alphaSetting = 0.6;

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
this.blockMaterials[0].alpha = alphaSetting;
this.blockMaterials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
this.blockMaterials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
this.blockMaterials[1].alpha = alphaSetting;
this.blockMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
this.blockMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
this.blockMaterials[2].alpha = alphaSetting;
this.blockMaterials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
this.blockMaterials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
this.blockMaterials[3].alpha = alphaSetting;
this.blockMaterials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
this.blockMaterials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
this.blockMaterials[4].alpha = alphaSetting;
this.blockMaterials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
this.blockMaterials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
this.blockMaterials[5].alpha = alphaSetting;
this.blockMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
this.blockMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
this.blockMaterials[6].alpha = alphaSetting;
this.blockMaterials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
this.blockMaterials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
this.blockMaterials[7].alpha = alphaSetting;


  },

  addBlocks: function(blocks){
    for(let i = 0; i <blocks.length; i++){
      this.block[i].x = blocks[i].x;
      this.block[i].y = blocks[i].y;
      this.block[i].z = blocks[i].z;
      this.block[i].rotation = blocks[i].rotation;
      this.block[i].twobytwo = blocks[i].twobytwo;
      this.block[i].color = blocks[i].color;

      this.block[i].ledALeft = blocks[i].ledALeft;
      this.block[i].ledARight = blocks[i].ledARight;
      this.block[i].ledBLeft = blocks[i].ledBLeft;
      this.block[i].ledBRight = blocks[i].ledBRight;

      //this.block[i].plasticColor = blocks[i].plasticColor;

    }
    this.blockLength = blocks.length;
    this.update = true;

  },
 //remove?
  addBlock: function(x,y,z,rotation,twobytwo,plasticColor){
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
    this.blockTmpIndex++;

  },
  endAddBlock: function(){
    let tmp; 
    this.block = this.blockTmp;

    this.blockLength = this.blockTmpIndex;
    this.blockTmpIndex = 0;

    this.update = true;

  },
  dispose : function(startI, mesh, type){

    /*for(let i = startI; i< mesh.length; i++){
      mesh[i].dispose();      
      mesh[i] = null;
    }*/

    for(let i = mesh.length - 1; i >= startI; i--){
      //console.log("mesh[i]" + mesh[i].name);
      //console.log("dispose i: " + i + " type:" + type);
      mesh[i].dispose();      
      mesh.pop();
      //mesh[i].setEnabled(false); 
      //mesh[i].isVisible = false;
    }
  },
  render: function(){

    if(!this.update){
      return;
    }
    this.update = false;

    let b2x2i = 0;
    let b2x4i = 0;
    let bnli = 0;
    let b2li = 0;
    let b4li = 0;

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

        if(this.blockFull2x2[b2x2i] == null){          
          this.blockFull2x2[b2x2i] = this.blockFull2x2Template.clone("H" + i);
          this.blockFull2x2[b2x2i].isPickable = false;
        }
        this.renderBlocks[i].mesh[0] = this.blockFull2x2[b2x2i]; 
        b2x2i++;

      }else{
        lineCount = 8;
        if(this.block2x4Line[b4li] == null){          
          this.block2x4Line[b4li] = this.block2x4LineTemplate.clone("L");
          this.block2x4Line[b4li].isPickable = false;
        }
        this.renderBlocks[i].bodyLine = this.block2x4Line[b4li]; 
        b4li++;
    
        if(this.blockFull2x4[b2x4i] == null){          
          this.blockFull2x4[b2x4i] = this.blockFull2x4Template.clone("I" + i);
          this.blockFull2x4[b2x4i].isPickable = false;
        }
        this.renderBlocks[i].mesh[0] = this.blockFull2x4[b2x4i];
        b2x4i++;


      }

      for(let p=0; p< lineCount; p++){
        if(this.blockNippleLine[bnli] == null){
          this.blockNippleLine[bnli] = this.blockNippleLineTemplate.clone("L");
          this.blockNippleLine[bnli].isPickable = false;
        }
        this.renderBlocks[i].nippleLine[p] = this.blockNippleLine[bnli]; 
        bnli++;
      }



        this.renderBlocks[i].mesh[0].position.y = this.block[i].y * this.pitchY;
        this.renderBlocks[i].mesh[0].position.x = this.block[i].x;
        this.renderBlocks[i].mesh[0].position.z = this.block[i].z;
        this.renderBlocks[i].mesh[0].rotation.y = this.block[i].rotation *Math.PI/2;
        this.renderBlocks[i].mesh[0].material = this.blockMaterials[this.block[i].ledALeft];
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

        
        this.renderBlocks[i].nippleLine[1].position.y = this.block[i].y  * this.pitchY;
        this.renderBlocks[i].nippleLine[1].rotation.y = this.block[i].rotation *Math.PI/2;
        this.renderBlocks[i].nippleLine[1].setEnabled(1); 

        this.renderBlocks[i].nippleLine[2].position.y = this.block[i].y  * this.pitchY;
        this.renderBlocks[i].nippleLine[2].setEnabled(1); 

        this.renderBlocks[i].nippleLine[3].position.y = this.block[i].y  * this.pitchY;
        this.renderBlocks[i].nippleLine[3].rotation.y  = this.block[i].rotation *Math.PI/2 -Math.PI;
        this.renderBlocks[i].nippleLine[3].setEnabled(1); 
            


        if(!this.block[i].twobytwo){
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


          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z+1;

          if(!this.block[i].twobytwo){

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

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x+1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z-1;

          if(!this.block[i].twobytwo){

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


          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z-1;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z-1;

          if(!this.block[i].twobytwo){
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

          this.renderBlocks[i].nippleLine[1].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[1].position.z = this.block[i].z;

          this.renderBlocks[i].nippleLine[2].position.x = this.block[i].x;
          this.renderBlocks[i].nippleLine[2].position.z = this.block[i].z+1;

          this.renderBlocks[i].nippleLine[3].position.x = this.block[i].x-1;
          this.renderBlocks[i].nippleLine[3].position.z = this.block[i].z+1;

          if(!this.block[i].twobytwo){

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


    
    this.dispose(b2x2i, this.blockFull2x2);
    
    this.dispose(b2x4i, this.blockFull2x4);
    
    this.dispose(bnli, this.blockNippleLine);
    
    this.dispose(b2li, this.block2x2Line);
    
    this.dispose(b4li, this.block2x4Line);




  }


  


};