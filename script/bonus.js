document.getElementById("btn-bonus").addEventListener('click', function(){
    const cuponNumber = getValueOfInput("cupon-number");
    const amount = 500;
    const currentBalance = getBalance();
    const newBalance = currentBalance + amount;

            if(cuponNumber === "sjl123"){
              alert(`You have rewarder ${amount} taka`);
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
                        <p class="font-semibold text-base">Bonus</p>
                        <p>Today ${time}</p>

                    </div>
                </div>
                <div>
                    <a href=""><i class="fa-solid fa-bars"></i></a>
                </div>`;
             trnasContainer.appendChild(newCard);
            }
            
            else{
                alert("Invalid Coupon number")
                return;
            }

    
})