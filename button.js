let buttonAdvancedTexture = 0 ;// = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");
let buttonPosition = {
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
};

let buttonSimple = { 
    callBackFunction : 0,
    callBackPointerDownUpMove : -1,
    image : 0,
    elipse : 0,
    sizeSetting : 1,
    size : [60,100, 140],    
    padding : [3, 4, 6],
    horizontal : [BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT ],
    vertical : [BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP, BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM],
    init : function(horizontal, vertical, image){
        if(buttonAdvancedTexture == 0){
            buttonAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");
        }
        this.image = new BABYLON.GUI.Image("button", image);
        this.elipse = new BABYLON.GUI.Ellipse();

        this.image.width = this.size[this.sizeSetting] + "px";
        this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";

        this.image.horizontalAlignment = this.horizontal[horizontal];
        this.image.verticalAlignment = this.vertical[vertical];
        this.elipse.horizontalAlignment = this.horizontal[horizontal];
        this.elipse.verticalAlignment = this.vertical[vertical];
         
        this.elipse.color = "#606060";
        this.elipse.thickness = 0;
        this.elipse.background = "#505050";
        this.elipse.alpha = 0.3;

        this.image.onPointerDownObservable.add(function() {this.down();}.bind(this));   
        
         this.image.onPointerUpObservable.add(function() {this.up();}.bind(this));    
        
        buttonAdvancedTexture.addControl(this.elipse);
        this.elipse.isVisible = false;
        buttonAdvancedTexture.addControl(this.image); 
        this.image.isVisible = false;

    },
    initCallBack: function(callBackFunction, callBackPointerDownUpMove){
        this.callBackFunction = callBackFunction;
        if(callBackPointerDownUpMove == null){
            this.callBackPointerDownUpMove= 0;
        }else{            
            this.callBackPointerDownUpMove = callBackPointerDownUpMove;         
        }

        
        
    },
    changeSize: function(size){
        this.sizeSetting = size;
        this.image.width = this.size[this.sizeSetting] + "px";
        this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";
    },
    resetAlpha: function(){
        this.elipse.alpha = 0.3;
    },
    show: function(){
        this.elipse.isVisible = true;
        this.image.isVisible = true;

    },
    hide: function(){
        this.elipse.isVisible = false;
        this.image.isVisible = false;
        this.elipse.alpha = 0.3;

    },
    down : function(){
        this.elipse.alpha = 0.5;

        if(this.callBackPointerDownUpMove == buttonTrigger.down){
            sound.buttonAction();
            this.callBackFunction();  
           
        }
        

    },
    up : function(){
        this.elipse.alpha = 0.3;

        if(this.callBackPointerDownUpMove == buttonTrigger.up){
            sound.buttonAction();
            this.callBackFunction();  
        }

    },
    position : function(row, column ){
        
        this.image.top = this.size[this.sizeSetting] * row + "px";
        this.image.left = this.size[this.sizeSetting] * column + "px";
        this.elipse.top = this.size[this.sizeSetting] * row + "px";
        this.elipse.left = this.size[this.sizeSetting] * column + "px";

    }


};

let buttonExpandable = {
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
    image : 0,
    elipse : 0,
    sizeSetting : 1,
    size : [60,100, 140],    
    padding : [3, 4, 6],
    horizontal : [BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT ],
    vertical : [BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP, BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER,  BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM],
    init : function(horizontal, vertical, image){
        if(buttonAdvancedTexture == 0){
            buttonAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");
        }
        this.image = new BABYLON.GUI.Image("button", image);
        this.elipse = new BABYLON.GUI.Ellipse();

        this.image.width = this.size[this.sizeSetting] + "px";
        this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";

        this.image.horizontalAlignment = this.horizontal[horizontal];
        this.image.verticalAlignment = this.vertical[vertical];
        this.elipse.horizontalAlignment = this.horizontal[horizontal];
        this.elipse.verticalAlignment = this.vertical[vertical];
         
        this.elipse.color = "#606060";       
        this.elipse.thickness = 0;
        this.elipse.background = "#505050";
        this.elipse.alpha = 0.3;
        
        buttonAdvancedTexture.addControl(this.elipse);
        this.elipse.isVisible = false;
        buttonAdvancedTexture.addControl(this.image); 
        this.image.isVisible = false;

    },
    dispose : function(){
        this.elipse.dispose();
        this.image.dispose();
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
        this.image.width = this.size[this.sizeSetting] + "px";
        this.image.height = this.size[this.sizeSetting]+ "px";
        this.elipse.width = this.size[this.sizeSetting]+ "px";
        this.elipse.height = this.size[this.sizeSetting]+ "px";

        this.image.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.image.paddingRight = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        this.elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        this.image.paddingBottom = this.padding[this.sizeSetting]+ "px";
        this.image.paddingLeft = this.padding[this.sizeSetting]+ "px";
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
        this.image.isVisible = true;

    },
    hide: function(){
        this.elipse.isVisible = false;
        this.image.isVisible = false;
        this.elipse.alpha = 0.3;

    },
    down : function(){
        
        this.elipse.alpha = 0.5;

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
        
        this.image.top = this.size[this.sizeSetting] * this.row + "px";
        this.image.left = this.size[this.sizeSetting] * this.column + "px";
        this.elipse.top = this.size[this.sizeSetting] * this.row + "px";
        this.elipse.left = this.size[this.sizeSetting] * this.column + "px";

    }
        
};