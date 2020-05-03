class BgStory extends Phaser.Scene {
    constructor(){
        super("bgStoryScene");
    }

    preload(){
        //load image
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.image('UI old',  './assets/UI old.png');
        this.load.image('mainBack', './assets/mainback.png');
        this.load.image('textBack', './assets/textBack.png');
        this.load.audio('choco','./assets/chocobirdsrun.mp3');
        this.load.image('storyBack', './assets/storyBack.png');
        this.load.image('textBack', './assets/textBack.png');

    }

    create(){
        //bgStory display
        let bgStoryConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: '#00000000',
            color: '#E0FFF6',
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }

        let redConfig = {
           fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#00000000',
            color: '#FFF701',
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }

        //show bgStory text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 29;


        this.mainBack = this.add.tileSprite(0, 0, 680, 480, 'mainBack').setOrigin(0,0);
        // this.UI =  this.add.tileSprite(centerX, centerY - 130, 551, 64, 'UI old').setOrigin(0.5);
        this.storyBack =  this.add.tileSprite(0, 0, 640, 480, 'storyBack').setOrigin(0.0);

        // this.add.text(centerX, centerY - 130, 'Where is my play yard', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer*6, 'Story: You are in a swimming competition, but', bgStoryConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer*5, 'soon you lost your way. You did not find that', bgStoryConfig).setOrigin(0.5);
        this.add.text(centerX-7, centerY - textSpacer*4, ' you are lost, and the only thing in your mind', bgStoryConfig).setOrigin(0.5);
        this.add.text(centerX-7, centerY - textSpacer*3, ' is the desire to win. However, as your speed ', bgStoryConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer*2, 'increases, you find more and more garbage and', bgStoryConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer*1, 'fishing nets around you. Finally, you realize', bgStoryConfig).setOrigin(0.5); //'Press → to start'
        this.add.text(centerX, centerY,                'that you are in a big trouble....', bgStoryConfig).setOrigin(0.5);

        this.add.text(centerX, centerY + 62, 'Control: Use arrow keys to move.', redConfig).setOrigin(0.5);

        this.add.text(centerX, centerY + 127, 'Avoid All Fishing Tools and Garbages.', redConfig).setOrigin(0.5);

        this.add.text(centerX, centerY + 192, 'Press → to start.', redConfig).setOrigin(0.5);
        
        // define keys
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
    }
}