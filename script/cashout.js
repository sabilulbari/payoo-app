
document.getElementById("cashout-btn").addEventListener('click', function(){
    
    const agentNUmber = getValueOfInput("agent-num");
        
        if(agentNUmber.length != 11){
            alert("Invalid Agent Number");
            return;
        }

    const mainBalanceElement = document.getElementById("main-balance");
        const currentBalance = getBalance();
        
    const inputAmount = getValueOfInput("cashout-amount");
        
        const newBalance = currentBalance - Number(inputAmount);
            
        if(newBalance < 0){
            alert("Invalid Amount");
            return;
        }

        const pin = getValueOfInput("cashout-pin");

        if(pin === "1234"){
          alert("Cashout Successful");
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
                        <p class="font-semibold text-base">Cashout</p>
                        <p>Today ${time}</p>

                    </div>
                </div>
                <div>
                    <a href=""><i class="fa-solid fa-bars"></i></a>
                </div>`;
             trnasContainer.appendChild(newCard);
        
        }

        else{
            alert("Incorrect Pin Code")
            return;
        }
})

    
    // document.getElementById("cashout-btn").addEventListener('click', function(){
    //     // console.log("Clicked")
    
    //     const agentInput = document.getElementById("agent-num");
    //         const agentNumber = agentInput.value;
    //             if(agentNumber.length != 11){
    //                 alert("Invalid agent number");
    //                 return;
    //             }
    
    //     const cashoutElement = document.getElementById("cashout-amount");
    //         const amount = cashoutElement.value;
    
    //     const balanceElement = document.getElementById("main-balance");
    //         const mainBalance = balanceElement.innerText;
    //             const newBalance = Number(mainBalance) - Number(amount);
    //                 if(newBalance < 0){
    //                     alert("Invalid Amount")
    //                     return;
    //                }
    
    //     const pinNumber = document.getElementById('cashout-pin');
    //             const pin = pinNumber.value;
    //                 if(pin === "1234"){
    //                     alert("Cashout Successful");
    //                     balanceElement.innerText = newBalance;
    //                     return;
    //                 }
    
    //                 else{
    //                     alert("Invalid Pin");
    //                     return;
    //                 }
    // })