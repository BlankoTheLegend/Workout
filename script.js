// script.js

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(error => console.error('Service Worker registration failed:', error));
}

// Workout logic
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const workouts = {
  "Monday": `4 sets of incline chest press
3 sets of cable crunches with an oblique twist
4 sets of curls
whatever you want`,
  "Tuesday": `4 sets of dips
3 sets of cable crunches with an oblique twist
4 sets of lat pull down
4 sets of lateral raises
4 sets of tricep whatever`,
  "Wednesday": `4 sets of incline chest press
3 sets of cable crunches with an oblique twist
4 sets of curls
whatever you want`,
  "Thursday": `3 sets of pectoral fly + (how much you want) flat smith bench
3 sets of cable crunches with an oblique twist
4 sets of lat pull down
4 sets of lateral raises
4 sets of tricep whatever`,
  "Friday": `5 sets of incline smith bench
3 sets of cable crunches with an oblique twist
4 sets of curls
whatever you want`,
  "Saturday": `0–4 sets of dumbbell bench press
dragon flags
lateral raises`,
  "Sunday": `whatever does not hurt`
};

const today = new Date();
const dayOfWeek = dayNames[today.getDay()];
const workout = workouts[dayOfWeek];

// Display in HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("day").textContent = `Today is: ${dayOfWeek}`;
  document.getElementById("workout").textContent = `Today's workout:\n${workout}`;
});
