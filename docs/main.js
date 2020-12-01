//13 physics
var config = {
  type: Phaser.AUTO,
  width: 640,
  height: 310,
  scene: [
    BootScene,
    TitleScene,
    InfoScene,
    CharacterSelectScene,
    GameScene1,
    GameScene2,
    WinScene,
    GameOverScene1,
    GameOverScene2,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 300,
      },
    },
  },
};

var game = new Phaser.Game(config);
