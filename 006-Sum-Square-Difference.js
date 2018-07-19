//works

n = 100;
var sumOfSquares = 0;
var squareOfSum = 0;
for (var i = 0; i < n; i++) {
    sumOfSquares += Math.pow(i + 1, 2);
    squareOfSum += i + 1;
}
console.log(Math.pow(squareOfSum, 2) - sumOfSquares);
