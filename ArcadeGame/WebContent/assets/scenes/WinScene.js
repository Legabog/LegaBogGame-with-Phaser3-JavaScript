
// You can write more code here

/* START OF COMPILED CODE */

class WinScene extends Phaser.Scene {
	
	constructor() {
	
		super("WinScene");
		
	}
	
	create(data) {
	
		var cavebackground = this.add.image(0.0, 0.0, "textures", "cavebackground");
		cavebackground.setOrigin(0.0, 0.0);
		cavebackground.setScale(0.79, 1.75);
		
		this.add.bitmapText(128.0, 80.0, "font2", "You Win !", 50, 0);
		
		this.add.bitmapText(96.0, 256.0, "font", "Press \" space \" to play again\r\n", 18, 0);
		
		this.add.bitmapText(288.0, 176.0, "font", data.score , 32, 0);
		
		this.add.bitmapText(128.0, 176.0, "font", "Score :", 32, 0);
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
		
	}
	
	update() {
		if (this.cursors.space.isDown) {
			this.scene.start('Scene1');
		}
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
