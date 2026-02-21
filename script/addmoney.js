document.getElementById("addmoney-btn")
.addEventListener("click", function () {
    const bankName = getValueOfInput("addmoney-bankoption");
        // console.log(bankName);
        if(bankName === "Select Back"){
            alert("Please Select a Bank");
            return;
        }
    
    const accNumber = getValueOfInput("addmoney-account-number");
        if(accNumber.length !== 12){
            alert("Invalid Acount Number")
            return;
        }
    
    const balanceElement = getBalance();
    const addAmount = getValueOfInput("addmoney-amount");
        const newBalance = balanceElement + Number(addAmount);
            if(addAmount === ""){
                alert("Enter Your Amount")
                return;
            }

    const pinNumber = getValueOfInput("addmoney-pin");
        if(pinNumber === "1234"){
            alert(`BDT ${addAmount} Taka Add money successful from ${bankName} Bank at ${new Date()}`);
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
                        <p class="font-semibold text-base">Add Money</p>
                        <p>Today ${time}</p>

                    </div>
                </div>
                <div>
                    <a href=""><i class="fa-solid fa-bars"></i></a>
                </div>`;
             trnasContainer.appendChild(newCard);
        }

        else if (pinNumber === "") {
          alert("Enter Your Pin Number");
          return;

        } else {
          alert("Invalid Pin Number");
          return;
        }
}); 
