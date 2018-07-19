//works

var biggest = 0;
function checkForPal(input) {
    for (var i = 0; i < input.length / 2; i++) {
        if (input.charAt(i) !== input.charAt(input.length - i - 1)) {
            return false;
        }
    }
    return true;
}

function getBiggestPal() {
    for (var i = 999; i >= 100; i--) {
        for (var j = 999; j >= 100; j--) {
            if (checkForPal((i * j).toString())) {
                if (i * j > biggest) biggest = i * j;
            }
        }
    }
}
getBiggestPal();
console.log(biggest);
