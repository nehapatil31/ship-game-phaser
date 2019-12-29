var config = {
  width: 256,
  height: 272,
  background: 0x000000,
  scene: [Scene1, Scene2]
};

window.onload = function() {
  var game = new Phaser.Game(this.config);
};
