
// You can write more code here

/* START OF COMPILED CODE */

class lvl3buf extends Phaser.Scene {
	
	constructor() {
	
		super("lvl3buf");
		
	}

	init(data){
    	this.why = data.why;
		this.whyName = data.whyName;			
	}
	
	create() {

		this.items = 1;

	
		this.add.image(960.0, 540.0, "background4");
		
		this.add.image(951.0643, 127.9323, "allgame2", "map");
		
		var personLogo = this.add.image(250, 125.789444, "allgame2", "pers-log-boy");
		

		this.tweens.add({
			targets: personLogo,
			x: 856.8446,
			ease: 'Linear',
			duration: 3000,
			delay: 500
		});
		
		this.add.text(164.52351, 232.44955, "Поздравляем! Чтобы одолеть следующего монстра, тебе потребуется инвентарь. Выбери по одному анти-скучному товару из каждой категории:\r\n", {
    "fontFamily": "Aldrich",
    "fontSize": "40px",
    "wordWrap.width": 1650
});
		

		this.fBtn_pers = this.add.image(920.29004, 967.7938, "Person", "btn-pers").setInteractive();




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


		this.add.text(400.6542, 703.64301, "+5 speed", {
			"fontFamily": "Aldrich",
			"fontSize": "46px"
		});

		this.add.text(1270.6542, 703.64301, "+5 power", {
			"fontFamily": "Aldrich",
			"fontSize": "46px"
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
			this.items = 1;
		}, this);

		btn2.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(510, 545, "updateItems", "dumbbells.png");
			this.items = 2;
		}, this);

		btn3.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(765, 545, "updateItems", "jbl.png");
			this.items = 3;
		}, this);

		btn4.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(1120, 545, "updateItems", "foto.png");
			this.items = 4;
		}, this);

		btn5.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(1375, 545, "updateItems", "spray.png");
			this.items = 5;
		}, this);

		btn6.on('pointerdown', function(){
			if(btn) btn.destroy();
			btn = this.add.image(1630, 545, "updateItems", "fan.png");
			this.items = 6;
		}, this);


		this.fBtn_pers.on('pointerdown', function(){
			this.scene.start("lvl2", { why: this.why, whyName: this.whyName, items: this.items});
		}, this);
		
		
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
