let hasTicket = true;
let age2 = 15;
let isVIP = false;
let isChaperoned = true;

if (isVIP) {
  console.log("You may enter.");
} else {
  if (age2 >= 18 && hasTicket) {
    console.log("You may enter.");
  } else {
    if (age2 < 18 && hasTicket && isChaperoned) {
      console.log("You may enter.");
    } else {
      console.log("You may not enter.");
    }
  }
}
