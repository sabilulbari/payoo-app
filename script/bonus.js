document.getElementById("btn-bonus").addEventListener('click', function(){
    const cuponNumber = getValueOfInput("cupon-number");
    const amount = 500;
    const currentBalance = getBalance();
    const newBalance = currentBalance + amount;

            if(cuponNumber === "sjl123"){
                alert(`You have rewarder ${amount} taka`)
                setBalance(newBalance);
                return;
            }
            else{
                alert("Invalid Coupon number")
                return;
            }

    
})