

let numbers = {
  x : -1,
  y : -2,
  z : 4.5, 
  rx: -Math.PI/4,
  ry: Math.PI/2,
  rz: 0,
  scaleing : 0.1875, 
  scaleingFraction : 0.5,   
  offset: 1,
  offsetUpFraction : 0.7,
  offsetFraction : -1.3,
  meshes: [],
  scene: 0,
  materials: [],
  loading: false,
  myMeshLeft: null,
  myMeshCenter: null,
  myMeshRight: null,
  init: function(scene){
    this.scene = scene;
    
    let emissiveColorC = 0.1;
    let transparencyCavityC = 0.4;

    this.materials[0] = new BABYLON.StandardMaterial("NA", scene);
    this.materials[1] = new BABYLON.StandardMaterial("RED", scene);
    this.materials[2] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materials[4] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materials[6] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materials[7] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materials[8] = new BABYLON.StandardMaterial("NA", scene);
    this.materials[9] = new BABYLON.StandardMaterial("RED", scene);
    this.materials[10] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materials[11] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materials[12] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materials[13] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materials[14] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materials[15] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materials[16] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
    this.materials[17] = new BABYLON.StandardMaterial("RED", scene);
    
        
    this.materials[0].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    this.materials[0].emissiveColor = new BABYLON.Color3(0, 0, 0);
    this.materials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materials[1].emissiveColor = new BABYLON.Color3(0, 0, 0);
    this.materials[1].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
    this.materials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materials[2].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
    this.materials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materials[3].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
    this.materials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
    this.materials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materials[5].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
    this.materials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materials[6].emissiveColor = new BABYLON.Color3(0, emissiveColorC, emissiveColorC);
    this.materials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

    this.materials[8].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    this.materials[8].emissiveColor = new BABYLON.Color3(0, 0, 0);
    this.materials[8].alpha =  transparencyCavityC;
    this.materials[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materials[9].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
    this.materials[9].alpha =  transparencyCavityC;
    this.materials[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materials[10].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
    this.materials[10].alpha =  transparencyCavityC;
    this.materials[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materials[11].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
    this.materials[11].alpha =  transparencyCavityC;
    this.materials[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materials[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
    this.materials[12].alpha =  transparencyCavityC;
    this.materials[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materials[13].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
    this.materials[13].alpha =  transparencyCavityC;
    this.materials[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materials[14].emissiveColor = new BABYLON.Color3(0, emissiveColorC, emissiveColorC);
    this.materials[14].alpha =  transparencyCavityC;
    this.materials[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materials[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    this.materials[15].alpha =  transparencyCavityC;

    this.materials[16].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
    this.materials[16].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    this.materials[16].alpha =  0;

    this.materials[17].diffuseColor = new BABYLON.Color3(1, 0.4, 0.4);
    this.materials[17].emissiveColor = new BABYLON.Color3(1, 0.4, 0.4);

  },

  loadInMeshes(){

    
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/0.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 0);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/1.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 1);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/2.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 2);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/3.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 3);}.bind(this));

    BABYLON.SceneLoader.ImportMesh("", "", "numbers/4.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 4);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/5.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 5);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/6.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 6);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/7.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 7);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/8.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 8);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/9.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 9);}.bind(this));
    
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/forth.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 10);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/half.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 11);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/third.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 12);}.bind(this));
   

    BABYLON.SceneLoader.ImportMesh("", "", "numbers/less.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 13);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/greater.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 14);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/equal.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 15);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/plus.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 16);}.bind(this));
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/minus.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 17);}.bind(this));
 
    BABYLON.SceneLoader.ImportMesh("", "", "numbers/x.jpg", this.scene, function(newMeshes, particleSystems, skeletons) {this.initMesh(newMeshes, particleSystems, skeletons, 18);}.bind(this));



    this.loading = true;

  },

  initMesh(newMeshes, particleSystems, skeletons, id){

    if(newMeshes.length > 0){
      
    this.meshes[id] = BABYLON.Mesh.MergeMeshes(newMeshes); 
    scene.meshes.pop();
    }
    
    for(let i = 0; i < 19; i++){
      if(this.meshes[i] == null){
        
        return;
      }
    }



this.loading = false;
    
    


  },

  disposeMesh(){
    if(this.myMeshRight != null){
      this.myMeshRight.dispose();  
    }
    if(this.myMeshCenter != null){
      this.myMeshCenter.dispose(); 
    }
    if(this.myMeshLeft != null){
      this.myMeshLeft.dispose(); 
    }

  },


  configerMesh(mesh,  offsetX, offsetY, offsetZ, scaleing, color){

    mesh.isPickable = false;

    mesh.position.y = this.y + offsetY;
    mesh.position.z = this.z + offsetZ;
    mesh.position.x = this.x + offsetX;

    mesh.rotation.y =  this.ry;
    mesh.rotation.x =  this.rx;
    mesh.rotation.z =  this.rz;

    mesh.scaling = new BABYLON.Vector3(scaleing, scaleing, scaleing);

    mesh.material = numbers.materials[color];    

  },

  showSymbol(sym, color){

    this.disposeMesh();

    if(sym == "<"){
      this.myMeshCenter = this.meshes[13].clone("symbol");      
    }else if(sym == ">"){
      this.myMeshCenter = this.meshes[14].clone("symbol");    
    }else if(sym == "="){
      this.myMeshCenter = this.meshes[15].clone("symbol");    
    }else if(sym == "+"){
      this.myMeshCenter = this.meshes[16].clone("symbol");    
    }else if(sym == "-"){
      this.myMeshCenter = this.meshes[17].clone("symbol");    
    }else if(sym == "x"){
      this.myMeshCenter = this.meshes[18].clone("symbol");    
    }

    this.configerMesh(this.myMeshCenter, 0, 0, 0, this.scaleing, color);

  },

 

  showNumber(val, color){
    
    this.disposeMesh();

    if(val <10){
     
      this.myMeshCenter = this.meshes[Math.floor(val)].clone("number");
    }else{
      this.myMeshCenter = this.meshes[Math.floor(val%10)].clone("number");
      this.myMeshLeft = this.meshes[Math.floor(val/10)].clone("number");
      this.configerMesh(this.myMeshLeft, 0, 0, this.offset, this.scaleing, color);
    }

    if(val - Math.floor(val) > 0){
      
      if(val - Math.floor(val) <= 0.25){
        this.myMeshRight = this.meshes[10].clone("number");        
      }else if(val - Math.floor(val) <= 0.5){
        this.myMeshRight = this.meshes[11].clone("number");
      }else{
        this.myMeshRight = this.meshes[12].clone("number");
      }
      this.configerMesh(this.myMeshRight, 0, this.offsetUpFraction, this.offsetFraction, this.scaleingFraction, color);

    }

    this.configerMesh(this.myMeshCenter, 0, 0, 0, this.scaleing, color);
    
  },


  


}
