
let guiSettings = {
    sizeSetting : 1,
    enabled : false,
    buttons: [],
    sizeButton: 0,
    okButton : 0,
    //helpButton : 0,
    scene: 0,
    menuActive: false,
    init : function(scene){
        this.scene = scene;

        let iconPathOkButton = "./icon/ok.svg"
        let iconPathSizeButton = "./icon/size.svg"
        //let iconPathHelpButton = "./icon/ok.svg"

        let iconPath = [];
        iconPath[0] = [];
        iconPath[0][0] = "./icon/settings.svg";
        iconPath[0][1] = "./icon/hide_blocks.svg";
        iconPath[0][2] = "./icon/zoom_out.svg"

        iconPath[1] = [];
        iconPath[1][0] = "./icon/settings_snap.svg"
        iconPath[1][1] = "./icon/settings_snap_off.svg"
        iconPath[1][2] = "./icon/settings_snap_4_diagonal.svg"
        iconPath[1][3] = "./icon/settings_snap_4_horizontal.svg"
        iconPath[1][4] = "./icon/settings_snap_8.svg"

       /* iconPath[2] = [];
        iconPath[2][0] = "./icon/settings_render.svg"
        iconPath[2][1] = "./icon/settings_render_low.svg"
        iconPath[2][2] = "./icon/settings_render_mid.svg"
        iconPath[2][3] = "./icon/settings_render_high.svg"*/

        iconPath[2] = [];
        iconPath[2][0] = "./icon/settings_compass.svg"
        iconPath[2][1] = "./icon/settings_compass_off.svg"
        iconPath[2][2] = "./icon/settings_compass_on.svg"

        iconPath[3] = [];
        iconPath[3][0] = "./icon/settings_full_screen.svg"
        iconPath[3][1] = "./icon/settings_compass_off.svg"
        iconPath[3][2] = "./icon/settings_full_screen.svg"

        iconPath[4] = [];
        iconPath[4][0] = "./icon/settings_full_screen.svg"
        iconPath[4][1] = "./icon/settings_compass_off.svg"
        iconPath[4][2] = "./icon/settings_full_screen.svg"

        this.okButton = Object.create(buttonSimple); 
        this.okButton.init(buttonPosition.center,buttonPosition.bottom, iconPathOkButton );

     /*   this.helpButton = Object.create(buttonSimple); 
        this.helpButton.init(buttonPosition.right,buttonPosition.bottom, iconPathOkButton );
        this.helpButton.position(-1,0);
        this.helpButton.initCallBack(this.clickHelp, buttonTrigger.down);
        this.helpButton.show();*/
        //this.okButton.initCallBack(this.clickSize, buttonTrigger.down);
        //this.okButton.show();

        this.sizeButton = Object.create(buttonSimple); 
        this.sizeButton.init(buttonPosition.right,buttonPosition.bottom, iconPathSizeButton );
        this.sizeButton.initCallBack(this.clickSize, buttonTrigger.down);
        this.sizeButton.show();



        for(let i =0; i < iconPath.length; i++){


            this.buttons[i] = [];;

            for(z =0; z< iconPath[i].length; z++){

                this.buttons[i][z] = Object.create(buttonExpandable); 
                this.buttons[i][z].init(buttonPosition.left,buttonPosition.bottom, iconPath[i][z] );
                this.buttons[i][z].position(-i,z);

            }
        }



        for(let i =0; i < iconPath.length; i++){
            let tmp = [];
            let z;
            for(z =0; z< iconPath[i].length; z++){
                if(z!=0){
                    tmp[z-1] = this.buttons[i][z];
                }
                let tmp2 = [];
                let tmp2index = 0
                for(let x = 0; x <iconPath[i].length; x++){
                    if(x != z){
                        tmp2[tmp2index] = this.buttons[i][x];
                        tmp2index++;   
                    }
                }
                if(z == 0){
                    for(let x = 0; x <iconPath.length; x++){
                        if(x != i){
                            tmp2[tmp2index] = this.buttons[x][0];
                            tmp2index++;
                        }
                    }
                    let tmp3 = [];
                    let tmp3index = 0;
                    for(let x = 0; x < iconPath.length; x++){
                        if(x != i){
                            for(let y = 1; y < iconPath[x].length; y++){
                                tmp3[tmp3index] = this.buttons[x][y];
                                tmp3index++;
                            }
                        }
                    }
                    this.buttons[i][z].onMoveHide(tmp3);
                }
                this.buttons[i][z].onMoveUnHighlight(tmp2)
            
            }
            
            if(i ==0){
                let tmp2 = [];
                for(let x = 1; x < iconPath.length; x++){
                    tmp2[x-1] =   this.buttons[x][0]
                }               
                this.buttons[0][0].onMoveShow(tmp.concat(tmp2));
                this.buttons[0][0].onDownShow(tmp.concat(tmp2));
            }else{
                this.buttons[i][0].onMoveShow(tmp);
            }
        }

  
        this.buttons[0][1].initCallBack(this.clickHideBlock, buttonTrigger.move);
        this.buttons[0][2].initCallBack(this.clickZoomOut, buttonTrigger.move);

        this.buttons[1][1].initCallBack(this.clickSnapOff, buttonTrigger.up);
        this.buttons[1][2].initCallBack(this.clickSnapDiagonal, buttonTrigger.up);
        this.buttons[1][3].initCallBack(this.clickSnapVertical, buttonTrigger.up);
        this.buttons[1][4].initCallBack(this.clickSnap45Deg, buttonTrigger.up);
       
       /* this.buttons[2][1].initCallBack(this.clickResLow, buttonTrigger.up);
        this.buttons[2][2].initCallBack(this.clickResMid, buttonTrigger.up);
        this.buttons[2][3].initCallBack(this.clickResHigh, buttonTrigger.up);*/

        this.buttons[2][1].initCallBack(this.clickCompassOff, buttonTrigger.up);
        this.buttons[2][2].initCallBack(this.clickCompassOn, buttonTrigger.up);

        this.buttons[3][1].initCallBack(this.clickFullScreenOff, buttonTrigger.up);
        this.buttons[3][2].initCallBack(this.clickFullScreenOn, buttonTrigger.up);

        this.buttons[4][1].initCallBack(this.clickSoundOff, buttonTrigger.up);
        this.buttons[4][2].initCallBack(this.clickSoundOn, buttonTrigger.up);
        this.buttons[0][0].show();

        this.enabled = true;
    },
    click : function(){
        console.log("click");
    },
    clickSoundOff: function(){
        sound.off();
        console.log("sound off");
    },
    clickSoundOn: function(){
        sound.on();
        console.log("sound on");
    },

   /* clickHelp : function() {
        console.log("help!!");
        help.playVideo();

    },*/

    clickSize : function(){
        if(help.active){
            help.clickForHelp(helpType.size);
            return;
        }
  

        guiSettings.sizeSetting +=1;
        guiSettings.sizeSetting %=3;

        guiGame.sizeChange(guiSettings.sizeSetting);
        ble.sizeChange(guiSettings.sizeSetting);
        help.sizeChange(guiSettings.sizeSetting);

        
       // if(i ==0 ){ 
        if(guiSettings.sizeSetting ==0 ){
            guiSettings.sizeButton.changeSize(1);            
        }else{
            guiSettings.sizeButton.changeSize(guiSettings.sizeSetting);
        }
        guiSettings.okButton.changeSize(guiSettings.sizeSetting);
       // guiSettings.helpButton.changeSize(guiSettings.sizeSetting);
        for(let i =0; i < guiSettings.buttons.length; i++){
            for(let z =0; z< guiSettings.buttons[i].length; z++){
                guiSettings.buttons[i][z].changeSize(guiSettings.sizeSetting);
                
            }
        }



    },
    clickHideBlock: function(){
        world.hideBlocks();
        console.log("hideblock");
    },
    clickZoomOut: function(){
        camera.zoomToStartPos();
        console.log("zoomout");
    },
    clickSnapOff: function(){
        console.log("snapoff");
        camera.snap = cameraSnap.off;
    },
    clickSnapDiagonal: function(){
        console.log("snapDiagonal");
        camera.snap = cameraSnap.diagonal;
    },
    clickSnapVertical: function(){
        console.log("snapVertical");
        camera.snap = cameraSnap.vertical;
    },
    clickSnap45Deg: function(){
        console.log("snap45Deg");
        camera.snap = cameraSnap.deg;
    },
    clickResLow: function(){
        console.log("resLow");
        
    },
    clickResMid: function(){
        console.log("resMid");
        
    },
    clickResHigh: function(){
        console.log("resHigh");
        
    },
    clickCompassOff: function(){
        console.log("compassoff");
        compass.disable();
        
    },
    clickCompassOn: function(){
        console.log("compasson");
        camera.snap = cameraSnap.off;
        compass.enable();
        
    },
    clickFullScreenOff: function(){
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  

    },
    clickFullScreenOn: function(){
       /* if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {*/
        if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
         } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    /*} else {  
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
    }  */
    },
    pointerMove: function(){
        if(this.menuActive){
            for(let row = 0; row < this.buttons.length; row++){
                for(let col = 0; col < this.buttons[row].length; col++){
                    if(this.scene.pointerX > col * buttonExpandable.size[this.sizeSetting] && this.scene.pointerX < (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY < canvas.height - row * buttonExpandable.size[this.sizeSetting]&& this.scene.pointerY >  canvas.height - (row + 1) * buttonExpandable.size[this.sizeSetting]
                    ){
                        
                        this.buttons[row][col].move();
                        break;
                    }
                }
            }
        }
    },
    pointerDown: function(){
        if(this.scene.pointerX > 0 && this.scene.pointerX <  buttonExpandable.size[this.sizeSetting] &&
            this.scene.pointerY < canvas.height && this.scene.pointerY >  canvas.height - buttonExpandable.size[this.sizeSetting]
            ){
                if(help.active){
                    help.clickForHelp(helpType.settings);
                    return;
                }
                sound.buttonAction();
                camera.lock();
                this.buttons[0][0].down();
                this.menuActive = true;
              

            }
    },
    pointerUp: function(){
        if(this.menuActive){
            camera.unlock();
            world.unHideBlocks();

            for(let row = 0; row < this.buttons.length; row++){
                for(let col = 0; col < this.buttons[row].length; col++){
                    if(this.scene.pointerX > col * buttonExpandable.size[this.sizeSetting] && this.scene.pointerX < (1+col) * buttonExpandable.size[this.sizeSetting] &&
                    this.scene.pointerY < canvas.height - row * buttonExpandable.size[this.sizeSetting]&& this.scene.pointerY >  canvas.height - (row + 1) * buttonExpandable.size[this.sizeSetting]
                    ){
                        this.buttons[row][col].up();
                        break;
                    }
                }
            }

            this.menuActive = false;
            for(let i =0; i < this.buttons.length; i++){
                for(let z =0; z< this.buttons[i].length; z++){
                    if(!(i == 0 && z ==0)){                    
                        this.buttons[i][z].hide(); 
                    }
                }
            }

            this.buttons[0][0].resetAlpha(); 
            //this.sizeButton.resetAlpha(); //MAybe not under menuActive
            //this.okButton.resetAlpha();//MAybe not under menuActive
        
          /*  this.menuActive = false;
            for(let i =0; i < guiSettings.buttons.length; i++){
                for(let z =0; z< guiSettings.buttons[i].length; z++){
                    if(!(i == 0 && z ==0)){                    
                        guiSettings.buttons[i][z].hide(); 
                    }
                }
            }
            guiSettings.sizeButton.resetAlpha(); //MAybe not under menuActive
            guiSettings.okButton.resetAlpha();//MAybe not under menuActive*/
        }
    },
}