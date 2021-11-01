const light = require('npm-reterminal/lib/light');

let loopInterval = 200;
let currentSendData = 0;

setInterval(
  function () {
    const sensor_value = Number(light.lightSense())
    const json_data = {
      light:sensor_value
    }
    currentSendData = JSON.stringify(json_data);
    console.log(currentSendData);
  }, loopInterval
);