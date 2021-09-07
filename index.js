// const randomColor = require('randomcolor');
const chalk = require('chalk');
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

console.log(chalk.hex(randomColor)('#############################'));
console.log(chalk.hex(randomColor)('#############################'));
console.log(chalk.hex(randomColor)('#############################'));
console.log(
  chalk.hex(randomColor)('########   ' + '#' + randomColor + '   ########'),
);
console.log(chalk.hex(randomColor)('#############################'));
console.log(chalk.hex(randomColor)('#############################'));
console.log(chalk.hex(randomColor)('#############################'));
