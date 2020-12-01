
class GameScene2 extends Phaser.Scene {
    constructor() {
      super("Game2");
    }
  
    init() {
      this.playerSpeed = 1;
      this.enemyMaxY = 0;
      this.enemyMinY = 0;
  
      this.score = 0;
  
      this.scaleW = this.sys.game.config.width;
      this.scaleH = this.sys.game.config.height;
    }
  //CREATING CLASSES
    create() {
      this.createInput();
      this.createBackground();
      this.createAudio();
      this.createGround();
      this.createPlatform();
      this.createPlatform2();
      this.createVPlatform();
      this.createPlayer();
      this.createTreasures();
      this.createEnemies();
      this.createText();
  //CREATING MUTE BUTTON
      this.muteButton = new UiButton(this, this.scaleW / 1.1, this.scaleH * 0.05, 'button1', 'button2', 'Mute', this.stopMusic.bind(this));
      this.muteButton.setScale(0.3);
    }
  //MUTE THE MUSIC
    stopMusic(){
      game.sound.mute = true;
  }
  //CREATING CURSOR KEY INPUTS
    createInput() {
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  //CREATING BACKGROUND
    createBackground() {
      this.bg = this.add.sprite(0, 0, "background");
      this.bg.setOrigin(0, 0);
    }
  //CREATING THE AUDIO
    createAudio() {
      this.music = this.sound.add("bgmusic"); 
      this.music.play();
      this.music.volume = 0.05;
    }
  //CREATING THE GROUND
    createGround(){
      this.ground = this.physics.add.staticGroup();
      this.ground.create(350, 305, 'ground').setScale(1).refreshBody();
    }
  //CREATING THE PLATFORMS
    createPlatform(){
      this.platform = this.physics.add.staticGroup();
     
      this.platform.create(140,250, 'platform').setScale(1).refreshBody();
      this.platform.create(80,250, 'platform').setScale(1).refreshBody();
      this.platform.create(20,250, 'platform').setScale(1).refreshBody();
      this.platform.create(180,100, 'platform').setScale(1).refreshBody();
      this.platform.create(80,150, 'platform').setScale(1).refreshBody();
      this.platform.create(520,70, 'platform').setScale(1).refreshBody();
      this.platform.create(520,250, 'platform').setScale(1).refreshBody();
      this.platform.create(560,190, 'platform').setScale(1).refreshBody();
      this.platform.create(600,130, 'platform').setScale(1).refreshBody(); 
    }
  //CREATING PLATFORM THAT DOESNT AFFECT COLLECTABLE GEESE
    createPlatform2(){
      this.platform2 = this.physics.add.staticGroup();
      this.platform2.create(0,190, 'platform2').setScale(1).refreshBody();
      
    }
  //CREATING VERTICAL LAVA PLATFORMS
    createVPlatform(){
      this.vplatform = this.physics.add.staticGroup();
      this.vplatform.create(320,270, 'vplatform').setScale(1).refreshBody();
      this.vplatform.create(320,210, 'vplatform');
      this.vplatform.create(320,150, 'vplatform');
      this.vplatform.create(500,329, 'vplatform');
      this.vplatform.create(500,329, 'vplatform');
      this.vplatform.create(520,329, 'vplatform');
      this.vplatform.create(540,329, 'vplatform');
      this.vplatform.create(560,329, 'vplatform');
      this.vplatform.create(580,329, 'vplatform');
      this.vplatform.create(600,329, 'vplatform');
      this.vplatform.create(620,329, 'vplatform');
      this.vplatform.create(640,329, 'vplatform');
      this.vplatform.create(640,90, 'vplatform');
      this.vplatform.create(640,30, 'vplatform');
    }
  //CREATING PLAYER + PLAYER PHYSICS
    createPlayer() {
      this.player = this.physics.add.sprite(50, 250, "girl").setScale(0.75);
      this.isPlayerAlive = true;
      this.isPlayerWinning = false;
      this.player.score = 0;
      this.player.treasures = 0;
      //CREATING COLLISION AT WORLD BOUNDS
      this.player.setCollideWorldBounds(true);
      //SETTING PLAYER GRAVITY
      this.player.setGravity(0,1);
      //ADDING COLLISION TO OTHER ASSETS
      this.physics.add.collider(this.player, this.ground);
      this.physics.add.collider(this.player, this.platform);
      this.physics.add.collider(this.player, this.platform2);
      //ADDING FATAL COLLISION TO VERTICAL PLATFORMS
      this.physics.add.overlap(
        this.player,
        this.vplatform,
        this.collisionCheck,
        null,
        this
      );
  
      //CREATING ANIMATION STATES
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("girl", { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1,
      });
    
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("girl", { start: 5, end: 9 }),
        frameRate: 10,
        repeat: -1,
      });
    
      this.anims.create({
        key: "up",
        frames: this.anims.generateFrameNumbers("girl", { start: 10, end: 14 }),
        frameRate: 10,
        repeat: -1,
      });
    
