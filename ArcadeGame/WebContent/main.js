
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "ArcadeGame",
    "width": 500,
    "height": 400,
    "type": Phaser.AUTO,
    "backgroundColor": "#88F",
    "parent": "game-container",
    "physics": {"default": "arcade", 
   				"arcade": {
   					gravity: { y: 1000},	
   				 	debug: false
   				 	}
   	},
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
    "pixelArt": true 
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	//	this.load.image("Dimafon","./Dimanresult");
		//this.load.image("Lehafon","./Dimanresult");
	}

	create() {
		//this.add.image("Dimafon");
		//this.add.image("Dimafon");
		this.scene.start("StartWindow");
	}

}
