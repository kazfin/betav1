//Author(s): Ethan Scott//

function jobTitle(body) {
	document.getElementById("jobTitle").innerHTML = body;
}
function salaryText() {
	let disposableIncome = 0;
	if (Intellect <= 20) {
		disposableIncome = (Salary / 100) * 20;
	} else if (Intellect > 20 && Intellect < 80) {
		disposableIncome = (Salary / 100) * 30;
	} else if (Intellect >= 80) {
		disposableIncome = (Salary / 100) * 40;
	}
	document.getElementById("salaryText").innerHTML = "You salary is $"+Salary+"/yr. <i>Actual disposable income ($"+disposableIncome+") may be less.</i>";
}

function performance() {
	document.getElementById("performanceText").innerHTML = "Performance: "+JobPerformance;
	if (JobPerformance <= 30) {
		performanceText.style.color = "#ff0000";
	} else if (JobPerformance >= 85) {
		performanceText.style.color = "#0be900";
	}
}

performance();
salaryText();

if (Job === "appr-int-designer") { //interior designer//
	jobTitle("Apprentice Interior Designer");
}