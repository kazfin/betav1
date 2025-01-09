//Author(s): Ethan Scott//

function saveToLocalStorage() {
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Logs", Logs);
	localStorage.setItem("Joy", Joy);
	localStorage.setItem("Money", Money);
	localStorage.setItem("revent", revent);
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	console.log("saved variables to local storage");
}

function eventTitle3(eventTitle3) {
	document.getElementById("eventTitle3").innerHTML = eventTitle3;
}
function eventText3(eventText3) {
	document.getElementById("eventText3").innerHTML = eventText3;
}
function eventOutcome3(eventOutcome3) {
	document.getElementById("eventOutcome3").innerHTML = eventOutcome3;
}
function button13(button13) {
	document.getElementById("button1-3").innerHTML = button13;
}
function button23(button23) {
	document.getElementById("button2-3").innerHTML = button23;
}
function button33(button33) {
	document.getElementById("button3-3").innerHTML = button33;
}
function eventCreditText3(eventCreditText3) {
	document.getElementById("eventCreditText3").innerHTML = eventCreditText3;
}

if (revent === "toddlerhood") { //toddlerhood - random events that occur when you age up//
	if (rnumber === 1) {
		eventTitle3("Park");
		eventText3("While out with your family at the park, you notice that there is an ice cream shop situated across the road.");
		eventOutcome3("What do you do?");
		button13("Ask nicely if you can get one");
		button23("Cry until you get one");
		button33("Bite your tongue and don't say anything");
		eventCreditText3("Ethan Scott");
	} else if (rnumber === 2) {
		eventTitle3("Soft Start");
		eventText3("It's your birthday party, and it's time to open presents! But the first present you open from your weird uncle, Reggie, was just a bunch of pillows and other bedding.");
		eventOutcome3("What do you do?");
		button13("Thank them anyways");
		button23("Thank them enthusiastically");
		button33("Pitch a fit and cry");
		eventCreditText3("Goblin");
	} else if (rnumber === 3) {
		eventTitle3("The Stolen Teddy");
		eventText3("At daycare, another toddler takes away your favorite teddy bear from you and they refuse to give it back.");
		eventOutcome3("What do you do?");
		button13("Cry loudly until a teacher intervenes");
		button23("Find another toy to play with");
		button33("Snatch the teddy back yourself");
		eventCreditText3("Orsted1");
	}
	document.getElementById("button1-3").addEventListener("click", function() {
		revent = "toddlerhood-O1";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button2-3").addEventListener("click", function() {
		revent = "toddlerhood-O2";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button3-3").addEventListener("click", function() {
		revent = "toddlerhood-O3";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
};

if (revent === "childhood") { //childhood//
	if (rnumber === 1) {
		eventTitle3("Spelling Bee");
		eventText3("You are selected to participate in your school’s spelling bee competition.");
		eventOutcome3("What do you do?");
		button13("Study hard and prepare for the competition");
		button23("Wing it and hope for the best");
		button33("Skip the competition entirely");
		eventCreditText3("Orsted1");
	}
	document.getElementById("button1-3").addEventListener("click", function() {
		revent = "childhood-O1";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button2-3").addEventListener("click", function() {
		revent = "childhood-O2";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button3-3").addEventListener("click", function() {
		revent = "childhood-O3";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
};

if (revent === "teenagehood") { //teenagehood//
	if (rnumber === 1) {
		eventTitle3("High School Romance");
		eventText3("A classmate confesses their feelings for you after school.");
		eventOutcome3("What do you do?");
		button13("Start going out with them");
		button23("Politely reject them");
		button33("Make fun of them in front of others");
		eventCreditText3("Orsted1");
	}
	document.getElementById("button1-3").addEventListener("click", function() {
		revent = "teenagehood-O1";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button2-3").addEventListener("click", function() {
		revent = "teenagehood-O2";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
	document.getElementById("button3-3").addEventListener("click", function() {
		revent = "teenagehood-O3";
		saveToLocalStorage()
		window.location.href = "./event.html";
		})
};

saveToLocalStorage();