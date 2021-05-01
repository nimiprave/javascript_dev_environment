
require('./index.css');
var numeral = require('numeral');
var color = require('colors');

var  courseValue = numeral(1000).format('$0,0.00');
/*eslint-disable no-console*/
console.log( color.red( `I would pay ${courseValue} for your advise` ));
