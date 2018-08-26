
let projection = {
  pitchY: 1.19,
  offsetY: 0.595,
  projPixelSideTemplate : 0,
  projPixelBottomTemplate : 0,
  projPixelSide: [],
  projPixelBottom: [],
  scene: 0,
  materialsBottom: [],
  materialsSide: [],
  init: function(scene){
    this.scene = scene;
    
    this.projPixelSide [0] = [];
    this.projPixelSide [1] = [];
    this.projPixelSide [2] = [];
    this.projPixelSide [3] = [];

    this.projPixelSideTemplate = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: this.pitchY}, scene);
    this.projPixelSideTemplate.setEnabled(0); 
    scene.meshes.pop();
      
    this.projPixelBottomTemplate = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: 1}, scene);
    this.projPixelBottomTemplate.setEnabled(0); 
    scene.meshes.pop();



    let emissiveColor = 0.8;
    let transparencyCavity = 0.4;


    this.materialsSide[0] = new BABYLON.StandardMaterial("NA", scene);
    this.materialsSide[1] = new BABYLON.StandardMaterial("RED", scene);
    this.materialsSide[2] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materialsSide[3] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materialsSide[4] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materialsSide[5] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materialsSide[6] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materialsSide[7] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materialsSide[8] = new BABYLON.StandardMaterial("NA", scene);
    this.materialsSide[9] = new BABYLON.StandardMaterial("RED", scene);
    this.materialsSide[10] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materialsSide[11] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materialsSide[12] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materialsSide[13] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materialsSide[14] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materialsSide[15] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materialsSide[16] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
    this.materialsSide[17] = new BABYLON.StandardMaterial("RED", scene);
    
        
    this.materialsSide[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsSide[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    this.materialsSide[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materialsSide[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
    this.materialsSide[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materialsSide[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
    this.materialsSide[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materialsSide[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
    this.materialsSide[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materialsSide[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
    this.materialsSide[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materialsSide[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
    this.materialsSide[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materialsSide[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
    this.materialsSide[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsSide[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

    this.materialsSide[8].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsSide[8].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    this.materialsSide[8].alpha =  transparencyCavity;
    this.materialsSide[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materialsSide[9].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
    this.materialsSide[9].alpha =  transparencyCavity;
    this.materialsSide[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materialsSide[10].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
    this.materialsSide[10].alpha =  transparencyCavity;
    this.materialsSide[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materialsSide[11].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
    this.materialsSide[11].alpha =  transparencyCavity;
    this.materialsSide[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materialsSide[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
    this.materialsSide[12].alpha =  transparencyCavity;
    this.materialsSide[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materialsSide[13].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
    this.materialsSide[13].alpha =  transparencyCavity;
    this.materialsSide[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materialsSide[14].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
    this.materialsSide[14].alpha =  transparencyCavity;
    this.materialsSide[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsSide[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    this.materialsSide[15].alpha =  transparencyCavity;

    this.materialsSide[16].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
    this.materialsSide[16].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    this.materialsSide[16].alpha =  0;

    this.materialsSide[17].diffuseColor = new BABYLON.Color3(1, 0.4, 0.4);
    this.materialsSide[17].emissiveColor = new BABYLON.Color3(1, 0.4, 0.4);


    let emissiveColorC = 0.8;
    let transparencyCavityC = 0.4;

    this.materialsBottom[0] = new BABYLON.StandardMaterial("NA", scene);
    this.materialsBottom[1] = new BABYLON.StandardMaterial("RED", scene);
    this.materialsBottom[2] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materialsBottom[3] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materialsBottom[4] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materialsBottom[5] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materialsBottom[6] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materialsBottom[7] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materialsBottom[8] = new BABYLON.StandardMaterial("NA", scene);
    this.materialsBottom[9] = new BABYLON.StandardMaterial("RED", scene);
    this.materialsBottom[10] = new BABYLON.StandardMaterial("GREEN", scene);
    this.materialsBottom[11] = new BABYLON.StandardMaterial("YELLOW", scene);
    this.materialsBottom[12] = new BABYLON.StandardMaterial("BLUE", scene);
    this.materialsBottom[13] = new BABYLON.StandardMaterial("PURPLE", scene);
    this.materialsBottom[14] = new BABYLON.StandardMaterial("CYAN", scene);
    this.materialsBottom[15] = new BABYLON.StandardMaterial("WHITE", scene);

    this.materialsBottom[16] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
    this.materialsBottom[17] = new BABYLON.StandardMaterial("RED", scene);
    
        
    this.materialsBottom[0].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    this.materialsBottom[0].emissiveColor = new BABYLON.Color3(0, 0, 0);
    this.materialsBottom[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materialsBottom[1].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
    this.materialsBottom[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materialsBottom[2].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
    this.materialsBottom[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materialsBottom[3].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
    this.materialsBottom[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materialsBottom[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
    this.materialsBottom[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materialsBottom[5].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
    this.materialsBottom[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materialsBottom[6].emissiveColor = new BABYLON.Color3(0, emissiveColorC, emissiveColorC);
    this.materialsBottom[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsBottom[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

    this.materialsBottom[8].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    this.materialsBottom[8].emissiveColor = new BABYLON.Color3(0, 0, 0);
    this.materialsBottom[8].alpha =  transparencyCavityC;
    this.materialsBottom[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.materialsBottom[9].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
    this.materialsBottom[9].alpha =  transparencyCavityC;
    this.materialsBottom[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.materialsBottom[10].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
    this.materialsBottom[10].alpha =  transparencyCavityC;
    this.materialsBottom[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
    this.materialsBottom[11].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
    this.materialsBottom[11].alpha =  transparencyCavityC;
    this.materialsBottom[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.materialsBottom[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
    this.materialsBottom[12].alpha =  transparencyCavityC;
    this.materialsBottom[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
    this.materialsBottom[13].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
    this.materialsBottom[13].alpha =  transparencyCavityC;
    this.materialsBottom[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
    this.materialsBottom[14].emissiveColor = new BABYLON.Color3(0, emissiveColorC, emissiveColorC);
    this.materialsBottom[14].alpha =  transparencyCavityC;
    this.materialsBottom[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materialsBottom[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    this.materialsBottom[15].alpha =  transparencyCavityC;

    this.materialsBottom[16].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
    this.materialsBottom[16].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    this.materialsBottom[16].alpha =  0;

    this.materialsBottom[17].diffuseColor = new BABYLON.Color3(1, 0.4, 0.4);
    this.materialsBottom[17].emissiveColor = new BABYLON.Color3(1, 0.4, 0.4);


  },

  render(projPixelLeft, projPixelRight, projPixelBack, projPixelFront, projPixelBottom ){

      this.renderProjection(this.projPixelSideTemplate, projPixelLeft, this.projPixelSide[0], this.materialsSide, 0, this.offsetY, 9.5, 0, 0);
      this.renderProjection(this.projPixelSideTemplate, projPixelRight, this.projPixelSide[1], this.materialsSide, 0, this.offsetY,  -0.5, 0, Math.PI);

    this.renderProjection(this.projPixelSideTemplate, projPixelBack, this.projPixelSide[2], this.materialsSide, 9.5, this.offsetY, 0, 0, Math.PI/2);
    this.renderProjection(this.projPixelSideTemplate, projPixelFront, this.projPixelSide[3], this.materialsSide, -0.5, this.offsetY,  0, 0,  -Math.PI/2);

    this.renderProjection(this.projPixelBottomTemplate, projPixelBottom, this.projPixelBottom, this.materialsBottom, 0, 0.01,  0, Math.PI/2, 0);

  },

  renderProjection : function(template, proj, projPixel, material, offsetX, offsetY, offsetZ,  rotationX, rotationY){  
    let i;
    for(i = 0; i < proj.length; i++){


      if(projPixel[i] == null){          
        projPixel[i] = template.clone("P");
        
      }
      projPixel[i].isPickable = false;
      projPixel[i].position.x = proj[i].x + offsetX;
      projPixel[i].position.y = offsetY + proj[i].y * this.pitchY;
      projPixel[i].position.z = proj[i].z + offsetZ;
      projPixel[i].material = material[proj[i].color];
      projPixel[i].rotation.y = rotationY;
      projPixel[i].rotation.x = rotationX;
      projPixel[i].setEnabled(1); 
     

    }

    for(let a = projPixel.length - 1; a >= i; a--){
      projPixel[a].dispose();      
      projPixel.pop();

    }
  }
}
