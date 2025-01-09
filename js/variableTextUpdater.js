//Author(s): Ethan Scott//

//displays variables on the page//
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("ageText").innerHTML = "Age: " + Age;
	document.getElementById("joyText").innerHTML = "Joy: " + Joy;
	document.getElementById("healthText").innerHTML = "Health: " + Health;
	document.getElementById("intellectText").innerHTML = "Intellect: " + Intellect;
	document.getElementById("looksText").innerHTML = "Looks: " + Looks;
	document.getElementById("logsText").innerHTML = Logs;
	console.log("set variable texts.")
});
