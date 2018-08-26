
let guiColorSelect= {
    sizeSetting : 1,
    size : [160,400, 640],   
    enabled : true,
    buttons: [],
    sizeButton: 0,
    scene: 0,
    menuActive: false,
    imageTwoRow: 0,
    imageRgb: 0,
    colorWheelRgb: true,
    colorSelectAdvancedTexture: 0,
    colorWheelX: 0,
    colorWheelY: 0,
    pickResult: 0,
    base: 0,
    enableRgbColorWheel: function(turefalse){
        this.colorWheelRgb = turefalse;
    },
    init : function(scene, base){
        this.scene = scene;
        this.base = base;

        colorSelectAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Color");
        this.imageTwoRow = new BABYLON.GUI.Image("button", "./color_selector/two_row.svg");

        colorSelectAdvancedTexture.addControl(this.imageTwoRow);
            this.imageTwoRow.width = this.size[this.sizeSetting] + "px";
            this.imageTwoRow.height = this.size[this.sizeSetting]+ "px";
            this.imageTwoRow.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.imageTwoRow.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.imageTwoRow.isVisible = false;

        this.imageRgb = new BABYLON.GUI.Image("button", "./color_selector/rgb.svg");

        colorSelectAdvancedTexture.addControl(this.imageRgb);
            this.imageRgb.width = this.size[this.sizeSetting] + "px";
            this.imageRgb.height = this.size[this.sizeSetting]+ "px";
            this.imageRgb.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.imageRgb.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.imageRgb.isVisible = false;

       

    },
    pointerMove : function(){
        if(this.menuActive){

            let radius = Math.sqrt(Math.pow(Math.abs( this.scene.pointerX - this.colorWheelX),2) + Math.pow(Math.abs(this.scene.pointerY - this.colorWheelY),2)) ;
            let angle = Math.atan((this.scene.pointerX - this.colorWheelX)/ (this.scene.pointerY - this.colorWheelY));

            let color;
            if(this.colorWheelRgb){
                if(this.scene.pointerY < this.colorWheelY){
                    if(angle > Math.PI/3 ){
                        color = globalWorldColor.green;                    
                    }else if(angle < -Math.PI/3 ){
                        color = globalWorldColor.blue;                               
                    }else {
                        color = globalWorldColor.red;                    
                    }
                }else{
                     if(angle > 0 ){
                        color = globalWorldColor.blue;    
                    }else {
                        color = globalWorldColor.green;   
                    }

                }

            }else{
                if(this.scene.pointerY < this.colorWheelY){
                    if(angle > Math.PI/4 ){
                        color = globalWorldColor.magenta;                    
                    }else if(angle > 0 ){
                        color = globalWorldColor.red;                    
                    }else if(angle > -Math.PI/4 ){
                        color = globalWorldColor.yellow;                    
                    }else {
                        color = globalWorldColor.green;                    
                    }
                }else{
                    if(angle > Math.PI/4 ){
                        color = globalWorldColor.cyan;                    
                    }else if(angle > 0 ){
                        color = globalWorldColor.blue;   
                    } else if(angle > -Math.PI/4 ){
                        color = globalWorldColor.black;   
                    }else {
                        color = globalWorldColor.white;   
                    }

                }
            }

            let section = 0;

            if(radius > 0.165*2*this.size[this.sizeSetting] && radius < 0.165*3*this.size[this.sizeSetting] ){
              section = 2;
            }else if(radius > 0.165*1*this.size[this.sizeSetting] && radius < 0.165*2*this.size[this.sizeSetting] ){
                section = 1;
            }

            let baseOrBlockType = this.pickResult.pickedMesh.name.slice(0, 1);
            
            
            if(section !=0){
                if(baseOrBlockType == 'B'){                   

                    let basePart = this.pickResult.pickedMesh.name.slice(1, 2);
                    if(basePart == 'R'){
                        this.base.ledSetRight(color);
                    }else if (basePart == 'B'){
                        this.base.ledSetBack(color);
                    }else if (basePart == 'L'){
                        this.base.ledSetLeft(color);
                    }else{ 
                        this.base.ledSetFront(color);
                    }
                    

                }else{
                    let meshI = Number(this.pickResult.pickedMesh.name.match(/\d+$/)[0]);

                    if(this.colorWheelRgb){
                        world.block[meshI].ledALeft = color;
                        world.block[meshI].ledARight = color;
                        world.block[meshI].ledBLeft = color;
                        world.block[meshI].ledBRight = color;
                    }else{
                        if(baseOrBlockType == 'T'){
                            if(section == 1){
                                world.block[meshI].ledALeft = color;
                            }else{
                                world.block[meshI].ledARight = color;
                            }

                        }else if(baseOrBlockType == 'F'){
                            if(section == 1){
                                world.block[meshI].ledALeft = color;
                            }else{
                                world.block[meshI].ledARight = color;
                            }

                        }else if(baseOrBlockType == 'G'){
                            if(section == 1){
                                world.block[meshI].ledBLeft = color;
                            }else{
                                world.block[meshI].ledBRight = color;
                            }

                        }
                    }


                }
                
            }else if(this.colorWheelRgb){
                if(baseOrBlockType == 'B'){                   

                    let basePart = this.pickResult.pickedMesh.name.slice(1, 2);
                    if(basePart == 'R'){
                        this.base.ledSetRight(0);
                    }else if (basePart == 'B'){
                        this.base.ledSetBack(0);
                    }else if (basePart == 'L'){
                        this.base.ledSetLeft(0);
                    }else{ 
                        this.base.ledSetFront(0);
                    }                    

                }else{
                    let meshI = Number(this.pickResult.pickedMesh.name.match(/\d+$/)[0]);
                    world.block[meshI].ledALeft = 0;
                        world.block[meshI].ledARight = 0;
                        world.block[meshI].ledBLeft = 0;
                        world.block[meshI].ledBRight = 0;
                }
            }

        }
    },
    pointerUp: function(){

        if(this.menuActive){
            camera.unlock();
            this.menuActive = false;

            if(this.colorWheelRgb){
                this.imageRgb.isVisible = false;

            }else{
                this.imageTwoRow.isVisible = false;
            }
        }

    },

    pointerDown: function(pickResult){
        
        if (this.enabled && pickResult.hit) {
            this.pickResult = pickResult;
            camera.lock();
    
            this.menuActive = true;

            let x = this.scene.pointerX - this.size[this.sizeSetting]/2;
            let y = this.scene.pointerY - this.size[this.sizeSetting]/2;

            if(this.colorWheelRgb){
                this.imageRgb.left = x ;
                this.imageRgb.top = y;
                this.imageRgb.isVisible = true;
            }else{
                this.imageTwoRow.left = x ;
                this.imageTwoRow.top = y;
                this.imageTwoRow.isVisible = true;
            }
            this.colorWheelX = this.scene.pointerX ;
            this.colorWheelY = this.scene.pointerY ;


            
        }
            

    }
}