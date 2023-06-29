let buttonRegistration = document.querySelector("#buttonRegistration");
let buttonAutorization = document.querySelector("#buttonAutorization");
let modalRegistration = document.querySelector("#modalRegistration");
let modalAutorization = document.querySelector("#modalAutorization");
let modalCancel = document.querySelectorAll("#modalCancel");
let modalOverline = document.querySelectorAll("#modalOverline");

let headerBurger = document.querySelector("#headerBurger");
let modalButton = document.querySelector("#modalButton");
let modalMenu = document.querySelector("#modalMenu");

let bmodalButtonAutorization = document.querySelector("#bmodalButtonAutorization");
let bmodalButtonRegistration = document.querySelector("#bmodalButtonRegistration");
let cform = document.querySelector("#cform");
let menuExit = document.querySelectorAll("#menuExit");

let userAutor = false

function validation(form) {

    function validatePhone(phone) {
        let re = /^[0-9\s]*$/;
        return re.test(String(phone));
    }

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    function removeError(input) {
        let parent = input.parentNode;
        if (parent.classList.contains("inputError")) {
            parent.classList.remove("inputError");
            parent.querySelector("label").remove();
            parent.querySelector("img").remove();
        }
    }

    function createError(input, text) {
        let parent = input.parentNode;
        parent.classList.add("inputError");

        const labelError = document.createElement("label");
        labelError.textContent = text;
        labelError.classList.add("labelError");
        parent.append(labelError);

        const imgError = document.createElement("img");
        imgError.src = "images/modal/error.svg";
        imgError.classList.add("errorImg");
        parent.append(imgError);

    }


    let result = true;
    let inputForm = form.querySelectorAll("input");

    inputForm.forEach(input => {
        removeError(input);

        if (input.dataset.number == "true") {
            if (!validatePhone(input.value) || input.value.length < 11 || input.value.length > 11) {
                result = false;
                createError(input, "Введите номер в формате 7хххххххххх");
            }
        }

        if (input.dataset.mail == "true") {
            if (!validateEmail(input.value)) {
                result = false;
                createError(input, "Введите правильную почту");
            }
        }

        if (input.dataset.password == "true") {
            let passwordOne = document.querySelector("#regPassword").value
            let passwordTwo = document.querySelector("#regPasswordTwo").value
            if (passwordOne !== passwordTwo || input.value === "") {
                createError(input, "Пароли не совпадают");
                result = false;
            }
        } else

            if (input.dataset.required == "true") {
                if (input.value === "") {
                    createError(input, "Введите данные");
                    result = false;
                }
            }
    })
    return result;
}

cform.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validation(this) === true) {
        let input = this.querySelectorAll("input")
        input.forEach(input => {
            input.value = ""
            userAutor = true
        })
    }
})

modalAutorization.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this) === true) {
        let input = this.querySelectorAll("input")
        input.forEach(input => {
            headerInner.classList.add("dn");
            headerInnerTwo.classList.remove("dn");
            modalAutorization.classList.remove("open");
            input.value = ""
            userAutor = true
        })
    }
})

modalRegistration.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this) === true) {
        let input = this.querySelectorAll("input")
        input.forEach(input => {
            headerInner.classList.add("dn");
            headerInnerTwo.classList.remove("dn");
            modalRegistration.classList.remove("open");
            input.value = ""
            userAutor = true
        })
    }
})

menuExit.forEach(function(menuExit) {
    menuExit.addEventListener("click", function (event) {
        event.preventDefault()
        headerInner.classList.remove("dn");
        headerInnerTwo.classList.add("dn");
        userAutor = false
        modalMenu.classList.add("dn")
    })
})

buttonRegistration.addEventListener("click", function () {
    modalRegistration.classList.add("open");
});

buttonAutorization.addEventListener("click", function () {
    modalAutorization.classList.add("open");
});

modalCancel.forEach(function (modalCancel) {
    modalCancel.addEventListener("click", function () {
        modalRegistration.classList.remove("open");
        modalAutorization.classList.remove("open");
        modalButton.classList.remove("open");
        modalMenu.classList.remove("open")
    })
});

modalOverline.forEach(function (modalOverline) {
    modalOverline.addEventListener("click", function () {
        modalRegistration.classList.remove("open");
        modalAutorization.classList.remove("open");
        modalButton.classList.remove("open");
    })
})

document.addEventListener('keydown', function (event) {
    let keyCode = event.keyCode;
    if (keyCode === 27) {
        modalRegistration.classList.remove("open");
        modalAutorization.classList.remove("open");
        modalButton.classList.remove("open");
    }
})

headerBurger.addEventListener("click", function () {
    if (userAutor == false) {
        modalButton.classList.add("open");
    } else {
        modalMenu.classList.add("open")
    }
})

bmodalButtonAutorization.addEventListener("click", function () {
    modalButton.classList.remove("open");
    modalAutorization.classList.add("open");
})

bmodalButtonRegistration.addEventListener("click", function () {
    modalButton.classList.remove("open");
    modalRegistration.classList.add("open")
})