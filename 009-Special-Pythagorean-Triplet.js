//done

function findTrips() {
    for (var a = 998; a > 0; a--) {
        for (var b = a + 1; b < 1000; b++) {
            for (var c = b + 1; a+b+c <= 1001; c++) {
                if(a+b+c===1000){
                    if (a * a + b * b === c * c) return a * b * c;
                }
            }
        }
    }
}
console.log(findTrips());