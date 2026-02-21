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
    // history
    const trnasContainer = document.getElementById("transection-container");

    const newCard = document.createElement("button");
             newCard.className = "btn btn-outline btn-info w-full flex justify-between py-5 text-[13px] font-normal rounded-xl bg-white shadow-sm";
             newCard.innerHTML = `
            
                <div class="flex gap-2 w-full">
                    <div class="items-center flex justify-center">
                        <img src="./assets/opt-3.png" alt="">
                    </div>
                    <div class="text-left">
                        <p class="font-semibold text-base">Pay Bill</p>
                        <p>Today ${time}</p>

                    </div>
                </div>
                <div>
                    <a href=""><i class="fa-solid fa-bars"></i></a>
                </div>`;
             trnasContainer.appendChild(newCard);
        }
   else {
    alert("Your Pin is incorrect");
    return;
  }
});
