const chalk = require('chalk');
var moment = require('moment');
moment().format();

var day = moment().format('dddd');
var hour = moment().format('HH');
console.log(chalk.underline(chalk.cyanBright("Hello! Today is " + day)));
if (hour < 12) {
    console.log("Good Morning!");
} else if (hour >= 12 && hour <5) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}