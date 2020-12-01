class WinScene extends Phaser.Scene {
  constructor() {
    super('Win');
    
  }

  init() {
    
    this.scaleW = this.sys.game.config.width; 
    this.scaleH = this.sys.game.config.height; 
  }

  create(data) {
    console.log("WinScene", data);
      this.titleText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 -100, 'bmFont', 'You won');
      this.titleText.setOrigin(0.5);
      this.titleText.setTint(0xF39C12,0xF39C12, 0x82E0AA, 0x82E0AA);
    
      this.scoreText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 -50, 'bmFont', 'Your Score:' + data.score);
      this.scoreText.setOrigin(0.5);
      this.scoreText.setScale(0.3);
      this.scoreText.setTint(0xECF0F1,0xECF0F1, 0x2E86C1, 0x2E86C1);

    this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.65, 'button1', 'button2', 'Play again', this.startScene.bind(this, 'Title'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
