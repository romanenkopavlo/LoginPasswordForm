let account;
let accountKey;

let login = document.getElementById("login");
let newLogin = document.getElementById("loginUser");
let newPassword = document.getElementById("passwordUser");
let name = document.getElementById("nameUser");
let surname = document.getElementById("surnameUser");
let email = document.getElementById("emailUser");

let loginAcceuil = document.getElementById("login_accueil");
let welcome = document.getElementById("welcome");
let password = document.getElementById("password");
let button = document.getElementById("button");
let buttonModifier = document.getElementById("buttonApply");
let buttonRetour = document.getElementById("buttonReturn");
let error = document.getElementById("error");

let notLoggedIn = document.getElementsByClassName("not-logged-in");
let loggedIn = document.getElementsByClassName("logged-in");
let modifier = document.getElementById("modifier");
let modification = document.getElementsByClassName("modification");
let logout = document.getElementById("logout");

let creation = document.getElementsByClassName("creation-account");
let creationButton = document.getElementById("creation-button");
let creationCompteNavBar = document.getElementById("creationCompteNavBar");
let accueil = document.getElementById("login_accueil");

let nameReg = document.getElementById("nameReg");
let surnameReg = document.getElementById("surnameReg");
let emailReg = document.getElementById("emailReg");
let loginReg = document.getElementById("loginReg");
let passwordReg = document.getElementById("passwordReg");
let passwordRegConfirm = document.getElementById("passwordRegConfirm");
let confirmPasswordMessage = document.getElementById("confirmPasswordMessage");
let confirmEmailMessage = document.getElementById("confirmEmailMessage");
let confirmLoginMessage = document.getElementById("confirmLoginMessage");
let buttonApplyReg = document.getElementById("buttonApplyReg");

let accountsList = document.getElementById("accountsList");
let comptes = document.getElementById("comptes");
let list = document.getElementById("list");
let comptesMessage = document.getElementById("comptesMessage");

let modifErrors = document.getElementsByClassName("confirmModification");

let isEmailOk;
let isLoginOk;
let isPasswordOk;
let isLoggedIn;

let isEmailModifOk = true;
let isLoginModifOk = true;
let isPasswordModifOk = true;

let nombreDeComptes = 0;
let accountNumero;

loggedIn[0].style.display = "none";
modification[0].style.display = "none";
creation[0].style.display = "none";
list.style.display = "none";
comptesMessage.style.display = "none";
confirmEmailMessage.style.display = "none";
confirmPasswordMessage.style.display = "none";
confirmLoginMessage.style.display = "none";
error.style.display = "none";
button.disabled = true;

for (let i = 0; i < modifErrors.length; i++) {
    modifErrors[i].style.display = "none";
}

for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}

accountsList.onclick = function () {
    list.style.display = "block";
    notLoggedIn[0].style.display = "none";
    creation[0].style.display = "none";

    for (let i = 0; i < sessionStorage.length && nombreDeComptes !== sessionStorage.length; i++) {
        account = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        comptes.innerHTML += "<tr><td>" + account.login + "</td><td>" + account.name + "</td><td>"
            + account.surname + "</td><td class='center-align'><a href='index.html' class='delete'><i class='material-icons'>delete</i></a></td></tr>";
        nombreDeComptes++;
    }
    if (sessionStorage.length === 0) {
        list.style.display = "none";
        comptesMessage.style.display = "block";
        comptesMessage.innerText = "Vous n'avez aucun comptes";
    } else {
        list.style.display = "block";
        comptesMessage.style.display = "none";
    }

    let deleteAccount = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteAccount.length; i++) {
        deleteAccount[i].onclick = function () {
            sessionStorage.removeItem(sessionStorage.key(i));
        }
    }
}

nameReg.oninput = function () {
    buttonRegCheck();
}

