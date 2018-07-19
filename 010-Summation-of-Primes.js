//done

maxNum = 2000000;
sum = 0;

var isPrime = (num) => {
    if (num < 8 && num !== 4 && num != 6) return true;
    else if (num < 10) return false;
    else {
        for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false
        }
    }
    return true;
}

for (var i = 2; i < maxNum; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}

console.log(sum);