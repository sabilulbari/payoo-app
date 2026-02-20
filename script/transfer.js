document.getElementById("transfer-btn").addEventListener('click', function(){
    
    const userNumber = getValueOfInput("user-mobile-num");
        if(userNumber.length != 11){
            alert("Enter your valid user number");
            return;
        }
    const transferAmount = getValueOfInput("transfer-amount");
    const currentBalance = getBalance();
    const transferPin = getValueOfInput("pin-number");

    const newBalance = currentBalance - Number(transferAmount);
        
        if(newBalance < 0){
            alert("Invalid Amount");
            return;
        }

        else if(transferPin === "1234"){
            alert(`You have successfully transfer Taka ${transferAmount}at ${new Date()}`);
            setBalance(newBalance);
            return;

        }

        else{
            alert("You Pin Number is incurrent");
            return;
        }


})