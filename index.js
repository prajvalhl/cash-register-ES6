const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkBtn = document.querySelector("#validateBillAmt");

const errorMsg = document.querySelector("#error-message");

const notesToReturn = document.querySelectorAll(".notes-to-return");

const cgBlock = document.querySelector("#cg-block");
const returnBlock = document.querySelectorAll(".return-block");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

cgBlock.style.display = "none";
hideTable();

checkBtn.addEventListener("click", (e) => {
  if (Number(billAmt.value) > 0) {
    cgBlock.style.display = "block";
    if (Number(cashGiven.value) >= Number(billAmt.value)) {
      hideMsg();
      clearNoOfNotes();
      const amountToReturn = cashGiven.value - billAmt.value;
      calculateChange(amountToReturn);
    } else {
      showMsg("Cash given should be greater than or equal to bill amount");
      hideTable();
    }
  } else {
    showMsg("Invalid Bill Amount");
    hideTable();
  }
});

function showMsg(message) {
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
}
function hideMsg() {
  errorMsg.style.display = "none";
}

function showTable() {
  for (let i = 0; i < returnBlock.length; i++) {
    returnBlock[i].style.display = "block";
  }
}

function hideTable() {
  for (let i = 0; i < returnBlock.length; i++) {
    returnBlock[i].style.display = "none";
  }
}

function calculateChange(amountToBeReturned) {
  if (amountToBeReturned === 0) {
    showMsg("No cash needs to be returned");
  } else {
    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      amountToBeReturned %= availableNotes[i];
      notesToReturn[i].innerText = numberOfNotes;
    }
    showTable();
  }
}

function clearNoOfNotes() {
  for (let notes of notesToReturn) {
    notes.innerText = "";
  }
}
