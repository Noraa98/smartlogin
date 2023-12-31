var SignupNameInput = document.getElementById("SignupNameInput");
var SignupEmailInput = document.getElementById("SignupEmailInput");
var SignupPasswordInput = document.getElementById("SignupPasswordInput");
var AllUsers=[];
if(localStorage.getItem("AllUsers")!=null){
    AllUsers=JSON.parse(localStorage.getItem("AllUsers"));

}
function signUp(){
    var signinBtn=document.getElementById("signin")
    //  var configerMsg=document.getElementById("configerMsg")
    if(IsAllInputsIsValid()==true && isExist()==false){
        user={
            name:SignupNameInput.value,
            email:SignupEmailInput.value,
            password:SignupPasswordInput.value
        }
        AllUsers.push(user);
        localStorage.setItem("AllUsers",JSON.stringify(AllUsers))
        console.log(AllUsers);
        configerMsg.classList.replace("d-none","d-block")
        signinBtn.classList.replace("d-none","d-block")
        }else{
            signinBtn.classList.replace("d-block","d-none")
            console.log("not allowed to sign in")
        } 
    }


function IsAllInputsIsValid(){
    if(valUserName() && valUserEmail() && valUserPassword()){
        console.log("all inputs is valid")
        return true
    }else{
        console.log(" not all inputs valid ")
        return false
    }
}

function isExist(){
    for(var i=0;i<AllUsers.length;i++){
        if(AllUsers[i].name.toLowerCase()== SignupNameInput.value.toLowerCase() ||
        AllUsers[i].email.toLowerCase()== SignupEmailInput.value.toLowerCase()){
         console.log("this user is already exist")
         return true
        }
    }
    console.log("this user is new");
    return false ;
}


function valUserName(){
    var UserNamePattern=/^(?=.*[A-Z])[A-Za-z]{1,20}$/;
    var usernameAlert =document.getElementById("usernameAlert")
    if(UserNamePattern.test(SignupNameInput.value)==true){
        console.log("user name is valid")
        SignupNameInput.classList.remove("is-invalid")
        SignupNameInput.classList.add("is-valid")
        usernameAlert.classList.replace("d-block","d-none")
        return true
    }
    else{
        console.log("user name is NOT valid")
        SignupNameInput.classList.remove("is-valid")
        SignupNameInput.classList.add("is-invalid")
        usernameAlert.classList.replace("d-none","d-block")
        return false
    }
}

function valUserEmail(){
    var UserEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var useremailAlert =document.getElementById("useremailAlert")
    if(UserEmailPattern.test(SignupEmailInput.value)==true){
        console.log("user emai is valid")
        SignupEmailInput.classList.remove("is-invalid")
        SignupEmailInput.classList.add("is-valid")
        useremailAlert.classList.replace("d-block","d-none")
        return true
    }
    else{
        console.log("user email is NOT valid")
        SignupEmailInput.classList.remove("is-valid")
        SignupEmailInput.classList.add("is-invalid")
        useremailAlert.classList.replace("d-none","d-block")
        return false
    }
}

function valUserPassword(){
    var UserPassPattern=/^.{5,15}$/;
    var userpassAlert =document.getElementById("userpassAlert")
    if(UserPassPattern.test(SignupPasswordInput.value)==true){
        console.log("user pass is valid")
        SignupPasswordInput.classList.remove("is-invalid")
        SignupPasswordInput.classList.add("is-valid")
        userpassAlert.classList.replace("d-block","d-none")
        return true
    }
    else{
        console.log("user email is NOT valid")
        SignupPasswordInput.classList.remove("is-valid")
        SignupPasswordInput.classList.add("is-invalid")
        userpassAlert.classList.replace("d-none","d-block")
        return false
    }
}


var UserNameSession=JSON.parse(localStorage.getItem("username"))
function login(){
    var loginEmailInput=document.getElementById("signinEmail")
    var loginPasswordInput=document.getElementById("signinPassword")
    var wrongMsgAlert=document.getElementById("wrongMsg")
    var reqMegAlert=document.getElementById("reqMeg")
    for(var i=0 ; i<AllUsers.length ;i++){
        if(AllUsers[i].email.toLowerCase() == loginEmailInput.value.toLowerCase()
        && AllUsers[i].password.toLowerCase() == loginPasswordInput.value.toLowerCase()){
    UserNameSession=AllUsers[i].name;
    localStorage.setItem("username",JSON.stringify(UserNameSession))
    window.location.href="welcome.html"
    console.log("you are logged in")
    return true
    }
    }
    wrongMsgAlert.classList.replace("d-none","d-block")
}


function displayWelcomeUser(){
    var usernameContainer = document.getElementById("username");
    usernameContainer.innerHTML=`Welcome ${UserNameSession}`
 }


 function logout(){
    localStorage.removeItem("username")
 }