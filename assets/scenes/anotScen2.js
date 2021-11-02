
// You can write more code here

/* START OF COMPILED CODE */

class anotScen2 extends Phaser.Scene {
	
	constructor() {
	
		super("anotScen2");
		
	}
		
	/* START-USER-CODE */

	init(data){
    	this.why = data.why;
		this.whyName = data.whyName;	
		this.healLvl = data.healLvl;	
		this.itemOne = data.imageOne;
		this.itemTwo = data.imageTwo;
		this.healLvl = data.healLvl;
	}
	
	create(){

		//this.add.image(960.0, 540.0, "background1");
		document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background2.jpg)";
	
		
		if(this.person == 'girl'){ 
			this.gamer = this.add.sprite(384.44794, 665.8824, "girls");			
			this.animationGamer('girls');
		}	else {
			this.gamer = this.add.sprite(384.44794, 665.8824, "boys");			
			this.animationGamer('boys');
		}
			
		this.vlastelin = this.add.sprite(1502.3585, 648.18976, "vlastelin");

			this.vlastelin.play("vlastelin_idle");
			this.gamer.play("idle");

			this.textCaption = this.add.text(844.7197, 659.1798, '', {
				"fontFamily": "Aldrich",
				"fontSize": "25px"
			});

			this.textBot =	this.add.image(2158.0995, 682.637, "allgame", "text-bot");
			this.textBot.scale = 0.7;

			
		this.cameras.main.setBounds(0, 0, 1920, 1080);
		this.cameras.main.setZoom(1);
		this.cameras.main.centerOn(0, 0);

		var cam = this.cameras.main;

		cam.pan(1267, 636, 1280, 'Power2');
		cam.zoomTo(1.7, 1000);
		var monsAudio = this.sound.add('mons-voice-first-2');

		this.time.delayedCall(1000, function(){	
			monsAudio.play();
			this.showText("Я пропущу твою жизнь\nчерез офисный шредер", "ant");	
				
		},[], this);

			this.time.delayedCall(2800, function(){	
				monsAudio.stop();	
				this.sound.play('hero-voice');								
				cam.pan(667, 646, 1280, 'Power2');
				cam.zoomTo(2, 2000);
				this.showText("Шреддер? Не боюсь его\nсо времен Черепашек-ниндзя!", "pers");
			},[], this);

			this.time.delayedCall(5000, function(){										
				cam.pan(267, 646, 1280, 'Power1');
				cam.zoomTo(1, 1500);
				this.textCaption.opacity = 0;	
		   		this.textBot.opacity = 0;	
			},[], this);

			this.time.delayedCall(6500, function(){	
				var graphics = this.add.graphics({ fillStyle:{ color: 0x000000 } });

							var rect = new Phaser.Geom.Rectangle(0, 0, 1920, 1080);
							graphics.fillRectShape(rect);
							graphics.alpha = 0.8;

							if (!this.sys.game.device.input.touch) {
								this.add.text(604.7197, 409.1798, 'Жми пробел, чтобы\nпереключить товар', {
									"fontFamily": "Aldrich",
									"fontSize": "56px"
								}).setAlign('center');;
							} else {
								this.add.text(604.7197, 409.1798, 'Тапай по предметам, чтобы\nпереключить товар', {
									"fontFamily": "Aldrich",
									"fontSize": "56px"
								}).setAlign('center');;
							}
							
							document.getElementById("pause-game-back-black").style.opacity = 0.02;						

						this.time.delayedCall(1500, function(){
							this.scene.start("lvl2", { why: this.why, whyName: this.whyName, imageOne: this.itemOne, imageTwo: this.itemTwo, healLvl: this.healLvl});	
							document.getElementById("pause-game-back-black").style.opacity = 1;
						},[], this);	
			},[], this);
		


		
	}

	showText(e, who){
		if(who == "pers"){
		   this.textCaption.setX(554);	
		   this.textBot.setX(650);	
		   this.textBot.flipX = false;	
		}
		if(who == "ant"){
		   this.textBot.flipX = true;
		   this.textCaption.setX(884);
		   this.textCaption.setY(690);
		   this.textBot.setX(1100);
		   this.textBot.setY(720);
		}
	   this.textForOut = e;
	   this.textCaption.text = '';
	   this.textForInt = 0;
	   this.timedEvent = this.time.addEvent({ delay: 40, callback: this.show, callbackScope: this, loop: true });
   }

   show(){	
	   this.textCaption.text += this.textForOut[this.textForInt];
	   this.textForInt++;		
		   console.log(this.textForInt + "  " + this.textForOut.length);
	   if( this.textForInt == this.textForOut.length){
		   this.timedEvent.remove(false);
		   
	   }
   }



	

	animationGamer(data){	
		var buf = data.slice (0, -1);
			
			this.anims.create({
				key: 'idle',
				frames: [{
					key: data,
					frame: buf+"_idle_new00.png"
					}, {
						key: data,
						frame: buf+"_idle_new01.png"
					}, {
						key: data,
						frame: buf+"_idle_new02.png"
					}, {
						key: data,
						frame: buf+"_idle_new03.png"
					}, {
						key: data,
						frame: buf+"_idle_new04.png"
					}, {
						key: data,
						frame: buf+"_idle_new05.png"
					}
				],
				frameRate: 9,
				repeat: -1
			});


			this.anims.create({
				key: 'vlastelin_idle',
				frames: [{
					key: "vlastelin",
					frame: "vlastelin_idle_new00.png"
					}, {
					key: "vlastelin",
					frame: "vlastelin_idle_new01.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_idle_new02.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_idle_new03.png"
				}
				],
				frameRate: 4,
				repeat: -1
			});
		
	}


	

	update(){
	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */



// You can write more code here
