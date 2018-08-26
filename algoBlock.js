let algoBlock = {
  
  transform: function(blocks, x,y,z,rotation){
    let returnBlocks = [];
    let zeroX;
    let zeroZ;
    for(let i = 0; i < blocks.length; i++){
      returnBlocks[i] = Object.create(block); 
      returnBlocks[i].ledALeft = blocks[i].ledALeft;
      returnBlocks[i].ledARight = blocks[i].ledARight;
      returnBlocks[i].ledBLeft = blocks[i].ledBLeft;
      returnBlocks[i].ledBRight = blocks[i].ledBRight;
      
      returnBlocks[i].rotation = (blocks[i].rotation + rotation) % 4;

      if(rotation == 0){
        returnBlocks[i].z = blocks[i].z;
        returnBlocks[i].x = blocks[i].x;
      }else if(rotation == 1){
        returnBlocks[i].z = -blocks[i].x;
        returnBlocks[i].x = blocks[i].z;
      }else if(rotation == 2){
        returnBlocks[i].z = -blocks[i].z;
        returnBlocks[i].x = -blocks[i].x;
      }else{
        returnBlocks[i].z = blocks[i].x;
        returnBlocks[i].x = -blocks[i].z;
      }

      if(i == 0){
        zeroX = blocks[i].x - returnBlocks[i].x;
        zeroZ = blocks[i].z - returnBlocks[i].z;
      }

      returnBlocks[i].x += zeroX + x;
      returnBlocks[i].z += zeroZ + z;
      returnBlocks[i].y = blocks[i].y + y;
      returnBlocks[i].twobytwo = blocks[i].twobytwo;

    }
    return returnBlocks;
  },
  find: function(fBlock, sBlocks ){    
    for(let i= 0; i < sBlocks.length; i++ ){
      
      if( fBlock.x == sBlocks[i].x && 
          fBlock.y == sBlocks[i].y &&
          fBlock.z == sBlocks[i].z &&
          fBlock.rotation == sBlocks[i].rotation &&
          fBlock.twobytwo == sBlocks[i].twobytwo ){           
            return sBlocks[i];  
      }
      
    }
    return null;
  },
  setAllLed(block, color, blink){
    block.ledALeft = color;
    block.ledARight = color;
    block.ledBLeft = color;
    block.ledBRight = color;
    block.ledALeftBlink = blink;
    block.ledARightBlink = blink;
    block.ledBLeftBlink = blink;
    block.ledBRightBlink = blink;
  },
  clearLed(blocks){
    for(let i= 0; i < blocks.length; i++ ){
      blocks[i].ledALeft = 0;
      blocks[i].ledARight = 0;
      blocks[i].ledBLeft = 0;
      blocks[i].ledBRight = 0;
      blocks[i].ledALeftBlink = false;
      blocks[i].ledARightBlink = false;
      blocks[i].ledBLeftBlink = false;
      blocks[i].ledBRightBlink = false;
      
    }

  },
  findMaxY: function(blocks){
    let maxY = 0;
    for(let i= 0; i < blocks.length; i++ ){
      if(blocks[i].y > maxY ){
        maxY = blocks[i].y;
      }
    }
    return maxY;
  },  
  findBlockShape: function(fBlock, sBlocks ){
    //let indexAndMatchRotation = [];
    //indexAndMatchRotation[1] = true;
    for(let i= 0; i < sBlocks.length; i++ ){
      
      if(fBlock.y == sBlocks[i].y){
        if(fBlock.twobytwo && sBlocks[i].twobytwo){
          if(fBlock.rotation == sBlocks[i].rotation && fBlock.x == sBlocks[i].x && fBlock.z == sBlocks[i].z){            
            return [i, true, true];
            //--fBlock =blocksRT
            // levelBlockRT == sBlocks
          }else if((fBlock.rotation) == 0){
            if(sBlocks[i].rotation - fBlock.rotation ==  1 &&
              sBlocks[i].x == fBlock.x &&
              sBlocks[i].z - 1 == fBlock.z ){
                return [i, false, false];
            }else if(sBlocks[i].rotation - fBlock.rotation ==  2 &&
              sBlocks[i].x - 1 == fBlock.x &&
              sBlocks[i].z - 1 == fBlock.z ){
                return [i, true, false];
            }else if(sBlocks[i].rotation - fBlock.rotation ==  3 &&
              sBlocks[i].x - 1 == fBlock.x &&
              sBlocks[i].z == fBlock.z ){
                return [i, false, false];
            }              
          }else if(fBlock.rotation == 1){
            if(sBlocks[i].rotation - fBlock.rotation ==  1 &&
              sBlocks[i].x -1 == fBlock.x &&
              sBlocks[i].z  == fBlock.z ){
                return [i, false, false];
            }else if(sBlocks[i].rotation - fBlock.rotation ==  2 &&
              sBlocks[i].x - 1 == fBlock.x &&
              sBlocks[i].z + 1 == fBlock.z ){
                return [i, true, false];              
            }else if(sBlocks[i].rotation - fBlock.rotation ==  -1 &&
              sBlocks[i].x == fBlock.x &&
              sBlocks[i].z +1 == fBlock.z ){
                return [i, false, false];             
            }          
          }else if(fBlock.rotation == 2){
            if(sBlocks[i].rotation - fBlock.rotation ==  1 &&
              sBlocks[i].x == fBlock.x &&
              sBlocks[i].z + 1 == fBlock.z ){
                return [i, false, false];
            }else if(sBlocks[i].rotation - fBlock.rotation ==  -2 &&
              sBlocks[i].x + 1 == fBlock.x &&
              sBlocks[i].z + 1 == fBlock.z ){
                return [i, true, false];              
            }else if(sBlocks[i].rotation - fBlock.rotation ==  -1 &&
              sBlocks[i].x + 1 == fBlock.x &&
              sBlocks[i].z == fBlock.z ){
                return [i, false, false];              
            }       
          }else if(fBlock.rotation == 3){
            if(sBlocks[i].rotation - fBlock.rotation ==  -3 &&
              sBlocks[i].x +1 == fBlock.x &&
              sBlocks[i].z  == fBlock.z ){
                return [i, false, false];
            }else if(sBlocks[i].rotation - fBlock.rotation ==  -2 &&
              sBlocks[i].x + 1 == fBlock.x &&
              sBlocks[i].z - 1 == fBlock.z ){
                return [i, true, false];              
            }else if(sBlocks[i].rotation - fBlock.rotation ==  -1 &&
              sBlocks[i].x  == fBlock.x &&
              sBlocks[i].z -1 == fBlock.z ){
                return [i, false, false];
              
            }
          }
          //--
       
        }else if(!fBlock.twobytwo && !sBlocks[i].twobytwo){
          if(fBlock.rotation == sBlocks[i].rotation && fBlock.x == sBlocks[i].x && fBlock.z == sBlocks[i].z){
            return [i, true, false];
          }else if(fBlock.rotation == 0 && 
            sBlocks[i].rotation == 2 &&
            fBlock.x +3 == sBlocks[i].x &&
            fBlock.z +1 == sBlocks[i].z )
          {
            return [i, true, false];
          }else if(fBlock.rotation == 1 && 
            sBlocks[i].rotation == 3 &&
            fBlock.x +1 == sBlocks[i].x &&
            fBlock.z -3 == sBlocks[i].z ){
              return [i, true, false];
          }else if(fBlock.rotation == 2 && 
            sBlocks[i].rotation == 0 &&
            fBlock.x -3 == sBlocks[i].x &&
            fBlock.z -1 == sBlocks[i].z ){
              return [i, true, false];
          }else if(fBlock.rotation == 3 && 
            sBlocks[i].rotation == 1 &&
            fBlock.x -1 == sBlocks[i].x &&
            fBlock.z +3 == sBlocks[i].z ){
              return [i, true, false];
          }
        }
      }
    }
    return null;
  }, 
  copyColorSetting: function(fBlocks, sBlocks ){
    for(let i = 0; i < fBlocks.length; i++){
      let tmpBlock = this.find(fBlocks[i], sBlocks );

      if(tmpBlock != null){       
        fBlocks[i].ledALeft = tmpBlock.ledALeft;
        fBlocks[i].ledARight = tmpBlock.ledARight ;
        fBlocks[i].ledBLeft = tmpBlock.ledBLeft;
        fBlocks[i].ledBRight  = tmpBlock.ledBRight ;
        fBlocks[i].ledALeftBlink = tmpBlock.ledALeftBlink;
        fBlocks[i].ledARightBlink = tmpBlock.ledARightBlink ;
        fBlocks[i].ledBLeftBlink = tmpBlock.ledBLeftBlink;
        fBlocks[i].ledBRightBlink  = tmpBlock.ledBRightBlink ;


      }

    }

  }, /* Equal
  Additional block
  Remaining block
*/
  // f
 // notIntersect: function(fBlocks, sBlocks){

  differenceAndIntersect: function(fBlocks, sBlocks){
    let fNotIntersect = [];
    let sIntersect = [];
    let fIntersect = [];
    let fIntersectMatchRotation = [];
    let fIntersectMatchRotationFull = [];
    let sNotIntersect = [];

    for(let i= 0; i < fBlocks.length; i++ ){
      let sIndex;
      sIndex = this.findBlockShape(fBlocks[i], sBlocks );
      if(sIndex == null){
        fNotIntersect.push( fBlocks[i]); 
      }else{
        fIntersect.push( fBlocks[i]); 
        fIntersectMatchRotation.push(sIndex[1]);
        fIntersectMatchRotationFull.push(sIndex[2]);

        sIntersect[sIndex[0]] = true;
      }
    }
    
    for(let i= 0; i < sBlocks.length; i++ ){
      if(sIntersect[i] != true){
        sNotIntersect.push( sBlocks[i]);  
      }
    }

    let notIntersect = [];
    notIntersect[0] = fNotIntersect;
    notIntersect[1] = sNotIntersect;
    notIntersect[2] = fIntersect;
    notIntersect[3] = fIntersectMatchRotation;
    notIntersect[4] = fIntersectMatchRotationFull;
    return notIntersect;

  }, 
  equal : function(){

    return false;
  }

};