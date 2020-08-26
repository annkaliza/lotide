// x = 12;
// if(true) {
//   x + 2;
//   x = 4;
// }
// console.log(x);


// var globalScope = 'I\'m all up in your codes!';

// if (true) {
//   let globalScope = 'Not anymore, you\'re not!';
// }
// console.log(globalScope);

// console.log(friend);
// var friend = 'E.T.';
// console.log(friend);


// let myGlobalVar = "global";

// const printMyVars = function() {
//   let myLocalVar = "local";
//   console.log("-- Inside printMyVars --");
//   console.log("myLocalVar is:", myLocalVar);
//   console.log("myGlobalVar is:", myGlobalVar);
// }

// printMyVars();

// console.log('-- Outside of printMyVars now --');
// console.log(myLocalVar);

// let myVar = "global";

// const myFunction = function() {
//   let myVar = "local";

//   console.log("inside myFunction, myVar is:", myVar); 
// }

// myFunction();

// console.log("outside myFunction, myVar is:", myVar);  


// 23 === "23"

var myObjected = {
  'key-1': 42,
  keyB: 'value B',
  'keyC': [1, 2, 3]
  };


// const whatToDoForLunch = function(hungry, availableTime) {

//   // if (hungry = "true" && availableTime > 20); {
//   //   return '';
//   if (hungry === true && availableTime >= 20 && availableTime <= 30) {
//     console.log('Try to place nearby');
//   } else if (hungry === true && availableTime < 20) {
//     console.log('Eat in the lab');
//   } else if(hungry === true && availableTime > 30) {
//     console.log('we are in a bootcamp and that we should reconsider how much time we actually have to spare');
//   }else (hungry === false && availableTime > 0); {
//     console.log('Get back to work');
//   }
// }


// /*
//  * This is some test runner code that's simply calling our whatToDoForLunch function
//  * defined above to verify we're making the right decisions. Do not modify it!
//  */

// console.log("I'm hungry and I have 20 minutes for lunch.");
// whatToDoForLunch(true, 20);
// console.log("---");

// console.log("I'm hungry and I have 50 minutes for lunch.");
// whatToDoForLunch(true, 50);
// console.log("---");

// console.log("I'm not hungry and I have 30 minutes for lunch.");
// whatToDoForLunch(false, 30);
// console.log("---");

// console.log("I'm hungry and I have 15 minutes for lunch.");
// whatToDoForLunch(true, 15);
// console.log("Pick something up and eat it in the lab");