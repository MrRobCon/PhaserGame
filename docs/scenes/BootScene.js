class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }
//PRELOADING ASSETS
  preload() {
    console.log("preloading");
    // load images
    this.loadImages();
    //13 load Bitmap text
    this.loadBitmapText();
    // load spritesheets
    this.loadSpriteSheets();
    // load audio
    this.loadAudio();
  }
//LOADING IMAGES
  loadImages() {
    this.load.image("background", "assets/purple.png");
    this.load.image("enemy", "assets/monster.png");
    this.load.image("ground", "assets/ground.png");
    this.load.image("goose", "assets/goose.png");
    this.load.image("button1", "assets/button1.png");
    this.load.image("button2", "assets/button2.png");
    this.load.image("platform", "assets/platform.png");
    this.load.image("platform2", "assets/platform.png");
    this.load.image("vplatform", "assets/verticalPlatform.png");
  }
  
//LOADING FONT
  loadBitmapText() {
    this.load.bitmapFont('bmFont', 'assets/bitmapfonts/font.png', 'assets/bitmapfonts/font.fnt');
  }
//LOADING SPRITESHEETS
  loadSpriteSheets() {
    this.load.spritesheet("dude", "assets/GooseBoy.png", {
      frameWidth: 36,
      frameHeight: 54,
    });

    this.load.spritesheet("girl", "assets/GooseGirl.png", {
      frameWidth: 36,
      frameHeight: 56,
    });
  }
//LOADING AUDIO
  loadAudio() {
    this.load.audio("bgmusic", [
      "assets/bgmusic.mp3",
    ]);
  }
//STARTING TITLE SCENE
  create() {
    this.scene.start("Title");
  }
}
