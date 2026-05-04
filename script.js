// SWITCH
function showRegister(){
    loginCard.classList.add("hidden");
    registerCard.classList.remove("hidden");
}

function showLogin(){
    registerCard.classList.add("hidden");
    loginCard.classList.remove("hidden");
}

// TERMS
function showTerms(){
    document.getElementById("termsModal").classList.add("show");
}

function closeTerms(){
    document.getElementById("termsModal").classList.remove("show");
}

// REGISTER
function register(){
    let email = regEmail.value;
    let pass = regPass.value;
    let pass2 = regPass2.value;
    let agree = document.getElementById("agree").checked;

    if(email === "" || pass === "" || pass2 === ""){
        alert("Fill all fields!");
        return;
    }

    if(pass !== pass2){
        alert("Passwords do not match!");
        return;
    }

    if(!agree){
        alert("You must agree to Terms & Conditions!");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("Account created!");
    showLogin();
}

// LOGIN
function login(){
    let email = loginEmail.value;
    let pass = loginPass.value;

    if(email === localStorage.getItem("userEmail") &&
       pass === localStorage.getItem("userPass")){
        showCode();
    } else {
        alert("Invalid login!");
    }
}

// CODE
function generateCode(){
    return Math.floor(100000 + Math.random() * 900000);
}

function showCode(){
    loginCard.classList.add("hidden");
    codeCard.classList.remove("hidden");

    userCode.innerText = generateCode();
}

// LOGOUT
function logout(){
    codeCard.classList.add("hidden");
    loginCard.classList.remove("hidden");
}