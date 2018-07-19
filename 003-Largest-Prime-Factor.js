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
<<<<<<< HEAD
    //put in numerical order
    console.log(mults.sort(function (a, b) { return a - b }));
    return mults.sort(function (a, b) { return a - b });
}


//second attempt - didn't work
//works but starts choking between 9 billion and a little over a trillion

// var bigNum = 600851475143;
// // var result = findPrimes(findMults(9000001));
// var result = 0;
// findMults(25);
// console.log("result: "+result);

// function findMults(input) {
//     //find multiples
//     console.log("input = "+input);
//     var max = input;
//     result = input;
//     for (var i = 2; i < max; i++) {
//         for (var j = max; j >= i; j--) {
//             console.log("i: "+i+"\nj: "+j);
//             if (i * j === input) {
//                 // console.log("hi");
//                 if(findMults(j)==="prime") { return j; }
//             }
//             else if(i===j) { return "prime"; }
//         }
//     }
// }
=======
}

doAThing(input);
>>>>>>> 9ecb14f3c38661dc243160c76b12c24e4cb9330c
