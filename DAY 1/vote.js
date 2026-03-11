let age = 25;
let isregistered = true;
if (age >= 18 && isregistered) {
  console.log("You may vote");
} else if (age >= 18 && !isregistered) {
  console.log("You are old enough but not registered.");
} else {
  console.log("You are not old enough to vote.");
}
