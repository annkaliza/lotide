
const eqArrays= require('../eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  

  if (eqArrays(firstArray, secondArray)) {
    console.log(`👍 Assertion passed: [${firstArray}] == [${secondArray}]`);
  } else {
    console.log(`👎 Assertion failed: [${firstArray}] != [${secondArray}]`);
  }

};

assertArraysEqual([2,1,3],[2,1,3]);
assertArraysEqual(['hello', 'hi'],['helo','hi']);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual(['Lighthouse Labs'],['Lighthouse Labs']);
assertArraysEqual(["h","a"],["H","a"]);
