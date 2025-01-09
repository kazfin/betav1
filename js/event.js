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
	localStorage.setItem("JobPerformance", JobPerformance);
	console.log("saved variables to local storage");
}

function eventTitle(eventTitle) {
	document.getElementById("eventTitle").innerHTML = eventTitle;
}
function eventText(eventText) {
	document.getElementById("eventText").innerHTML = eventText;
}
function eventOutcome(eventOutcome) {
	document.getElementById("eventOutcome").innerHTML = eventOutcome;
}
function button1(button1) {
	document.getElementById("button1").innerHTML = button1;
}
function eventCreditText(eventCreditText) {
	document.getElementById("eventCreditText1").innerHTML = eventCreditText;
}

if (revent === "lotteryTooYoung") { //if player is too young to play the lottery//
	console.log("revent: " + revent);
	revent = "";
	Logs = "I just remembered I am a small child.";
	eventTitle("Whoops");
	eventText("You have to be over the age of 18 to play the lottery.");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "lotteryLowRiskWon") { //lottery low risk won//
	console.log("revent: " + revent);
	revent = "";
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You won! $400 has been deposited into your account.";
	Joy + 10;
	document.getElementById("eventOutcome").innerHTML = "Joy + 10";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})}	else if (revent === "lotteryLowRiskLost")  { //lottery low risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryLowRiskFlatBroke") { //lottery low risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskWon")  { //lottery medium risk won//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You won!! $10,000 has been deposited into your account.";
	Joy + 20;
	document.getElementById("eventOutcome").innerHTML = "Joy + 20";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskLost")  { //lottery medium risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskFlatBroke") { //lottery medium risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskWon")  { //lottery high risk won//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Oh my god! You won!!! $5,000,000 has been deposited into your account.";
	Joy + 70;
	document.getElementById("eventOutcome").innerHTML = "Joy + 70";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskLost")  { //lottery high risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskFlatBroke") { //lottery high risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})}

if (revent === "job-appr-int-designer-accepted") { //accepted as apprentice interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Apprentice Interior Designer!";
	Salary = 45000;
	JobPerformance = 25;
	hasJob = true;
	Job = "appr-int-designer";
	Logs = "I got the position of Apprentice Interior Designer! My salary is now $45,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $45,000 /yr";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-appr-int-designer-rejected") { //rejected as apprentice interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Apprentice Interior Designer. You are unqualified.";
	hasJob = false;
	Job = "";
	console.log(Joy);
	console.log(Joy);
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an apprentice interior designer. Instead, I became unemployed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-int-designer-accepted")  { //accepted as interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Interior Designer!";
	Salary = 60000;
	JobPerformance = 25;
	hasJob = true;
	Job = "int-designer";
	Logs = "I got the position of Interior Designer! My salary is now $60,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $60,000 /yr <br>";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-int-designer-rejected") { //rejected as interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Interior Designer. You are unqualified.";
	hasJob = false;
	Job = ""
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an interior designer. Instead, I became dissapointed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-int-designer-accepted")  { //accepted as senior interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Senior Interior Designer!";
	Salary = 90000;
	JobPerformance = 25;
	hasJob = true;
	Job = "sr-int-designer";
	Logs = "I got the position of Senior Interior Designer! My salary is now $90,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $90,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-int-designer-rejected") { //rejected as senior interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Senior Interior Designer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a senior interior designer. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "job-crunch-perform") { //did crunch time at job//
	revent = "";
	Joy -= 10;
	JobPerformance += 20;
	saveToLocalStorage();
	eventTitle("Crunch time");
	eventText("You did some extra crunch time at your job.");
	eventOutcome("Joy -10, Performance +20");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-crunch-less") { //too shit to do crunch time at job :(//
	revent = "";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do crunch time at your job.");
	eventOutcome("Your stats are too low. Intellect must be >= 60 and Joy must be >= 50.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-perform") {
	revent = "";
	Joy -= 7;
	JobPerformance += 10;
	saveToLocalStorage();
	eventTitle("Unpaid Overtime");
	eventText("You volunteered to do some unpaid overtime at your job.");
	eventOutcome("Joy -7, Performance +10");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-less") { //too shit to do crunch time at job :(//
	revent = "";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do overtime at your job.");
	eventOutcome("Your stats are too low. Joy must be over 60.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-paid-overtime-perform") {
	revent = "";
	Joy -= 12;
	JobPerformance += 5;
	Money += (Salary/20/2); //2.5% of Salary//
	saveToLocalStorage();
	eventTitle("Paid Overtime");
	eventText("You did some paid overtime at your job.");
	eventOutcome("Joy -12, Performance +5, Money +"+(Salary/20/2));
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-less") {
	revent = "";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do overtime at your job.");
	eventOutcome("Your stats are too low. Joy must be over 60.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-pto-perform") {
	revent = "";
	Joy += 5;
	JobPerformance -= 5;
	saveToLocalStorage();
	eventTitle("Paid Time Off");
	eventText("You took some paid time off from your job.");
	eventOutcome("Joy +5, Performance -5");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-pto-less") {
	revent = "";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do overtime at your job.");
	eventOutcome("Your stats are too low. Performance must be over 70.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-raise-perform") {
	revent = "";
	Joy += 5;
	JobPerformance -= 60;
	eventTitle("Raise");
	eventText("You got a raise! Your salary is now $"+Salary+"/yr (+$"+(Salary/10)+").");
	eventOutcome("Joy +5, Performance -60");
	button1("OK");
	Logs = "I got a raise! My salary is now $"+Salary+"/yr (+$"+(Salary/10)+").";
	Salary += (Salary/10);
	Salary = Math.round(Salary); //rounds Salary to the nearest integer (whole number)//
	saveToLocalStorage();
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-raise-less") {
	revent = "";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You boss rejected your request for a raise.");
	eventOutcome("Your stats are too low. Performance must be over 70.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-quit-perform") {
	revent = "";
	Salary = 0;
	JobPerformance = 0;
	hasJob = false;
	saveToLocalStorage();
	eventTitle("Job Quit");
	eventText("You have successfully quit your job.");
	eventOutcome("Salary = 0");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "toddlerhood-O1") { //if player is a toddler and picked option 1 (this was the best way to run this code I swear)//
	if (rnumber === 1) {
		eventTitle("Nooo");
		eventText("She says no. You go home depressed and don’t leave your room for 11 days.");
		eventOutcome("Joy -10");
		eventCreditText("Mildly Concerning");
		Joy -= 10;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I didn't leave my room for 11 days.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You thank them anyways.");
		eventOutcome("+8 Relationship with the gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday, but I thanked them regardless.";
			saveToLocalStorage();
		window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("The teacher returns your teddy, but the other toddler glares at you.");
		eventOutcome("Joy +5, Karma -2");
		eventCreditText("Orsted1");
		Joy += 5;
		Karma -= 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I successfuly retrieved my favourite teddy bear from a malicious peer of mine.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "toddlerhood-O2") {
	if (rnumber === 1) {
		eventTitle("I will always get my way");
		eventText("You cry, and eventually your mum gives in and buys you one.");
		eventOutcome("Joy + 5, Relationship with mother - 5, Karma - 10");
		eventCreditText("Mildly Concerning");
		Joy -= 5;
		Karma - 10;
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I always get what I want and no one is to stop me.";
			saveToLocalStorage();
		window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You thank them enthusiastically. They shit their pants.");
		eventOutcome("+8 Relationship with the gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday, but I thanked them so enthusiastically that they soiled themself.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("You make a new friend who also likes the toy.");
		eventOutcome("Joy +3, Karma +5");
		eventCreditText("Orsted1");
		Joy += 3;
		Karma += 5;
		Evality -= 3;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I made a new friend today.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "toddlerhood-O3") {
	if (rnumber === 1) {
		eventTitle("Tongue has been bitten");
		eventText("Your mother points to the shop and asks you if you want to get one. You end up having a great day out together.");
		eventOutcome("Joy + 10, Relationship with mother + 10");
		eventCreditText("Mildly Concerning");
		Joy += 10;
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I had a great day out with my mother.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You pitch a fit and cry. Your parents scold you.");
		eventOutcome("-8 Relationship with gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday and got so upset that I soiled myself.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("The toddler starts crying, and the teacher scolds you.");
		eventOutcome("Joy -5, Karma -5");
		eventCreditText("Orsted1");
		Joy -= 5;
		Karma -= 5;
		Evality += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I caused great despair to another toddler at my daycare today. I got scolded for it, but all I was trying to do is get my property back.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O1") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("You win!");
		eventOutcome("Intellect +10, Joy +5");
		eventCreditText("Orsted1");
		Intellect += 10;
		Joy += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I won my school's spelling bee. This is where my life will peak.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O2") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("You make it to the semifinals, but ultimately lose.");
		eventOutcome("Joy -2, Intellect +2");
		eventCreditText("Orsted1");
		Intellect += 2;
		Joy -= 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I lost my school's spelling bee. This is the lowest I've been in my entire life. I lost on the word ''sandwich''. How did I forget how to spell that. I thought there was a T in there somewhere.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O3") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("Your teacher is disappointed, but you feel relieved.");
		eventOutcome("Joy +2, Karma -5");
		eventCreditText("Orsted1");
		Karma -= 5;
		Joy += 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I didn't go to my school's spelling bee. In fact, I forgot they were even holding one.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O1") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("You start dating her and have a happy relationship.");
		eventOutcome("Joy +10, Looks +5, Popularity +5");
		eventCreditText("Orsted1");
		Joy += 10;
		Looks += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "One of my classmates asked me out today, and I said yes.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O2") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("They respect your honesty, but things are a bit awkward for a while.");
		eventOutcome("Karma +5, Popularity -2");
		eventCreditText("Orsted1");
		Karma += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I rejected a girl who asked me out at school today. Things have been a little bit tense between us ever since.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O3") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("They cry, and your reputation suffers.");
		eventOutcome("Karma -10, Popularity -20");
		eventCreditText("Orsted1");
		Karma -= 10;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I made fun of a girl for asking me out at school. Everyone gave me dirty looks for the rest of the day.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

saveToLocalStorage();