const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');
var path = require('path');

module.exports = function (RED) {
  function NodeRedReTerminalButtons(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    // console.log("NodeRedReTerminal");

    const spawn = require('child_process').spawn;
    const childprocess_buttons = spawn('node', [ path.join( __dirname , 'childprocess-buttons.js' )]);
    this.status({fill:"green",shape:"dot",text:"buttons listened"});

    childprocess_buttons.stdout.on('data', (data) => {
      // console.log(`stdout: ${data}`);
      // node.log(`stdout: ${data}`);
      
      let str_data = String(data);
      const json_data = JSON.parse(str_data);
      console.log(json_data);

      msg = {};
      msg.payload = json_data;
      
      node.send(msg);
    });

  }
  RED.nodes.registerType("buttons", NodeRedReTerminalButtons, {
    
  });
}