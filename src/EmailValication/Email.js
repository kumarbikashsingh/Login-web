// function clickEmail() { let e = document.getElementById("username"); if (console.log("Email : ", e), /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)) return console.log("The email address is valid"), e.style.borderColor = "green", !0; { let r = document.getElementById("error").style.borderColor = "red"; return r.innerHTML = "The email address is not valid yet!...", console.log("The email address is not valid"), !1 } } function clickPassword() { var e = document.getElementById("password"); return (console.log("Password: ", e), /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/.test(e.value)) ? (console.log("Correct Password"), e.style.borderColor = "green", !0) : (document.getElementById("password").style.borderColor = "red", console.log("Incorrect Passsword"), !1) } function redirectAnotherPage() { console.log("redirectAnotherPage is call"), clickEmail() && !0 == clickPassword() ? window.location.href = "http://127.0.0.1:5500/Welcome.html" : console.log("This condition is not matching...!") }


// -------------------------------
function myEmail() {
    let userName = document.getElementById("username");
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex.test(userName.value)) {
        // userName.innerHTML("This email is valid");
        console.log('This email id is valid...!');
        return true;
    }
    else {
        // userName.innerHTML("this username is not valid");
        console.log("This email is not valid");
        return false;
    }
}
function myPassword() {
    let userPassword = document.getElementById("password").value;
    let pwdGeneric = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pwdGeneric.test(userPassword)) {
        console.log("it's Valid passowrd")
        return true;
    }
    else {
        console.log("It's invalit password");
        return false;
    }
}
function displayBy() {
    if (myPassword() && myEmail() == true) {
        // event.preventDefault;
        let can = document.getElementById("logincontainer");
        can.style.display = "none";
        //block
    }
    let blo = document.getElementById("blocku");
    blo.style.display = "block";
}