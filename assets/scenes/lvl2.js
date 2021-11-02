
// You can write more code here

/* START OF COMPILED CODE */

class lvl2 extends Phaser.Scene {
	
	constructor() {
	
		super("lvl2");
		
	}
		
	/* START-USER-CODE */

	init(data){
    	this.person = data.why;
		this.personName = data.whyName;	
		this.items = true;	
		this.healAntagonistItem = 100;
		this.healGamerItem = 100;
		this.healLvl = data.healLvl;
		this.hardLvl = 3;
		this.speedLvl = 6;	
		this.imageOne = data.imageOne;
		this.imageTwo = data.imageTwo;
		if(this.allArrows) delete this.allArrows;		
	}
	
	create(){

		//this.add.image(960.0, 540.0, "background3");
		document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background2.jpg)";
		this.mobBackground = this.add.image(960,540,"background2");
		this.mobBackground.alpha = 0;
		
		//this.add.image(719.00665, 207.26219, "allgame", "mana-pers");
		//this.getManaGamer(58);
		
		this.add.image(561.21277, 164.736, "allgame", "pers-heal");
		this.getHealGamer(this.healGamerItem);
		
		this.add.image(1355.3494, 164.736, "allgame", "skuka-heal");
		this.getHealAntagonist(this.healAntagonistItem);
		
		
		
		this.add.image(1706.5012, 164.824, "antoganist", "vlastelin.png");
		
		this.add.text(1150.6542, 63.64301, "Властелин Серости\r\n", {
    "fontFamily": "Aldrich",
    "fontSize": "46px"
});

		this.textCaption = this.add.text(844.7197, 900.1798, '', {
			"fontFamily": "Aldrich",
			"fontSize": "39px"
			});

		this.add.image(400, 350, "itogArrow");		
		this.attackAnimGamer = this.add.sprite(932.12164, 700.2436, "attackAction");	

		if(this.person == 'girl'){ 
			this.add.image(209.91766, 164.824, "allgame", "girl");
			this.gamer = this.add.sprite(384.44794, 665.8824, "girls");			

			this.animationAntoganist('girl');
			this.animationGamer('girls');
		}	else {
			this.add.image(209.91766, 164.824, "allgame", "boy");
			this.gamer = this.add.sprite(384.44794, 665.8824, "boys");			
			
			this.animationAntoganist('boy');
			this.animationGamer('boys');
		}
			
			this.vlastelin = this.add.sprite(1502.3585, 648.18976, "vlastelin");

			this.vlastelin.play("vlastelin_idle");
			this.gamer.play("idle");		

