// Declare variables using const, let, and var
const internName = "Favour Ibezim"; 
let taskOneScore =10;
let taskTwoScore = 8;
var taskThreeScore = 6;

// Calculate total score and average
let totalScore = taskOneScore + taskTwoScore + taskThreeScore;
let averageScore = totalScore / 3;

// Determine the Grade using if-else
let grade;

if (averageScore >= 9) {
  grade = "A";
} else if (averageScore >= 8) {
  grade = "B";
} else if (averageScore >= 7) {
  grade = "C";
} else if (averageScore >= 6) {
  grade = "D";
} else {
  grade = "E";
}

// Display output using template literals
console.log(`Intern Name: ${internName}`);
console.log(`Task One Score: ${taskOneScore}`);
console.log(`Task Two Score: ${taskTwoScore}`);
console.log(`Task Three Score: ${taskThreeScore}`);
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Final Grade: ${grade}`);

// Use a switch statement to display a custom feedback message
switch (grade) {
  case "A":
    console.log("Excellent performance!");
    break;
  case "B":
    console.log("Great job! Keep aiming high.");
    break;
  case "C":
    console.log("Good effort. Try to improve.");
    break;
  case "D":
    console.log("You're close. Keep working at it.");
    break;
  case "E":
    console.log("Don't give up. You can do better next time.");
    break;
  default:
    console.log("Invalid grade");
}
