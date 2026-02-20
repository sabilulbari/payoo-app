
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
            alert("Cashout Successful")
            setBalance(newBalance);
            return;
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