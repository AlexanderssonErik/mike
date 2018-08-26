let guiPaintAdvancedTexture = 0 ;

let guiPaint = {
    
    tiles : 0,
    rows : 10,
    columns: 10,
    sizeSetting : 1,
    size : [30,60, 120],    
    padding : [0.25, 0.5, 1],
    active: false,
    pointerActive: false,
    scene: 0,
    paintBrush: 0,
    paintBrushColors : [ globalWorldColor.black, globalWorldColor.red, globalWorldColor.green, globalWorldColor.blue, globalWorldColor.yellow ],
    paintBrushColorsElipse : [ "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00" ],
    colorImage : [],
    colorElipse: [],
    init(scene){

        this.scene = scene;
    },

    clear : function(){

        for(let row = 0; row < this.rows; row++){           
            for(let col = 0; col < this.columns; col++){
                this.tiles[row][col].background = this.paintBrushColorsElipse[0] ;
            }
        }

    },

    downColor(pos){
        sound.buttonAction();
        this.paintBrush = pos;
        
    },


    createProjectionPixels : function( side, flip){
        let proj = [];
        let i = 0;
        for(let row = 0; row < this.rows; row++){
           
            for(let col = 0; col < this.columns; col++){
                if( this.tiles[row][col] .background == this.paintBrushColorsElipse[0]){ 

                }else {
                    proj[i] = Object.create(projectionPixel); 
                    
                    if(side == 0){
                        if(flip){
                            proj[i].x =  col;
                            proj[i].y = 9 - row;
                        }else{
                            proj[i].x =  9 - col;
                            proj[i].y = 9 - row;
                        }
                    }else if(side == 1){
                        if(flip){
                            proj[i].y = 9 - row;
                            proj[i].z = col;
                        }else{
                            proj[i].y = 9 - row;
                            proj[i].z = 9 - col;
                        }
                    }else if(side == 2){
                        proj[i].x = 9 - row;
                        proj[i].z = 9 - col;
                    }

                    if( this.tiles[row][col] .background == this.paintBrushColorsElipse[1]){
                        proj[i].color = 1;
                    }else if( this.tiles[row][col] .background == this.paintBrushColorsElipse[2]){
                        proj[i].color = 2;
                    }else if( this.tiles[row][col] .background == this.paintBrushColorsElipse[3]){
                        proj[i].color = 4;
                    }else if( this.tiles[row][col] .background == this.paintBrushColorsElipse[4]){
                        proj[i].color = 3;
                    }
                    i++;

                
                }

            }

        }
        return proj;

    },
    hide : function(){
        this.active = false;
       
        if(guiPaintAdvancedTexture != 0){
            for(let i = 0; i < 5; i++){
                this.colorImage[i].isVisible = false;
                this.colorElipse[i].isVisible = false;
            }

            for(let row = 0; row < this.rows; row++){               
                for(let col = 0; col < this.columns; col++){

                    this.tiles[row][col].isVisible = false;
                }
            }

        }

    },
    show : function (){
        this.active = true;
        if(guiPaintAdvancedTexture == 0){
            guiPaintAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Tile");
        }else{
            for(let i = 0; i < 5; i++){
                this.colorImage[i].isVisible = true;
                this.colorElipse[i].isVisible = true;
            }

            for(let row = 0; row < this.rows; row++){               
                for(let col = 0; col < this.columns; col++){

                    this.tiles[row][col].isVisible = true;
                }
            }
            return;
        }

        for(let i = 0; i < 5; i++){
            this.colorImage[i] = new BABYLON.GUI.Image("button", "./icon/ok.svg");
            this.colorImage[i] .onPointerDownObservable.add(function() {this.downColor(i);}.bind(this));   

            this.colorElipse[i] = new BABYLON.GUI.Ellipse();
            this.colorElipse[i] .thickness = 0;
            this.colorElipse[i] .background = this.paintBrushColorsElipse[i];
            this.colorElipse[i] .alpha = 0.5;

           guiPaintAdvancedTexture.addControl(this.colorElipse[i]);  
           guiPaintAdvancedTexture.addControl(this.colorImage[i] );  

        }


        this.tiles = [];
        for(let row = 0; row < this.rows; row++){
            this.tiles[row] = [];
            for(let col = 0; col < this.columns; col++){
                this.tiles[row][col] =  new BABYLON.GUI.Rectangle();

               this.tiles[row][col] .thickness = 0;
               this.tiles[row][col] .background = "#000000";
               this.tiles[row][col] .alpha = 0.5;

               this.tiles[row][col].onPointerDownObservable.add(function() {this.down();}.bind(this));  

                guiPaintAdvancedTexture.addControl(this.tiles[row][col]);  

            }
        }
        this.changeSize(1);

    },  

    color(){
        zeroRow = canvas.height/2  - this.size[this.sizeSetting] * this.rows /2;
        zeroCol = canvas.width/2  - this.size[this.sizeSetting] * this.columns /2;

        let row = -1;
        let col = -1;
        
        if(this.scene.pointerX - zeroCol > 0 && (this.scene.pointerX - zeroCol) < this.columns * this.size[this.sizeSetting]){
            if(this.scene.pointerY - zeroRow > 0 && (this.scene.pointerY - zeroRow) < this.rows * this.size[this.sizeSetting]){
                row = Math.floor((this.scene.pointerY - zeroRow) / this.size[this.sizeSetting]);
                col = Math.floor((this.scene.pointerX - zeroCol) / this.size[this.sizeSetting]);

                this.tiles[row][col].background = this.paintBrushColorsElipse[this.paintBrush] ;

            }

        }
    },

    down : function(){
        //camera.lock();
        //this.active = true;
        this.color();
    
    },

    pointerUp: function(){
        /*if(this.active == true){
            this.active = false;
            camera.unlock();
        }*/
       
        this.pointerActive = false;
    },

    pointerDown: function(){
        /* if(this.active == true){
             this.active = false;
             camera.unlock();
         }*/
         
         this.pointerActive = true;
     },


    pointerMove: function(){        
        if(this.active == true && this.pointerActive){
            this.color();

        }
    },

    changeSize: function(size){
        this.sizeSetting = size;

        let offsetRow = -(this.size[this.sizeSetting] * this.rows )/2 + this.size[this.sizeSetting]/2;
        let offsetCol = -(this.size[this.sizeSetting] * this.columns )/2 + this.size[this.sizeSetting]/2;

        for(let i = 0; i < 5; i++){
            this.colorImage[i].paddingTop = this.padding[this.sizeSetting]+ "px";
            this.colorImage[i].paddingRight = this.padding[this.sizeSetting]+ "px";
            this.colorImage[i].paddingBottom = this.padding[this.sizeSetting]+ "px";
            this.colorImage[i].paddingLeft = this.padding[this.sizeSetting]+ "px";
            this.colorImage[i].width = this.size[this.sizeSetting] + "px";
            this.colorImage[i].height = this.size[this.sizeSetting]+ "px";

            this.colorElipse[i].paddingTop = this.padding[this.sizeSetting]+ "px";
            this.colorElipse[i].paddingRight = this.padding[this.sizeSetting]+ "px";
            this.colorElipse[i].paddingBottom = this.padding[this.sizeSetting]+ "px";
            this.colorElipse[i].paddingLeft = this.padding[this.sizeSetting]+ "px";
            this.colorElipse[i].width = this.size[this.sizeSetting] + "px";
            this.colorElipse[i].height = this.size[this.sizeSetting]+ "px";

            this.colorImage[i].top = offsetRow + this.size[this.sizeSetting] * i + "px";
            this.colorImage[i].left = offsetCol + this.size[this.sizeSetting] * -1 + "px";

            this.colorElipse[i].top = offsetRow + this.size[this.sizeSetting] * i + "px";
            this.colorElipse[i].left = offsetCol + this.size[this.sizeSetting] * -1 + "px";

        }

        for(let row = 0; row < this.rows; row++){
            
            for(let col = 0; col < this.columns; col++){

                this.tiles[row][col].width = this.size[this.sizeSetting] + "px";
                this.tiles[row][col].height = this.size[this.sizeSetting]+ "px";
  
               this.tiles[row][col] .paddingTop = this.padding[this.sizeSetting]+ "px";
               this.tiles[row][col] .paddingRight = this.padding[this.sizeSetting]+ "px";
          
               this.tiles[row][col] .paddingBottom = this.padding[this.sizeSetting]+ "px";
               this.tiles[row][col] .paddingLeft = this.padding[this.sizeSetting]+ "px";
    
               this.tiles[row][col].top = offsetRow + this.size[this.sizeSetting] * row + "px";
               this.tiles[row][col].left = offsetCol + this.size[this.sizeSetting] * col + "px";
            }
        }
    }

}