const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

const accel = new InputEvent.Accel(dev.accelPath());

let xAxis = 0;
let yAxis = 0;
let zAxis = 0;
let checkX = false;
let checkY = false;
let checkZ = false;
let currentSendData = JSON.stringify({status:"waiting"});
let loopInterval = 200;

accel.on('A1', function(buffer){
  // console.log('x-axis value=' + buffer);
  checkX = true;
  xAxis = Number(buffer);
});

accel.on('A2', function(buffer){
  // console.log('y-axis value=' + buffer);
  checkY = true;
  yAxis = Number(buffer);
});

accel.on('A3', function(buffer){
  // console.log('z-axis value=' + buffer);
  checkZ = true;
  zAxis = Number(buffer);
});

setInterval(
  function () {
    if( checkX  == true & checkY  == true & checkZ == true ){
      const json_data = {
        status:"ok",
        axis:{
          x:xAxis,
          y:yAxis,
          z:zAxis
        }
      }
      currentSendData = JSON.stringify(json_data);
      console.log(currentSendData);
    } else {
      const json_data = {
        status:"waiting"
      }
      currentSendData = JSON.stringify(json_data);
      console.log(currentSendData);
    }
  }, loopInterval
)
