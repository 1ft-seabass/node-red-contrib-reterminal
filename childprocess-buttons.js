const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

const button = new InputEvent.Button(dev.buttonsPath());

button.on('F1ON', function () {
  // console.log('F1 Pressed');
  const json_data = {
    key:"F1",
    status:"pressed"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('F1OFF', function () {
  // console.log('F1 Released');
  const json_data = {
    key:"F1",
    status:"released"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('F2ON', function () {
  // console.log('F2 Pressed');
  const json_data = {
    key:"F2",
    status:"pressed"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('F2OFF', function () {
  // console.log('F2 Released');
  const json_data = {
    key:"F2",
    status:"released"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('F3ON', function () {
  // console.log('F3 Pressed');
  const json_data = {
    key:"F3",
    status:"pressed"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('F3OFF', function () {
  // console.log('F3 Released');
  const json_data = {
    key:"F3",
    status:"released"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('OON', function () {
  // console.log('O Pressed');
  const json_data = {
    key:"O",
    status:"pressed"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});

button.on('OOFF', function () {
  // console.log('O Released');
  const json_data = {
    key:"O",
    status:"released"
  }
  const send_data = JSON.stringify(json_data);
  console.log(send_data);
});