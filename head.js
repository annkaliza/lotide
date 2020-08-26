
// const assertEqual = function(actual, expected) {
  

//   if (typeof actual === "string") {

//     actual = `"${actual}"`;
    
//   }

//   if (typeof expected === 'string') {
//     expected = `"${expected}"`;
//   }

//   if (actual === expected) {
//     console.log(`👍 Assertion passed: [${actual}] == [${expected}]`);
//   } else {
//     console.log(`👎 Assertion failed: [${actual}] != [${expected}]`);
//   }

// };


const assertEqual = require('./assertEqual');

const head = function(array) {
  let headOfArray = array[0];
  return headOfArray;
};



module.exports = head;