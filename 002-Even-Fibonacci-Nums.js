<<<<<<< HEAD
//Works
=======
//done
>>>>>>> 9ecb14f3c38661dc243160c76b12c24e4cb9330c

var sum = 0;
currentNum = 1;
nextNum = 1;
while (nextNum < 4000000) {
    var temp = nextNum;
    nextNum = nextNum + currentNum;
    currentNum = temp;
    if (currentNum % 2 === 0) {
        sum += currentNum
    }
}
console.log(sum);