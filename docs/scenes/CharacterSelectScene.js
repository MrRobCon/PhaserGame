class CharacterSelectScene extends Phaser.Scene {
    constructor() {
      super('Select');
    }
  
    init() {
      this.scaleW = this.sys.game.config.width; 
      this.scaleH = this.sys.game.config.height; 
      game.sound.mute = false;
    }
  
    create() {
//LOADING CHARACTER IMAGES
        this.player = this.add.sprite(210, 150, "dude").setScale(2);
        this.player = this.add.sprite(420, 150, "girl").setScale(2);

     
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH / 5, 'Select Your Character', { fontSize: '20px', fill: '#fff' });
        this.titleText.setOrigin(0.5);
      
        
        this.startGameButton1 = new UiButton(this, this.scaleW / 3, this.scaleH * 0.8, 'button1', 'button2', 'GooseBoy', this.startScene.bind(this, 'Game1'));
        this.startGameButton2 = new UiButton(this, this.scaleW / 1.5, this.scaleH * 0.8, 'button1', 'button2', 'GooseGirl', this.startScene.bind(this, 'Game2'));
        this.startGameButton1.setScale(0.5);
        this.startGameButton2.setScale(0.5);
        }
  
        startScene(targetScene) {
        this.scene.start(targetScene);
        }

    }
  
  