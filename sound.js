
let sound = {
    clickMp3: 0,
    scene: 0,
    correctMp3: 0,
    wrongMp3: 0,
    winMp3: 0,
    failMp3: 0,
    init: function(scene){
        this.scene = scene;
        this.clickMp3 = new BABYLON.Sound("Music", "./sounds/click.mp3", this.scene,
        function () {
         sound.clickMp3.setVolume(0.1);
        }
       );

       this.correctMp3 = new BABYLON.Sound("Music", "./sounds/correct.mp3", this.scene,
       function () {
        sound.correctMp3.setVolume(0.1);
       }
      );

      this.wrongMp3 = new BABYLON.Sound("Music", "./sounds/wrong.mp3", this.scene,
      function () {
       sound.wrongMp3.setVolume(0.1);
      }
     );

     this.winMp3 = new BABYLON.Sound("Music", "./sounds/win.mp3", this.scene,
     function () {
      sound.winMp3.setVolume(0.2);
     }
    );

    this.failMp3 = new BABYLON.Sound("Music", "./sounds/fail.mp3", this.scene,
    function () {
     sound.failMp3.setVolume(0.3);
    }
   );

   BABYLON.Engine.audioEngine.setGlobalVolume(1);

    },


    off: function(){
        BABYLON.Engine.audioEngine.setGlobalVolume(0);

    },
    on: function(){
        BABYLON.Engine.audioEngine.setGlobalVolume(1);

    },
    buttonAction: function(){
        this.clickMp3.play();

    },
    wrong: function(percentageCompleted){
        //console.log("wrong: " + percentageCompleted);
        if(percentageCompleted < 0.4){
            this.wrongMp3.setVolume(0.05);
            
        }else if(percentageCompleted < 0.6){
            this.wrongMp3.setVolume(0.1);
        }else if(percentageCompleted < 0.8){
            this.wrongMp3.setVolume(0.3);
        }else{
            this.wrongMp3.setVolume(1);
        }

        this.wrongMp3.play();
    },
    correct: function(percentageCompleted){
        //console.log("correct: " + percentageCompleted);
        if(percentageCompleted < 0.4){
            this.correctMp3.setVolume(0.02);
        }else if(percentageCompleted < 0.6){
            this.correctMp3.setVolume(0.05);
        }else if(percentageCompleted < 0.8){
            this.correctMp3.setVolume(0.1);
        }else{
            this.correctMp3.setVolume(0.2);
        }

        this.correctMp3.play();
    },
    fail: function(){
        this.failMp3.play();
    },
    win: function(){
        this.winMp3.play();
    }

};