let account = {
    "login": "paihitetty",
    "password": "123",
    "name": "Pavlo",
    "surname": "Romanenko",
    "email": "paihitetty444@gmail.com"
}
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

loggedIn[0].style.display = "none";
modification[0].style.display = "none";
error.style.display = "none";
button.disabled = true;

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

button.onclick = function () {
    if (login.value !== account.login || password.value !== account.password) {
        error.style.display = "block";
    } else {
        notLoggedIn[0].style.display = "none";
        loggedIn[0].style.display = "block";
        welcome.innerText = "Welcome " + account.name + " " + account.surname;
        loginAcceuil.innerText = account.login;
        $(".dropdown-trigger").dropdown({coverTrigger: false});
    }
}

logout.onclick = function () {
    loggedIn[0].style.display = "none";
    modification[0].style.display = "none";
    notLoggedIn[0].style.display = "block";
    loginAcceuil.innerText = "Acceuil";
    login.value = "";
    password.value = "";
    button.className = "waves-effect waves-light btn disabled";
    error.style.display = "none";
    $(".dropdown-trigger").dropdown('destroy');
}

modifier.onclick = function () {
    loggedIn[0].style.display = "none";
    notLoggedIn[0].style.display = "none";
    modification[0].style.display = "block";
    buttonModifier.className = "waves-effect waves-light btn disabled";
    newPassword.value = "";
    newLogin.value = account.login;
    email.value = account.email;
    name.value = account.name;
    surname.value = account.surname;
}


newLogin.oninput = function () {
    if (newLogin.value !== "" && newPassword.value !== "" && name.value !== "" && surname.value !== "" && email.value !== "") {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

newPassword.oninput = function () {
    if (newLogin.value !== "" && newPassword.value !== "" && name.value !== "" && surname.value !== "" && email.value !== "") {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

name.oninput = function () {
    if (newLogin.value !== "" && newPassword.value !== "" && name.value !== "" && surname.value !== "" && email.value !== "") {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

surname.oninput = function () {
    if (newLogin.value !== "" && newPassword.value !== "" && name.value !== "" && surname.value !== "" && email.value !== "") {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

email.oninput = function () {
    if (newLogin.value !== "" && newPassword.value !== "" && name.value !== "" && surname.value !== "" && email.value !== "") {
        buttonModifier.className = "waves-effect waves-light btn";
    } else {
        buttonModifier.className = "waves-effect waves-light btn disabled";
    }
}

buttonModifier.onclick = function () {
    account.name = name.value;
    account.surname = surname.value;
    account.email = email.value;
    account.login = newLogin.value;
    account.password = newPassword.value;

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
    buttonModifier.className = "waves-effect waves-light btn disabled";
}