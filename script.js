const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculateBtn = document.getElementById("calculate");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");

calculateBtn.addEventListener("click", () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
        alert("Please enter valid values.");
        return;
    }
    const tipAmount = (bill * tipPercent) / 100;
    const totalAmount = bill + tipAmount;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
});