//works on small inputs but starts choking between 9 billion and a little over a trillion

var bigNum = 600851475143;
var result = findPrimes(findMults(9000001));
console.log("result: "+result);

function findPrimes(input) {
    var largestPrime = 0;
    input.forEach(mult => {
        if (findMults(mult).length === 0) {
            largestPrime = mult;
        }
    });
    return largestPrime;
}

function findMults(input) {
    //find multiples
    var mults = [];
    var max = input;
    for (var i = 2; i < max; i++) {
        for (var j = max; j >= i; j--) {
            if (i * j === input) {
                mults.push(i, j);
                max = j;
            }
        }
    }
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