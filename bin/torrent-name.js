#! /usr/bin/env node

var parseArgs = require('minimist');
var ptn = require('parse-torrent-name');


var args = parseArgs(process.argv);
var string = args._.slice(2,args._.length);
	string = string.join(' '),
	stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = "";


if( args._.length > 2){
	stdout.write(JSON.stringify(ptn(string)));
    stdout.write('\n');
}else{

stdin.resume();
stdin.setEncoding('utf8');
 
stdin.on('data', function (chunk) {
    inputChunks+=chunk;
});
 
stdin.on('end', function () {
    stdout.write(JSON.stringify(ptn(inputChunks)));
    stdout.write('\n');
});	

}