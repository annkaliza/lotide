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

const findKeyByValue = function(obj, value) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      // if (obj.hasOwnProperty(prop)) { this line caused an error in eslint
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
 
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const studentRestuls = {
  Mary: 80,
  Suzan: 90,
  Micheal: 88,
  Adam: 100,
  Mike: 80
};

assertEqual(findKeyByValue(studentRestuls,100), "Adam");
assertEqual(findKeyByValue(studentRestuls,50), undefined);
assertEqual(findKeyByValue(studentRestuls,80), "Mary");