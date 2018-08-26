let programmingButtonAdvancedTexture = 0 ;// = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");
/*let buttonPosition = {
    left : 0,
    center : 1,
    right : 2,
    top : 0,
    bottom :2
};

let buttonTrigger = {
    down : 0,
    up : 1,
    move : 2
};*/


let programmingButton = {
    callBackFunction : 0,
    callBackPointerDownUpMove : -1,
    callBackAdditionalFunction : 0,
    callBackAdditionalMove : false,
    onDownShowButtons: [],
    onMoveUnHighlightButtons: [],
    onMoveHideButtons: [],
    onMoveShowButtons: [],
    row: 0,
    column: 0,
  //  image : 0,
    text : 0,
    elipse : 0,
    sizeSetting : 1,
    size : [40,60, 80],  
    padding : [3, 4, 6],
    horizontal : [BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT ],
    vertical : [BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP, BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM],
    init : function(horizontal, vertical, text){
        if(programmingButtonAdvancedTexture == 0){
            programmingButtonAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");
        }
        //this.image = new BABYLON.GUI.Image("button", image);
        this.elipse = new BABYLON.GUI.Ellipse();
        this.text = new BABYLON.GUI.TextBlock();

        //this.image.width = this.size[this.sizeSetting] + "px";
        //this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        this.text.fontSize = 20;        
        this.text.text = text;        
        this.text.color = "white";



        //this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        //this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        //this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        //this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";

        //this.image.horizontalAlignment = this.horizontal[horizontal];
        //this.image.verticalAlignment = this.vertical[vertical];
        this.elipse.horizontalAlignment = this.horizontal[horizontal];
        this.elipse.verticalAlignment = this.vertical[vertical];

        this.text.textHorizontalAlignment = this.horizontal[horizontal];
        this.text.textVerticalAlignment = this.vertical[vertical];
         
        this.elipse.color = "#606060";       
        this.elipse.thickness = 0;
        this.elipse.background = "#505050";
        this.elipse.alpha = 0.3;
        
        programmingButtonAdvancedTexture.addControl(this.elipse);
        programmingButtonAdvancedTexture.addControl(this.text);

        this.text.isVisible = false; 
        this.elipse.isVisible = false;

        //buttonAdvancedTexture.addControl(this.image); 
        //this.image.isVisible = false;

    },
    dispose : function(){
        this.text.dispose();
        this.elipse.dispose();
        //this.image.dispose();
    },
    initCallBack: function(callBackFunction, callBackPointerDownUpMove){
        this.callBackFunction = callBackFunction;
        if(callBackPointerDownUpMove == null){
            this.callBackPointerDownUpMove= 0;            
        }else{            
            this.callBackPointerDownUpMove = callBackPointerDownUpMove;  
        }
    },
    //bad planning some buttons needs to be informed also about move
    initCallBackAdditionalMove: function(callBackFunction){
        this.callBackAdditionalFunction = callBackFunction;
        this.callBackAdditionalMove = true;
        
    },
    changeSize: function(size){
        this.sizeSetting = size;
        //this.image.width = this.size[this.sizeSetting] + "px";
        //this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        //this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        //this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        //this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        //this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";

        this.position();
    },
    resetAlpha: function(){
        this.elipse.alpha = 0.3;
    },
    onDownShow: function(onDownShowButtons){
        this.onDownShowButtons = onDownShowButtons;
    },
    onMoveShow : function (onMoveShowButtons){
        this.onMoveShowButtons = onMoveShowButtons
    },
    onMoveUnHighlight : function (onMoveUnHighlightButtons){
        this.onMoveUnHighlightButtons = onMoveUnHighlightButtons
    },
    onMoveHide : function (onMoveHideButtons){
        this.onMoveHideButtons = onMoveHideButtons
    },
    show: function(){
        this.elipse.isVisible = true;
        this.text.isVisible = true;
        //this.image.isVisible = true;

    },
    hide: function(){
        this.elipse.isVisible = false;
        this.text.isVisible = false;
        
        //this.image.isVisible = false;
        this.elipse.alpha = 0.3;
       // this.text.alpha = 0.3;

    },
    down : function(){

        //this.show();
        //this.elipse.alpha = 0.5;
        
        if(this.onDownShowButtons != null){
            
            for(let i =0; i < this.onDownShowButtons.length; i++){          
                this.onDownShowButtons[i].show();
            }
        }

        if(this.callBackPointerDownUpMove == buttonTrigger.down){
            sound.buttonAction();
            this.callBackFunction();  
        }
        
    },
    up : function(){
       // console.log("button up");
       // console.log("this.callBackPointerDownUpMove: " + this.callBackPointerDownUpMove);
       if(this.elipse.isVisible == true){
        if(this.callBackPointerDownUpMove == buttonTrigger.up){
            sound.buttonAction();
            this.callBackFunction();  
        }
        }
    },
    move : function(){
        if(this.elipse.isVisible == true){
        this.elipse.alpha = 0.5;

        if(this.onMoveUnHighlightButtons != null){
            for(let i =0; i < this.onMoveUnHighlightButtons.length; i++){
                this.onMoveUnHighlightButtons[i].elipse.alpha = 0.3;
            }
        }

        if(this.onMoveHideButtons != null){
            for(let i =0; i < this.onMoveHideButtons.length; i++){
                this.onMoveHideButtons[i].hide();
            }
        }

        if(this.onMoveShowButtons != null){
            for(let i =0; i < this.onMoveShowButtons.length; i++){
                this.onMoveShowButtons[i].show();
            }
        }

      if(this.callBackPointerDownUpMove == buttonTrigger.move){
            this.callBackFunction();  
        }
      if(this.callBackAdditionalMove){
        this.callBackAdditionalFunction();
      }
        
        
    }
    },
    position : function(row, column ){
        if(row != null){
            this.row = row;
        }

        if(column != null){
            this.column = column;
        }
        
        //this.image.top = this.size[this.sizeSetting] * this.row + "px";
        //this.image.left = this.size[this.sizeSetting] * this.column + "px";
        this.elipse.top = this.size[this.sizeSetting] * (this.row) + "px";
        this.elipse.left = this.size[this.sizeSetting] * (0.5 +this.column) + "px";

        this.text.top = this.size[this.sizeSetting] * (this.row - 0.3) + "px";
        this.text.left = this.size[this.sizeSetting] * (0.5 +this.column) + "px";

    }
        
};