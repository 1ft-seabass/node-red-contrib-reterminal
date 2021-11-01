const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

const touch = new InputEvent.Touch(dev.tpPath());

let posX = 0;
let posY = 0;
let checkX = false;
let checkY = false;
let currentSendData = {};

touch.on('x-axis', function(buffer){
  // console.log('x-axis coordinate=' + buffer);
  checkX = true;
  posX = Number(buffer);
  sendPosition();
});

touch.on('y-axis', function(buffer){
  // console.log('y-axis coordinate=' + buffer);
  checkY = true;
  posY = Number(buffer);
  sendPosition();
});

function sendPosition(){
  if( checkX  == true & checkY  == true ){
    const json_data = {
      position:{
        x:posX,
        y:posY
      }
    }
    currentSendData = JSON.stringify(json_data);
    console.log(currentSendData);

    checkX = false;
    checkY = false;
  }
}
