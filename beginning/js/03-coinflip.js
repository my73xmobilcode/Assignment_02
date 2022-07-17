let coinFlip;
let randomNum = Math.round(Math.random());
let choice, choiceEntry

coinFlip = randomNum;
console.log(randomNum);

choiceEntry = prompt("select Heads or Tails ");
choice = choiceEntry.toLowerCase()
console.log(choice);

if (choice === "heads" || choice === "tails") {
  if (coinFlip < 1) {
    // it's  Heads
    if (choice == "heads") {
      alert("The flip was heads and you chose heads...you win!");
    } else {
      alert("The flip was heads but you chose tails...you lose!");
    }
  } else {
    // it's Tails
    if (choice == "heads") {
      alert("The flip was tails but you chose heads...you lose!");
    } else {
      alert("The flip was tails but you chose tails...you win!");
    }
  }
} else {
    alert('Data entry is invalid must select Heads or Tails')
}
