<<<<<<< HEAD
//Works
=======
//done
>>>>>>> 9ecb14f3c38661dc243160c76b12c24e4cb9330c

var multiples = [];
var result = 0;
for (var i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
    }
}
multiples.forEach(element => {
    result += element;
});

console.log(result);