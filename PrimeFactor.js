let arr = [];

const prompt = require("prompt-sync")();
let num = prompt("Enter a nuber to get the Prime Facot: ");
var flag = 0;

function primeChecker(i) {
    for (var j = 2; j <= (i / 2); j++) {
        if (i % j == 0) {
            flag++;
            break;
        }
    }
    if (flag == 0) {
        arr.push(i)
    }
}

for (var i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
        primeChecker(i);
    }
}
console.log("Prim Factors are: " + arr);