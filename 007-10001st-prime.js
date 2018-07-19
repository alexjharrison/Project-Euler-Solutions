// Works but too slow

function findPrime(input) {
    //find multiples
    return (input === 1) ? false :
        (input < 4) ? true :
            (input % 2 === 0) ? false :
                (input < 9) ? true :
                    (input % 3 === 0) ? false :
                        function () {
                            var r = Math.floor(Math.pow(input, .5));
                            var f = 6;
                            while (r >= 5)
        } ? true :
        
    
}

var n = 500;
var primeNums = 0;
var count = 2;
while (primeNums < n) {
    if (findPrime(count)) {
        primeNums++;
    }
    count++;
}

console.log("#count: ", count - 1);