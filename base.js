/*

        ^
        X
        |
<Z------0
//front

*/

let base = {
    ledUp: [],
    ledSide: [],
    ledMaterials: [],
    ledHex: [0,0],
    ledHexBlink: [0,0],
    timeOut: 0,
    ledFlash: [0,0],
    ledFlashTimeOut: 0,
    ledFlashRunning: false,
    ledAllFlash : function(color, count, ms){
        this.ledFlashRunning = true;
        clearTimeout(this.ledFlashTimeOut); 
        this.ledFlash[0] = this.ledHex[0];
        this.ledFlash[1] = this.ledHex[1];
        this.ledSetFront(color);
        this.ledSetLeft(color);
        this.ledSetBack(color);
        this.ledSetRight(color);
        this.ledFlashTimeOut = setTimeout(function() {this.ledAllFlashTimeOut(color, count*2, ms);}.bind(this), ms);
    },
    ledAllFlashTimeOut : function(color, count, ms){

        if(count <= 0){
            this.ledHex[0] = this.ledFlash[0];
            this.ledHex[1] = this.ledFlash[1];
            this.ledFlashRunning = false;
            return;
        }

        if(count % 2 == 0){
            this.ledHex[0] = 0;
            this.ledHex[1] = 0;
            
        }else{
            this.ledSetFront(color);
            this.ledSetLeft(color);
            this.ledSetBack(color);
            this.ledSetRight(color);
            
        }
        this.ledFlashTimeOut = setTimeout(function() {this.ledAllFlashTimeOut(color, count-1, ms);}.bind(this), ms);
    },

    ledClear : function(){
        this.ledHex[0] = 0;
        this.ledHex[1] = 0;
    },
    ledSetFront: function(val){
        this.ledHex[0] &= 0x38;
        this.ledHex[0] |= val;
    },
    ledSetLeft: function(val){
        this.ledHex[0] &= 0x07;
        this.ledHex[0] |= val<<3;
    },
    ledSetBack: function(val){
        this.ledHex[1] &= 0x38;
        this.ledHex[1] |= val;
    },
    ledSetRight: function(val){
        this.ledHex[1] &= 0x07;
        this.ledHex[1] |= val<<3;
    },
    ledStartBlink: function(ms){
        clearTimeout(this.timeOut); 
        if(this.ledHex[0] == 0 && this.ledHex[1] == 0){                    
            this.ledHex[0] = this.ledHexBlink[0];
            this.ledHex[1] = this.ledHexBlink[1];
        }else{                    
            this.ledHexBlink[0] = this.ledHex[0];
            this.ledHexBlink[1] = this.ledHex[1];
            this.ledHex[0] = 0;
            this.ledHex[1] = 0;
        }                

        this.timeOut = setTimeout(function() {this.ledStartBlink(ms);}.bind(this), ms);
    },
    ledStopBlink: function(){
        clearTimeout(this.timeOut); 
        this.ledHex[0] = this.ledHexBlink[0];
        this.ledHex[1] = this.ledHexBlink[1];
    },
    init : function(scene){
        
        let baseLEDSideShape = [ new BABYLON.Vector3( -0.2,0,-0.5),		
            new BABYLON.Vector3( -0.15,0,-0.6),	
            new BABYLON.Vector3( 0.15,0,-0.6), 
            new BABYLON.Vector3( 0.2,0,-0.5),    
            new BABYLON.Vector3( 0.2,0,0.5),      
            new BABYLON.Vector3( 0.15,0,0.6),  
            new BABYLON.Vector3( -0.15,0,0.6),  
            new BABYLON.Vector3( -0.2,0,0.5)                                  
        ];
    
        let baseLEDUpShape = [ new BABYLON.Vector3( 0,0,-0.5),		
            new BABYLON.Vector3( 0.1,0,-0.5),	
            new BABYLON.Vector3( 0.2,0,-0.4), 
            new BABYLON.Vector3( 0.2,0,0.4),    
            new BABYLON.Vector3( 0.1,0,0.5),        
            new BABYLON.Vector3( 0,0,0.5)                        
        ];


        for(let i = 0; i < 12; i++){
            if(i%3 == 0){
         
                this.ledUp[i] = BABYLON.MeshBuilder.CreatePolygon("baseLEDUp", {shape:baseLEDUpShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
                this.ledSide[i] = BABYLON.MeshBuilder.ExtrudePolygon("baseLEDSide", {shape:baseLEDSideShape, depth: 0.08, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
            }else{
                this.ledUp[i] =  this.ledUp[3*Math.floor(i/3)].createInstance("baseLEDUp");
                this.ledSide[i] = this.ledSide[3*Math.floor(i/3)].createInstance("baseLEDSide");
            }
            this.ledUp[i].position.y =0.001;
            this.ledSide[i].position.y =-0.5;


            if(i < 3){
                this.ledUp[i].position.x =1 + i%3 * 3.5;                 
                this.ledUp[i].position.z =-0.5;
                this.ledUp[i].rotation.y = -Math.PI/2;
                this.ledUp[i].name = "BR";    
                this.ledSide[i].position.x  =1 + i%3 * 3.5;                
                this.ledSide[i].position.z =-0.1;
                this.ledSide[i].rotation.y = -Math.PI/2;
                this.ledSide[i].rotation.z = -Math.PI/2 + Math.PI/12;
                this.ledSide[i].name = "BR"; 

            }else if( i< 6){
                this.ledUp[i].position.x =-0.5;                
                this.ledUp[i].position.z = 1 + i%3 * 3.5; 
                this.ledUp[i].name = "BF";    
                this.ledSide[i].position.x  = -0.1;                
                this.ledSide[i].position.z =1 + i%3 * 3.5;
                this.ledSide[i].rotation.z = -Math.PI/2 + Math.PI/12;    
                this.ledSide[i].name = "BF";

            }else if ( i < 9){
                this.ledUp[i].position.x = 1 + i%3 * 3.5;                
                this.ledUp[i].position.z =  9.5;
                this.ledUp[i].rotation.y = Math.PI/2;       
                this.ledUp[i].name = "BL";        
                this.ledSide[i].position.x  = 1 + i%3 * 3.5;                
                this.ledSide[i].position.z = 9.18;
                this.ledSide[i].rotation.y = -Math.PI/2;
                this.ledSide[i].rotation.z = -Math.PI/2 - Math.PI/12;        
                this.ledSide[i].name = "BL";
            }else{
                this.ledUp[i].position.x = 9.5;                
                this.ledUp[i].position.z = 1 + i%3 * 3.5;
                this.ledUp[i].rotation.y = Math.PI;        
                this.ledUp[i].name = "BB";                      
                this.ledSide[i].position.x  = 9.18;                
                this.ledSide[i].position.z =1 + i%3 * 3.5;
                this.ledSide[i].rotation.z = -Math.PI/2 - Math.PI/12;        
                this.ledSide[i].name = "BB";
            }


            
    
    
    
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
    let  nippleLineShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21),
        new BABYLON.Vector3(-0.21,0, -0.29)			                    
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

    let  nippleLineShapeB = [ new BABYLON.Vector3(-0.21,1.35, 0.71),		
        new BABYLON.Vector3(0.21,1.35, 0.71), 
        new BABYLON.Vector3(0.29,1.35, 0.79),    
        new BABYLON.Vector3(0.29,1.35, 1.21), 
        new BABYLON.Vector3(0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.29,1.35, 1.21), 
        new BABYLON.Vector3(-0.29, 1.35, 0.79),
        new BABYLON.Vector3(-0.21,1.35, 0.71)			                    
    ];
	
	//Create lines 
	let nippleLine = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShape}, scene); 
    nippleLine.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    nippleLine.isPickable = false;
    nippleLine.position.y = 0.16;

    // baseSidePlane -------------------------------------------------------

    let baseSideShape = [ new BABYLON.Vector3( -4.8,-5,0),		
        new BABYLON.Vector3( -5,-4.8,0),	
        new BABYLON.Vector3( -5,4.8,0), 
        new BABYLON.Vector3( -4.8,5,0),    
        new BABYLON.Vector3( 4.8,5,0),        
        new BABYLON.Vector3( 5,4.8,0),   
        new BABYLON.Vector3( 5,-4.8,0),    
        new BABYLON.Vector3( 4.8,-5,0)                            
        ];

    baseSideShape.push(baseSideShape[0]); //why?

	var myPath = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, 0, 0.1),
        new BABYLON.Vector3(0, 0, 0.2),
        new BABYLON.Vector3(0, 0, 1.19)
      
        ];

    var scaling = function(i, distance) {
        if(i == 0){
            return 1;
        }else if(i == 1){
            return 1;
        }else if(i == 2){
            return 0.95;
        }else if(i == 3){
            return 0.9;
        }

    };

    let baseSidePlane = BABYLON.MeshBuilder.ExtrudeShapeCustom("baseSidePlane", {shape: baseSideShape, path: myPath, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.BACKSIDE, updatable: false}, scene);
    baseSidePlane.rotation.x = Math.PI/2;
    baseSidePlane.position.x =4.5; 
    baseSidePlane.position.z =4.5;
    baseSidePlane.isPickable = false;

     // baseTopPlane -------------------------------------------------------

     let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
        new BABYLON.Vector3( -5,0,-4.8),	
        new BABYLON.Vector3( -5,0,4.8), 
        new BABYLON.Vector3( -4.8,0,5),    
        new BABYLON.Vector3( 4.8,0,5),        
        new BABYLON.Vector3( 5,0,4.8),   
        new BABYLON.Vector3( 5,0,-4.8),    
        new BABYLON.Vector3( 4.8,0,-5)                        
        ];

    let baseTopPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:baseTopShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;
    baseTopPlane.isPickable = false;

        let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        baseNipple.rotation.x = Math.PI;
    
        // baseNipple -------------------------------------------------------
    
        baseNipple.isPickable = false;
        for (let x= 0; x< 10; ++x) {  
    
            for(let y=0; y<10; y++){        
    
                if( x == 0 && y ==0){		
                                     
                }else{
                    let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                    baseNipples.position.x = x;
                    baseNipples.position.z = y;
                    baseNipples.isPickable = false;
    
                    let nippleLines = nippleLine.clone("nippleLine: " +x+y);
                    nippleLines.position.x = x;
                    nippleLines.position.z = y;
                    nippleLines.isPickable = false;
       
                }        
            }
        }
    
        // materials -------------------------------------------------------
            
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
 
        this.ledMaterials[0] = new BABYLON.StandardMaterial("NA", scene);
        this.ledMaterials[1] = new BABYLON.StandardMaterial("RED", scene);
        this.ledMaterials[2] = new BABYLON.StandardMaterial("GREEN", scene);
        this.ledMaterials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
        this.ledMaterials[4] = new BABYLON.StandardMaterial("BLUE", scene);
        this.ledMaterials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
        this.ledMaterials[6] = new BABYLON.StandardMaterial("CYAN", scene);
        this.ledMaterials[7] = new BABYLON.StandardMaterial("WHITE", scene);
    
        let emissiveColor = 0.2;

        this.ledMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
        this.ledMaterials[0].emissiveColor = new BABYLON.Color3(0, 0, 0);
        this.ledMaterials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
        this.ledMaterials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
        this.ledMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
        this.ledMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
        this.ledMaterials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
        this.ledMaterials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
        this.ledMaterials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
        this.ledMaterials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
        this.ledMaterials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
        this.ledMaterials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
        this.ledMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
        this.ledMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
        this.ledMaterials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
        this.ledMaterials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
         
        whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        whiteMaterial.emissiveColor = new BABYLON.Color3(0.12, 0.12, 0.12);
        //whiteMaterial.alpha = 100;
        whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);
    
        baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;
        baseSidePlane.material  =  whiteMaterial  ;
        
    },
    render : function(){

        this.ledUp[6].material = this.ledMaterials[this.ledHex[0] >>3];              
        this.ledUp[3].material = this.ledMaterials[this.ledHex[0] & 0x07];
        this.ledUp[0].material = this.ledMaterials[this.ledHex[1] >>3];
        this.ledUp[9].material = this.ledMaterials[this.ledHex[1] & 0x07];

        this.ledSide[6].material = this.ledMaterials[this.ledHex[0] >>3];              
        this.ledSide[3].material = this.ledMaterials[this.ledHex[0] & 0x07];
        this.ledSide[0].material = this.ledMaterials[this.ledHex[1] >>3];
        this.ledSide[9].material = this.ledMaterials[this.ledHex[1] & 0x07];

    },

}








