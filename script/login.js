document.getElementById("btn-login")
.addEventListener("click", function (event) {
  const mobileNumber = document.getElementById("mobile-num");
  const number = mobileNumber.value;

  const pinNumber = document.getElementById("pin-number");
  const pin = pinNumber.value;

  if(number === "01234567890" && pin === "1234"){
    alert("Log in Success")
    window.location.assign("/home.html");
  }

  else{
    alert("Login failed");
    event.number = "";
    event.pin = "";
    return;
  }
});