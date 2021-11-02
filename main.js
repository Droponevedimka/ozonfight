
window.addEventListener('load', function() {
	
	var game = new Phaser.Game({
    "title": "OZON",
    "width": 1920,
    "height": 1080,
    "type": Phaser.CANVAS,
    "parent": "game-container",
    "transparent"    : true,
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {
	
	constructor() {
    super({
        key: "preload",
        pack: {
			    files: [
			        { type: 'image', key: 'logo', url: 'assets/sprites/phaser2.png' } 				
			    ]
			}
     });
  }
	
	init(){
		
	}

	preload() {		
		
		 
						
        var progressBar = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(800, 510, 320, 50);
            
           
            var loadingText = this.make.text({
                x: width/2 + 20,
                y: height/2 - 5,
                text: 'Loading...',
                style: {
					font:'Aldrich',
                    fontSize: '20px',
                    fill: '#ffffff'
                }
            });

            this.add.image(width/2, 400, 'logo');
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2 - 30,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font:'Aldrich',
                    fontSize: '18px',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font:'Aldrich',
                    fontSize: '18px',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(800, 510, 320 * value, 50);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });

            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            
            this.load.scenePlugin({
                key: 'rexuiplugin',
                url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexuiplugin.min.js',
                sceneKey: 'rexUI'
            });        
        
       			
            this.load.pack("pack", "assets/pack.json");
            this.load.image("fullscreen", "assets/sprites/fullscreen.png");
            this.load.spritesheet('arrows', 'assets/sprites/arrows.png',{frameWidth: 90, frameHeight: 89});
            this.load.spritesheet('arrows-mob', 'assets/sprites/arrows-mob.png',{frameWidth: 180, frameHeight: 178});

            this.load.audio('game-lose', 'assets/audio/Lose.mp3');
            this.load.audio('hit-swoosh', 'assets/audio/hit-swoosh.mp3');
            this.load.audio('combat-hit', 'assets/audio/combat-hit.mp3');
            this.load.audio('cosmic-funk', 'assets/audio/Cosmic-funk.mp3');
            this.load.audio('deep-voice', 'assets/audio/deep-voice.mp3');
            this.load.audio('fireball-hero', 'assets/audio/fireball-hero.mp3');
            this.load.audio('fireball-mons', 'assets/audio/fireball-mons.mp3');
            this.load.audio('game-over', 'assets/audio/game-over.mp3');
            this.load.audio('male-shoting-win', 'assets/audio/male-shoting-win.mp3');
            this.load.audio('mons-voice', 'assets/audio/mons-voice.mp3');
            this.load.audio('mouse-click', 'assets/audio/mouse-click.mp3');
            this.load.audio('mons-voice-first-3', 'assets/audio/mons-voice-first-3.mp3');
            this.load.audio('mons-voice-first-2', 'assets/audio/mons-voice-first-2.mp3');
            this.load.audio('wrong-bong', 'assets/audio/wrong-bong.mp3');
            this.load.audio('yeap-bong', 'assets/audio/yeap-bong.mp3');
            this.load.audio('hero-voice', 'assets/audio/hero-voice.mp3');
	}

	
	create() {	
		this.scene.start("first");				
	}

}
