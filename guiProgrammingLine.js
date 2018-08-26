let programmingLineAdvancedTexture = 0 ;// = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Button");

let guiProgrammingLine = { 
callBackFunction : 0,
elipse : 0,
sizeSetting : 1,
size : [60,100, 140],    
padding : [3, 4, 6],
code : 0,
page: 0,
column : 0,
row: 0,
next: 0,
init : function(page, column, row ){
    if(programmingLineAdvancedTexture == 0){
        programmingLineAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("programmingLineAdvancedTexture");
    }
    this.page = page;   
    this.column = column;
    this.row= row;
  
    this.code = [];


    this.elipse = []

    this.elipse[0] = new BABYLON.GUI.Ellipse();


    this.elipse[0].width = this.size[this.sizeSetting]+ "px";
    this.elipse[0].height = this.size[this.sizeSetting]+ "px";


    this.elipse[0].paddingTop = this.padding[this.sizeSetting]+ "px";
    this.elipse[0].paddingRight = this.padding[this.sizeSetting]+ "px";

    this.elipse[0].paddingBottom = this.padding[this.sizeSetting]+ "px";
    this.elipse[0].paddingLeft = this.padding[this.sizeSetting]+ "px";

    this.elipse[0].horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    this.elipse[0].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
     
    this.elipse[0].color = "#606060";
    this.elipse[0].thickness = 0;
    this.elipse[0].background = "#505050";
    this.elipse[0].alpha = 0.3;



    //this.elipse[0].onPointerDownObservable.add(function() {this.down(0);}.bind(this));   

    this.elipse[0].top = this.size[this.sizeSetting] * (this.row - 5) + "px";
    this.elipse[0].left = this.size[this.sizeSetting] * (this.column-2) + "px";
    
    // this.image.onPointerUpObservable.add(function() {this.up();}.bind(this));    
    
    buttonAdvancedTexture.addControl(this.elipse[0]);
    //this.elipse[0].isVisible = false;
   // buttonAdvancedTexture.addControl(this.image); 
   // this.image.isVisible = false;
   console.log("AAAAAAAA");

},
/*down : function(index){
    guiProgramming.setButtonDownLine(this.page, this.column, this.row);
    console.log("index" + index);
    this.elipse[index].alpha = 0.5;



},*/
resetAlpha: function(){
    this.elipse[0].alpha = 0.3;
},


}