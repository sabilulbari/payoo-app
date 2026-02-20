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
            return;
        }

        else if (pinNumber === "") {
          alert("Enter Your Pin Number");
          return;

        } else {
          alert("Invalid Pin Number");
          return;
        }
}); 
