class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  //INITIALISING GAME SIZE
  init() {
    this.scaleW = this.sys.game.config.width; 
    this.scaleH = this.sys.game.config.height; 
  }

  create() {
   //CREATING GAME TITLE
    this.titleText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2-50, 'bmFont', 'Wild Goose Chase');
    this.titleText.setOrigin(0.5);
    this.titleText.setTint(	0xFFFFFF,0xFFFFFF, 0xCA6F1E,0xCA6F1E );
    
//CREATING BUTTON
    this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.8, 'button1', 'button2', 'Proceed', this.startScene.bind(this, 'Info'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
