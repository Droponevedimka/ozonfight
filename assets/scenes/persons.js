
// You can write more code here

/* START OF COMPILED CODE */

class persons extends Phaser.Scene {
	
	constructor() {
	
		super("persons");
		
	}
	
	_create() {
	
		//this.add.image(945.77136, 541.35535, "Person", "back-pers");
		document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background5.jpg)";
		var boy = this.add.image(1514.6254, 575.592, "Person", "boy");
		
		var girl = this.add.image(1064.2826, 459.7143, "Person", "girl");
		
		var btn_pers = this.add.image(382.18463, 823.14874, "Person", "btn-pers");
		
		this.add.text(145.0, 193.7224, "За кого\r\nиграем?\r\n", {
    "fontFamily": "Aldrich",
    "fontSize": "132px"
});


		const scaleBox = scale => {
			let box = document.getElementById('myName')
			if (box) {
			box.style.transform = `scale(${scale})`
			box.style.transformOrigin = 'top left'
			box.style.top = `${this.game.canvas.offsetTop + this.scale.displaySize.height / 2 - (-150 / 2) * scale}px`
			box.style.left = `${this.game.canvas.offsetLeft + this.scale.displaySize.width / 2 - (1620 / 2) * scale}px`
			}
		}

		// initial scale
		let scale = this.game.scale.displaySize.width / this.game.scale.gameSize.width
		scaleBox(scale)

		// on resize listener
		this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
			let scale = displaySize.width / gameSize.width
			scaleBox(scale)
		})

		this.formUtil = new FormUtil({
			scene: this
		});

		//
		//
		//
		this.formUtil.scaleToGameW("myName", 527);
		this.formUtil.scaleToGameH("myName", 60);
		this.formUtil.placeElementAt('myName', true);
		
		this.fBoy = boy;
		this.fGirl = girl;
		this.fBtn_pers = btn_pers;
		
	}
	
	
	
	
	/* START-USER-CODE */

	create(){
		this.why = 'boy';
		this.whyName = 'Jony';
		this._create();
		this.fGirl.alpha = 0.4;
		
		this.fBoy.setInteractive({ useHandCursor: true  });
		this.fGirl.setInteractive({ useHandCursor: true  });
		this.fBtn_pers.setInteractive({ useHandCursor: true  });
		
		this.fBoy.on('pointerdown', function(){
			this.sound.play('mouse-click');
			this.fGirl.alpha = 0.4;
			this.fBoy.alpha = 1;	
			this.why = 'boy';
			this.whyName = 'Jony';
		}, this);
		
		this.fGirl.on('pointerdown', function(){
			this.sound.play('mouse-click');
			this.fGirl.alpha = 1;
			this.fBoy.alpha = 0.4;	
			this.why = 'girl';
			this.whyName = 'Ariel';
		}, this);
		
		this.fBtn_pers.on('pointerdown', function(){
			this.sound.play('mouse-click');
			this.whyName = this.formUtil.getTextValue('myName');
			this.scene.start("anotScen", { why: this.why, whyName: this.whyName });
			this.formUtil.getDelete('myName');
		}, this);
		
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
