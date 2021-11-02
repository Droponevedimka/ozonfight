
// You can write more code here

/* START OF COMPILED CODE */

class lvl1buf extends Phaser.Scene {
	
	constructor() {
	
		super("lvl1buf");
		
	}

	init(data){
    	this.why = data.why;
		this.whyName = data.whyName;	
		this.healLvl = data.healLvl;	
		this.isOut;	
		this.isOutTwo;
		this.OutTwoCustom;
		this.OutTwoStrong;
		this.OutOneSpeed;
		this.OutOneCustom;
	}
	
	create() {

		//this.add.image(960.0, 540.0, "background4");
		document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background4.jpg)";
		
		this.add.image(951.0643, 127.9323, "allgame2", "map");
		
		var personLogo = this.add.image(250, 125.789444, "allgame2", "pers-log-"+this.why);
		

		this.tweens.add({
			targets: personLogo,
			x: 856.8446,
			ease: 'Linear',
			duration: 3000,
			delay: 500
		});
		
		this.add.text(164.52351, 232.44955, "Это было круто! Дальше — сложнее: выбери предметы, которые помогут разобраться с Властелином Серости.\r\n", {
    "fontFamily": "Aldrich",
    "fontSize": "40px",
    "wordWrap.width": 1650
});
		

		this.fBtn_pers = this.add.image(920.29004, 967.7938, "Person", "btn-pers").setInteractive({ useHandCursor: true  });




