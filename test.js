let x = [1,2,2,4,2,4,4];

let max = Math.max(...x);

console.log(x.filter(x=>x===max).length);