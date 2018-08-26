let guiProgrammingAdvancedTexture = 0 ;

let guiProgramming = {
    //operandPath : [],
    //buttons: [],

    selectorButtons: [],

    noToABC: ["A", "B", "C", "D", "E", "F"],
    regToPrefix: [["i", "bl"], ["b", "a"]],

    //reg int
    regSelectorValText: [[[["0"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"]] ,
                            [["yes", "yes", "no", "position"],["no", "yes", "no", "position"],["color"]]],
                        [[["false"], ["true"]],    
                            [["0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "X"],["3", "4", "5"]]]]  ,
    regSelectorVal: [[[[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]],    [[-100, 11,1],[-100, 10,0],[-100]]],       [[[false],[true]],    [[-100,1,2],[-100,4,5]]]] ,



    sizeSetting: 1,
    size : [40,60, 80],  
    padding : [3, 4, 6],
    code: [], // page,  row, column, term
    codeElipse: [], // page,  row, column, term
    codeText: [], // page,  row, column, term

    reg: [],
    regElipse: [], //  line, column, term
    regText: [],

    codeButtonDownActive: false,
   // downCol: 0,
    codeDownRow: 0,
    codeDownCol: 0,
    codeDownTerm: 0,
    active: false,
  //  clickPage: 0,
  //  clickColumn: 0,
   // clickRow: 0,

   regButtonDownActive: false,
   regSelectButtonDownActive: false,
   // downCol: 0,
    regDownRow: 0,
    regDownCol: 0,
    regDownTerm: 0,


    currentPage : 0,
    

    pages : 2,
    codeColumns : 12,
    codeRows : 8,

    regColumns : 12,
    regRows : 2,
    regTerms: 6,


    scene : 0,


    init : function (scene){
        this.scene = scene;
        if(guiProgrammingAdvancedTexture == 0){
            guiProgrammingAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("guiProgrammingAdvancedTexture");
        }

    },
    makeText( row, column, alignment, text){
        let textBlock = new BABYLON.GUI.TextBlock();
        textBlock.text = text;        
        textBlock.color = "white";
        textBlock.fontSize = 20;
        textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
       // textBlock.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        if(alignment == 0){
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        }else if(alignment == 1){ 
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            textBlock.top = this.size[this.sizeSetting] * (0.5 + row - this.codeRows/2) + "px";
            textBlock.left = this.size[this.sizeSetting] * (0.5 + column-this.codeColumns/2) + "px";
        }else{
            
            //textBlock.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            textBlock.top = this.size[this.sizeSetting] * (row - this.regRows/2 - 0.3) + "px";
            textBlock.left = this.size[this.sizeSetting] * (0.5 + column-this.regColumns/2) + "px";
        }

       

        guiProgrammingAdvancedTexture.addControl(textBlock);   

        return textBlock;
    
    },



    makeElipse(row, column, alignment ){

       let elipse = new BABYLON.GUI.Ellipse();


        elipse.width = this.size[this.sizeSetting]+ "px";
        elipse.height = this.size[this.sizeSetting]+ "px";


        elipse.paddingTop = this.padding[this.sizeSetting]+ "px";
        elipse.paddingRight = this.padding[this.sizeSetting]+ "px";

        elipse.paddingBottom = this.padding[this.sizeSetting]+ "px";
        elipse.paddingLeft = this.padding[this.sizeSetting]+ "px";

        elipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        if(alignment == 0){
            elipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        }else if(alignment == 1){ 
            elipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            elipse.top = this.size[this.sizeSetting] * (0.5 + row - this.codeRows/2) + "px";
        elipse.left = this.size[this.sizeSetting] * (0.5 + column-this.codeColumns/2) + "px";
        }else{
            elipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            elipse.top = this.size[this.sizeSetting] * (row - this.regRows/2) + "px";
        elipse.left = this.size[this.sizeSetting] * (0.5 + column-this.regColumns/2) + "px";
        }
     
        elipse.color = "#606060";
        elipse.thickness = 0;
        elipse.background = "#505050";
        elipse.alpha = 0.3;



    //elipse.onPointerDownObservable.add(function() {this.down(0);}.bind(this));   

        
    
    // this.image.onPointerUpObservable.add(function() {this.up();}.bind(this));    
    
        guiProgrammingAdvancedTexture.addControl(elipse);

        return elipse;
    },
    
    show(){



        for(let row = 0; row < this.regRows; row++){
                
            this.reg[row] = [];
            this.regElipse[row] = [];
            this.regText[row] = [];
            for(let col = 0; col < this.regColumns; col++){
                this.reg[row][col] = [];   
                this.regElipse[row][col] = []; 
                this.regText[row][col] = []; 
                        
        
            }

        
        }
    

        for(let page = 0; page < this.pages; page++){
            this.code[page] = [];
            this.codeElipse[page] = [];
            this.codeText[page] = [];
            for(let row = 0; row < this.codeRows; row++){

                this.code[page][row] = [];
                this.codeElipse[page][row] = [];
                this.codeText[page][row] = [];
                for(let col = 0; col < this.codeColumns; col++){
                    this.code[page][row][col] = [];   
                    this.codeElipse[page][row][col] = []; 
                    this.codeText[page][row][col] = []; 
                            
            
                }

            
            }


        }
  //      this.code[0] = [];
     //   this.code[0][0] = [];

     //   this.code[0][0][0] = [];
        this.code[0][0][0][0] = 0;
        this.code[0][0][0][1] = 0;

        this.reg[0][0][0] = 0;
        this.reg[1][0][0] = 0;
        this.reg[0][1][0] = 0;
        this.reg[1][1][0] = 0;

     //   this.codeElipse[0] = [];
     //   this.codeElipse[0][0] = [];

      //  this.codeElipse[0][0][0] = [];

      // page,  line, column, term
        this.codeElipse[0][0][0][0] = this.makeElipse(0,0, 1);
        this.codeElipse[0][0][0][1] = this.makeElipse(0,1, 1);

        this.codeElipse[0][0][1][0] = this.makeElipse(0,4, 1);
        this.codeElipse[0][1][0][0] = this.makeElipse(1,0, 1);


        this.regElipse[0][0][0] = this.makeElipse(0,0, 2);
        this.regElipse[0][0][1] = this.makeElipse(0,1, 2);

        this.regElipse[1][0][0] = this.makeElipse(1,0, 2);
        this.regElipse[1][0][1] = this.makeElipse(1,1, 2);


        this.regElipse[0][1][0] = this.makeElipse(0,this.regColumns/2, 2);
        this.regElipse[0][1][1] = this.makeElipse(0,this.regColumns/2 +1, 2);

        this.regElipse[1][1][0] = this.makeElipse(1,this.regColumns/2, 2);
        this.regElipse[1][1][1] = this.makeElipse(1,this.regColumns/2 +1, 2);



       // this.regElipse[1][0][0] = this.makeElipse(0,this.regColumns/2, 2);
       /* this.regElipse[0][1][0] = this.makeElipse(1,0, 2);
        this.regElipse[1][1][0] = this.makeElipse(1,this.regColumns/2, 2);
*?
//  line, column, term

       /* this.regElipse[0][0][1] = this.makeElipse(0,1, 2);
        this.regElipse[1][0][1] = this.makeElipse(0,this.regColumns/2+1, 2);
        this.regElipse[0][1][1] = this.makeElipse(1,1, 2);
        this.regElipse[1][1][1] = this.makeElipse(1,this.regColumns/2+1, 2);*/

       // this.codeText[0] = [];
      //  this.codeText[0][0] = [];

       // this.codeText[0][0][0] = [];
        this.codeText[0][0][0][0] = this.makeText(0,0, 1, "?");
        this.codeText[0][0][0][1] = this.makeText(0,1, 1, "+");

        this.regText[0][0][0] = this.makeText(0,0, 2, "iA");
        this.regText[0][0][1] = this.makeText(0,1, 2, "+");

        this.regText[1][0][0] = this.makeText(1,0, 2, "bA");
        this.regText[1][0][1] = this.makeText(1,1, 2, "+");

        this.regText[0][1][0] = this.makeText(0,this.regColumns/2, 2, "blA");
        this.regText[0][1][1] = this.makeText(0,this.regColumns/2 +1, 2, "+");

        this.regText[1][1][0] = this.makeText(1,this.regColumns/2, 2, "aA");
        this.regText[1][1][1] = this.makeText(1,this.regColumns/2 +1, 2, "+");

      /*  this.regText[0][1][0] = this.makeText(1,0, 2, "aA");
        this.regText[1][1][0] = this.makeText(1,this.regColumns/2, 2, "blA");
*/
       /* this.regText[0][0][1] = this.makeText(0,1, 2, "+");
        this.regText[1][0][1] = this.makeText(0,this.regColumns/2+1, 2, "+");
        this.regText[0][1][1] = this.makeText(1,1, 2, "+");
        this.regText[1][1][1] = this.makeText(1,this.regColumns/2+1, 2, "+");*/
        
       /* this.makeElipse(0,1);

        this.makeElipse(1,0);

        this.makeElipse(11,7);*/
        

        this.active = true;


    },

    sizeChange : function(size){

    },
   
    pointerDown: function(){
        if(this.active){

            //Center - code
            let zeroRow = canvas.height/2  - this.size[this.sizeSetting] * this.codeRows /2;
            let zeroCol = canvas.width/2  - this.size[this.sizeSetting] * this.codeColumns /2;
    
            let row = -1;
            let col = -1;
            
            if(this.scene.pointerX - zeroCol > 0 && (this.scene.pointerX - zeroCol) < this.codeColumns * this.size[this.sizeSetting]){
                if(this.scene.pointerY - zeroRow > 0 && (this.scene.pointerY - zeroRow) < this.codeRows * this.size[this.sizeSetting]){
                    row = Math.floor((this.scene.pointerY - zeroRow) / this.size[this.sizeSetting]);
                    col = Math.floor((this.scene.pointerX - zeroCol) / this.size[this.sizeSetting]);
                    //console.log("row: " + row, "col: " + col )


                    this.codeDownRow = row;
                    this.codeDownCol = Math.floor(col/4);
                    this.codeDownTerm = col%4;

                    //console.log("! row: " +this.codeDownRow  + ", " +this.codeDownCol  + ", " + this.codeDownTerm );

                    /*
                    console.log(" : " +this.currentPage + ", " +row + ", " + Math.floor(col/4) + ", " + col%4 );
                    if(this.codeElipse[this.currentPage][row][Math.floor(col/4)][col%4]  != null){
                        console.log( " != 0");
                        this.codeButtonDownActive =true;
                        this.codeElipse[this.currentPage][row][Math.floor(col/4)][col%4].alpha = 0.5; 
                    }*/

                    // page,  line, column, term
                    if(this.codeElipse[this.currentPage][this.codeDownRow][this.codeDownCol][this.codeDownTerm ]  != null){
                        this.codeButtonDownActive =true;
                        this.codeElipse[this.currentPage][this.codeDownRow][this.codeDownCol][this.codeDownTerm ].alpha  = 0.5; 
                       
                    }

                    //this.tiles[row][col].background = this.paintBrushColorsElipse[this.paintBrush] ;
    
                }
    
            }

            //Bottom - reg
            zeroRow = canvas.height - this.size[this.sizeSetting] * this.regRows;
            zeroCol = canvas.width/2  - this.size[this.sizeSetting] * this.regColumns /2;
    
             row = -1;
             col = -1;
            
            if(this.scene.pointerX - zeroCol > 0 && (this.scene.pointerX - zeroCol) < this.regColumns * this.size[this.sizeSetting]){
                if(this.scene.pointerY - zeroRow > 0 && (this.scene.pointerY - zeroRow) < this.regRows * this.size[this.sizeSetting]){
                    row = Math.floor((this.scene.pointerY - zeroRow) / this.size[this.sizeSetting]);
                    col = Math.floor((this.scene.pointerX - zeroCol) / this.size[this.sizeSetting]);
                   // console.log("reg, row: " + row, "col: " + col )




                    
                    this.regDownRow = row;
                   
                    this.regDownCol = Math.floor(col/(this.regColumns/2));
                    
                    this.regDownTerm = col% (this.regColumns/2);
                   

                    //console.log("! row: " +this.regDownRow  + ", " +this.regDownCol  + ", " + this.regDownTerm );

            
                    
                    if(this.regElipse[this.regDownRow][this.regDownCol][this.regDownTerm ]  != null){
                        this.regButtonDownActive =true;
                        this.regElipse[this.regDownRow][this.regDownCol][this.regDownTerm ].alpha  = 0.5; 



                        if(this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ] == null){
                            this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ] = 0;
                            //this.regElipse[this.regDownRow][this.regDownCol][this.regDownTerm ] = this.makeElipse(row,col, 2);
                            this.regText[this.regDownRow][this.regDownCol][this.regDownTerm ] .text = this.regToPrefix[this.regDownRow][this.regDownCol]+this.noToABC[this.regDownTerm];
                        
                            if(this.regDownTerm + 1 < this.regColumns/2){
                                console.log("this.regDownTerm + 1: " + (this.regDownTerm + 1));
                                console.log("this.regColumns/2: " + (this.regColumns/2));
                                this.regElipse[this.regDownRow][this.regDownCol][this.regDownTerm+1 ] = this.makeElipse(row,col+1, 2);
                                this.regText[this.regDownRow][this.regDownCol][this.regDownTerm+1 ]= this.makeText(row,col+1, 2, "+");

                               

                            }
                           
                        }else{
                           // regSelectorValText[this.regDownRow][this.regDownCol]

                         this.regSelectButtonDownActive = true;
                           this.showSelector(this.regRows - this.regDownRow, col- this.codeColumns/2, this.regSelectorValText[this.regDownRow][this.regDownCol])
                     
                           this.selectorButtons[0][0].down();
                           //this.showSelector(row, col, this.regSelectorValText[this.regDownRow][this.regDownCol])
                           // this.showSelector(this.regRows - this.regDownRow, this.regDownCol - this.codeColumns/2, this.regSelectorValText[this.regDownRow][this.regDownCol])
                        }                          
                    }
                    
                    //this.tiles[row][col].background = this.paintBrushColorsElipse[this.paintBrush] ;
    
                }
    
            }

        }
    },

    clearSelector(){

        for(let i = 0; i < this.selectorButtons.length; i++){
            if(this.selectorButtons[i] != null){
                for(let z = 0; z < this.selectorButtons[i].length; z++ ){
                this.selectorButtons[i][z].dispose();
                }
            }
        }


    },


    showSelector(row, col, text){


        this.clearSelector();

        for(let i =0; i < text.length; i++){
           // this.buttons[i] = [];;     
           this.selectorButtons[i] = [];

            for(let z =0; z< text[i].length; z++){
               // console.log(text[i][z]);
                this.selectorButtons[i][z] = Object.create(programmingButton); 
                this.selectorButtons[i][z].init(buttonPosition.center,buttonPosition.bottom, text[i][z] );
                this.selectorButtons[i][z].position(-(i +row),col+z);

            }
        }


            for(let i =0; i < text.length; i++){
                let tmp = [];
                let z;
                for(z =0; z< text[i].length; z++){
                    if(z!=0){
                        tmp[z-1] = this.selectorButtons[i][z];
                    }
                    let tmp2 = [];
                    let tmp2index = 0
                    for(let x = 0; x <text[i].length; x++){
                        if(x != z){
                            tmp2[tmp2index] = this.selectorButtons[i][x];
                            tmp2index++;   
                        }
                    }
                    if(z == 0){
                        for(let x = 0; x <text.length; x++){
                            if(x != i){
                                tmp2[tmp2index] = this.selectorButtons[x][0];
                                tmp2index++;
                            }
                        }
                        let tmp3 = [];
                        let tmp3index = 0;
                        for(let x = 0; x < text.length; x++){
                            if(x != i){
                                for(let y = 1; y < text[x].length; y++){
                                    tmp3[tmp3index] = this.selectorButtons[x][y];
                                    tmp3index++;
                                }
                            }
                        }
                        this.selectorButtons[i][z].onMoveHide(tmp3);
                    }
                    this.selectorButtons[i][z].onMoveUnHighlight(tmp2)
                
                }

                if(i ==0){
                    let tmp2 = [];
                    for(let x = 0; x < text.length; x++){
                        tmp2[x] =   this.selectorButtons[x][0]
                    }               
                    this.selectorButtons[0][0].onMoveShow(tmp.concat(tmp2));

                    this.selectorButtons[0][0].onDownShow(tmp2);
                    //this.selectorButtons[0][0].onDownShow(tmp.concat(tmp2));
                    //this.selectorButtons[0][0].onDownShow(tmp.concat(tmp2));
                }else{
                    this.selectorButtons[i][0].onMoveShow(tmp);
                }
        }


        
        for(let i =0; i < this.selectorButtons.length; i++){

            if(this.selectorButtons[i].length == 1){
                this.selectorButtons[i][0].initCallBack((function() {this.selectPointerUp(i, 0);}.bind(this)), buttonTrigger.up);

            }else{
                
                for(let a = 1; a< this.selectorButtons[i].length; a++){   
                                   
                    this.selectorButtons[i][a].initCallBack((function() {this.selectPointerUp(i, a);}.bind(this)), buttonTrigger.up);           
                }
            }
        }

    },


    selectPointerUp : function(row, col){

        if(this.regSelectButtonDownActive){

            //console.log( "val: " + this.regSelectorVal[this.regDownRow][this.regDownCol][row][col]);

           // this.regText[0][0][0] 
           if(this.regSelectorVal[this.regDownRow][this.regDownCol][row][col] > -100){

                this.regText[this.regDownRow][this.regDownCol][this.regDownTerm].text = this.regToPrefix[this.regDownRow][this.regDownCol]+this.noToABC[this.regDownTerm] + " " + this.regSelectorVal[this.regDownRow][this.regDownCol][row][col];

           
            
            //= this.regSelectorVal[this.regDownRow][this.regDownCol][row][col];
                //this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ] = this.regSelectorVal[this.regDownRow][this.regDownCol][row][col];

                if(this.regDownRow == 0 && this.regDownCol == 1){
                    this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ] = [];
                    this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ][0] = this.regSelectorVal[this.regDownRow][this.regDownCol][row][col];
                    this.reg[this.regDownRow][this.regDownCol][this.regDownTerm ][1] = 
                    console.log("snapshot")

                }
            }


        }

    },

    pointerUp: function(){
        if(this.codeButtonDownActive){
            //this.lines[this.clickPage][this.clickColumn][ this.clickRow].resetAlpha();
            this.codeButtonDownActive =false;
            

            //if(this.codeElipse[this.currentPage][this.codeDownRow][this.codeDownCol][this.codeDownTerm ]  != null){
                
            this.codeElipse[this.currentPage][this.codeDownRow][this.codeDownCol][this.codeDownTerm ].alpha  = 0.3; 
            //}
          
        }else if(this.regButtonDownActive){
            //this.lines[this.clickPage][this.clickColumn][ this.clickRow].resetAlpha();
            this.regButtonDownActive =false;
            

            //if(this.regElipse[this.currentPage][this.regDownRow][this.regDownCol][this.regDownTerm ]  != null){
                
            this.regElipse[this.regDownRow][this.regDownCol][this.regDownTerm ].alpha  = 0.3; 

            if( this.regSelectButtonDownActive){






                this.clearSelector();
                


                for(let row = 0; row < this.selectorButtons.length; row++){
                    for(let col = 0; col < this.selectorButtons[row].length; col++){    
                    
                        let x = canvas.width/2  + programmingButton.size[this.sizeSetting] * (col + this.regTerms *this.regDownCol + this.regDownTerm - this.codeColumns/2);

                        let y = canvas.height - (row + this.regRows - this.regDownRow) *programmingButton.size[this.sizeSetting];
    
                        if(this.scene.pointerX > x && this.scene.pointerX < x + programmingButton.size[this.sizeSetting] &&
                        this.scene.pointerY < y && this.scene.pointerY >  y - programmingButton.size[this.sizeSetting]
                        ){
                            //console.log("! row: " +row + "col: " + col);
                            this.selectorButtons[row][col].up();
                            break;
                        }

                    }
                }
                this.regSelectButtonDownActive = false;


            }
            //}
          
        }
    },

    pointerMove: function(){

  
        if(this.regSelectButtonDownActive){
            for(let row = 0; row < this.selectorButtons.length; row++){
                for(let col = 0; col < this.selectorButtons[row].length; col++){

                
                    let x = canvas.width/2  + programmingButton.size[this.sizeSetting] * (col + this.regTerms *this.regDownCol + this.regDownTerm - this.codeColumns/2)
                   
                    //let x = canvas.widht/2  + programmingButton.size[this.sizeSetting] *1;// (col + this.regDownCol + this.regDownTerm - this.codeColumns/2)
                  

                    let y = canvas.height - (row + this.regRows - this.regDownRow) *programmingButton.size[this.sizeSetting]

                    /*console.log("X: " + x + "y: "+ y)
                    console.log("poninter X: " + this.scene.pointerX + "y: "+ this.scene.pointerY)
*/
                    
                    if(this.scene.pointerX > x && this.scene.pointerX < x + programmingButton.size[this.sizeSetting] &&
                    this.scene.pointerY < y && this.scene.pointerY >  y - programmingButton.size[this.sizeSetting]
                    ){
                        //console.log("! row: " +row + "col: " + col);
                        this.selectorButtons[row][col].move();
                        break;
                    }


                    /*if(this.scene.pointerX > col * programmingButton.size[this.sizeSetting] && this.scene.pointerX < (1+col) * programmingButton.size[this.sizeSetting] &&
                    this.scene.pointerY < canvas.height - row * programmingButton.size[this.sizeSetting]&& this.scene.pointerY >  canvas.height - (row + 1) * programmingButton.size[this.sizeSetting]
                    ){
                        
                        this.programmingButton[row][col].move();
                        break;
                    }*/
                }
            }


        }


    }
 
}