		var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff}, fillStyle: { color: 0xff0000 }});

		var rect = new Phaser.Geom.Rectangle(100, 390, 825, 450);
	
		graphics.strokeRectShape(rect).alpha = 0.3;

		Phaser.Geom.Rectangle.Offset(rect, 865, 0);

		graphics.strokeRectShape(rect);

		var rectTwo = new Phaser.Geom.Rectangle(148, 435, 220, 220);

		var border1 = graphics.strokeRectShape(rectTwo);

		Phaser.Geom.Rectangle.Offset(rectTwo, 255, 0);

		var border2 = graphics.strokeRectShape(rectTwo);

		Phaser.Geom.Rectangle.Offset(rectTwo, 255, 0);

		var border3 = graphics.strokeRectShape(rectTwo);

		Phaser.Geom.Rectangle.Offset(rectTwo, 355, 0);

		var border4 = graphics.strokeRectShape(rectTwo);

		Phaser.Geom.Rectangle.Offset(rectTwo, 255, 0);

		var border5 = graphics.strokeRectShape(rectTwo);

		Phaser.Geom.Rectangle.Offset(rectTwo, 255, 0);

		var border6 = graphics.strokeRectShape(rectTwo);
	
		


		var btn;
		var btnTwo;
		this.itemOne = "Allias.png";
		this.itemTwo = "foto.png";
		var btn1 = this.add.image(255, 545, "updateItems", "Allias.png").setInteractive( { useHandCursor: true  } );
		var btn2 = this.add.image(510, 545, "updateItems", "dumbbells.png").setInteractive( { useHandCursor: true  } );
		var btn3 = this.add.image(765, 545, "updateItems", "jbl.png").setInteractive( { useHandCursor: true  } );
		var btn4 = this.add.image(1120, 545, "updateItems", "foto.png").setInteractive( { useHandCursor: true  } );
		var btn5 = this.add.image(1375, 545, "updateItems", "spray.png").setInteractive( { useHandCursor: true  } );
		var btn6 = this.add.image(1630, 545, "updateItems", "fan.png").setInteractive( { useHandCursor: true  } );
		btn1.alpha = 0.25;
		btn2.alpha = 0.25;
		btn3.alpha = 0.25;
		btn4.alpha = 0.25;
		btn5.alpha = 0.25;
		btn6.alpha = 0.25;


		this.speedItemsCustom = this.add.text(400.6542, 703.64301, "+5 speed", {
			"fontFamily": "Aldrich",
			"fontSize": "46px"
		});

		this.strongItemsCustom = this.add.text(1270.6542, 703.64301, "+5 power", {
			"fontFamily": "Aldrich",
			"fontSize": "46px"
		});

		this.speedItems = this.add.text(180.6542, 683.64301, "", {
			"origin": { x: 0.5, y: 0.5 },
			"fontFamily": "Aldrich",
			"fontSize": "36px",
			"wordWrap": {width: 700, useAdvancedWrap: true  }
		}).setAlign('center');

		this.speedItems.alpha = 0;

		this.strongItems = this.add.text(1060.6542, 683.64301, "", {
			"fontFamily": "Aldrich",
			"fontSize": "36px",
			"wordWrap": {width: 700, useAdvancedWrap: true }
		}).setAlign('center');

		this.strongItems.alpha = 0;


		this.tweenItemCustomOut = 	this.tweens.add({
						targets: this.speedItemsCustom,
						alpha: 1,
						paused: true,
						duration: 1500
					});
		this.tweenSpeedItemsOut =	this.tweens.add({
						targets: this.speedItems,
						alpha: 0,
						paused: true,
						duration: 1000
					});		

		this.tweenSpeedItemIn =	this.tweens.add({
						targets: this.speedItems,
						alpha: 1,
						duration: 2500,
						paused: true
					});		
	
		this.tweenItemCustomIn =	this.tweens.add({
						targets: this.speedItemsCustom,
						alpha: 0,
						duration: 1000,
						paused: true
					});	

					





		this.tweenItemCustomStrongOut = this.tweens.add({
						targets: this.strongItemsCustom,
						alpha: 1,
						paused: true,
						duration: 1500
					});
		this.tweenStrongItemsOut =	this.tweens.add({
						targets: this.strongItems,
						alpha: 0,
						paused: true,
						duration: 1000
					});		

		this.tweenStrongItemIn =	this.tweens.add({
						targets: this.strongItems,
						alpha: 1,
						duration: 2500,
						paused: true
					});		
	
		this.tweenItemCustomStrongIn =	this.tweens.add({
						targets: this.strongItemsCustom,
						alpha: 0,
						duration: 1000,
						paused: true
					});	
		

		btn1.on('pointerover',function(pointer){
			btn1.alpha = 1;				
		})
		
		btn1.on('pointerout',function(pointer){
			btn1.alpha = 0.25;
		})
		btn2.on('pointerover',function(pointer){
			btn2.alpha = 1;
		})
		
		btn2.on('pointerout',function(pointer){
			btn2.alpha = 0.25;
		})

		btn3.on('pointerover',function(pointer){
			btn3.alpha = 1;
		})
		
		btn3.on('pointerout',function(pointer){
			btn3.alpha = 0.25;
		})

		btn4.on('pointerover',function(pointer){
			btn4.alpha = 1;
		})
		
		btn4.on('pointerout',function(pointer){
			btn4.alpha = 0.25;
		})
		
		btn5.on('pointerover',function(pointer){
			btn5.alpha = 1;
		})
		
		btn5.on('pointerout',function(pointer){
			btn5.alpha = 0.25;
		})
		
		btn6.on('pointerover',function(pointer){
			btn6.alpha = 1;
		})
		
		btn6.on('pointerout',function(pointer){
			btn6.alpha = 0.25;
		})


		btn1.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(255, 545, "updateItems", "Allias.png");
			this.itemOne = "Allias.png";
			this.getTextSpeed('С настолкой Alias ты всегда на два хода впереди');

		}, this);

		btn2.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(510, 545, "updateItems", "dumbbells.png");
			this.itemOne = "dumbbells.png";

			this.getTextSpeed('Гантели Euro Classic не подкачают в драке');

		}, this);

		btn3.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(765, 545, "updateItems", "jbl.png");
			this.itemOne = "jbl.png";

			this.getTextSpeed('Возьми колонку JBL и бейся в своем ритме');
			
		}, this);

		btn4.on('pointerdown', function(){
			if(btnTwo) btnTwo.destroy();
			btnTwo = this.add.image(1120, 545, "updateItems", "foto.png");
			this.itemTwo = "foto.png";

			this.getTextStrong('Щёлкни врага на изи с камерой Fujifilm');

		}, this);

		btn5.on('pointerdown', function(){
			if(btnTwo) btnTwo.destroy();
			btnTwo = this.add.image(1375, 545, "updateItems", "spray.png");
			this.itemTwo = "spray.png";

			this.getTextStrong('Граффити-краски Montana — гроза Серости');

		}, this);

		btn6.on('pointerdown', function(){
			if(btnTwo) btnTwo.destroy();
			btnTwo = this.add.image(1630, 545, "updateItems", "fan.png");
			this.itemTwo = "fan.png";

			this.getTextStrong('3D ручка Zik. Выводит предметы, узоры и соперника из себя');

		}, this);


		this.fBtn_pers.on('pointerdown', function(){
			this.sound.play('mouse-click');
			this.scene.start("anotScen2", { why: this.why, whyName: this.whyName, imageOne: this.itemOne, imageTwo: this.itemTwo, healLvl: this.healLvl});
		}, this);
		
		
	}

	getTextStrong(e){
		this.strongItems.text = e;	
		if(this.isOutTwo){ 
			this.isOutTwo.destroy(); 
			if(this.OutTwoCustom) this.OutTwoCustom.stop();
			if(this.OutTwoStrong) this.OutTwoStrong.stop();
		

			if(this.tweenItemCustomStrongIn.isPlaying()){this.tweenItemCustomStrongIn.restart();} else {this.tweenItemCustomStrongIn.play();}
			if(this.tweenStrongItemIn.isPlaying()){this.tweenStrongItemIn.restart();} else {this.tweenStrongItemIn.play();}

		} else {
			this.tweenItemCustomStrongIn.play();
			this.tweenStrongItemIn.play();		
		}


			this.isOutTwo = this.time.delayedCall(3000, function(){				
				if(!this.tweenItemCustomStrongOut.isPlaying()) this.OutTwoCustom = this.tweenItemCustomStrongOut.play(); 			
				if(!this.tweenStrongItemsOut.isPlaying()) this.OutTwoStrong = this.tweenStrongItemsOut.play(); 				
			},[], this);
	}

	getTextSpeed(e) {

		this.speedItems.text = e;	
		if(this.isOut){ 
			this.isOut.destroy(); 
			if(this.OutOneCustom) this.OutOneCustom.stop();
			if(this.OutOneSpeed) this.OutOneSpeed.stop();
			
			if(this.tweenSpeedItemIn.isPlaying()){this.tweenSpeedItemIn.restart();} else {this.tweenSpeedItemIn.play();}
			if(this.tweenItemCustomIn.isPlaying()){this.tweenItemCustomIn.restart();} else {this.tweenItemCustomIn.play();}		
			
		} else {
			this.tweenItemCustomIn.play();
			this.tweenSpeedItemIn.play();			
		}


			this.isOut = this.time.delayedCall(3000, function(){
				if(!this.tweenItemCustomOut.isPlaying()) this.OutOneCustom = this.tweenItemCustomOut.play();			
				if(!this.tweenSpeedItemsOut.isPlaying()) this.OutOneSpeed = this.tweenSpeedItemsOut.play();					
			},[], this);
		
		
	}

	update(){
		
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
