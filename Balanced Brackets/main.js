"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ************************ Code Start ***************************

function main() {
  //var input = readline();

  var n = parseInt(readline());
  while (n-- > 0) {
    var Obj = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
    var ar = [];
    var s = readline();
    for (var i = 0; i < s.length; i++) {
      if (ar.length == 0 || Obj[ar[ar.length - 1]] != s[i]) {
        ar.push(s[i]);
      }
      else ar.pop();
    }
    print(ar.length == 0 ? "YES" : "NO");
  }
}

