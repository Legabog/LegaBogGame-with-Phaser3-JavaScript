
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var Wall2 = this.add.image(0.0, 0.0, "textures", "Wall2");
		Wall2.setOrigin(0.0, 0.0);
		Wall2.setScale(1.17, 0.94);
		
		var wall_9 = this.add.tileSprite(350.0, 200.0, 125.0, 25.0, "textures", "wall");
		wall_9.setOrigin(0.0, 0.5);
		
		var wall_8 = this.add.tileSprite(25.0, 200.0, 125.0, 25.0, "textures", "wall");
		wall_8.setOrigin(0.0, 0.5);
		
		var wall_7 = this.add.tileSprite(100.0, 275.0, 300.0, 25.0, "textures", "wall");
		wall_7.setOrigin(0.0, 0.0);
		
		var wall_6 = this.add.tileSprite(100.0, 100.0, 300.0, 25.0, "textures", "wall");
		wall_6.setOrigin(0.0, 0.0);
		
		var wall_5 = this.add.tileSprite(475.0, 25.0, 25.0, 350.0, "textures", "wall");
		wall_5.setOrigin(0.0, 0.0);
		
		var wall_4 = this.add.tileSprite(0.0, 25.0, 25.0, 350.0, "textures", "wall");
		wall_4.setOrigin(0.0, 0.0);
		
		var wall_3 = this.add.tileSprite(0.0, 375.0, 200.0, 25.0, "textures", "wall");
		wall_3.setOrigin(0.0, 0.0);
		
		var wall_2 = this.add.tileSprite(300.0, 375.0, 200.0, 25.0, "textures", "wall");
		wall_2.setOrigin(0.0, 0.0);
		
		var wall_1 = this.add.tileSprite(300.0, 0.0, 200.0, 25.0, "textures", "wall");
		wall_1.setOrigin(0.0, 0.0);
		
		var wall = this.add.tileSprite(0.0, 0.0, 200.0, 25.0, "textures", "wall");
		wall.setOrigin(0.0, 0.0);
		
		var player = this.add.sprite(50.0, 325.0, "textures", "player");
		player.anims.play("idle");
		
		var coin_6 = this.add.image(175.0, 250.0, "textures", "coin");
		
		var coin_5 = this.add.image(325.0, 250.0, "textures", "coin");
		
		var coin_4 = this.add.image(375.0, 350.0, "textures", "coin");
		
		var coin_3 = this.add.image(150.0, 350.0, "textures", "coin");
		
		var coin_2 = this.add.image(175.0, 75.0, "textures", "coin");
		
		var coin_1 = this.add.image(425.0, 150.0, "textures", "coin");
		
		var coin = this.add.image(75.0, 150.0, "textures", "coin");
		
		var enemy_4 = this.add.image(575.0, 125.0, "textures", "enemy");
		enemy_4.active = false;
		
		var enemy_3 = this.add.image(600.0, 150.0, "textures", "enemy");
		enemy_3.active = false;
		
		var enemy_2 = this.add.image(550.0, 150.0, "textures", "enemy");
		enemy_2.active = false;
		
		var enemy_1 = this.add.image(600.0, 100.0, "textures", "enemy");
		enemy_1.active = false;
		
		var enemy = this.add.image(550.0, 100.0, "textures", "enemy");
		enemy.active = false;
		
		this.fWalls = this.add.group([ wall, wall_1, wall_2, wall_3, wall_4, wall_5, wall_6, wall_7, wall_8, wall_9 ]);
		this.fCoins = this.add.group([ coin, coin_1, coin_2, coin_3, coin_4, coin_5, coin_6 ]);
		this.fEnemies = this.add.group([ enemy, enemy_1, enemy_2, enemy_3, enemy_4 ]);
		
		this.fPlayer = player;
		this.fCoin_6 = coin_6;
		this.fCoin_5 = coin_5;
		this.fCoin_4 = coin_4;
		this.fCoin_3 = coin_3;
		this.fCoin_2 = coin_2;
		this.fCoin_1 = coin_1;
		this.fCoin = coin;
		
	}
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.createPlayer();
		this.createWalls();
		this.createCoins();
		this.createScore();
		this.createEnemies();
		this.cursor = this.input.keyboard.createCursorKeys();
	}
	
	createPlayer() {
		this.physics.add.existing(this.fPlayer);		
	}
	
	createWalls() {
		this.walls = this.physics.add.group({
			allowGravity: false,
			immovable: true
		});
		this.walls.addMultiple(	this.fWalls.getChildren() );
		this.physics.add.collider(this.fPlayer, this.fWalls);
		
	}
	
	createCoins() {
		this.coins = this.physics.add.group({
			allowGravity: false,
			immovable: true
		});
		this.coins.addMultiple( this.fCoins.getChildren() );
		this.physics.add.overlap( this.fPlayer, this.coins, this.takeCoin, null, this );
	}
	
	createScore() {
		this.score = 0;
		
		let style = {font: "20px Arial", fill:"#fff" };
		
		this.scoreText = this.add.text(30, 30, "Score: " + this.score, style);
	}
	
	createEnemies() {
		this.enemies = this.physics.add.group({
			allowGravity: false,
			bounceY: 0.2,
			bounceX: 1
			
		});
		this.enemies.addMultiple(this.fEnemies.getChildren() );
		this.time.addEvent({
			delay: 2000,
			loop: true,
			callbackScope: this,
			callback: function() {
				let enemy = this.enemies.getFirstDead(false, this.game.canvas.width/2, 0);
				if (enemy) {
					enemy.setActive(true);
					enemy.setVisible(true);
					let xDir = Phaser.Math.Between(0, 1) ? -1: 1;
					enemy.active = true;
					enemy.body.setVelocityX(xDir * 100); 
					enemy.body.enable = true;
					enemy.body.allowGravity = true;
					
					this.time.addEvent({
						delay: 9000,
						repeat: 0,
						callbackScope: this,
						callback: function() {
							this.enemies.killAndHide(enemy);
							enemy.body.enable = false; 
						}
					});
				}; 
			}
		});
		
		this.physics.add.collider(this.enemies, this.walls);
		this.physics.add.overlap(this.fPlayer, this.enemies, this.restartgame, null, this);
	}
	
	
	takeCoin(player, coin) {
		this.coins.killAndHide(coin);
		coin.body.enable = false;
		this.sound.play("l6");
		this.score += 1;
		this.scoreText.setText("Score: " + this.score);
		
		this.tweens.add({
			targets: this.fPlayer,
			duration: 200,
			scaleX: 1.5,
			scaleY: 1.5,
			yoyo: true
		})
		
		if (this.coins.countActive() == 0 ) {
			this.scene.start("WinScene", { score: this.score });
		}
	}
	
	restartgame(){
		
		this.cameras.main.fade(2000);	
		this.sound.play("d" + this.randomInteger(1, 11));	
		this.cameras.main.on("camerafadeoutcomplete", function(){
			this.scene.restart();
		}, this);
		this.fPlayer.body.setEnable(false);
		
	}
	
	restartgamewithoutsound(){
	
		this.cameras.main.fade(500);	
		this.cameras.main.on("camerafadeoutcomplete", function(){
			this.scene.restart();
		}, this);
		this.fPlayer.body.setEnable(false);
		
	}


	update() {
		this.movePlayer();

	}
	
	movePlayer() {
		if (this.cursor.left.isDown) {
			this.fPlayer.body.setVelocityX( -200 );
			} else if (this.cursor.right.isDown) {
			this.fPlayer.body.setVelocityX( 200 );
			} else {
			this.fPlayer.body.setVelocityX(0);
			};
		
		if (this.cursor.up.isDown && this.fPlayer.body.touching.down ) {
			this.fPlayer.body.setVelocityY( -500 );
			this.sound.play("l" + this.randomInteger(9, 10));
		};
		
		if(this.fPlayer.body.y > 420) {
			
			this.restartgamewithoutsound();
		};
		
		if(this.fPlayer.body.y < -20) {
			
			this.restartgamewithoutsound();
		};
	}
	
	randomInteger(min, max) {
	  let rand = min - 0.5 + Math.random() * (max - min + 1);
	  return Math.round(rand);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
