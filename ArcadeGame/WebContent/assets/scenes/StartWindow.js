
// You can write more code here

/* START OF COMPILED CODE */

class StartWindow extends Phaser.Scene {
	
	constructor() {
	
		super("StartWindow");
		
	}
	
	create() {
	
		var cavebackground = this.add.image(0.0, 0.0, "textures", "cavebackground");
		cavebackground.setOrigin(0.0, 0.0);
		cavebackground.setScale(0.79, 1.75);
		
		var imgonline_com_ua_Transparent_backgr_YpPhVdatSYmow = this.add.image(400.0, 176.0, "textures", "imgonline-com-ua-Transparent-backgr-YpPhVdatSYmow");
		imgonline_com_ua_Transparent_backgr_YpPhVdatSYmow.setScale(0.6, 0.6);
		imgonline_com_ua_Transparent_backgr_YpPhVdatSYmow.setAngle(-30.0);
		
		var imgonline_com_ua_Transparent_backgr_Yw3JsYWGwMx = this.add.image(128.0, 208.0, "textures", "imgonline-com-ua-Transparent-backgr-Yw3JsYWGwMx");
		imgonline_com_ua_Transparent_backgr_Yw3JsYWGwMx.setScale(0.6, 0.6);
		imgonline_com_ua_Transparent_backgr_Yw3JsYWGwMx.setAngle(-5.0);
		
		var font_1 = this.add.bitmapText(96.0, 112.0, "font", "A r c a d e  G a m e\r\n\r\n\r\n\r\n", 25, 1);
		font_1.align = 1;
		
		this.add.bitmapText(112.0, 224.0, "font", "press \" space \" to start game\r\n", 18, 0);
		
		this.add.bitmapText(96.0, 64.0, "font2", "Aleksey Survive\r\n\r\n\r\n", 40, 0);
		
		this.fGroup1 = this.add.group([  ]);
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
