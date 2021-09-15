const randomColor = require('randomcolor');
const chalk = require('chalk');
// Generates a random hex number, might be useful in the future:
// const freestyleColor = Math.floor(Math.random() * 16777215).toString(16);

const hue = process.argv[2];
const luminosity = process.argv[3];

const userColor = randomColor({
  luminosity: luminosity,
  hue: hue,
});

function color() {
  return console.log(
    chalk.hex(userColor)(`
  #############################
  #############################
  #############################
  #############################
  #############################
  ######     ${userColor}    #######
  #############################
  #############################
  #############################
  #############################
  #############################`),
  );
}

color();
