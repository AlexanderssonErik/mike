let shapeHunter = {
    winningDampenerCount: 0,    
    notActiveAnymore: function(){
        world.unHideBlocks();
    },
    
    init: function(){
        world.hideBlocks();
    },
    clear : function(){
        algoBlock.clearLed(world.block);
    },
    render: function (){
        
        let foundPixels = 0;
        let levelPixels = shapeHunterLevel.getBlockPixels();
        let hitForbidden = false;


        for(let i = 0; i < world.block.length; i++){
            let gamePixels = algoBlockPixel.create([world.block[i]]);        
            let diffAndInts = algoBlockPixel.differenceAndIntersect(gamePixels, levelPixels, false);

            let hitLocalForbidden = false;
            //hitForbidden = false;
            for(let a = 0; a < diffAndInts[3].length; a++){                
                if(diffAndInts[3][a].color == globalWorldColor.red){
                    //console.log("hit forbidden!!");
                    hitForbidden = true;
                    hitLocalForbidden = true;
                }
            }

            if(hitLocalForbidden){ 
                
          
                
                if(shapeHunterLevel.noLedOnForbidden()){
                    for(let a = 0; a < world.block.length; a++){
                        algoBlock.setAllLed(world.block[a], 0, false ); 

                    }     
                    algoBlock.setAllLed(world.block[i], globalWorldColor.red, false );         
                    break;
                }else{                    
                    algoBlock.setAllLed(world.block[i], globalWorldColor.red, false );   
                }              
            }else if((diffAndInts[2].length == 4 && world.block[i].twobytwo) || (diffAndInts[2].length == 8 && !world.block[i].twobytwo)){
                foundPixels += diffAndInts[2].length;
                algoBlock.setAllLed(world.block[i], globalWorldColor.green, false );
            }else if(diffAndInts[2].length >0){
                algoBlock.setAllLed(world.block[i], globalWorldColor.yellow, false );
            }else{
                let shortestDistance = 999;
                let closestPixel = [];

                for(let a = 0; a < gamePixels.length; a++){
                    for(let b = 0; b < levelPixels.length; b++){
                        if(levelPixels[b].color != globalWorldColor.red){
                        let dist = Math.abs(gamePixels[a].x - levelPixels[b].x) + Math.abs(gamePixels[a].z - levelPixels[b].z) + Math.abs(gamePixels[a].y - levelPixels[b].y);
                        if(dist < shortestDistance){
                            shortestDistance = dist;
                            closestPixel = [];                            
                            closestPixel.push( gamePixels[a]);                            
                        }else if(dist == shortestDistance){
                            closestPixel.push( gamePixels[a]); 
                        }
                        }
                    }
                }
                algoBlockPixel.setColor(closestPixel, globalWorldColor.blue, true, false, true)
            }

        }

        for(let i = 0; i < levelPixels.length; i++){
            if(levelPixels[i].color == globalWorldColor.red){               
                foundPixels++;
            }
        }
        if(hitForbidden){
            activeGame.progression(levelPixels.length , foundPixels, levelPixels.length );
        }else{
            activeGame.progression(0 , foundPixels , levelPixels.length );
        }
        
      

        if(!hitForbidden && foundPixels == levelPixels.length ){

            if(this.winningDampenerCount < 4){
                this.winningDampenerCount++;
            }else if(this.winningDampenerCount == 4){
                this.winningDampenerCount++;                
                activeGame.win();                
            }

        }else{
            this.winningDampenerCount = 0;
        }
             
    }
};