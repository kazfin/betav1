//Author(s): Ethan Scott//

const lotteryLowRisk = document.getElementById('lotteryLowRisk');
const lotteryMediumRisk = document.getElementById('lotteryMediumRisk');
const lotteryHighRisk = document.getElementById('lotteryHighRisk');

function getRandomIntInclusive(min, max) { //function for the random number//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (Age < 18) {
	revent = "lotteryTooYoung";
	localStorage.setItem("revent", revent);
	window.location.href = "./event.html";
}

//low risk//

lotteryLowRisk.addEventListener('click', () => { //listens for when the button is clicked//
	rnumber = getRandomIntInclusive(1, 10); //gets a random number between x and y//
	rfunction = "lotteryLowRisk"; //sets random function so the game knows what the number is to be used for//
console.log("low risk lottery");

if (rnumber === 5 && rfunction === "lotteryLowRisk" && Money >= 50) { //if random number is halfway between the peramaters, i.e. a win, and money is over 50, you get the prize//
	console.log("you won the lottery! rnumber === "+rnumber);
	Money += 400 ; //adds the prize money to the player's balance (does not deduct the lottery cost)//
	console.log("$400 added to balance");
	rfunction = ""; //sets random function back to empty//
	rnumber = 0; //sets random number back to zero//
	console.log("lottery draw reset");
	revent = "lotteryLowRiskWon"; //sets the event to lotteryLowRiskWon; this is what the event page uses to display its information//
	Logs = "I played the lottery and I won $400!"; //sets the text for the logs that will be displayed on the home page.//
		if (!Achievements.includes(1)) {
			Achievements.push(1);
			Stars += 2;
			console.log("achievement unlocked: 1");
			localStorage.setItem("Stars", Stars);
			localStorage.setItem("Achievements", JSON.stringify(Achievements)); //updates achievements//
		}
		localStorage.setItem("revent", revent); //updates the revent string globally so that events can use it//
		localStorage.setItem("Logs", Logs); //updates the logs text to display on the home page//
		localStorage.setItem("Money", Money);//updates money//
		localStorage.setItem("Joy", Joy); //updates joy//
		window.location.href = "./event.html"; //redirects the player to the event page//
}  else if (rnumber != 5 && rfunction === "lotteryLowRisk" && Money >= 50) {
	console.log("you did not win the lottery. rnumber === "+rnumber);
	Money -= 50; //deducts cost of the lottery from the player's balance; since they didn't win, they don't get the prize//
	console.log("$50 deducted from balance");
	rfunction = "";
	rnumber = 0;
	console.log("lottery draw reset");
	revent = "lotteryLowRiskLost";
	Logs = "I played the lottery, but I just ended up losing $50.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
} else if (rfunction === "lotteryLowRisk" && Money < 50) {
	console.log("not enough money. costs $50")
	rfunction = "";
	rnumber = 0;
	revent = "lotteryLowRiskFlatBroke";
	Logs = "I realised I need to get a job.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
}});

//medium risk//

lotteryMediumRisk.addEventListener('click', () => {
	rnumber = getRandomIntInclusive(1, 100);
	rfunction = "lotteryMediumRisk";
console.log("medium risk lottery");

if (rnumber === 50 && rfunction === "lotteryMediumRisk" && Money >= 50) {
	console.log("you won the lottery! rnumber === "+rnumber);
	Money += 10000;
	console.log("$10,000 added to balance");
	rfunction = "";
	rnumber = 0;
	console.log("lottery draw reset");
	revent = "lotteryMediumRiskWon";
	Logs = "I played the lottery and I won $10,000!";
		if (!Achievements.includes(1)) {
			Achievements.push(1);
			Stars += 2;
			console.log("achievement unlocked: 1");
			localStorage.setItem("Stars", Stars);
			localStorage.setItem("Achievements", JSON.stringify(Achievements));
		}
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
} else if (rnumber != 50 && rfunction === "lotteryMediumRisk" && Money >= 50) {
	console.log("you did not win the lottery. rnumber === "+rnumber);
	Money -= 50;
	console.log("$50 deducted from balance");
	rfunction = "";
	rnumber = 0;
	console.log("lottery draw reset");
	revent = "lotteryMediumRiskLost";
	Logs = "I played the lottery, but I just ended up losing $50.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
} else if (rfunction === "lotteryMediumRisk" && Money < 50) {
	console.log("not enough money. costs $50")
	rfunction = "";
	rnumber = 0;
	revent = "lotteryMediumRiskFlatBroke";
	Logs = "I realised I need to get a job.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
}});

//high risk//

lotteryHighRisk.addEventListener('click', () => {
	rnumber = getRandomIntInclusive(1, 20000);
	rfunction = "lotteryHighRisk";
console.log("high risk lottery");

if (rnumber === 10000 && rfunction === "lotteryHighRisk" && Money >= 50) {
	console.log("you won the lottery! rnumber === "+rnumber);
	Money += 5000000;
	console.log("$5,000,000 jackpot added to balance");
	rfunction = "";
	rnumber = 0;
	console.log("lottery draw reset");
	revent = "lotteryHighRiskWon";
	Logs = "I played the lottery and I won $5,000,000!";
		if (!Achievements.includes(1)) {
			Achievements.push(1);
			Stars += 2;
			console.log("achievement unlocked: 1");
			localStorage.setItem("Stars", Stars);
			localStorage.setItem("Achievements", JSON.stringify(Achievements));
		}
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
}  else if (rnumber != 10000 && rfunction === "lotteryHighRisk" && Money >= 50) {
	console.log("you did not win the lottery jackpot. rnumber === "+rnumber);
	Money -= 50;
	console.log("$50 deducted from balance");
	rfunction = "";
	rnumber = 0;
	console.log("lottery draw reset");
	revent = "lotteryHighRiskLost";
	Logs = "I played the lottery, but I just ended up losing $50.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
} else if (rfunction === "lotteryHighRisk" && Money < 50) {
	console.log("not enough money. costs $50")
	rfunction = "";
	rnumber = 0;
	revent = "lotteryHighRiskFlatBroke";
	Logs = "I realised I need to get a job.";
		localStorage.setItem("revent", revent);
		localStorage.setItem("Logs", Logs);
		localStorage.setItem("Money", Money);
		localStorage.setItem("Joy", Joy);
		window.location.href = "./event.html";
}});