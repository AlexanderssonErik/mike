let algoProjection = {

  copy : function(proj){
    let retproj = [];
    

    for(let i = 0; i < proj.length; i++){
      retproj[i] = Object.create(projectionPixel);
      
      retproj[i].x = proj[i].x;
      retproj[i].y = proj[i].y;
      retproj[i].z = proj[i].z;

      retproj[i].color = proj[i].color;

      retproj[i].max = proj[i].max;
      retproj[i].min = proj[i].min;
      retproj[i].count = proj[i].count;

      retproj[i].blocks = [];
      for(let a = 0; a <  proj[i].blocks[a].length; a++){
        retproj[i].blocks[a] = proj[i].blocks[a];
      }
    }
    return retproj;
   
  },


  colorCavity : function(proj){
    for(let i = 0; i < proj.length; i++){
      if( proj[i].max - proj[i].min > proj[i].count){
        proj[i].color +=8;
      }
    }

  },

  colorNoMix : function(proj, pixel, side, findMinColor){

    for(let i = 0; i < proj.length; i++){
      let color = 0;      
      let maxMin ;
      if(findMinColor){
        maxMin = 999;
      }else{
        maxMin = -999;
      }
      for(let a = 0; a < pixel.length; a++){
        let pixelPos;
        let found = false;
        if(side == 0 && proj[i].x == pixel[a].x && proj[i].y == pixel[a].y){
          pixelPos = pixel[a].z;
          found = true;
        }else if(side == 1 && proj[i].y == pixel[a].y && proj[i].z == pixel[a].z){
          pixelPos = pixel[a].x;
          found = true;
        }else if(side == 2 && proj[i].x == pixel[a].x && proj[i].z == pixel[a].z){
          pixelPos = pixel[a].y;
          found = true;
        }

        if(found){
          if(findMinColor){
            if(pixelPos < maxMin){
              maxMin = pixelPos;
              proj[i].color = pixel[a].color;
            }
          }else{
            if(pixelPos > maxMin){
              maxMin = pixelPos;
              proj[i].color = pixel[a].color;
            }
          }
        }
        
      }
      

    }

  },


  setColor: function(projs, color, colorBlock, blinkBlock, colorOnlyBlockSection){
    for(let i= 0; i < projs.length; i++ ){ 
      projs[i].color = color;
      if(colorBlock){
      for(let a = 0; a < projs[i].blocks.length; a++){
        if(colorOnlyBlockSection){
          if(projs[i].blocks[a].twobytwo){
            if( projs[i].blocks[a].rotation == 1 || projs[i].blocks[a].rotation == 3){
              if(projs[i].blocks[a].z == projs[i].z){
              
                projs[i].blocks[a].ledALeft = color;
              }else{
              
                projs[i].blocks[a].ledARight = color;
              }
            }else{
              if(projs[i].blocks[a].x == projs[i].x){
              
                projs[i].blocks[a].ledALeft = color;
              }else{
              
                projs[i].blocks[a].ledARight = color;
              }

            }
          }else {
            if( projs[i].blocks[a].rotation == 1){             
              if(projs[i].blocks[a].z == projs[i].z){
                projs[i].blocks[a].ledALeft = color;
              }else if(projs[i].blocks[a].z -1 == projs[i].z){
                projs[i].blocks[a].ledARight= color;
              }else if(projs[i].blocks[a].z -2 == projs[i].z){
                projs[i].blocks[a].ledBLeft = color;
              }else if(projs[i].blocks[a].z -3 == projs[i].z){
                projs[i].blocks[a].ledBRight= color;
              }

            }else if(projs[i].blocks[a].rotation == 3){
              if(projs[i].blocks[a].z == projs[i].z){
                projs[i].blocks[a].ledALeft = color;
              }else if(projs[i].blocks[a].z +1 == projs[i].z){
                projs[i].blocks[a].ledARight= color;
              }else if(projs[i].blocks[a].z +2 == projs[i].z){
                projs[i].blocks[a].ledBLeft = color;
              }else if(projs[i].blocks[a].z +3 == projs[i].z){
                projs[i].blocks[a].ledBRight= color;
              }

            }else if( projs[i].blocks[a].rotation == 0){
              if(projs[i].blocks[a].x == projs[i].x){
                projs[i].blocks[a].ledALeft = color;
              }else if(projs[i].blocks[a].x +1 == projs[i].x){
                projs[i].blocks[a].ledARight= color;
              }else if(projs[i].blocks[a].x +2 == projs[i].x){
                projs[i].blocks[a].ledBLeft = color;
              }else if(projs[i].blocks[a].x +3 == projs[i].x){
                projs[i].blocks[a].ledBRight= color;
              }
            
            }else{             


              if(projs[i].blocks[a].x == projs[i].x){
                projs[i].blocks[a].ledALeft = color;
              }else if(projs[i].blocks[a].x -1 == projs[i].x){
                projs[i].blocks[a].ledARight= color;
              }else if(projs[i].blocks[a].x -2 == projs[i].x){
                projs[i].blocks[a].ledBLeft = color;
              }else if(projs[i].blocks[a].x -3 == projs[i].x){
                projs[i].blocks[a].ledBRight= color;
              }
            }

          } 

          //2x4?
        }
        else{
          projs[i].blocks[a].ledALeft = color;
          projs[i].blocks[a].ledARight = color;
          projs[i].blocks[a].ledBLeft = color;
          projs[i].blocks[a].ledBRight = color;
        }
      if(blinkBlock){
        projs[i].blocks[a].ledALeftBlink = true;
        projs[i].blocks[a].ledARightBlink = true;
        projs[i].blocks[a].ledBLeftBlink = true;
        projs[i].blocks[a].ledBRightBlink = true;
      }
      }

      }
    }
  },

  findProjShape: function(fProj, sProjs, careColor ){
    for(let i= 0; i < sProjs.length; i++ ){      
      if(fProj.x == sProjs[i].x && fProj.y == sProjs[i].y && fProj.z == sProjs[i].z && (fProj.color == sProjs[i].color || !careColor)){ //blinking?
        return i;
      }
    }

    return null;
  },
  differenceAndIntersect:  function(fProjs, sProjs, careColor){
    let fNotIntersect = [];
    let sIntersect = [];
    let fIntersect = [];
    let sNotIntersect = [];

    

    for(let i= 0; i < fProjs.length; i++ ){
      let sIndex;
      sIndex = this.findProjShape(fProjs[i], sProjs, careColor );
      if(sIndex == null){
        fNotIntersect.push( fProjs[i]); 
      }else{
        fIntersect.push( fProjs[i]); 
        sIntersect[sIndex] = true;
      }
    }
    
    for(let i= 0; i < sProjs.length; i++ ){
      if(sIntersect[i] != true){
        sNotIntersect.push( sProjs[i]);  
      }
    }

    let notIntersect = [];
    notIntersect[0] = fNotIntersect;
    notIntersect[1] = sNotIntersect;
    notIntersect[2] = fIntersect;
    return notIntersect;

  }, 

  createNewProjectionPixel : function(proj,  pixel, side){
    let i = proj.length;
    
    proj[i] = Object.create(projectionPixel); 
    proj[i].color = pixel.color;


    proj[i].blocks = [];
    proj[i].blocks[0] = pixel.block

    if(side == 0){
      proj[i].x = pixel.x;
      proj[i].y = pixel.y;     
      proj[i].max = pixel.z;
      proj[i].min = pixel.z;
    }else if(side == 1){
    
      proj[i].y = pixel.y;
      proj[i].z = pixel.z;
      proj[i].max = pixel.x;
      proj[i].min = pixel.x;      
    }else{
      proj[i].x = pixel.x;   
      proj[i].z = pixel.z;      
      proj[i].max = pixel.y;
      proj[i].min = pixel.y;
    }

  },
  projectionPixelExist : function(proj, pixel, side){
    for(let i = 0; i < proj.length; i++ ){
      if(side == 0 && pixel.x == proj[i].x && pixel.y == proj[i].y ){
        if(pixel.z > proj[i].max){
          proj[i].max = pixel.z;
        }else if(pixel.z < proj[i].min){
          proj[i].min = pixel.z;
        }

        proj[i].count++;
        proj[i].color |= pixel.color;
        proj[i].blocks.push( pixel.block);
        return true;

      }else if(side == 1  && pixel.z == proj[i].z && pixel.y == proj[i].y){
        if(pixel.x > proj[i].max){
          proj[i].max = pixel.x;
        }else if(pixel.x < proj[i].min){
          proj[i].min = pixel.x;
        }

        proj[i].count++;
        proj[i].color |= pixel.color;
        proj[i].blocks.push( pixel.block);
        return true;

      }else if(side == 2  && pixel.x == proj[i].x && pixel.z == proj[i].z) {
        if(pixel.y > proj[i].max){
          proj[i].max = pixel.y;
        }else if(pixel.y < proj[i].min){
          proj[i].min = pixel.y;
        }

        proj[i].count++;
        proj[i].color |= pixel.color;
        proj[i].blocks.push( pixel.block);
        return true;
      }


    }

    return false;

  },
  
  create : function(pixels){

    let proj = []; //left, back top
    proj[0] = [];
    proj[1] = [];
    proj[2] = [];


    for(let i = 0; i < pixels.length; i++){


      if(!this.projectionPixelExist(proj[0], pixels[i], 0 )){
        this.createNewProjectionPixel(proj[0], pixels[i], 0 )
      }
  
      if(!this.projectionPixelExist(proj[1], pixels[i], 1 )){
        this.createNewProjectionPixel(proj[1], pixels[i], 1 )
      }
    
      if(!this.projectionPixelExist(proj[2], pixels[i], 2 )){
        this.createNewProjectionPixel(proj[2], pixels[i], 2 )
      }
    }
    return proj;
  }

};