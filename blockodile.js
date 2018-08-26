
let blockodile = {
  numberPlane: [],
  flatPlane: [],
  scene: 0,
  materials: [],
  init: function(scene){
    this.scene = scene;
    
    let emissiveColorC = 0.8;
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

  renderNumber(x, z, xWidht, zWidth, color){


    //BABYLON.SceneLoader.ImportMesh("", "./../../", "scene.babylon", scene, function (meshes) { //without scene as first param
    /*BABYLON.SceneLoader.ImportMesh("", "./icon/", "gator.babylon", this.scene, function (meshes) { 
    } );*///without scene as first param
    
    //BABYLON.SceneLoader.ImportMesh("Obj_000008", "", "gator.jpg", this.scene,
    BABYLON.SceneLoader.ImportMesh("", "", "gator.jpg", this.scene,
    function(newMeshes, particleSystems, skeletons) {
      /*newMeshes.position.y = 3;
      for(let i = 0; newMeshes.lenght; i++){
        newMeshes[i].position.y =2;
      }*/
      
      newMeshes[0].position.y = 3;
      console.log("yeah");
      for(let i =0; i < newMeshes.length; i++){
        newMeshes[i].position.y = 3;
      }
    });

    /*!!
   BABYLON.SceneLoader.ImportMesh("Obj_000008", "", "gator.jpg", this.scene,
                               function(newMeshes, particleSystems, skeletons) {
    });*/
    /*
    BABYLON.SceneLoader.ImportMesh("", "", "gator.babylon", this.scene,
    function(newMeshes, particleSystems, skeletons) {
    });
*/
    for(let i = 0; i < this.numberPlane.lenght; i++){
      this.numberPlane[i].dispose();      
      this.numberPlane.pop();
    }

    var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene);
    //materialPlane.diffuseTexture = new BABYLON.Texture("./icon/number/2.svg", scene);
    
   /* let texture = new BABYLON.Texture("./icon/number/2.svg", scene);

    texture.hasAlpha = true;*/
    materialPlane.diffuseTexture = new BABYLON.Texture("./icon/number/2.svg", scene);
    materialPlane.diffuseTexture.hasAlpha = true;
    materialPlane.emissiveTexture = new BABYLON.Texture("./icon/number/2.svg", scene);
    materialPlane.emissiveColor = new BABYLON.Color3(1, 0, 0);

    //materialPlane.emissiveTexture = texture;
    //materialPlane.useAlphaFromDiffuseTexture = true;
    //materialPlane.useAlphaFromEmissiveTexture = true;
    /*materialPlane.diffuseTexture = texture;
    materialPlane.useAlphaFromDiffuseTexture = true;*/
    /*materialPlane.emissiveTexture = new BABYLON.Texture("./icon/number/2.svg", scene);
    
    //materialPlane.specularTexture = new BABYLON.Texture("./icon/number/2.svg", scene);
	  materialPlane.specularColor = new BABYLON.Color4(0, 0, 0, 0);
    //first make transperant plane

    materialPlane.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    materialPlane.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialPlane.alpha =  0.1;*/
    console.log("A");
    for(let i = 0; i < x.length; i++){
      console.log("B");
    this.numberPlane[i] = BABYLON.MeshBuilder.CreatePlane("basePlane", {width: xWidht[i]-1 + 0.5, height: zWidth[i]-1+0.5}, this.scene);
      this.numberPlane[i].isPickable = false;
      this.numberPlane[i].position.x = x[i];
      this.numberPlane[i].position.y = 3;
      this.numberPlane[i].position.z = z[i];
      this.numberPlane[i].material = materialPlane;
     // this.numberPlane[i].material = this.materials[color[i]];
     // this.numberPlane[i].rotation.y =  Math.PI/8;
      this.numberPlane[i].rotation.x =  Math.PI/2;
    }


  },
  renderFlat(x, z, xWidht, zWidth, color ){

    for(let i = 0; i < this.flatPlane.lenght; i++){
      this.flatPlane[i].dispose();      
      this.flatPlane.pop();
    }

    for(let i = 0 ; i < x.length; i++){

      this.flatPlane[i] = BABYLON.MeshBuilder.CreatePlane("basePlane", {width: xWidht[i]-1 + 0.5, height: zWidth[i]-1+0.5}, this.scene);
      this.flatPlane[i].isPickable = false;
      this.flatPlane[i].position.x = x[i];
      this.flatPlane[i].position.y = 0.01;
      this.flatPlane[i].position.z = z[i];
      this.flatPlane[i].material = this.materials[color[i]];
      this.flatPlane[i].rotation.x =  Math.PI/2;
    

    }

  },


}
