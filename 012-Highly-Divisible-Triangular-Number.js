//done

var divisors = 0;
var count = 1;
var lastNum = 1;

while (divisors <= 500) {
    divisors = 0;
    count++;
    lastNum += count;
    for (var i = 1; i <= Math.floor(Math.sqrt(lastNum)); i++) {
        if (i * i === lastNum) divisors++;
        else if (lastNum % i === 0) divisors += 2;
    }
}

console.log(lastNum);