			var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff}, fillStyle: { color: 0xff0000 }});

			this.textBot =	this.add.image(958.0995, 952.637, "allgame", "text-bot");


	

		this.add.text(307.52216, 65.63262, this.personName, {
			"fontFamily": "Aldrich",
			"fontSize": "56px"
		});

		this.rect = new Phaser.Geom.Rectangle(0, 450, 185, 185);
				graphics.strokeRectShape(this.rect).alpha = 0.3;
		
			this.rectTwo = new Phaser.Geom.Rectangle(0, 650, 105, 105);
				graphics.strokeRectShape(this.rectTwo).alpha = 0.3;
			
			this.attackImageOne = this.add.image(90, 540, "updateItems", this.imageOne).setScale(0.9);
			this.attackImageTwo = this.add.image(55, 710, "updateItems", this.imageTwo).setScale(0.5);	

		if (!this.sys.game.device.input.touch) {
			//console.log('desk');
			this.cursors = this.input.keyboard.createCursorKeys();	
			this.cursors.left.on('down',() => { this.thatClick(0)},this);		
			this.cursors.right.on('down',() => { this.thatClick(1)},this);
			this.cursors.down.on('down',() => { this.thatClick(2)},this);	
			this.cursors.up.on('down',() => { this.thatClick(3)},this);		

		} else {
			//console.log('mob');	
			this.buildMobileControls();	
			
		}
			this.attackImageOne.setInteractive({ useHandCursor: true  });
			this.attackImageTwo.setInteractive({ useHandCursor: true  });
			this.attackImageTwo.alpha = 0.3;

			this.attackImageOne.on('pointerdown', function(){
				this.getChangeItemAttack();
			}, this);
			this.attackImageTwo.on('pointerdown', function(){
				this.getChangeItemAttack();
			}, this);
			var keyObj = this.input.keyboard.addKey('SPACE');
			keyObj.on('down', function(){
				this.getChangeItemAttack();
			}, this);

			
				
			this.getHardSpeedLvl();	
		
	}

   getChangeItemAttack(){
	this.items = !this.items;
		if(this.items){
			this.attackImageOne.setFrame(this.imageOne);
			this.attackImageTwo.setFrame(this.imageTwo);
		} else {
			this.attackImageOne.setFrame(this.imageTwo);
			this.attackImageTwo.setFrame(this.imageOne);
		}				
   }


	getHealAntagonist(e){
		if(this.healAntagonist)	this.healAntagonist.clear();
			this.healAntagonist = this.add.graphics();	
			if (e<0) e =0;

				if(e == 100){
					this.healAntagonist.fillStyle(0x1DD200);
				} else if ( e > 30) {
					this.healAntagonist.fillStyle(0xFFE600);
				} else {
					this.healAntagonist.fillStyle(0xFC1203);
				}
				var polygon = new Phaser.Geom.Polygon([
					1637 - (e * 5.42), 151,
					1637, 151,
					1637, 176,
					1637 - (e * 5.58), 176
				]);
				this.healAntagonist.fillPoints(polygon.points, true);
		
	}
	
	getHealGamer(e){
	    if(this.healGamer) this.healGamer.clear();
			this.healGamer = this.add.graphics();

		if(e == 100){
			this.healGamer.fillStyle(0x1DD200);
		} else if ( e > 30) {
			this.healGamer.fillStyle(0xFFE600);
		} else {
			this.healGamer.fillStyle(0xFC1203);
		}
		var polygon = new Phaser.Geom.Polygon([
			280, 151,
			(280 +(e * 5.41)), 151,
			(280 + (e * 5.57)), 175,
			280, 176
		]);
		this.healGamer.fillPoints(polygon.points, true);
	}

	getManaGamer(e){	
		if (!this.manaGamer){
			this.manaGamer = this.add.graphics();	
		} else {
			this.manaGamer.clear();
		}		
		this.manaGamer.fillStyle(0x2F74E7);
		
		var polygon = new Phaser.Geom.Polygon([
			575, 201,
			575 + (e * 2.79), 201,
			585 + (e * 2.79), 215,
			585, 215
		]);
		this.manaGamer.fillPoints(polygon.points, true);
	}

	showText(e, who){
		if(who == "pers"){
			this.textBot.flipX = false;	
			this.textCaption.setX(844);			 
		 } else {
			 console.log(e.length);
			 if(e.length < 55) {
				this.textCaption.setX(624);
			 } else {
				this.textCaption.setX(434);
			 }
			this.textBot.flipX = true;
			
		 }
		this.textForOut = e;
		this.textCaption.text = '';
		this.textForInt = 0;
		this.timedEvent = this.time.addEvent({ delay: 70, callback: this.show, callbackScope: this, loop: true });
	}

	show(){	
		this.textCaption.text += this.textForOut[this.textForInt];
		this.textForInt++;		
			
		if( this.textForInt === this.textForOut.length){
			this.timedEvent.remove(false);
			this.opacityItem = 1.0;
			this.first = true;
			if (!this.firstSoundFight){				
				this.firstSoundFight = true;
			}
			this.getHardSpeedLvl();	
		}
	}

	getRandomInt(min, max)
		{
		return Math.floor(Math.random() * (max - min + 1)) + min;
		}


	getHardSpeedLvl(){
		this.sound.play('deep-voice');
		var hard = parseInt(this.hardLvl/(this.healAntagonistItem/100));
		var arrows = [];
		for(var i=0; i<hard; i++) arrows[i] = this.getRandomInt(0, 3);
		this.nextArrows(arrows);
		//console.log(arrows);	
	}


	nextArrows(next){
		this.roundLenght = 0;
		this.round = this.add.group({
        key: 'arrows',
        frame: next,		
        setXY:
        {
            x: -(90 * next.length),
            y: 350,
            stepX: 180/(this.hardLvl)
        }
    });		
		var k = next.length;
		var s = [];
		for(var item of this.round.getChildren()){
			s.push(item);			
			 
						this.tweens.add({
						targets: item,
						x: 650,
						ease: 'Linear',
						duration: 18000/this.speedLvl,
						delay: 1000 * k
					});	
										
				if(k != next.length){
					this.tweens.add({
						targets: item,
						duration: 1500/this.speedLvl,
						delay: 14000/this.speedLvl + (1100 * k),
						alpha: 0	      		      
					});
				} else {	
					this.tweens.add({
						targets: item,
						duration: 1500/this.speedLvl,
						delay: 14000/this.speedLvl + (1050 * k),
						alpha: 0,
						onComplete: this.goNextRound.bind(this)	      		      
					});						
				}
				k--;
		}		
		this.allArrows = s;			
	}
	
	thatClick(index){	
		if(this.allArrows.length != 0){						
			var buf = this.allArrows[this.allArrows.length-1];
			var setBuf = buf.frame.name;
			if (this.first && setBuf < 4){			
				if(buf.x > 360 && buf.x < 540){	
					
					if (buf.frame.name == index){
						this.sound.play('yeap-bong');
						buf.setFrame(setBuf+4);
						//console.log('yes');
						this.roundLenght++;						
					} else {
						this.sound.play('wrong-bong');
						buf.setFrame(setBuf+8);
						//console.log('no');		
					}			
					this.first = false;
				} else {				
					//console.log('noRating');
					
				}
			}
		
		}
	}
	
	buildMobileControls() {
		// Found this helps with multiple buttons being pressed at the same time on mobile
		this.input.addPointer(2)
	
		// Only emitting events from the top-most Game Objects in the Display List.
		// Mainly useful if you have "background" button zones and you only want 
		// one to be triggered on a single tap.
		this.input.topOnly = true
		
		// Create an object mimicking what the keyboard version would be.
		// We are going to modify this on touch events so we can check in our update() loop
		this.cursors = {
			'up': {},
			'left': {},
			'right': {},
			'down': {},
		}
		
		// keyboard listeners to be user for each key
		const pointerDown = key => {
			// modifies this.cursors with the property that we check in update() method
			this.cursors[key].isDown = true
		}
		const pointerUp = key => {
			this.cursors[key].isDown = false
		}
		
		// button sizing
		const GAME_HEIGHT = 1080
		const GAME_WIDTH = 1900
		const WIDTH = 250
		const HEIGHT = 250
	
		// gutter width between buttons
		const GUTTER = 30
		var color = 0xFFFFFF;
		// if( this.person != 'girl'){
		// 	color = 0x1D5FCF;
		// }

		var fullScreen = this.add.image(1825,75,"fullscreen").setInteractive();
		fullScreen.alpha = 0.7;
		fullScreen.on('pointerdown', function (pointer) {
			this.mobBackground.alpha = 1;
			if(!this.scale.isFullscreen){
				this.scale.startFullscreen();}	else{
					this.scale.stopFullscreen();	
			}	
		},this);

		// Create a button helper
		const createBtn = (key, x, y, width=WIDTH, height=HEIGHT) => {
			// Add a faded out red rectangle for our button
			this.add.rectangle(x, y, width, height, color, 0.15)
				.setOrigin(0,0)
				.setScrollFactor(0)
				.setInteractive()
				.on('pointerdown', () => this.thatClick(key));
				this.add.image(x+125, y+125, "arrows-mob", key);
				
				
		}
		
		// Y coordinate to place buttons
		const BTN_Y = GAME_HEIGHT - HEIGHT - GUTTER
	
		// create player control buttons
		createBtn(0, GUTTER, BTN_Y)
		createBtn(1, WIDTH + 2*GUTTER, BTN_Y)
		createBtn(2, GAME_WIDTH - 2*(WIDTH + GUTTER), BTN_Y)
		createBtn(3, GAME_WIDTH - WIDTH - GUTTER, BTN_Y)
	
		
	}

	animationGamer(data){	
		var buf = data.slice (0, -1);
			this.anims.create({
				key: 'attack',
				frames: [{
					key: data,
					frame: buf+"_attack_new00.png"
					}, {
						key: data,
						frame: buf+"_attack_new01.png"
					}, {
						key: data,
						frame: buf+"_attack_new02.png"
					}, {
						key: data,
						frame: buf+"_attack_new03.png"
					}, {
						key: data,
						frame: buf+"_attack_new04.png"
					}, {
						key: data,
						frame: buf+"_attack_new05.png"
					}, {
						key: data,
						frame: buf+"_attack_new06.png"
					}, {
						key: data,
						frame: buf+"_attack_new07.png"
					}, {
						key: data,
						frame: buf+"_attack_new08.png"
					}, {
						key: data,
						frame: buf+"_attack_new09.png"
					}, {
						key: data,
						frame: buf+"_attack_new10.png"
					}
				],
				frameRate: 11,
				repeat: 0
			});
			
			this.anims.create({
				key: 'glory',
				frames: [{
					key: data,
					frame: buf+"_glory_new00.png"
					}, {
						key: data,
						frame: buf+"_glory_new01.png"
					}, {
						key: data,
						frame: buf+"_glory_new02.png"
					}, {
						key: data,
						frame: buf+"_glory_new03.png"
					}, {
						key: data,
						frame: buf+"_glory_new04.png"
					}, {
						key: data,
						frame: buf+"_glory_new05.png"
					}, {
						key: data,
						frame: buf+"_glory_new06.png"
					}, {
						key: data,
						frame: buf+"_glory_new07.png"
					}
				],
				frameRate: 8,
				repeat: 1
			});

			this.anims.create({
				key: 'hit',
				frames: [{
					key: data,
					frame: buf+"_hit_new00.png"
					}, {
						key: data,
						frame: buf+"_hit_new01.png"
					}, {
						key: data,
						frame: buf+"_hit_new02.png"
					}, {
						key: data,
						frame: buf+"_hit_new03.png"
					}, {
						key: data,
						frame: buf+"_hit_new04.png"
					}
				],
				frameRate: 9,
				repeat: 0
			});

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
				key: 'gamer.k.o.',
				frames: [{
					key: data,
					frame: buf+"_k.o._new00.png"
					}, {
						key: data,
						frame: buf+"_k.o._new01.png"
					}, {
						key: data,
						frame: buf+"_k.o._new02.png"
					}, {
						key: data,
						frame: buf+"_k.o._new03.png"
					}, {
						key: data,
						frame: buf+"_k.o._new04.png"
					}
				],
				frameRate: 9,
				repeat: 0
			});

			this.anims.create({
				key: 'vlastelin_attack',
				frames: [{
					key: "vlastelin",
					frame: "vlastelin_attack_new00.png"
					}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new01.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new02.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new03.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new04.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new05.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new06.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_attack_new07.png"
				}
				],
				frameRate: 8,
				repeat: 0
			});

			this.anims.create({
				key: 'vlastelin_glory',
				frames: [{
					key: "vlastelin",
					frame: "vlastelin_glory_new00.png"
					}, {
					key: "vlastelin",
					frame: "vlastelin_glory_new02.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_glory_new03.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_glory_new04.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_glory_new05.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_glory_new06.png"
				}
				],
				frameRate: 10,
				repeat: 1
			});

			this.anims.create({
				key: 'vlastelin_hit',
				frames: [{
					key: "vlastelin",
					frame: "vlastelin_hit_new00.png"
					}, {
					key: "vlastelin",
					frame: "vlastelin_hit_new01.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_hit_new02.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_hit_new03.png"
				}
				],
				frameRate: 4,
				repeat: 0
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

			this.anims.create({
				key: 'vlastelin_ko',
				frames: [{
					key: "vlastelin",
					frame: "vlastelin_k.o._new00.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_k.o._new01.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_k.o._new02.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_k.o._new03.png"
				}, {
					key: "vlastelin",
					frame: "vlastelin_k.o._new04.png"
				}
				],
				frameRate: 5,
				repeat: 0
			});

			
	}

	animationAntoganist(buf){
	
	
		
		this.anims.create({
			key: 'fireball_lvl_a',
			frames: [{
				key: "attackAction",
				frame: buf+"_fireball_lvl2_a00.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a01.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a02.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a03.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a04.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a05.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a06.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_a07.png"
				}, {
					key: "attackAction",
					frame: "_"
				}
			],
			frameRate: 9,
			repeat: 0
		});

		this.anims.create({
			key: 'fireball_lvl_b',
			frames: [{
				key: "attackAction",
				frame: buf+"_fireball_lvl2_b00.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b01.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b02.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b03.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b04.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b05.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b06.png"
				}, {
					key: "attackAction",
					frame: buf+"_fireball_lvl2_b07.png"
				}, {
					key: "attackAction",
					frame: "_"
				}
			],
			frameRate: 9,
			repeat: 0
		});
	

		this.anims.create({
			key: 'vlastelin_poison',
			frames: [{
				key: "attackAction",
				frame: "vlastelin_pin_new00.png"
				}, {
				key: "attackAction",
				frame: "vlastelin_pin_new01.png"
			}, {
				key: "attackAction",
				frame: "vlastelin_pin_new02.png"
			}, {
				key: "attackAction",
				frame: "vlastelin_pin_new03.png"
			}, {
				key: "attackAction",
				frame: "vlastelin_pin_new04.png"
			}, {
				key: "attackAction",
				frame: "vlastelin_pin_new05.png"
			}, {
				key: "attackAction",
				frame: "_"
			}
			],
			frameRate: 7,
			repeat: 0
		});
	}

	lostGame(){					
			var graphics = this.add.graphics({ fillStyle:{ color: 0x000000 } });

			var rect = new Phaser.Geom.Rectangle(0, 0, 1920, 1080);
			graphics.fillRectShape(rect);
			graphics.alpha = 0.8;

			this.anims.create({
				key: 'lose',
				frames: [{
					key: "winandlos",
					frame: "lose_01.png"
					}, {
						key: "winandlos",
						frame: "lose_02.png"
					}, {
						key: "winandlos",
						frame: "lose_03.png"
					}, {
						key: "winandlos",
						frame: "lose_04.png"
					}
				],
				frameRate: 4,
				repeat: -1
			});

			this.winandlos = this.add.sprite(910, 540, "winandlos");
			document.getElementById("pause-game-back-black").style.opacity = 0.02;	
			this.winandlos.play("lose");
			this.sound.play('game-lose');	

		this.time.delayedCall(3000, function(){
			this.scene.restart();
			document.getElementById("pause-game-back-black").style.opacity = 1;
		},[], this);
		
	}

	winGame(){		
			var graphics = this.add.graphics({ fillStyle:{ color: 0x000000 } });

			var rect = new Phaser.Geom.Rectangle(0, 0, 1920, 1080);
			graphics.fillRectShape(rect);
			graphics.alpha = 0.8;

			this.anims.create({
				key: 'win',
				frames: [{
					key: "winandlos",
					frame: "win_01.png"
					}, {
						key: "winandlos",
						frame: "win_02.png"
					}, {
						key: "winandlos",
						frame: "win_03.png"
					}, {
						key: "winandlos",
						frame: "win_04.png"
					}
				],
				frameRate: 4,
				repeat: -1
			});

			this.winandlos = this.add.sprite(910, 540, "winandlos");
			document.getElementById("pause-game-back-black").style.opacity = 0.02;	
			this.winandlos.play("win");
			this.sound.play('male-shoting-win');
		
			this.time.delayedCall(3000, function(){
				this.scene.start("lvl2buf", { why: this.person, whyName: this.personName, healLvl: this.healLvl+this.healGamerItem });	
				document.getElementById("pause-game-back-black").style.opacity = 1;
			},[], this);	
	}

	attackGamer(){
		
		if (this.healAntagonistItem > 0){			
			this.healAntagonistItem -= 34;
			
			this.gamer.play("attack");	

			this.time.delayedCall(200, function(){										
				if(this.items){	
					this.attackAnimGamer.play("fireball_lvl_a");	
				} else {
					this.attackAnimGamer.play("fireball_lvl_b");	
				}	
			},[], this);
					
			this.time.delayedCall(700, function(){		
				this.sound.play('combat-hit');								
				this.vlastelin.play("vlastelin_hit");
				this.getHealAntagonist(this.healAntagonistItem);	
			},[], this);
			

			this.time.delayedCall(1000, function(){
				this.gamer.play("idle");							
			},[], this);

			this.time.delayedCall(1500, function(){
				if(this.healAntagonistItem>0) {
					this.vlastelin.play("vlastelin_idle");
				} else { 
					this.vlastelin.play("vlastelin_ko");
				}				
			},[], this);

			
			if(this.healAntagonistItem > 0) {
				if(this.healAntagonistItem > 60){
					this.showText("Нафиг Эксель,\nя — XXL фрэшмен! ", "pers");
				} else {
					this.showText("Хочу роллить, \nа не скроллить ", "pers");
				} 
			} else {					
				this.time.delayedCall(1300, function(){		
					this.showText("В твой принтер пора \nзалить ярких красок! ", "pers");								
					this.gamer.play("glory");
				},[], this);

				this.time.delayedCall(3000, function(){					
					this.winGame();
					
				},[], this);
				
				
			}
			
		} 
	}

	attackAntoganist(){	
		
		if (this.healGamerItem > 0){
			this.healGamerItem -= 35;			
			if(this.healGamerItem < 0){ this.healGamerItem = 0}

			this.vlastelin.play("vlastelin_attack");

			this.time.delayedCall(600, function(){										
				this.attackAnimGamer.play("vlastelin_poison");
			},[], this);
			
			this.time.delayedCall(1100, function(){	
				this.sound.play('fireball-mons');										
				this.gamer.play("hit");
				this.getHealGamer(this.healGamerItem);
			},[], this);
			
			this.time.delayedCall(1000, function(){										
				this.vlastelin.play("vlastelin_idle");
			},[], this);
			
			this.time.delayedCall(1500, function(){				
				if(this.healGamerItem != 0){
					this.gamer.play("idle");
				} else {
					this.gamer.play("gamer.k.o.")
				}
							
			},[], this);	


			

			if(this.healGamerItem > 0){
				if(this.healGamerItem > 40){
					this.showText("Твой дружелюбный сосед\n — Пасьянс-Паук", "ant");
				} else {
					this.showText("Тебе пришли смс от самых \nблизких: МЧС, оператора и банка", "ant");
				}				
			
			} else {
				this.time.delayedCall(1300, function(){										
					this.vlastelin.play("vlastelin_glory");
				},[], this);


				this.time.delayedCall(3000, function(){					
					this.lostGame();
				},[], this);
			
			}
		} 
	}

	goNextRound(){
		if (this.roundLenght < parseInt(this.hardLvl/(this.healAntagonistItem/100) - 1)){ 
			this.attackAntoganist();						
		} else{
			this.attackGamer();				
		}
	}

	update(){
		if(this.allArrows){		
			if(this.allArrows.length > 0) {
				
				if(this.allArrows[this.allArrows.length-1].x > 355 && !this.first){ this.first = true; }

				if(this.allArrows[this.allArrows.length-1].x > 550){  
					if(this.first){ 
						this.allArrows[this.allArrows.length-1].alpha = 0;
						this.allArrows.pop();

						// this.tweens.add({
						// 			targets: this.allArrows[this.allArrows.length-1],
						// 			duration: 1500,
						// 			delay: 0,
						// 			alpha: 0,	  
						// 			onComplete: this.allArrows.pop() 		      
						// 		});
								
					}
					//this.first = true;	
				} 			
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */



// You can write more code here
