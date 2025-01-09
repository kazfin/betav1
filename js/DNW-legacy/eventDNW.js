//Author(s): Ethan Scott//

if (revent === "lotteryLowRiskWon")  { //lottery low risk won//
	const button = document.getElementById('button1');
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You won! $400 has been deposited into your account.";
	Joy + 10;
	document.getElementById("eventOutcome").innerHTML = "Joy + 10";
	console.log("event display completed");
	
		button1.addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryLowRiskLost")  { //lottery low risk lost//
	const button = document.getElementById('button1');
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	
		button1.addEventListener('click', () => { //lottery low risk flat broke (i.e. can't afford)//
		window.location.href = "./home.html";
})} else if (revent === "lotteryLowRiskFlatBroke") {
	const button = document.getElementById('button1');
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	
		button1.addEventListener('click', () => {
		window.location.href = "./home.html";
})}

localStorage.setItem("Joy", Joy);
localStorage.setItem("revent", "");