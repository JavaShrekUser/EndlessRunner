/*

Main Programmer:          
Abudula Aisikaer
Zihan Guo

Art and a little Program: 
Logan Park 

BGM and Sound effects:
https://opengameart.org/content/water-splashes
https://opengameart.org/content/choco-birds-run

Game Title:
Where Is My Play Yard

Completed on:
05/03/2020

creative tilt justification:

...do something technically interesting? Are you particularly proud of a programming technique you implemented? Did you look beyond the class examples and learn how to do something new? (5)
In our game, we need to make the obstacles change its velocity and appear on screen in different time period. This is quite a challenge for us at the beginning, then we did some research 
and also checked the class examples that instructer provided. Finally we came up with an effective but not complicated way to accomplish this goal. Programming part is a little bit 
tricky but we finally finished it in the limted time period that we have.

...have a great visual style? Does it use music or art that you created? Are you trying something new or clever with the endless runner form? (5)
INCREDIBLE and GREAT art done by ourself. We want to express the idea of protecting the ocean environment through this game.





*/


// game configuration object
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, BgStory, Play ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    fishSpeed: 2.5,
    gameTimer: 30000  
}

// reserve keyboard vars
let keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyS;