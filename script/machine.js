

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

const now = new Date();
const time = now.toLocaleDateString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});


function showOnly(id){

    // catch the ID of section
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const bonusMoney = document.getElementById("bonus-money");
    const transferMoney = document.getElementById("transfer-money");
    const billpay = document.getElementById("pay-bill");
    const transectionHistory = document.getElementById("transection-history");


    addMoney.classList = "hidden";
    cashOut.classList = "hidden";
    bonusMoney.classList = "hidden";
    transferMoney.classList = "hidden";
    billpay.classList = "hidden";
    transectionHistory.classList = "hidden";

    const selected = document.getElementById(id);

    selected.classList.remove("hidden");
}