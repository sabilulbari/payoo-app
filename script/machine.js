

// Machine for get value of ID

function getValueOfInput(id){
    const input = document.getElementById(id);
        const value = input.value;
            return value;
}


// Machine for balance

function getBalance() {
  const mainBalance = document.getElementById("main-balance");
  const balanceTo = mainBalance.innerText;
    const balance = Number(balanceTo);
        return balance;
}

//MAchine for change balance with new balance

function setBalance(value){
    const balanceElement = document.getElementById("main-balance");
        balanceElement.innerText = value;
}


function showOnly(id){

    console.log("You Successfully clicked")

    // catch the ID of section
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const bonusMoney = document.getElementById("bonus-money");

    addMoney.classList = "hidden";
    cashOut.classList = "hidden";
    bonusMoney.classList = "hidden";

    const selected = document.getElementById(id);

    selected.classList.remove("hidden");
}