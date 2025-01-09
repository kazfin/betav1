//Author(s): Ethan Scott//

console.log("careerRedirect.js loaded");

if (hasJob === false) {
	console.log("hasJob is false");
	window.location.href = "./job-search-pg1.html"; //redirects the player to the job search page//
} else if (hasJob === true) {
	console.log("hasJob is true");
	window.location.href = "./job.html"; //redirects player to their job//
}