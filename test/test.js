var trapWater = require('../trapwater');

let arr1 = [2, 0, 2];
let arr2 = [3, 0, 2, 0, 4];
let arr3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trapWater.dynamicWaterCollected(arr1));
console.log(trapWater.dynamicWaterCollected(arr2));
console.log(trapWater.dynamicWaterCollected(arr3));

console.log(trapWater.waterCollected(arr1));
console.log(trapWater.waterCollected(arr2));
console.log(trapWater.waterCollected(arr3));