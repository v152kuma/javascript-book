
const arr = [1,2,3,4,5,6,7,8,89];

const arr2 = [1, 4, 5, 6, 7, ...arr]

let sum = 0;

arr.forEach(e => sum = sum+e)

console.log(sum)