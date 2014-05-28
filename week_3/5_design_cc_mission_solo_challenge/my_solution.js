// This is a solo challenge

// Your mission description:
// Destroy the 3 enemies on the map and exit through the blue door.
// 
// 

// Pseudocode
// Create 3 enemies that take 2 damage to die
// Create a hero that deals 1 damage, can move all directions, and attack in all directions
// Create 3 doors that have a color property
// 
// 

// Initial Code

//Imagine field is 1000px by 1000px. 

function enemy(name, health, damage){//this allows you to create your own enemies.
	this.name = name;
	this.health = health;
	this.damage = damage;
	this.xPos = (Math.random()*1000).toFixed(0);
	this.yPos = (Math.random()*1000).toFixed(0);
	this.stats = function(){
		return console.log(this.name + " enemy has " + this.health + " health remaining and deals " + this.damage + " damage per turn, and is located at "
			+ this.xPos + ", " + this.yPos + ".");
	}
}

function hero(name){
	this.name = name;
	this.health = 100;
	this.damage = 50;
	this.xPos = 0;
	this.yPos = 0;
	this.stats = function(){
		return console.log(this.name + ", you have " + this.health + " health remaining and deal " + this.damage + " damage per turn.");	
	}
	this.moveX = function(xPos){
		return this.xPos = this.xPos + xPos;
	}
	this.moveY = function(yPos){
		return this.yPos = this.yPos + yPos;
	}
}

function door(color){
	this.color = color;
	this.xPos = (Math.random()*1000).toFixed(0);
	this.yPos = (Math.random()*1000).toFixed(0);
	this.stats = function(){
		return console.log("The " + this.color + " door is located at " + this.xPos + ", " + this.yPos + ".");
	}
}


var ogre1 = new enemy("Ugly", 100, 10);
var ogre2 = new enemy("Uglier", 100, 10);
var ogre3 = new enemy("Ugliest", 100, 10);

var door1 = new door("blue");
var door2 = new door("green");
var door3 = new door("red");

var hero1 = new hero("Sebastian");
hero1.stats();

ogre1.stats();
ogre2.stats();
ogre3.stats();

door1.stats();
door2.stats();
door3.stats();

console.log(hero1.name + ", it's your job to kill all ogres and break down the blue door. Good Luck!");



// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 