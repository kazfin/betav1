//Author(s): Ethan Scott//

//initial local storage age retrieval//
let Age = localStorage.getItem("Age");

//checks if it should reset variables for a new game//
if (Age === -1) {
	
//initial variables//
let Joy = 50
let Health = 50
let Intellect = 50
let Looks = 50
let Karma = 50 //affects chances of good (or bad) things happening to you//
let Money = 0

//local storage variable setting//
localStorage.setItem("Age", Age);
localStorage.setItem("Joy", Joy);
localStorage.setItem("Health", Health);
localStorage.setItem("Intellect", Intellect);
localStorage.setItem("Looks", Looks);
localStorage.setItem("Karma", Karma);
localStorage.setItem("Money", Money);

//sets Age to 0//
let Age = 0
} else {
	
//variable retrieval if the page was reloaded//
let Age = localStorage.getItem("Age");
let Joy = localStorage.getItem("Joy");
let Health = localStorage.getItem("Health");
let Intellect = localStorage.getItem("Intellect");
let Looks = localStorage.getItem("Looks");
let Karma = localStorage.getItem("Karma");
let Money = localStorage.getItem("Money");
}

//writes variables to variable texts//
document.getElementById("ageText").innerHTML = "Age: " + Age;
document.getElementById("joyText").innerHTML = "Joy: " + Joy;
document.getElementById("healthText").innerHTML = "Health: " + Health;
document.getElementById("intellectText").innerHTML = "Intellect: " + Intellect;
document.getElementById("looksText").innerHTML = "Looks: " + Looks;
document.getElementById("moneyText").innerHTML = "Money: " + Money;