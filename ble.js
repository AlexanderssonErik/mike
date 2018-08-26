let ble = {
  connectButton: 0,
  timeOut: 0,
  gattServer: 0,
  gattService: 0,
  gattCharacteristic: 0,
  receivedData: [],
  blocksReceiving: 0,
  init: function(){
    this.connectButton = Object.create(buttonSimple); 
    this.connectButton.init(buttonPosition.center,buttonPosition.center, "./icon/ble/blue_tooth_c.svg" );
    this.connectButton.initCallBack(this.connect, buttonTrigger.up);
    this.connectButton.show();

  },
  connect: function(){

    if(help.active){
      help.clickForHelp(helpType.ble);
      return;
    }

    navigator.bluetooth.requestDevice({
      filters: [{
        services: ['4880c12c-fdcb-4077-8920-a450d7f9b907']
      }]
    })   
    .then(device => {
      console.log('EAEA Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('EAEA Found GATT server');
      ble.gattServer = server;
      //Get service
      return ble.gattServer.getPrimaryService('4880c12c-fdcb-4077-8920-a450d7f9b907');
    })
    .then(service => {
      console.log('EAEA Found GATT service');
      ble.gattService = service;
      // Get characteristic
      return ble.gattService.getCharacteristic('fec26ec4-6d71-4442-9f81-55bc21d658d6');
    })
    .then(characteristic => {
      console.log('EAEA Found characteristic');
      ble.gattCharacteristic = characteristic;

      clearTimeout(ble.timeOut);                      
      ble.timeOut = setTimeout(ble.sendCommand, 100);

      ble.connectButton.hide();
       // Listen to device notifications
      return ble.gattCharacteristic.startNotifications().then(() => {
        ble.gattCharacteristic.addEventListener('characteristicvaluechanged', event => {



         /* if(debugCom){
            console.log("in data");
       let inData = [];
         for(let z = 0; z <event.target.value.byteLength; z++ ){
             inData[z] = event.target.value.getUint8(z).toString(16);
             console.log('inData[z] ' + inData[z] );
             //inData += ' ';

         }
   }*/


         
          let i = 0;

       //  receivedData   

          let recivedDataLength =  ble.receivedData.length;
          for(; i < event.target.value.byteLength; i++){
            ble.receivedData[i + recivedDataLength]  = event.target.value.getUint8(i);
          }

          i =0;
          if(ble.blocksReceiving == 0){
            while(i < ble.receivedData.length){
              if(ble.receivedData[i] == 0x80){
                ble.receivedData.splice(0, i +1);                                
                ble.blocksReceiving = 1;
                break;
              }else{
                i++;
              }
            }
          }
          if(ble.blocksReceiving == 1){
            while( 3 < ble.receivedData.length){
              if(ble.receivedData[0] == 0x82){
                ble.blocksReceiving = 2;
                ble.receivedData.splice(0, 1);                                   
                break;
              }
              let twobytwo = true;
              if((ble.receivedData[3]& 0x0C) == 0){
                twobytwo = false;
              }
              world.addBlock(ble.receivedData[0],ble.receivedData[2],ble.receivedData[1],(ble.receivedData[3]& 0x03),twobytwo,0);
              ble.receivedData.splice(0, 4);  
            }
          }
          if(ble.blocksReceiving == 2 && ble.receivedData.length >6){
            textBattery.text =  (ble.receivedData[6] * 0.028) + "V";
            compass.hex[0] = (ble.receivedData[0] << 8) + ble.receivedData[1];
            compass.hex[1] = (ble.receivedData[2] << 8) + ble.receivedData[3];
            compass.hex[2] = (ble.receivedData[4] << 8) + ble.receivedData[5];
            ble.blocksReceiving = 0;
            ble.receivedData.splice(0, ble.receivedData.length);  
            world.endAddBlock();
            ble.sendCommand().then(() => {
             //console.log('EAEA gattWrite sent');
            })
            .catch(ble.handleError);
            return;
          }
        });
      });
    })
    .catch(ble.handleError);
    

   
  
  },
  sendCommand: function() {

    clearTimeout(ble.timeOut);
    ble.timeOut = setTimeout(ble.sendCommand, 6000);

    var cmd;
    let cmd_tmp = [];
    cmd_tmp[0] = 0x80;
    cmd_tmp[1] = base.ledHex[0]
    cmd_tmp[2] = base.ledHex[1]
    let cmd_pos = 3;

    for(let i =0; i < world.block.length; i++){
      
       
      cmd_tmp[cmd_pos] = world.block[i].ledARight + (world.block[i].ledALeft << 3);
      
      if(world.blinkLEDOff){
        if(world.block[i].ledARightBlink){          
          cmd_tmp[cmd_pos] &= 0xF8;
        }
        if(world.block[i].ledALeftBlink){         
          cmd_tmp[cmd_pos] &= 0xC7;
        }
      }   
      cmd_pos++;
      if( !world.block[i].twobytwo){
        cmd_tmp[cmd_pos] = world.block[i].ledBRight + (world.block[i].ledBLeft << 3); 
        if(world.blinkLEDOff){
          if(world.block[i].ledBRightBlink){
            cmd_tmp[cmd_pos] &= 0xF8;
          }
          if(world.block[i].ledBLeftBlink){
            cmd_tmp[cmd_pos] &= 0xC7;
          }
        }   
        cmd_pos++;
      }
    }
    cmd_tmp[cmd_pos] = 0x81;
    cmd_pos++;
    //     DEBUG     
    /*if(debugCom){  
      let outData = [];
      for(let z = 0; z < cmd_pos; z++){
        outData[z] =   cmd_tmp[z].toString(16);
        console.log("outData[z]: " + z + ":" + outData[z]);
      }
    }*/
    cmd = new Uint8Array(cmd_pos);
    for(let i = 0; i < cmd_pos; i++ ){
        cmd[i] = cmd_tmp[i];
    }
      //busy signaling can't keep up, remove
    //busy = true;
    return ble.gattCharacteristic.writeValue(cmd).then(() => {
            // busy = false;
    });
  },

  handleError: function(error) {
    console.log('BLE error=' + error);

  },
  sizeChange: function(size){    

    this.connectButton.changeSize(size);
  }
}