//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function to grab random integers//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//retrieve values from local storage, or use default values if not found//
let Age = parseInt(localStorage.getItem("Age")) || 0; //sets variable to the respective value found from local storage. parseInt ensures it is treated as a number and not a string so it can be used in mathematical operations, e.g. Age += 50//
let Joy = parseInt(localStorage.getItem("Joy")) || 50;
let Health = parseInt(localStorage.getItem("Health")) || 50;
let Intellect = parseInt(localStorage.getItem("Intellect")) || 50;
let Looks = parseInt(localStorage.getItem("Looks")) || 50;
let Karma = parseInt(localStorage.getItem("Karma")) || 50;
let Money = parseInt(localStorage.getItem("Money")) || 0;
let rnumber = parseInt(localStorage.getItem("rnumber")) || 0;
let rfunction = localStorage.getItem("rfunction") || ""; //strings don't use parseInt because they are a string, not an int//
let revent = localStorage.getItem("revent") || "";
let Logs = localStorage.getItem("Logs") || "";

//obscure values//
let orgRelationship = JSON.parse(localStorage.getItem("orgRelationship") || JSON.stringify(["Police", 50, "Poison Control", 100, "Neighbourhood", 50, "Celebrities", 0]));
let Occupation = JSON.parse(localStorage.getItem("Occupation") || JSON.stringify([]));
let Evality = parseInt(localStorage.getItem("Evality")) || 0;

//achievement values//
let Achievements = JSON.parse(localStorage.getItem("Achievements") || "[]");
let AchRead = JSON.parse(localStorage.getItem("AchRead") || "[]");
let Stars = parseInt(localStorage.getItem("Stars")) || 0;

//relationship values//
let PersonNames = JSON.parse(localStorage.getItem("PersonNames") || JSON.stringify(["Elizabeth Kevins", "Kevin Kevins", "Barbonious Kevins", "Jaquavius Kevins"]));
let PersonRoles = JSON.parse(localStorage.getItem("PersonRoles") || JSON.stringify(["Mother", "Father", "Brother", "Brother"]));
let PersonRelationships = JSON.parse(localStorage.getItem("PersonRelationships") || JSON.stringify(["Mother", "Father", "Brother", "Brother"]));
let PersonAges = JSON.parse(localStorage.getItem("PersonAges") || JSON.stringify([getRandomIntInclusive(18, 50), getRandomIntInclusive(18, 70), 2, 4]));

//career values//
let Salary = parseInt(localStorage.getItem("Salary")) || 0;
let hasJob = Boolean(localStorage.getItem("hasJob") || false);
let Job = localStorage.getItem("Job") || "";
let PartTimeJob = localStorage.getItem("PartTimeJob") || "";
let SpecialCareer = localStorage.getItem("PartTimeJob") || "";
let JobPerformance = parseInt(localStorage.getItem("JobPerformance")) || 0;
let PartTimePerformance = parseInt(localStorage.getItem("PartTimePerformance")) || 0;
let SpecialPerformance = parseInt(localStorage.getItem("SpecialPerformance")) || 0;
let Degree = JSON.parse(localStorage.getItem("Degree") || JSON.stringify([]));
let workExperience = localStorage.getItem("workExperience") || [];

console.log("retreived all values.")

//sets values to their max if they are over their max, and min if they are under their min//
if (Joy > 100) {
	Joy = 100;
} else if (Joy < 0) {
	Joy = 0;
}

if (Health > 100) {
	Health = 100;
} else if (Health < 0) {
	Health = 0;
}

if (Intellect > 100) {
	Intellect = 100;
} else if (Intellect < 0) {
	Intellect = 0;
}

if (Looks > 100) {
	Looks = 100;
} else if (Looks < 0) {
	Looks = 0;
}

if (Karma > 100) {
	Karma = 100;
} else if (Karma < 1) { //karma can't be 0 so as to not make anything impossible due to your karma level//
	Karma = 1;
}

if (Evality > 100) {
	Evality = 100;
} else if (Evality < 0) {
	Evality = 0;
}

console.log("minned and maxxed any overflowing values")