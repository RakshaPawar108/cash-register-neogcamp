// Objects
const billAmount = document.getElementById("bill-amount");
const checkBtn = document.getElementById("check-btn");
const cashGiven = document.getElementById("cash-given");
const errorMessage = document.getElementById("error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const denominations = [2000, 500, 100, 20, 10, 5, 1];

// Event Handlers
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

function hideMessage() {
  errorMessage.style.display = "none";
}
function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

// Event Listeners
checkBtn.addEventListener("click", validateBillAndCashAmount);
