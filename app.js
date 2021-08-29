// Objects
const billAmount = document.getElementById("bill-amount");
const checkBtn = document.getElementById("check-btn");
const cashGiven = document.getElementById("cash-given");
const errorMessage = document.getElementById("error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const labelOne = document.getElementById("label1");
const showBtn = document.getElementById("show-btn");

const denominations = [2000, 500, 100, 20, 10, 5, 1];

// Event Handlers

function validateAmt() {
  if (billAmount.value > 0) {
    showInput();
  } else {
    showMessage("Please enter the bill amount first.");
  }
}

function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountReturned = cashGiven.value - billAmount.value;
      calculateChange(amountReturned);
    } else {
      showMessage("The cash provided should atleast be equal to bill amount.");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
}

// Functions
function calculateChange(amountReturned) {
  for (let i = 0; i < denominations.length; i++) {
    const numNotes = Math.trunc(amountReturned / denominations[i]);
    amountReturned %= denominations[i];
    noOfNotes[i].innerText = numNotes;
  }
}

function hideInput() {
  checkBtn.style.display = "none";
  cashGiven.style.display = "none";
  labelOne.style.display = "none";
}

function showInput() {
  checkBtn.style.display = "block";
  cashGiven.style.display = "block";
  labelOne.style.display = "block";
  showBtn.style.display = "none";
}

function hideMessage() {
  errorMessage.style.display = "none";
}
function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

hideInput();

// Event Listeners
checkBtn.addEventListener("click", validateBillAndCashAmount);
showBtn.addEventListener("click", validateAmt);
