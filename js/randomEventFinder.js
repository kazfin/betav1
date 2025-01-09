//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function for the random age event//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (Age <= 1) {
		window.location.href = "./home.html"; //reloads the page//
	}
	if (Age >= 2 && Age <= 6) { //toddlerhood//
		revent = "toddlerhood";
		localStorage.setItem("revent", revent);
			rnumber = getRandomIntInclusive(1, 3); //gets a random number between x and y//
			localStorage.setItem("rnumber", rnumber);
			if (rnumber === 1) {
				window.location.href = "./event-3.html";
			} else if (rnumber === 2) {
				window.location.href = "./event-3.html";
			} else if (rnumber === 3) {
				window.location.href = "./event-3.html";
			}
	} else if (Age >= 7 && Age <= 12) { //childhood//
		revent = "childhood";
		localStorage.setItem("revent", revent);
			rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
				localStorage.setItem("rnumber", rnumber);
				if (rnumber === 1) {
					window.location.href = "./event-3.html";
				}
	} else if (Age >= 13 && Age <= 17) { //teenagehood//
		revent = "teenagehood";
		localStorage.setItem("revent", revent);
		rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
		localStorage.setItem("rnumber", rnumber);
				if (rnumber === 1) {
					window.location.href = "./event-3.html";
				}
	} else if (Age >= 18 && Age <= 60) { //adulthood//
		revent = "adulthood";
		localStorage.setItem("revent", revent);
		rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
		localStorage.setItem("rnumber", rnumber);
				if (rnumber === 1) {
					window.location.href = "./event-3.html";
				}
	} else if (Age >= 61) { //elderlyhood//
		revent = "elderlyhood";
		localStorage.setItem("revent", revent);
		rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
		localStorage.setItem("rnumber", rnumber);
				if (rnumber === 1) {
					window.location.href = "./event-3.html";
				}
	}
;