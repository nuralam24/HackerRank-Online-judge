'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readline() {
    return inputString[currentLine++];
}


// main function .. code start ........................// 

function main() {

    //var input = readline()  
    var t = Number(readline())
    for (var j = 0; j < t; j++) {
        var s = readline()
        var c = 0
        for (var i = 0; i < s.length; i++) {
            if ((s[i] == 'A' && s[i + 1] == 'A') || (s[i] == 'B' && s[i + 1] == 'B')) {
                c++;
            }
        }
        console.log(c) 
    }
}
