const randomColor = require('randomcolor');
const chalk = require('chalk');
const freestyleColor = Math.floor(Math.random() * 16777215).toString(16);

const hue = process.argv[2];
const luminosity = process.argv[3];

const userColor = randomColor({
  luminosity: luminosity,
  hue: hue,
});

if (process.argv[2]) {
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
  console.log(chalk.hex(userColor)('#############################'));
  console.log(
    chalk.hex(userColor)('########   ' + '#' + userColor + '  ########'),
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
