import Phaser from 'phaser'
import TitleScreen from './scenes/TitleScreen.js'

const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
};

const game = new Phaser.Game(config);

game.scene.add('TitleScreen', TitleScreen);
game.scene.start('TitleScreen');
