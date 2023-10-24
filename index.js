// TODO: this file! :)

//Add Input Handling
const numberBank = []; //initialze empty array, which will be used to store numbers entered by user.
const addButton = document.querySelector("button"); //selects the first button on the page, and will be used to add numbers to the number bank
const input = document.querySelector("input"); //selects the first input element and is used as a field where users can enter numbers
const bankOutput = document.querySelector("#numberBank output"); //selects element with an id of numberBank, and the tag output, and this is where the numbers will be displayed

//Sorts
const sortOneButton = document.querySelector("#sortOne"); //represents the element with the id sortOne and is used to sort a number to either odd or evens list
const sortAllButton = document.querySelector("#sortAll"); // represents element with an id of sortAll and is used to sort all numbers in the correct list.
const oddsOutput = document.querySelector("#odds output"); //represents element with odds and displays respectively
const evensOutput = document.querySelector("#evens output"); //represents element with evens and displays respectively

addButton.addEventListener("click", (event) => {
  event.preventDefault(); //Prevents the form from submitting look at oddsandevents.txt for more explanation
  const number = parseInt(input.value);
  if (!isNaN(number)) {
    numberBank.push(number);
    bankOutput.textContent = numberBank.join(", ");
    input.value = "";
  }
});

//Sorting

//sort one

sortOneButton.addEventListener("click", () => {
  if (numberBank.length > 0) {
    const number = numberBank[0];
    if (number % 2 === 0) {
      evensOutput.textContent += number + ", ";
    } else {
      oddsOutput.textContent += number + ", ";
    }
    numberBank.shift();
    bankOutput.textContent = numberBank.join(", ");
  }
});

//sort all

sortAllButton.addEventListener("click", () => {
  numberBank.sort((a, b) => a - b);
  oddsOutput.textContent = "";
  evensOutput.textContent = "";

  for (const number of numberBank) {
    if (number % 2 === 0) {
      evensOutput.textContent += number + ", ";
    } else {
      oddsOutput.textContent += number + ", ";
    }
  }
  numberBank.length = 0;
  bankOutput.textContent = "";
});
