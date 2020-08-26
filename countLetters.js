const assertEqual = function(actual, expected) {

  if (typeof actual === "string") {

    actual = `"${actual}"`;
    
  }

  if (typeof expected === 'string') {
    expected = `"${expected}"`;
  }

  if (actual === expected) {
    console.log(`👍 Assertion passed: [${firstArray}] == [${secondArray}]`);
  } else {
    console.log(`👎 Assertion failed: [${firstArray}] != [${secondArray}]`);
  }


};
// This function consider small letters equal to capital letter if we want to consider them different entities
// We can delete toLowerCase() function
const countLetters = function(sentence) {
  let letterCounter = {};
  sentence = sentence.toLowerCase();
  for (let char of sentence) {
    if (char !== ' ') {
      if (letterCounter[char]) {
        letterCounter[char] += 1;
      } else {
        letterCounter[char] = 1;
      }
    }
  }
  return letterCounter;
};

console.log(countLetters(" lighthouse in the House"));
const test = countLetters("My name is Sarah !");
assertEqual(test['a'],3);
assertEqual(test['s'],2);
assertEqual(test['z'],undefined);