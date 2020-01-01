class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    var x = scene.player.x;
    var y = scene.player.y;

    super(scene, x, y, "beam");
    scene.add.existing(this);

    this.play("beam_anim");
    scene.physics.world.enableBody(this); //enable the spritesheet to have physics
    this.body.velocity.y = -250; //set velocity of beam to go upwards
  }

  update() {
    if (this.y < 32) {
      this.destroy();
    }
  }
}
