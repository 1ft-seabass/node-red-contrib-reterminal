var request = require('request');

module.exports = function (RED) {
  function NodeRedReTerminal(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("node-red-reterminal", NodeRedReTerminal, {
    
  });
}