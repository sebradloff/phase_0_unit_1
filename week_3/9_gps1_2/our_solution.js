// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Sebastian Radloff
//  2. George Zeng


// 0. "YOU SIGNED... WHO?!"
var adamSandler = { 
  name: 'Adam Sandler', 
  age: 47, 
  quote: "That's your home! Are you too good for your home?!"
};

var kristenBell = { 
  name: 'Kristen Bell', 
  age: 33, 
  quote: "Do you wanna build a snowman?"
};

var jimCarrey = { 
  name: 'Jim Carrey', 
  age: 52, 
  quote: "...So you're telling me there's a chance? YEAH!"
};

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.infoDisplay = function(){
    return console.log("Actor name is " + this.name + ", age is " + this.age + ", and quote is " + '"'+this.quote+'"');  
  }
  this.showQuote = function(){
     return console.log("'" + this.quote + "'")
  }
  this.showRep = function(){
      return console.log("rockstarReps")
  }
  this.newDim = function(nameDimension){
      this.nameDimension = nameDimension;
  }
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

shooterMcGavin.infoDisplay();
shooterMcGavin.showQuote();

shooterMcGavin.newDim("weight");
shooterMcGavin.weight = 155;
shooterMcGavin.weight;


// function cat(name) {
// 	this.name = name;
// 	this.talk = function() {
// 		alert( this.name + " say meeow!" )
// 	}
// } 

// var person = { 
//   firstName: 'Frank', 
//   lastName: 'Hardy', 
//   age: 25,
//   telephone: '555-555-1234',
//   email: 'fhardy@example.com'
// };

// Object Constructor example

// :

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }




//  6.  Your Reflection:
* What parts of your strategy worked? What problems did you face?
	* Roadmapping where we were going and what we wanted to do helped us a lot. I was able to navigate properly when we both were on the 
	same page, and he was able to write exactly what we had talked about. This also worked once we flipped roles.    
* What questions did you have while coding? What resources did you find to help you answer them?
	* General syntax questions regarding object creation. Emily helped us out a bit and we used the intro JavaScript docs on DBC github.  
* What concepts are you having trouble with, or did you just figure something out? If so, what?  
	* No troubles as of now. Object creation syntax, but I understand everything completed in this GPS session.
* Did you learn any new skills or tricks?
	* learned about utilizing a function call witin a  dimension of an object which was really cool.
* How confident are you with each of the Learning Competencies? 
	* I feel confident with all the Learning Competencies. Creating and manipulating objects is easy, using functions are no problem,
	and I feel less confident debugging with Node, since I use the console, but I am doing fine so far.
* Which parts of the challenge did you enjoy?
	* I enjoyed all of it. It was a fun puzzle to solve with my partner.
* Which parts of the challenge did you find tedious?
	* N/A