      this.anims.create({
        key: "stand",
        frames: [{ key: "girl", frame: 0 }],
        frameRate: 10,
      });
    }
  //CREATING ENEMIES
    createEnemies() {
      this.enemies = this.physics.add.group({
        key: "enemy",
        repeat: 2,
        score: 5,
        setXY: {
          x: 110,
          y: 200,
          stepX: 250,
          stepY: -100,
        },
  
      
  
      });
  
      //SETTING ENEMY SPEED
      Phaser.Actions.Call(
        this.enemies.getChildren(),
        function (enemy) {
          enemy.speed = 1.5
        },
        this
      );
  
      //ADDING FATAL COLLISION TO ENEMIES
      this.physics.add.overlap(
        this.player,
        this.enemies,
        this.collisionCheck,
        null,
        this
      );
  //ADDING COLLISION BETWEEN ENEMIES AND OTHER ASSETS
      this.physics.add.collider(this.enemies, this.ground);
      this.physics.add.collider(this.enemies, this.platform);
  
    }
  //CREATING COLLECTABLE GEESE
    createTreasures() {
      this.treasures = this.physics.add.group({
        key: "goose",
        repeat: 3,
        score: 1,
        setXY: {
          x: 10,
          y: 10,
          stepX: 170,
          stepY: 0,
        },
      });
  
  //SCALING COLLECTABLES
      Phaser.Actions.ScaleXY(this.treasures.getChildren(), -0.3, -0.3);
  
      //ADDING A COLLECTION COLLISION TO GEESE
      this.physics.add.overlap(
        this.player,
        this.treasures,
        this.collectTreasures,
        null,
        this
      );
  //ADDING COLLISION BETWEEN GEESE AND OTHER ASSETS
      this.physics.add.collider(this.treasures, this.ground);
      this.physics.add.collider(this.treasures, this.platform);
    }
  //CREATING SCORE TEXT
    createText() {
      this.scoreText = this.add.bitmapText(16, 16, 'bmFont', 'score: 0');
      this.scoreText.setScale(0.5);
      this.scoreText.setTint(0x9400D3, 0x9400D3, 0x228B22,0x228B22);
    }
  
    //UPDATE LOOP
    update() {
  //IF PLAYER DIES OR WINS, EXIT THE UPDATE LOOP
       if (!this.isPlayerAlive || this.isPlayerWinning) {
        return;
        this.gameOver();
      }
  //ADDING CURSOR BUTTONS
      if (this.cursors.left.isDown) {
        this.player.x -= this.playerSpeed;
        this.player.anims.play("left", true);
      } else if (this.cursors.right.isDown) {
        this.player.x += this.playerSpeed;
        this.player.anims.play("right", true);
      } else if (this.cursors.up.isDown) {
        this.player.y -= this.playerSpeed-1;
        this.player.anims.play("up", true);
      } else if (this.cursors.down.isDown) {
        this.player.y += this.playerSpeed;
        this.player.anims.play("down", true);
      } else {
        this.player.anims.play("stand");
      }
    //CHANGING PLAYER VELOCITY WHEN UP KEY IS PRESSED
      if (this.cursors.up.isDown && this.player.body.touching.down)
            {
                this.player.setVelocityY(-200);
            }
  
      console.log(this.player.score);
      //ADDING SCORE
      this.scoreText.setText("score: " + this.player.score);
  
      //ENEMY MOVEMENT
      let enemies = this.enemies.getChildren();
      let numEnemies = enemies.length;
  
      for (let i = 0; i < numEnemies; i++) {
        enemies[i].y += enemies[i].speed;
  
        if (enemies[i].y >= this.enemyMaxY && enemies[i].speed > 0) {
          enemies[i].speed *= -1;
        } else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
          enemies[i].speed *= -1;
        }
  
      }
    }
  
    //FATAL COLLISIONS
    collisionCheck(player, enemy, vplatform) {
      console.log("overlapping now");
      this.isPlayerAlive = false;
      player.disableBody(true, true);
      this.music.stop();
      this.gameOver();
    }
  
    //COLLECTABLE COLLISIONS
    collectTreasures(player, treasures) {
      console.log("treasure collected");
      this.player.treasures ++;
      this.player.score = 1  * this.player.treasures;
      treasures.disableBody(true, true);
      this.checkWinCondition(this.player.treasures);
    }
  
    //WINNING THE GAME
    checkWinCondition(howManyChests) {
      console.log("checking Win")
      if (howManyChests == 4) {
        console.log("You won!");
        this.isPlayerWinning = true;
        this.music.stop();
        this.scene.start("Win", {score: this.player.score});
      }
      
    }
  //MOVE TO GAME OVER SCENE
    gameOver() {
      console.log("hello from gameOver")
      this.scene.start("GameOver2");
    }
  }
  