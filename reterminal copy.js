const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

module.exports = function (RED) {
  function NodeRedReTerminal(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    console.log("NodeRedReTerminal");

    const button = new InputEvent.Button(dev.buttonsPath());

    console.log("button");

    /*
    this._button.fd.pause();
    this._button.fd.close();
    this._button.fd.destroy();
    */

    this._button = button;

    node.on('close', function(done) {
      this._done = done;
      console.log('close-----');
      // console.log(button);
      // console.log(this._button);
      this._button.fd.pause();
      this._button.fd.on('close',function(){
        console.log("closed");
        this._button.fd.destroy();
      });

      this._button.fd.close();
      
      
      // console.log(this._button);
      done();
      
    });
  }
  RED.nodes.registerType("buttons", NodeRedReTerminal, {
    
  });
}