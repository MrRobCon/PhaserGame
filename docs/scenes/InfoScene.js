class InfoScene extends Phaser.Scene {
    constructor() {
      super('Info');
    }
  
    init() {
      this.scaleW = this.sys.game.config.width; 
      this.scaleH = this.sys.game.config.height; 
      //UNMUTING SOUND
      game.sound.mute = false;
    }
  
    create() {

     
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH / 2, 'Can you collect all the geese? \n Use the arrow keys to move \n Avoid the enemies and the lava blocks!!', { fontSize: '20px', fill: '#fff' });
        this.titleText.setOrigin(0.5);
      
        
        this.startGameButton1 = new UiButton(this, this.scaleW / 2, this.scaleH * 0.8, 'button1', 'button2', 'Begin', this.startScene.bind(this, 'Select'));
        this.startGameButton1.setScale(0.5);
        }
  
        startScene(targetScene) {
        this.scene.start(targetScene);
        }

    }
  
  