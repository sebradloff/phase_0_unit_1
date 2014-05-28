// I paired with Robert Schwartz on this challenge.

// __________________________________________
// Write your code below.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

var secretNumber = 1;

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

var secretNumber = 7;

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

var password = "hello";

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

var password = "just open the door";

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

var allowedIn = true;

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

allowedIn = false;

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

var members = ["Sebastian", "Rob"];

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

members.unshift("John");

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

members.push("Mary");

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
// 
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

