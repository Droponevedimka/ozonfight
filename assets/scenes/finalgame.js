
// You can write more code here

/* START OF COMPILED CODE */

class finalgame extends Phaser.Scene {
	
	constructor() {
	
		super("finalgame");
		
	}

	init(data){
		this.why = data.why;
		this.whyName = data.whyName;
		this.itog = data.itog;			
	}
	
	_create() {
	
		if(this.why == "girl"){
			//this.add.image(960.0, 540.0, "background4");
			document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background4.jpg)";
		} else {
			//this.add.image(960.0, 540.0, "Person", "back-pers");
			document.getElementById('pause-game-back-black').style.backgroundImage = "url(assets/sprites/background5.jpg)";
		}

		console.log(this.why+"_"+this.itog+"-min.png");

		var param = this.why+"_"+this.itog+"-min.png";

		this.add.image(1300, 470, "final", param);
		var bufString = "";
		var nameItog = "";
		if(this.itog == "tiger"){
			nameItog = "Тигра";
			bufString = "Дать отпор бытовухе в таком размеренном темпе — это тигра стиль! В бою тебе помогли товары Х, Х, Х и Х. Переходи на сайт Ozon.ru и забирай их, чтобы сделать реальную жизнь ярче.";
		} else if( this.itog == "dragon"){
			nameItog = "Дракона";
			bufString = "Вот это огонь! Ты красиво вырвался из рутины с помощью товаров X, X, X и X — переходи на сайт Ozon.ru и забирай их, чтобы сделать реальную жизнь ярче.";
		} else {
			nameItog = "Обезьяны";
			bufString = "Кинг Конг кидает респект — даже ему не удавалось оказаться на вершине так быстро! В зарубе с бытовухой тебе помогли товары X, X, X и X — переходи на сайт Ozon.ru и забирай их, чтобы сделать реальную жизнь ярче.";
		}
				
		this.add.text(150, 100.41235, "Ты — воин \r\n"+nameItog+"!", {
			"fontFamily": "Aldrich",
			"fontSize": "115px",
			"fixedWidth": 750,
			"fixedHeight": 350
		});

		this.add.text(150, 410, bufString + "\n\nИ это еще не все: оставь почту, пошерь игру и получи шанс выиграть горячий промокод на скидку 5 000 рублей!", {
			"fontFamily": "Aldrich",
			"fontSize": "28px",
			"fixedWidth": 800,
			"fixedHeight": 350,
			"wordWrap.width": 680
		});

		var print = this.add.text(0, 0, '');

	
		

		this.add.image(190, 900, "final-soc", "b").setInteractive( { useHandCursor: true  } );
		this.add.image(310, 900, "final-soc", "f").setInteractive( { useHandCursor: true  } );
		this.add.image(430, 900, "final-soc", "t").setInteractive( { useHandCursor: true  } );
		
		

		const scaleBox = scale => {
			let box = document.getElementById('myText')
			if (box) {
			box.style.transform = `scale(${scale})`
			box.style.transformOrigin = 'top left'
			box.style.top = `${this.game.canvas.offsetTop + this.scale.displaySize.height / 2 - (-388 / 2) * scale}px`
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


		this.formUtil = new FormUtil({
            scene: this
        });
        
        //
        //
        //
		this.formUtil.scaleToGameW("myText", 447);
		this.formUtil.scaleToGameH("myText", 65);
		this.formUtil.placeElementAt('myText', true);
		
		var btn = this.add.image(730, 770, "final-soc", "ok").setInteractive({ useHandCursor: true  });
		
		btn.on('pointerdown', function(){
			console.log(this.formUtil.getTextValue('myText'));
		}, this);
        //
        //
        //
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create();		
		
		
	}

	textAreaChanged() {
        var text = this.formUtil.getTextAreaValue("area51");
        console.log(text);
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
