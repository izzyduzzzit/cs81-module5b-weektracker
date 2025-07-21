// Izarra Villareal CS 81 JavaScript Module 5 Assignment 5B: My Week in Data

let myWeek = [
    { day: "Monday", activity: "Running", category: "Exercise", hoursSpent: 1, enjoyment: 8, timeOfDay: "Morning" },
    { day: "Tuesday", activity: "Reading", category: "Leisure", hoursSpent: 2, enjoyment: 9, timeOfDay: "Evening" },
    { day: "Wednesday", activity: "Cycling", category: "Exercise", hoursSpent: 1.5, enjoyment: 7, timeOfDay: "Afternoon" },
    { day: "Thursday", activity: "Cooking", category: "Chores", hoursSpent: 1, enjoyment: 6, timeOfDay: "Evening" },
    { day: "Friday", activity: "Yoga", category: "Exercise", hoursSpent: 1, enjoyment: 8, timeOfDay: "Morning" },
    { day: "Saturday", activity: "Hiking", category: "Exercise", hoursSpent: 3, enjoyment: 10, timeOfDay: "Morning" },
    { day: "Sunday", activity: "Gaming", category: "Leisure", hoursSpent: 2, enjoyment: 7, timeOfDay: "Afternoon" }
];

/* Predictions:

Which activity will have the highest enjoyment?
I believe Hiking will have the highest enjoyment because it has an enjoyment rating of 10.

What category will dominate your week?
I believe Exercise will dominate my week because I have 4 activities in that category.

What patterns might exist around time of day?
I think various physical activities will be in the morning, while leisure activities will be in the afternoon or evening.

*/

function totalExerciseHours(week) {
  return week
    .filter(act => act.category === "Exercise")
    .reduce((sum, act) => sum + act.hoursSpent, 0);
}

function averageEnjoymentByTimeOfDay(week) {
  let grouped = {};
  week.forEach(act => {
    if (!grouped[act.timeOfDay]) {
      grouped[act.timeOfDay] = [];
    }
    grouped[act.timeOfDay].push(act.enjoyment);
  });

  let result = {};
  for (let time in grouped) {
    let scores = grouped[time];
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    result[time] = average.toFixed(2);
  }

  return result;
}

console.log("Average enjoyment by time of day:", averageEnjoymentByTimeOfDay(myWeek));
console.log("Total hours spent on exercise:", totalExerciseHours(myWeek));