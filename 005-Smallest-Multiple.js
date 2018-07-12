var result = 0;
var count = 2520;
while (result === 0) {
    one2twenty = 0;
    while (one2twenty<21) {
        if(count%one2twenty!==0) break;
        if(one2twenty===20) result = count;
        one2twenty++;
    }
    console.log(count);
    count++;
}
console.log(`Result: ${result}`);