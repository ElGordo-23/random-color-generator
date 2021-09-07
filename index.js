const randomColor = require('randomcolor');
const chalk = require('chalk');
const freestyleColor = Math.floor(Math.random() * 16777215).toString(16);

let hue = process.argv[2];
let luminosity = process.argv[3];

const userColor = randomColor({
  luminosity: luminosity,
  hue: hue,
});

if (process.argv[2]) {
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
  console.log(
    chalk.hex(userColor)('########   ' + '#' + freestyleColor + '   ########'),
  );
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
} else {
  console.log(chalk.hex(freestyleColor)('#############################'));
  console.log(chalk.hex(freestyleColor)('#############################'));
  console.log(chalk.hex(freestyleColor)('#############################'));
  console.log(
    chalk.hex(freestyleColor)(
      '########   ' + '#' + freestyleColor + '   ########',
    ),
  );
  console.log(chalk.hex(freestyleColor)('#############################'));
  console.log(chalk.hex(freestyleColor)('#############################'));
  console.log(chalk.hex(freestyleColor)('#############################'));
}
