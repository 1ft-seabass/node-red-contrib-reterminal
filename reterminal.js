const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');
const led = require('npm-reterminal/lib/led');
const buzzer = require('npm-reterminal/lib/buzzer');
var path = require('path');

module.exports = function (RED) {
  function NodeRedReTerminalButtons(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const spawn = require('child_process').spawn;
    const childprocess_buttons = spawn('node', [ path.join( __dirname , 'childprocess-buttons.js' )]);
    this.status({fill:"green",shape:"dot",text:"buttons listened"});

    childprocess_buttons.stdout.on('data', (data) => {
      let str_data = String(data);
      const json_data = JSON.parse(str_data);

      msg = {};
      msg.payload = json_data;
      
      node.send(msg);
    });

  }
  RED.nodes.registerType("buttons", NodeRedReTerminalButtons, {
    
  });

  function NodeRedReTerminalAccelerometer(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const spawn = require('child_process').spawn;
    const childprocess_buttons = spawn('node', [ path.join( __dirname , 'childprocess-accel.js' )]);
    this.status({fill:"green",shape:"dot",text:"accelerometer listened"});

    childprocess_buttons.stdout.on('data', (data) => {
      let str_data = String(data);
      const json_data = JSON.parse(str_data);

      msg = {};
      msg.payload = json_data;
      
      node.send(msg);
      
    });

  }
  RED.nodes.registerType("accelerometer", NodeRedReTerminalAccelerometer, {
    
  });

  function NodeRedReTerminalLEDStaGreen(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', async function (msg) {
      if( msg.payload == true ){
        led.staGreenOn();
        this.status({fill:"green",shape:"dot",text:"STA Green LED : on"});
      } else if( msg.payload == false ){
        led.staGreenOff();
        this.status({fill:"green",shape:"dot",text:"STA Green LED : off"});
      }
    });

  }
  RED.nodes.registerType("led_sta_green", NodeRedReTerminalLEDStaGreen, {
    
  });

  function NodeRedReTerminalLEDStaRed(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', async function (msg) {
      if( msg.payload == true ){
        led.staRedOn();
        this.status({fill:"green",shape:"dot",text:"STA Red LED : on"});
      } else if( msg.payload == false ){
        led.staRedOff();
        this.status({fill:"green",shape:"dot",text:"STA Red LED : off"});
      }
    });

  }
  RED.nodes.registerType("led_sta_red", NodeRedReTerminalLEDStaRed, {
    
  });

  function NodeRedReTerminalLEDUsrGreen(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', async function (msg) {
      if( msg.payload == true ){
        led.usrGreenOn();
        this.status({fill:"green",shape:"dot",text:"USR Green LED : on"});
      } else if( msg.payload == false ){
        led.usrGreenOff();
        this.status({fill:"green",shape:"dot",text:"USR Green LED : off"});
      }
    });

  }
  RED.nodes.registerType("led_usr_green", NodeRedReTerminalLEDUsrGreen, {
    
  });

  function NodeRedReTerminalBuzzer(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', async function (msg) {
      if( msg.payload == true ){
        buzzer.buzzerOn();
        this.status({fill:"green",shape:"dot",text:"Buzzer : on"});
      } else if( msg.payload == false ){
        buzzer.buzzerOff();
        this.status({fill:"gray",shape:"dot",text:"Buzzer : off"});
      }
    });

  }
  RED.nodes.registerType("buzzer", NodeRedReTerminalBuzzer, {
    
  });

  function NodeRedReTerminalLightSensor(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const spawn = require('child_process').spawn;
    const childprocess_buttons = spawn('node', [ path.join( __dirname , 'childprocess-light.js' )]);
    this.status({fill:"green",shape:"dot",text:"light sensor listened"});

    childprocess_buttons.stdout.on('data', (data) => {
      let str_data = String(data);
      const json_data = JSON.parse(str_data);

      msg = {};
      msg.payload = json_data;
      
      node.send(msg);
      
    });

  }
  RED.nodes.registerType("light_sensor", NodeRedReTerminalLightSensor, {
    
  });

  function NodeRedReTerminalTouch(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const spawn = require('child_process').spawn;
    const childprocess_buttons = spawn('node', [ path.join( __dirname , 'childprocess-touch.js' )]);
    this.status({fill:"green",shape:"dot",text:"touch panel listened"});

    childprocess_buttons.stdout.on('data', (data) => {
      let str_data = String(data);
      const json_data = JSON.parse(str_data);

      msg = {};
      msg.payload = json_data;
      
      node.send(msg);
      
    });

  }
  RED.nodes.registerType("touch_panel", NodeRedReTerminalTouch, {
    
  });
}