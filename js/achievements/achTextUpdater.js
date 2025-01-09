//Author(s): Ethan Scott//

if (Achievements.includes(0)) {
	document.getElementById("0-details").innerHTML = "Achieved | Difficulty: Medium | Reward: 4 Stars ✓";
	document.getElementById("0-details").style.color = "green";
}

if (Achievements.includes(1)) {
	document.getElementById("1-details").innerHTML = "Achieved | Difficulty: Easy | Reward: 2 Stars ✓";
	document.getElementById("1-details").style.color = "green";
}

if (Achievements.includes(2)) {
	document.getElementById("2-details").innerHTML = "Achieved | Difficulty: Effortless | Reward: 1 Star ✓";
	document.getElementById("2-details").style.color = "green";
}

if (Achievements.includes(3)) {
	document.getElementById("3-details").innerHTML = "Achieved | Difficulty: Hard | Reward: 7 Stars ✓";
	document.getElementById("3-details").style.color = "green";
}

if (Achievements.includes(4)) {
	document.getElementById("4-details").innerHTML = "Achieved | Difficulty: Easy | Reward: 2 Stars ✓";
	document.getElementById("4-details").style.color = "green";
}

if (Achievements.includes(7)) {
	document.getElementById("7-details").innerHTML = "Achieved | Difficulty: Hard | Reward: 7 Stars ✓";
	document.getElementById("7-details").style.color = "green";
}

if (Achievements.includes(9)) {
	document.getElementById("9-details").innerHTML = "Achieved | Difficulty: Effortless | Reward: 1 Star ✓";
	document.getElementById("9-details").style.color = "green";
}

if (Achievements.includes(10)) {
	document.getElementById("10-details").innerHTML = "Achieved | Difficulty: Medium | Reward: 4 Stars, $1,000 ✓";
	document.getElementById("10-details").style.color = "green";
}

if (Achievements.includes(11)) {
	document.getElementById("11-details").innerHTML = "Achieved | Difficulty: Medium | Reward: 4 Stars ✓";
	document.getElementById("11-details").style.color = "green";
}

if (Achievements.includes(15)) {
	document.getElementById("15-details").innerHTML = "Achieved | Difficulty: Diabolical | Reward: 18 Stars, ✓";
	document.getElementById("15-details").style.color = "green";
}

AchRead = [...Achievements];
localStorage.setItem("AchRead", JSON.stringify(AchRead));

document.getElementById("stars").innerHTML = Stars+" Stars";
document.getElementById("achsAchieved").innerHTML = Achievements.length+" / 28";
document.getElementById("moneyText").innerHTML = "Money: $" + Money;