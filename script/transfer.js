document.getElementById("transfer-btn").addEventListener('click', function(){
    
    const userNumber = getValueOfInput("user-mobile-num");
        if(userNumber.length != 11){
            alert("Enter your valid user number");
            return;
        }
    const transferAmount = getValueOfInput("transfer-amount");
    const currentBalance = getBalance();
    const transferPin = getValueOfInput("transfer-pin-number");

    const newBalance = currentBalance - Number(transferAmount);
        
        if(newBalance < 0){
            alert("Invalid Amount");
            return;
        }

        else if(transferPin === "1234"){
          alert(`You have successfully transfer Taka ${transferAmount}at ${new Date()}`);
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
                        <p class="font-semibold text-base">Transfered</p>
                        <p>Today ${time}</p>

                    </div>
                </div>
                <div>
                    <a href=""><i class="fa-solid fa-bars"></i></a>
                </div>`;
          trnasContainer.appendChild(newCard);
        }

        else{
            alert("You Pin Number is incurrent");
            return;
        }


})