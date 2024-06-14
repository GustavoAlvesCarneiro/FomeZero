const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const pixKey = document.getElementById("pix-key");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

username.addEventListener("blur", () => {
    checkInputUsername();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

password.addEventListener("blur", () => {
    checkInputPassword();
});

passwordConfirm.addEventListener("blur", () => {
    checkInputPasswordConfirm();
});

pixKey.addEventListener("blur", () => {
    checkInputPixKey();
});

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Nome de usuário obrigatório.");
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Email obrigatório.");
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Senha obrigatória.");
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPasswordConfirm() {
    const passwordValue = password.value;
    const confirmPasswordValue = passwordConfirm.value;

    if (confirmPasswordValue === "") {
        errorInput(passwordConfirm, "Confirmação de senha obrigatória.");
    } else if (confirmPasswordValue !== passwordValue) {
        errorInput(passwordConfirm, "As senhas não são iguais.");
    } else {
        const formItem = passwordConfirm.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPixKey() {
    const pixKeyValue = pix.value;

    if (pixKeyValue === "") {
        errorInput(pix, "CEP obrigatório.");
    } else {
        const formItem = pix.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm() {

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirm();
    checkInputPixKey();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}