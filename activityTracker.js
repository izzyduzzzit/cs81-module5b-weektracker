// Izarra Villareal CS 81 JavaScript Module 5 Assignment 5B: My Week in Data

// This is a sample dataset representing a week of activities with various attributes for analysis
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

// This function calculates total hours spent on exercise activities
function totalExerciseHours(week) {
  return week // Start with the full week array
    .filter(act => act.category === "Exercise") // Filter for exercise activities
    .reduce((sum, act) => sum + act.hoursSpent, 0); // Sum the hours spent on those activities
}

// This function calculates average enjoyment by time of day
function averageEnjoymentByTimeOfDay(week) {
  let grouped = {}; // Object to hold enjoyment scores grouped by time of day
  week.forEach(act => { // Iterate over each activity
    if (!grouped[act.timeOfDay]) { // If this time of day hasn't been seen yet
      grouped[act.timeOfDay] = []; // Initialize an array for it
    }
    grouped[act.timeOfDay].push(act.enjoyment); // Add the enjoyment score to the appropriate array
  });

  let result = {}; // Object to hold the final average enjoyment scores
  for (let time in grouped) { // For each time of day
    let scores = grouped[time]; // Get the array of enjoyment scores
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length; // Calculate the average
    result[time] = average.toFixed(2); // Store the average, rounded to 2 decimal places
  }

  return result; // Return the final averages by time of day
}

// These are test cases to validate the analysis functions above
console.log("Average enjoyment by time of day:", averageEnjoymentByTimeOfDay(myWeek)); // Example output: { Morning: 8.67, Evening: 7.5, Afternoon: 8.5 }
console.log("Total hours spent on exercise:", totalExerciseHours(myWeek)); // Example output: 6.5

// This is a custom higher-order function to filter activities based on a condition
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

// This is an example usage of the previous custom higher-order function to find short but highly enjoyable activities
let shortAndFun = filterByCondition(
  act => act.hoursSpent < 1.5 && act.enjoyment > 7 // Activities that are less than 1.5 hours and have enjoyment greater than 7
);

// This logs the results of the custom higher-order function to the console
console.log("Short but highly enjoyable activities:", shortAndFun); // Example output: [ { day: 'Monday', activity: 'Running', ... }, { day: 'Friday', activity: 'Yoga', ... } ]
