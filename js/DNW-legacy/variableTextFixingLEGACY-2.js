//Author(s): Ethan Scott//

//to add a new variable, duplicate each of these functions and change the variable name. to change the default value, just change the number it defaults to below (do not change Age)//

//retrieve values from local storage, or use default values if not found//
let Age = parseInt(localStorage.getItem("Age")) || 0;
let Joy = parseInt(localStorage.getItem("Joy")) || 50;
let Health = parseInt(localStorage.getItem("Health")) || 50;
let Intellect = parseInt(localStorage.getItem("Intellect")) || 50;
let Looks = parseInt(localStorage.getItem("Looks")) || 50;
let Karma = parseInt(localStorage.getItem("Karma")) || 50;
let Money = parseInt(localStorage.getItem("Money")) || 0;
let Logs = parseInt(localStorage.getItem("Logs")) || "";
console.log("retreieved all values.")

//checks if it's a new game (Age is -1)//
if (Age === -1) {
	console.log("new game; age === -1")
    //initialises variables for a new game//
    let Age = 0;
	let Joy = 50;
	let Health = 50;
	let Intellect = 50;
	let Looks = 50;
	let Karma = 50;
	let Money = 0;
	let Logs = "";
    localStorage.setItem("Age", Age);
    localStorage.setItem("Joy", Joy);
    localStorage.setItem("Health", Health);
    localStorage.setItem("Intellect", Intellect);
    localStorage.setItem("Looks", Looks);
    localStorage.setItem("Karma", Karma);
    localStorage.setItem("Money", Money);
    localStorage.setItem("Logs", Logs);
	console.log("new variables set.")
	
}

//displays variables on the page//
document.getElementById("ageText").innerHTML = "Age: " + Age;
document.getElementById("joyText").innerHTML = "Joy: " + Joy;
document.getElementById("healthText").innerHTML = "Health: " + Health;
document.getElementById("intellectText").innerHTML = "Intellect: " + Intellect;
document.getElementById("looksText").innerHTML = "Looks: " + Looks;
document.getElementById("moneyText").innerHTML = "Money: $" + Money;
document.getElementById("moneyText2").innerHTML = "Money: $" + Money;
document.getElementById("logsText").innerHTML = Logs;
console.log("set variable texts.")