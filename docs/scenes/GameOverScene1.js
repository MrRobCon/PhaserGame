class GameOverScene1 extends Phaser.Scene {
  constructor(s) {
    super('GameOver1');
    
  }

  init() {
    this.scaleW = this.sys.game.config.width; 
    this.scaleH = this.sys.game.config.height;
  }

  create() {

      this.titleText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 -50, 'bmFont', 'GOOSEBOY DIED');
      this.titleText.setOrigin(0.5);
      this.titleText.setScale(1);
      this.titleText.setTint(0xff0000,0xff0000, 0x000000, 0x000000);


    this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.75, 'button1', 'button2', 'Restart', this.startScene.bind(this, 'Game1'));
  }in

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
