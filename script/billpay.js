document.getElementById("billpay-btn").addEventListener("click", function () {
  const billOption = getValueOfInput("bill-payoption");
  if (billOption === "Select Back") {
    alert("Please select a Bill type");
    return;
  }

  const payAccNumber = getValueOfInput("billpay-account-number");
  if (payAccNumber.length != 12 || payAccNumber === "") {
    alert("Invalid Account Number");
    return;
  }

  const payAmount = getValueOfInput("pay-amount");
  const currentBalance = getBalance();
  const payPin = getValueOfInput("billpay-pin");

  const newBalance = currentBalance - Number(payAmount);
  if (newBalance < 0) {
    alert("Invalid Amout");
    return;
  } else if (payPin === "1234") {
    alert("Bill Paid Successful");

    setBalance(newBalance);
  } else {
    alert("Your Pin is incorrect");
  }
});
