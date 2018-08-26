let tangram = {
    winningDampenerCount: 0,  
    brushColor: 0,
    gamePixels: 0,
    notActiveAnymore: function(){
        projection.render([], [], [], [], []);
    },   

    init: function(){

    },

    clear : function(){
        this.brushColor = 0;
        algoBlock.clearLed(world.block);
    },
    render: function (){
        let blockPixels;
        
        if(tangramLevel.colorSelectorOnBase()){
            for(let i = 0; i < world.block.length; i++ ){
                    
                let blockPixel = algoBlockPixel.create([world.block[i]]); 
                let redPixel = algoBlockPixel.differenceAndIntersect(blockPixel, tangramLevel.redPixel)
                let greenPixel = algoBlockPixel.differenceAndIntersect(blockPixel, tangramLevel.greenPixel)
                let bluePixel = algoBlockPixel.differenceAndIntersect(blockPixel, tangramLevel.bluePixel)
    
                if(redPixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.red;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.red, false);
                
                }else if(greenPixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.green;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.green, false);
                
                }else if(bluePixel[0].length == 0 ){                    
                    this.brushColor = globalWorldColor.blue;
                    algoBlock.setAllLed(world.block[i], globalWorldColor.blue, false);
                
                }
    
            }

            blockPixels = algoBlockPixel.create(world.block); 
            let newGamePixels = algoBlockPixel.differenceAndIntersect(blockPixels, tangramLevel.redPixel.concat(tangramLevel.greenPixel, tangramLevel.bluePixel));
    
            newGamePixels = algoBlockPixel.differenceAndIntersect(newGamePixels[0], this.gamePixels);
    
            algoBlockPixel.setColor(newGamePixels[0], this.brushColor, true, false, false );
    
            this.gamePixels = [];
            this.gamePixels = newGamePixels[0].concat(newGamePixels[2] );


            blockPixels = this.gamePixels;


        }else{

            blockPixels = algoBlockPixel.create(world.block);
            
        }

        let projectionPixels = algoProjection.create(blockPixels);

      if(tangramLevel.colorCavity()){
          
        algoProjection.colorCavity(projectionPixels[0]);
        algoProjection.colorCavity(projectionPixels[1]);
        algoProjection.colorCavity(projectionPixels[2]);
      }

      let projectionPixelsSecond = [];
      let diffAndIntsSecond = [];
      
      if(tangramLevel.colorNoMix()){
        projectionPixelsSecond[0] = algoProjection.copy(projectionPixels[0]);
        projectionPixelsSecond[1] = algoProjection.copy(projectionPixels[1]);


        algoProjection.colorNoMix(projectionPixels[0], blockPixels, 0, false);
        algoProjection.colorNoMix(projectionPixelsSecond[0], blockPixels, 0, true);
        algoProjection.colorNoMix(projectionPixels[1], blockPixels, 1, false);
        algoProjection.colorNoMix(projectionPixelsSecond[1], blockPixels, 1, true);
        algoProjection.colorNoMix(projectionPixels[2], blockPixels, 2, true);

        diffAndIntsSecond[0] = algoProjection.differenceAndIntersect( projectionPixelsSecond[0] ,tangramLevel.projectionPixelsSecond[0], tangramLevel.careColor());   
        diffAndIntsSecond[1] = algoProjection.differenceAndIntersect( projectionPixelsSecond[1] ,tangramLevel.projectionPixelsSecond[1], tangramLevel.careColor()); 

      }

      let diffAndInts = [];
      diffAndInts[0] = algoProjection.differenceAndIntersect( projectionPixels[0] ,tangramLevel.projectionPixels[0], tangramLevel.careColor());   
      diffAndInts[1] = algoProjection.differenceAndIntersect( projectionPixels[1] ,tangramLevel.projectionPixels[1], tangramLevel.careColor());   
      diffAndInts[2] = algoProjection.differenceAndIntersect( projectionPixels[2] ,tangramLevel.projectionPixels[2], tangramLevel.careColor());
    
       if(tangramLevel.noHints()){

       }else{

        if(tangramLevel.errorBlinkOnlyOnOutOfField()){
            algoProjection.setColor(diffAndInts[1][2], tangramLevel.colorCorrect(), false, false);   
            algoProjection.setColor(diffAndInts[0][2], tangramLevel.colorCorrect(), false, false);        
            algoProjection.setColor(diffAndInts[2][2], tangramLevel.colorCorrect(), false, false);

            let diffAndIntsTmp = [];
            diffAndIntsTmp[0] = algoProjection.differenceAndIntersect( projectionPixels[0] ,tangramLevel.projectionPixels[0], false);
            diffAndIntsTmp[1] = algoProjection.differenceAndIntersect( projectionPixels[1] ,tangramLevel.projectionPixels[1], false);
            diffAndIntsTmp[2] = algoProjection.differenceAndIntersect( projectionPixels[2] ,tangramLevel.projectionPixels[2], false);

            algoProjection.setColor(diffAndIntsTmp[1][0], globalWorldColor.red, true, true );    
            algoProjection.setColor(diffAndIntsTmp[0][0], globalWorldColor.red, true, true );       
           algoProjection.setColor(diffAndIntsTmp[2][0], globalWorldColor.red, true, true );
           
           activeGame.progression(diffAndIntsTmp[1][0].length + diffAndIntsTmp[0][0].length + diffAndIntsTmp[2][0].length, diffAndIntsTmp[1][2].length + diffAndIntsTmp[0][2].length + diffAndIntsTmp[2][2].length ,tangramLevel.projectionPixels[0].length + tangramLevel.projectionPixels[1].length + tangramLevel.projectionPixels[2].length )

        }else{

            algoProjection.setColor(diffAndInts[1][2], tangramLevel.colorCorrect(), true, false);    
            if(tangramLevel.projectAllSides()){  
             algoProjection.setColor(diffAndInts[0][2], tangramLevel.colorCorrect(), true, false);        
             algoProjection.setColor(diffAndInts[2][2], tangramLevel.colorCorrect(), true, false);
            }

            algoProjection.setColor(diffAndInts[1][0], globalWorldColor.red, true, true );   
            
            if(tangramLevel.projectAllSides()){
                algoProjection.setColor(diffAndInts[0][0], globalWorldColor.red, true, true );       
                algoProjection.setColor(diffAndInts[2][0], globalWorldColor.red, true, true );                
                activeGame.progression(diffAndInts[1][0].length + diffAndInts[0][0].length + diffAndInts[2][0].length, diffAndInts[1][2].length + diffAndInts[0][2].length + diffAndInts[2][2].length ,tangramLevel.projectionPixels[0].length + tangramLevel.projectionPixels[1].length + tangramLevel.projectionPixels[2].length )

            }else{                
                activeGame.progression(diffAndInts[1][0].length , diffAndInts[1][2].length , tangramLevel.projectionPixels[1].length )

            }
        }
        }

        let renderProjection = [];
        let renderProjectionSecond = [];

        if(tangramLevel.hideCorrect()){

        renderProjection[0] =  diffAndInts[0][1];
        renderProjection[1] =  diffAndInts[1][1];
        renderProjection[2] =  diffAndInts[2][1];

            if(tangramLevel.colorNoMix()){
                renderProjectionSecond[0] = diffAndIntsSecond[0][1];
                renderProjectionSecond[1] = diffAndIntsSecond[1][1];
            }
        
        }else{
            renderProjection[0] =  diffAndInts[0][0].concat( diffAndInts[0][1], diffAndInts[0][2]);
            renderProjection[1] =  diffAndInts[1][0].concat( diffAndInts[1][1], diffAndInts[1][2]);
            renderProjection[2] =  diffAndInts[2][0].concat( diffAndInts[2][1], diffAndInts[2][2]);
            
            if(tangramLevel.colorNoMix()){
                renderProjectionSecond[0] = diffAndIntsSecond[0][0].concat( diffAndIntsSecond[0][1], diffAndIntsSecond[0][2]);
                renderProjectionSecond[1] = diffAndIntsSecond[1][0].concat( diffAndIntsSecond[1][1], diffAndIntsSecond[1][2]);
            }
        }

     if (tangramLevel.noHints()){
        if(tangramLevel.colorNoMix()){
            projection.render( tangramLevel.projectionPixels[0], tangramLevel.projectionPixelsSecond[0], tangramLevel.projectionPixels[1], tangramLevel.projectionPixelsSecond[1],  tangramLevel.projectionPixels[2]);
    
        }else{
            projection.render( tangramLevel.projectionPixels[0], tangramLevel.projectionPixels[0], tangramLevel.projectionPixels[1], tangramLevel.projectionPixels[1],  tangramLevel.projectionPixels[2]);
        }
     }else if(tangramLevel.projectAllSides()){
        if(tangramLevel.colorNoMix()){
            projection.render( renderProjection[0], renderProjectionSecond[0], renderProjection[1], renderProjectionSecond[1],  renderProjection[2]);
          
        }else{
            projection.render( renderProjection[0], renderProjection[0], renderProjection[1], renderProjection[1],  renderProjection[2]);
        }
       
     
     }else{
       if(tangramLevel.colorNoMix()){
            projection.render([], [], renderProjection[1], renderProjectionSecond[1], []);
       }else{
            projection.render([], [], renderProjection[1], renderProjection[1], []);
       }
       
     }

       if((diffAndInts[0][0].length == 0 && diffAndInts[1][0].length  == 0 && diffAndInts[2][0].length  == 0 &&
            diffAndInts[0][1].length == 0 && diffAndInts[1][1].length  == 0 && diffAndInts[2][1].length  == 0 &&
            (!tangramLevel.colorNoMix() || diffAndIntsSecond[0][0].length == 0 && diffAndIntsSecond[1][0].length  == 0 &&  diffAndIntsSecond[0][1].length == 0 && diffAndIntsSecond[1][1].length  == 0) ) ||
            ( !tangramLevel.projectAllSides() && diffAndInts[1][0].length  == 0  && diffAndInts[1][1].length  == 0 &&
            (!tangramLevel.colorNoMix() || (diffAndIntsSecond[1][0].length  == 0 && diffAndIntsSecond[1][1].length  == 0 ) )) ){

            if(this.winningDampenerCount < 8){
                this.winningDampenerCount++;
            }else if(this.winningDampenerCount == 8){
                this.winningDampenerCount++;                
                activeGame.win();
            }

        }else{
            this.winningDampenerCount = 0;
        }
       


        


    }
};