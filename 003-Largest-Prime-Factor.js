//done (not fully functional for all use cases though)

var input = 600851475143;

var isPrime = (num) => {
    for (var i = Math.floor(Math.sqrt(num)); i > 1; i--) {
        if (num % i === 0) {
            console.log(i);
            return true;
            } 
        }
    return false;
}

var doAThing = (num) => {
    for (var i=2;i<Math.floor(Math.sqrt(num));i++) {
        if(num%i===0) {
            if(isPrime(num/i)) return;
        }
    }
}

doAThing(input);