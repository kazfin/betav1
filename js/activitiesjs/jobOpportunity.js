//Author(s): Ethan Scott//

//interior designer//

if (Job === "int-designer-select") {
document.getElementById("jobIcon").src = "assets/armchair.svg";
document.getElementById("jobOpportunityName").innerHTML = "Interior Designer";
document.getElementById("jobQualificationAge").innerHTML = "Age: Appr - 18 | Stnd - 18 | Sr - 24";
document.getElementById("jobQualificationEducation").innerHTML = "Education: Appr - High School | Stnd - Masters in Interior Design | Sr - Masters in Interior Design";
document.getElementById("jobQualificationJobExp").innerHTML = "Work experience: Appr - None | Stnd - None | Sr - Stnd Interior Designer";
document.getElementById("jobQualificationPay").innerHTML = "Pay: Appr - $45,000 /yr | Stnd - $60,000 /yr | Sr - $90,000 /yr";
Logs = "I looked into local jobs at my local locality.";
console.log("successfully updated job qualifications")
};

document.getElementById("career-branch-1").addEventListener("click", function() { //if the player clicks on the first button (career-branch-1)//
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("highSchool")) { //and they meet the qualifications//
		revent = "job-appr-int-designer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("highSchool"))) { //but if they don't meet the qualifications//
		revent = "job-appr-int-designer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("career-branch-2").addEventListener("click", function() {
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("highSchool")) {
		revent = "job-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("highSchool"))) {
		revent = "job-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("career-branch-3").addEventListener("click", function() {
	if (Job === "int-designer-select" && hasJob === false && Degree.includes("int-design") && workExperience.includes("int-designer")) {
		revent = "job-sr-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (hasJob === false || !Degree.includes("highSchool"))) {
		revent = "job-sr-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});