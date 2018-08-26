let algoBlockPixel = {

  setColor: function(pixels, color, colorBlock, blinkBlock, colorOnlyBlockSection){
    for(let i= 0; i < pixels.length; i++ ){ 
      pixels[i].color = color;
      if(colorBlock){
      /*  for(let a = 0; a <pixels[i].block.length; a++){        
          pixels[i].block[a].ledALeft = color;
          pixels[i].block[a].ledARight = color;
          pixels[i].block[a].ledBLeft = color;
          pixels[i].block[a].ledBRight = color;
          if(blinkBlock){
            pixels[i].block[a].ledALeftBlink = true;
            pixels[i].block[a].ledARightBlink = true;
            pixels[i].block[a].ledBLeftBlink = true;
            pixels[i].block[a].ledBRightBlink = true;
          }
      }*/
    /*  if(pixels[i].blocks.length == 0){
        console.log("ALAARM");
      }else{
        console.log("AA pixels[i].block[0].x: " + pixels[i].blocks[0].x);
      }*/
     // for(let a = 0; a < pixels[i].blocks.length; a++){
        if(colorOnlyBlockSection){
          if(pixels[i].block.twobytwo){
            if( pixels[i].block.rotation == 1 || pixels[i].block.rotation == 3){
              if(pixels[i].block.z == pixels[i].z){
              
                pixels[i].block.ledALeft = color;
              }else{
              
                pixels[i].block.ledARight = color;
              }
            }else{
              if(pixels[i].block.x == pixels[i].x){
              
                pixels[i].block.ledALeft = color;
              }else{
              
                pixels[i].block.ledARight = color;
              }

            }
          }else {
            if( pixels[i].block.rotation == 1){
             // console.log("1: " + pixels[i].block.z + ", " + pixels[i].z  )
              if(pixels[i].block.z == pixels[i].z){
                pixels[i].block.ledALeft = color;
              }else if(pixels[i].block.z -1 == pixels[i].z){
                pixels[i].block.ledARight= color;
              }else if(pixels[i].block.z -2 == pixels[i].z){
                pixels[i].block.ledBLeft = color;
              }else if(pixels[i].block.z -3 == pixels[i].z){
                pixels[i].block.ledBRight= color;
              }

            }else if(pixels[i].block.rotation == 3){
              //console.log("3: " + pixels[i].block.z + ", " + pixels[i].z  )
              if(pixels[i].block.z == pixels[i].z){
                pixels[i].block.ledALeft = color;
              }else if(pixels[i].block.z +1 == pixels[i].z){
                pixels[i].block.ledARight= color;
              }else if(pixels[i].block.z +2 == pixels[i].z){
                pixels[i].block.ledBLeft = color;
              }else if(pixels[i].block.z +3 == pixels[i].z){
                pixels[i].block.ledBRight= color;
              }

            }else if( pixels[i].block.rotation == 0){
              if(pixels[i].block.x == pixels[i].x){
                pixels[i].block.ledALeft = color;
              }else if(pixels[i].block.x +1 == pixels[i].x){
                pixels[i].block.ledARight= color;
              }else if(pixels[i].block.x +2 == pixels[i].x){
                pixels[i].block.ledBLeft = color;
              }else if(pixels[i].block.x +3 == pixels[i].x){
                pixels[i].block.ledBRight= color;
              }
            
            }else{             


              if(pixels[i].block.x == pixels[i].x){
                pixels[i].block.ledALeft = color;
              }else if(pixels[i].block.x -1 == pixels[i].x){
                pixels[i].block.ledARight= color;
              }else if(pixels[i].block.x -2 == pixels[i].x){
                pixels[i].block.ledBLeft = color;
              }else if(pixels[i].block.x -3 == pixels[i].x){
                pixels[i].block.ledBRight= color;
              }
            }

          } 

          //2x4?
        }
        else{
          pixels[i].block.ledALeft = color;
          pixels[i].block.ledARight = color;
          pixels[i].block.ledBLeft = color;
          pixels[i].block.ledBRight = color;
        }
      if(blinkBlock){
        pixels[i].block.ledALeftBlink = true;
        pixels[i].block.ledARightBlink = true;
        pixels[i].block.ledBLeftBlink = true;
        pixels[i].block.ledBRightBlink = true;
      }
     // }
      /*
      projs[i].block.ledALeft = color;
      projs[i].block.ledARight = color;
      projs[i].block.ledBLeft = color;
      projs[i].block.ledBRight = color;
      if(blinkBlock){
        projs[i].block.ledALeftBlink = true;
        projs[i].block.ledARightBlink = true;
        projs[i].block.ledBLeftBlink = true;
        projs[i].block.ledBRightBlink = true;
      }*/
      }
    }
  },

  findPixShape: function(fPixel, sPixels, careColor ){
    for(let i= 0; i < sPixels.length; i++ ){      
      if(fPixel.x == sPixels[i].x && fPixel.y == sPixels[i].y && fPixel.z == sPixels[i].z && (fPixel.color == sPixels[i].color || !careColor)){ //blinking?
        return i;
      }
    }

    return null;
  },
  differenceAndIntersect:  function(fPixels, sPixels, careColor){
    let fNotIntersect = [];
    let sIntersect = [];
    let fIntersect = [];
    let sNotIntersect = [];
    let sIntersectIndex = [];
    

    for(let i= 0; i < fPixels.length; i++ ){
      let sIndex;
      sIndex = this.findPixShape(fPixels[i], sPixels, careColor );
      if(sIndex == null){
        fNotIntersect.push( fPixels[i]); 
      }else{
        fIntersect.push( fPixels[i]); 
        sIntersectIndex[sIndex] = true;
      }
    }
    
    for(let i= 0; i < sPixels.length; i++ ){
      if(sIntersectIndex[i] != true){
        sNotIntersect.push( sPixels[i]);  
      }else{
        sIntersect.push( sPixels[i]); 
      }
    }

    let notIntersect = [];
    notIntersect[0] = fNotIntersect;
    notIntersect[1] = sNotIntersect;
    notIntersect[2] = fIntersect;
    notIntersect[3] = sIntersect;
    return notIntersect;

  }, 

  create : function(blocks){

    let pixel = [];    
    let bPC = 0;

    let xOffset = []; 
    let zOffset = []; 

    xOffset[0] = [0,0,1,1,   2,2,3,3];
    xOffset[1] = [0,1,0,1,   0,1,0,1];
    xOffset[2] = [0,0,-1,-1, -2,-2,-3,-3];
    xOffset[3] = [0,-1,0,-1, 0,-1,0,-1];

    zOffset[0] = [0,1,0,1,   0,1,0,1];
    zOffset[1] = [0,0,-1,-1, -2,-2,-3,-3];
    zOffset[2] = [0,-1,0,-1, 0,-1,0,-1];
    zOffset[3] = [0,0,1,1,   2,2,3,3];
            
    for(let i = 0; i < blocks.length; i++){
      
      let qtyPixels = 8;
      if(blocks[i].twobytwo){
        qtyPixels = 4;
      }

      for(let a = 0; a < qtyPixels; a++ ){
        pixel[bPC] =  Object.create(blockPixel);
        pixel[bPC].x = blocks[i].x + xOffset[blocks[i].rotation][a];  
        pixel[bPC].y = blocks[i].y;  
        pixel[bPC].z = blocks[i].z + zOffset[blocks[i].rotation][a];  
        pixel[bPC].block = blocks[i];

        if(a < 2){
          pixel[bPC].color = blocks[i].ledALeft;
          if(blocks[i].ledALeftBlink){
            pixel[bPC].color = 0;
          } 
        }else if(a <4){
          pixel[bPC].color = blocks[i].ledARight;
          if(blocks[i].ledARightBlink){
            pixel[bPC].color = 0;
          } 
        }else if(a < 6){
          pixel[bPC].color = blocks[i].ledBLeft;  
          if(blocks[i].ledBLeftBlink){
            pixel[bPC].color = 0;
          }       
        }else if(a < 8){
          pixel[bPC].color = blocks[i].ledBRight;
          if(blocks[i].ledBRightBlink){
            pixel[bPC].color = 0;
          }    
        }

        bPC++;
      }
    }
    return pixel;

    
  },
 
  move : function(pixels, x,y,z){
    returnPixels = [];
    for(let i = 0; i < pixels.length; i++){
      returnPixels[i] =  Object.create(blockPixel);
      returnPixels[i].x = pixels[i].x + x;
      returnPixels[i].y = pixels[i].y + y;
      returnPixels[i].z = pixels[i].z + z;
      returnPixels[i].color = pixels[i].color;
      returnPixels[i].block = pixels[i].block;      
    }
    return returnPixels;
  },
  differenceAndIntersectFree : function(fPixels, sPixels, careColor, careRotation){
    for(let i = 0; i < fPixels.length; i++){
      let moveFPixels = this.move(fPixels, sPixels[0].x - fPixels[i].x,  sPixels[0].y - fPixels[i].y, sPixels[0].z - fPixels[i].z );
      let diffAndInt = this.differenceAndIntersect(moveFPixels, sPixels, careColor);

      if(diffAndInt[0].length == 0){
        return diffAndInt;
      }

      if(!careRotation){

        for(let a=1; a < 4; a++){
          moveFPixels = this.rotate(fPixels, a);
          moveFPixels = this.move(moveFPixels, sPixels[0].x - moveFPixels[i].x,  sPixels[0].y - moveFPixels[i].y, sPixels[0].z - moveFPixels[i].z );
          diffAndInt = this.differenceAndIntersect(moveFPixels, sPixels, careColor);
    
          if(diffAndInt[0].length == 0){
            return diffAndInt;
          }

        }


      }


    /*  console.log("i: " +i);
      console.log("moveFPixels[0].x " + moveFPixels[0].x);      
      console.log("sPixels[0].x " + sPixels[0].x);
      console.log("diffAndInt[0].length: " + diffAndInt[0].length);
      console.log("diffAndInt[1].length: " + diffAndInt[1].length);*/

    }
    return null;
  },
  rotate: function(pixels, rotation){
    let returnPixels = [];
    for(let i = 0; i < pixels.length; i++){
      returnPixels[i] = Object.create(blockPixel); 
      returnPixels[i].y = pixels[i].y ;     
      returnPixels[i].color = pixels[i].color;
      returnPixels[i].block = pixels[i].block;    

      if(rotation == 0){
        returnPixels[i].z = pixels[i].z;
        returnPixels[i].x = pixels[i].x;
      }else if(rotation == 1){
        returnPixels[i].z = -pixels[i].x;
        returnPixels[i].x = pixels[i].z;
      }else if(rotation == 2){
        returnPixels[i].z = -pixels[i].z;
        returnPixels[i].x = -pixels[i].x;
      }else{
        returnPixels[i].z = pixels[i].x;
        returnPixels[i].x = -pixels[i].z;
      }



    }
    return returnPixels;
  },

};