surnameReg.oninput = function () {
    buttonRegCheck();
}
emailReg.oninput = function () {
    isEmailOk = true;
    for (let i = 0; i < sessionStorage.length && isEmailOk; i++) {
        if (emailReg.value === JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).email) {
            confirmEmailMessage.style.display = "block";
            confirmEmailMessage.innerText = "Cette email-adresse est deja utilise";
            confirmEmailMessage.className = "row red-text";
            isEmailOk = false;
        } else {
            confirmEmailMessage.style.display = "none";
            isEmailOk = true;
        }
    }
    buttonRegCheck();
}
loginReg.oninput = function () {
    isLoginOk = true;
    for (let i = 0; i < sessionStorage.length && isLoginOk; i++) {
        if (loginReg.value === JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).login) {
            confirmLoginMessage.style.display = "block";
            confirmLoginMessage.innerText = "Ce login est deja utilise";
            confirmLoginMessage.className = "row red-text";
            isLoginOk = false;
        } else {
            confirmLoginMessage.style.display = "none";
            isLoginOk = true;
        }
    }
    buttonRegCheck();
}
passwordReg.oninput = function () {
    buttonRegCheck();
}
passwordRegConfirm.oninput = function () {
    if (passwordReg.value !== passwordRegConfirm.value) {
        confirmPasswordMessage.style.display = "block";
        confirmPasswordMessage.innerText = "Mauvais mot de passe";
        confirmPasswordMessage.className = "row red-text";
        isPasswordOk = false;
    } else {
        confirmPasswordMessage.style.display = "none";
        isPasswordOk = true;
    }
    buttonRegCheck();
}

buttonApplyReg.onclick = function () {
    account = {
        "login": loginReg.value,
        "password": passwordReg.value,
        "name": nameReg.value,
        "surname": surnameReg.value,
        "email": emailReg.value
    }

    nombreDeComptes = sessionStorage.length;
    accountNumero = "account" + (nombreDeComptes + 1);
    sessionStorage.setItem(accountNumero, JSON.stringify(account));

    resetRegistrationForm();
    creation[0].style.display = "none";
    notLoggedIn[0].style.display = "block";
    comptesMessage.style.display = "block";
}

login.oninput = function () {
    if (password.value !== "" && login.value !== "") {
        button.className = "waves-effect waves-light btn";
    } else {
        button.className = "waves-effect waves-light btn disabled";
    }
}

password.oninput = function () {
    if (password.value !== "" && login.value !== "") {
        button.className = "waves-effect waves-light btn";
    } else {
        button.className = "waves-effect waves-light btn disabled";
    }
}

accueil.onclick = function () {
    if (isLoggedIn) {
        notLoggedIn[0].style.display = "none";
        if (modification[0].style.display !== "block") {
            loggedIn[0].style.display = "block";
        }
        creationCompteNavBar.style.display = "none";
        creation[0].style.display = "none";
        list.style.display = "none";
        comptesMessage.style.display = "none";
    } else {
        list.style.display = "none";
        loggedIn[0].style.display = "none";
        modification[0].style.display = "none";
        notLoggedIn[0].style.display = "block";
        creation[0].style.display = "none";
        comptesMessage.style.display = "none";
        resetRegistrationForm();
    }
}

button.onclick = function () {
    isLoggedIn = false;
    for (let i = 0; i < sessionStorage.length && !isLoggedIn; i++) {
        accountKey = sessionStorage.key(i);
        account = JSON.parse(sessionStorage.getItem(accountKey));
        if (login.value !== account.login || password.value !== account.password) {
            error.style.display = "block";
            isLoggedIn = false;
        } else {
            isLoggedIn = true;
            notLoggedIn[0].style.display = "none";
            loggedIn[0].style.display = "block";
            creationCompteNavBar.style.display = "none";
            accountsList.style.display = "none";
            welcome.innerText = "Welcome " + account.name + " " + account.surname;
            loginAcceuil.innerText = account.login;
            $(".dropdown-trigger").dropdown({coverTrigger: false});
        }
    }

    if (sessionStorage.length === 0) {
        error.style.display = "block";
    }
}

logout.onclick = function () {
    isLoggedIn = false;
    loggedIn[0].style.display = "none";
    modification[0].style.display = "none";
    notLoggedIn[0].style.display = "block";
    loginAcceuil.innerText = "Acceuil";
    creationCompteNavBar.style.display = "block";
    accountsList.style.display = "block";
    resetLoginForm();
    $(".dropdown-trigger").dropdown('destroy');
}

modifier.onclick = function () {
    loggedIn[0].style.display = "none";
    notLoggedIn[0].style.display = "none";
    modification[0].style.display = "block";
    newPassword.value = "";
    newLogin.value = account.login;
    email.value = account.email;
    name.value = account.name;
    surname.value = account.surname;
}

