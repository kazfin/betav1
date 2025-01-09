//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function for the random age event//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function graduation() {
	if (Age === 11) { //primary school graduation//
		Degree.push("primarySchool");
		localStorage.setItem("Degree", JSON.stringify(Degree));
	} else if (Age === 18) { //high school graduation//
		Degree.push("highSchool");
		localStorage.setItem("Degree", JSON.stringify(Degree));
	}
	if (Age >= 7 && Age <= 14) {
		Money += Age * 2;
	}
}

function salary() {
	if (Intellect <= 20) { //if player is... dumb//
		Money += (Salary / 100) * 25; //adds 25% of salary to money//
	} else if (Intellect > 20 && Intellect < 80) { //if player is average//
		Money += (Salary / 100) * 30; //adds 30% of salary to money//
	} else if (Intellect >= 80) { //if player is a genius//
		Money += (Salary / 100) * 35; //adds 35% of salary to money; you get paid more, you have a better job, you're smart//
	}
	if (Age >= 7 && Age <= 14) {
		Money += Age * 4;
	}
}

function spiral() { //if stats are bad, you spiral downhill//
	if (Evality >= 85) { //if player is evil//
		Karma / 2;
		Joy += 3;
	} else if (Evality <= 10 && Age >= 12) { //if player is a saint (it's easier to be a saint in your formative ages so you don't get benifits for that)//
		Karma += 4;
		Joy += 3;
	}
	if (Health <= 20) { //if player is unhealthy//
		Joy -= 5;
	}
	if (Joy <= 15) { //being unhappy sacrafices other stats//
		Health -= 6;
		Intellect -= 6;
		Looks -= 6;
	}
	if (Looks <= 20) { //if player is ugly//
		Joy -= 4;
	} else if (Looks >= 85) { //if player is attractive//
		Joy += 3;
	}
	if (Money >= 1,000,000) { //if player has more than $1,000,000 in the bank//
		Joy += 3;
	} else if (Money >= 100,000,000) { //if player is RICH (has more than $100,000,000 in the bank//
		Joy += 4;
		Karma -= 4;
	} else if (Money < 0) { //on the inverse, if player is in debt//
		Joy -= 5;
	} else if (Money <= -200,000) { //if player is in generational debt//
		Joy -= 10;
		Karma += 2;
	}
	localStorage.setItem("Money", Money);
	localStorage.setItem("Karma", Karma)
	localStorage.setItem("Joy", Joy)
	localStorage.setItem("Looks", Looks)
	localStorage.setItem("Health", Health)
	localStorage.setItem("Intellect", Intellect)
}

function deathChance() {
	if (Age >= 75 && Age <= 79) {
			rnumber = getRandomIntInclusive(1, 5); //gets a random number between x and y//
			if (rnumber === 1) {
				Occupation.push("Death"); //player has now died//
				console.log("player died");
				rnumber = 0;
			} else if (rnumber != 1) {
				console.log(rnumber);
				console.log("player did not die");
				rnumber = 0;
		}
	} else if (Age === 80) {
		if (!Achievements.includes(11)) {
			Achievements.push(11)
			localStorage.setItem("Achievements", JSON.stringify(Achievements));}
		Occupation.push("Death"); //player has now died//
		console.log("player died");
	}
	if (Occupation.includes("Death")) {
		if (!Achievements.includes(9)) {
			Achievements.push(9);
		}
		window.location.href = "./home.html";
	}
}

function getEvent() {
	rnumber = getRandomIntInclusive(1, 2); //gets a random number between x and y//
	console.log("rnumber === " + rnumber);
	if (rnumber === 1) { //one in two (50%) chance of getting an event)//
			localStorage.setItem("rfunction", rfunction);
			window.location.reload(); //reloads the page//
	} else if (rnumber === 2) { //gives event//
		window.location.href = "./random-event-finder.html";
	}
}

document.getElementById("plus").addEventListener("click", function() {
	Age ++;
	localStorage.setItem("Age", Age);
	for (let i = 0; i < PersonAges.length; i++) { PersonAges[i]++; } //ages up all of your relationships//
	localStorage.setItem("PersonAges", JSON.stringify(PersonAges));
	
	graduation();
	salary();
	spiral();
	deathChance();
	getEvent();
	
});