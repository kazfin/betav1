//Author(s): Ethan Scott//

document.getElementById("crunchText").addEventListener("click", function() {
	if (Intellect >= 60 && Joy >= 50) {
		revent = "job-crunch-perform";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Intellect < 60 || Joy < 50) {
		revent = "job-crunch-less";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("unpaidOvertimeText").addEventListener("click", function() {
	if (Joy >= 60) {
		revent = "job-unpaid-overtime-perform";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Joy < 60) {
		revent = "job-unpaid-overtime-less";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("paidOvertimeText").addEventListener("click", function() {
	if (Joy >= 70) {
		revent = "job-paid-overtime-perform";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Joy < 70) {
		revent = "job-paid-overtime-less";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("paidTimeOffText").addEventListener("click", function() {
	if (JobPerformance >= 70) {
		revent = "job-pto-perform";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (JobPerformance < 70) {
		revent = "job-pto-less";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("raiseText").addEventListener("click", function() {
	if (JobPerformance >= 80) {
		revent = "job-raise-perform";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (JobPerformance < 80) {
		revent = "job-raise-less";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});

document.getElementById("quitText").addEventListener("click", function() {
	revent = "job-quit-confirm";
	localStorage.setItem("revent", revent);
	window.location.href = "./event-2.html";
});