creationButton.onclick = function () {
    resetLoginForm();
    creation[0].style.display = "block";
    notLoggedIn[0].style.display = "none";
}

creationCompteNavBar.onclick = function () {
    resetLoginForm();
    creation[0].style.display = "block";
    notLoggedIn[0].style.display = "none";
    comptesMessage.style.display = "none";
    list.style.display = "none";
}

newLogin.oninput = function () {
    isLoginModifOk = true;
    for (let i = 0; i < sessionStorage.length && isLoginModifOk; i++) {
        if (newLogin.value === JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).login) {
            modifErrors[1].style.display = "block";
            modifErrors[1].innerText = "Ce login est deja utilise";
            isLoginModifOk = false;
        } else {
            modifErrors[1].style.display = "none";
            isLoginModifOk = true;
        }
    }
    buttonModifCheck();
}

email.oninput = function () {
    isEmailModifOk = true;
    for (let i = 0; i < sessionStorage.length && isEmailModifOk; i++) {
        if (email.value === JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).email) {
            modifErrors[0].style.display = "block";
            modifErrors[0].innerText = "Cette email-adresse est deja utilise";
            isEmailModifOk = false;
        } else {
            modifErrors[0].style.display = "none";
            isEmailModifOk = true;
        }
    }
    buttonModifCheck();
}

newPassword.oninput = function () {
    isPasswordModifOk = true;
    for (let i = 0; i < sessionStorage.length && isPasswordModifOk; i++) {
        if (newPassword.value === JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).password) {
            modifErrors[2].style.display = "block";
            modifErrors[2].innerText = "Mot de passe est identique au precendent";
            isPasswordModifOk = false;
        } else {
            modifErrors[2].style.display = "none";
            isPasswordModifOk = true;
        }
    }
    buttonModifCheck();
}

name.oninput = function () {
    buttonModifCheck();
}

surname.oninput = function () {
    buttonModifCheck();
}

buttonModifier.onclick = function () {
    account.name = name.value;
    account.surname = surname.value;
    account.email = email.value;
    account.login = newLogin.value;
    if (newPassword.value !== "") {
        account.password = newPassword.value;
    }
    sessionStorage.setItem(accountKey, JSON.stringify(account));

    loginAcceuil.innerText = account.login;
    welcome.innerText = "Welcome " + account.name + " " + account.surname;

    loggedIn[0].style.display = "block";
    modification[0].style.display = "none";
    notLoggedIn[0].style.display = "none";
}

buttonRetour.onclick = function () {
    loggedIn[0].style.display = "block";
    modification[0].style.display = "none";
    notLoggedIn[0].style.display = "none";
    name.value = account.name;
    surname.value = account.surname;
    email.value = account.email;
    newLogin.value = account.login;

    for (let i = 0; i < modifErrors.length; i++) {
        modifErrors[i].style.display = "none";
    }

    buttonModifier.className = "waves-effect waves-light btn";
}

function buttonRegCheck() {
    if (nameReg.value !== "" && surnameReg.value !== "" && emailReg.value !== ""
        && passwordReg.value !== "" && passwordRegConfirm.value !== ""
        && loginReg.value !== "" && isPasswordOk && isEmailOk && isLoginOk) {
        buttonApplyReg.className = "waves-effect waves-light btn";
    } else {
        buttonApplyReg.className = "waves-effect waves-light btn disabled";
    }
}

function buttonModifCheck() {
    if (newLogin.value !== "" && name.value !== ""
        && surname.value !== "" && email.value !== "" && isEmailModifOk && isLoginModifOk && isPasswordModifOk) {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

function resetLoginForm() {
    login.value = "";
    password.value = "";
    button.className = "waves-effect waves-light btn disabled";
    error.style.display = "none";
}

function resetRegistrationForm() {
    nameReg.value = "";
    surnameReg.value = "";
    loginReg.value = "";
    emailReg.value = "";
    passwordReg.value = "";
    passwordRegConfirm.value = "";
    confirmEmailMessage.style.display = "none";
    confirmPasswordMessage.style.display = "none";
    confirmLoginMessage.style.display = "none";
    buttonApplyReg.className = "waves-effect waves-light btn disabled";
}