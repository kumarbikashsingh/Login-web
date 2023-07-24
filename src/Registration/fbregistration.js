// const submitButton = document.getElementById("submit")
// // .addEventListener(
// //     "click",
// //     function (event) {
// //         event.preventDefault();
// //         checkData();
// //     });

// let username = document.getElementById("username");
// function checkData() {
//     let usernameValue = username.value.trim();
//     if (usernameValue == "") {
//         setError(username, "User name can not be blanck");
//     }
//     else {
//         setSuccess(username);
//     }
// }
// function setError(u, msg) {
//     let parentBox = u.parentElement;
//     parentBox.className("form-group error");
//     let span = parentBox.querySelector("span");
//     let fa = parentBox.querySelector(".fa");
//     span.innerText = msg;
//     fa.className = "fa fa-check-circle";
// }
// --------Login page------------------
function userLogin(){
    let loginUserFn=document.getElementById("logusername");
    let loginError=document.getElementById("loginError");
    let loginRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(loginRegex.test(loginUserFn.value)){
        console.log("It's Valid user name");
        loginError.textContent="";
    }
    else{
        loginError.textContent="Write valid user name...!";
        loginError.style.color="red";
        console.log("Please write valid name...!");
    }
}
function userLogin(){
    let loginPwd=document.getElementById("logpassword");
    let errorPwd=document.getElementById("errorLoginPwd");
    let regexPwd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(regexPwd.test(loginPwd.value)){
        console.log("It's valid Password")
        errorPwd.style.display="none";
    }
    else{
        errorPwd.textContent="It's not valid, please try again";
        errorPwd.style.coler="red";
        console.log("Please try aguain...!")
    }
}

// --------Registration page----------------------

function registrationFn() {
    let register = document.getElementById("regFirst");
    let errorFN = document.getElementById("firstName");

    let regix = /^[a-zA-Z\-]+$/;
    if (regix.test(register.value)) {
        console.log("First name Staus ok");
        errorFN.textContent="";
    }
    else {
        errorFN.textContent="Please Enter Valied Name...!";
        errorFN.style.color="red";
        console.log("First name ");
    }
}
function registrationLn() {
    let registerL = document.getElementById("regLast");
    let errorLastName=document.getElementById("lastName");
    let regixL = /^[a-zA-Z\-]+$/;
    if (regixL.test(registerL.value)) {
        errorLastName.style.display="none";
        console.log("Last name status...Ok");
    }
    else {
        errorLastName.textContent="Please enter current name...!";
        errorLastName.style.color="red";
        console.log("Last name status not...Ok");
    }
}

function mobileReg() {
    let registery = document.getElementById("regMobileOrEmail");
    let error = document.getElementById("error");

    let regixy = /^[0]?[6789]\d{9}$/;
    let emailRegix = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (regixy.test(registery.value)) {
        console.log("Status ok")
        error.textContent="";
    }
    else if (emailRegix.test(registery.value)) {
        console.log("Your email-id registered success full");
        error.textContent="";
    }
    else {
        console.log("Not ok");
        error.textContent = "Please enter valid mibile";
        error.style.color = "red";
    }
}
function userPassword() {
    let wrongPwd=document.getElementById("wrongPwd");
    let userInputpassword = document.getElementById("new-password");
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (regex.test(userInputpassword.value)) {
        // wrongPwd.style.display="none";
        wrongPwd.textContent="";
        console.log("It's Correct password");
    }
    else {
        // userInputpassword.style.desplay="none";
        wrongPwd.textContent="Please write valid password...!"
        wrongPwd.style.color = "red";
        console.log("It's unvalid password...!");

    }
}

