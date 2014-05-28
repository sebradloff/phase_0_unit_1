
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.
// create object 'adam', name = "Adam"
// edit terah spouse = adam
// edit terah weight = 125
// delete terah eyeColor
// set terah.spouse.spouse to terah
// create object terah.children
// create carson property on terah.children, name = "Carson"
// create carter property on terah.children, name = "Carter"
// create colton property on terah.children, name = "Colton"
// adam.children = terah.children

var adam = {
  name: "Adam",
  spouse: terah
}

terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
terah.spouse.spouse = terah;

terah.children = [];

terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};


adam.children = terah.children;





// __________________________________________
// Reflection: Use the reflection guidelines
// What parts of your strategy worked? What problems did you face?
//   * I began with pseudocoding and used that to code my project. THis made things go relatively quickly.
// What questions did you have while coding? What resources did you find to help you answer them?
//   * I had to figure out how the children object was to be created. It took me a while to realize we were not supposed to modify
//   the terah code at all, even reproducing it in our own code. From their, I looked up some object literal notation and was fine.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//   * Creating object literals without manipulating it from insde the instance of the object.
// Did you learn any new skills or tricks?
//   * creating objects within objects through object literal notation that I had not yet used.
// How confident are you with each of the Learning Competencies?
//   * I am now very confident in all three of those learning Competencies.
// Which parts of the challenge did you enjoy?
//   * I enjoyed testing each piece, making the whole process more enjoyable. Actionable feedback as your progress through the excercies
//   was great to see.
// Which parts of the challenge did you find tedious?
//   * N/A
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)