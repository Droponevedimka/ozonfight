
// You can write more code here

/* START OF COMPILED CODE */

class first extends Phaser.Scene {
	
	constructor() {
	
		super("first");
		
	}
	
	_create() {
	
		//this.add.image(960.0, 540.0, "Background");
		
		this.add.image(925.4314, 371.9426, "textures", "logo").scale = 0.8;
		
		this.add.text(450.67136, 597.41235, "Тонешь в болоте бытовухи?\nOzon — твой спасательный круг! Используй товары в битве со Скукой, Серостью и Рутиной, чтобы выиграть ценные призы.", {
    "fontFamily": "Aldrich",
    "fontSize": "40px",
    "fixedWidth": 1060,
    "fixedHeight": 250,
    "wordWrap.width": 1060,
    "wordWrap.useAdvancedWrap": true
});
		
		var btn_start = this.add.image(912.04425, 916.6024, "textures", "btn-start");
		
		this.fBtn_start = btn_start;
		
	}
	
	
	/* START-USER-CODE */

	create(){
		
		this._create();
		this.fBtn_start.setInteractive({ useHandCursor: true  });
		
		
		this.fBtn_start.on('pointerdown', function(){
			this.sound.play('mouse-click');
			this.scene.start("persons");	
		}, this);	
		this.scaleTrue = true;	
		this.scale = 1.0;
		var bkgAudio = this.sound.add('cosmic-funk', {volume: 0.2});
		bkgAudio.loop = true;
		bkgAudio.play();

		
		// this.add.rectangle(960, 540, 1920, 1080, 0x000000, 1);
		// // this.add.sprite(144.44794, 665.8824, "boys", "boy_idle_new00.png");	
		// this.add.sprite(384.44794, 665.8824, "girls", "girl_idle_new04.png");	
		//this.add.sprite(624.44794, 565.8824, "girls", "girl_idle_new02.png");	
		// // this.add.sprite(854.44794, 665.8824, "boys", "boy_idle_new03.png");	
		// // this.add.sprite(1084.44794, 665.8824, "boys", "boy_idle_new04.png");	
		// // this.add.sprite(1324.44794, 665.8824, "boys", "boy_idle_new05.png");	
		// // this.add.sprite(1584.44794, 665.8824, "boys", "boy_idle_new06.png");	
		
		// this.cameras.main.setBounds(0, 0, 1920, 1080);
		//  this.cameras.main.setZoom(1);
		//  this.cameras.main.centerOn(0, 0);

		//   var cam = this.cameras.main;

		//   cam.pan(567, 546, 1280, 'Power2');
		//   cam.zoomTo(2, 500);
	}

	update(){
		if(this.scaleTrue){
			this.fBtn_start.scale = this.scale;
			this.scale -= 0.004;
			if(this.scale < 0.8){
				this.scaleTrue = false;
			}
		} else {
			this.fBtn_start.scale = this.scale;
			this.scale += 0.004;
			if(this.scale > 1){
				this.scaleTrue = true;
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
