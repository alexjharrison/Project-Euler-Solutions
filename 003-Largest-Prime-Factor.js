//done (not fully functional for all use cases though)

var input = 600851475143;

var isPrime = (num) => {
    if (num < 8 && num !== 4 && num != 6) return true;
    else if (num < 10) return false;
    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            console.log(i);
            return false;
        }
    }
    return true;
}

var doAThing = (num) => {
    for (var i=2;i<Math.floor(Math.sqrt(num));i++) {
        if(num%i===0) {
            if(isPrime(num/i)) return;
        }
    }
}

doAThing(input);
