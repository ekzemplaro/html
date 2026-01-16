#! /usr/bin/node
//
var fs = require('fs')
const gpio = '/sys/class/gpio' 
fs.writeFileSync (gpio + '/export', 12)
fs.writeFileSync (gpio + '/gpio12/direction', 'out')
fs.writeFileSync (gpio + '/gpio12/value', 1)
 
setTimeout(function(){
	fs.writeFileSync (gpio + '/gpio12/value', 0)
	fs.writeFileSync (gpio + '/unexport', 12)
}, 2000)
