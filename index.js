const form = document.getElementById("form");
const input = document.getElementById("input");
const errorIcon = document.getElementById("errorIcon");
const submitBtn = document.getElementById("submitBtn");
const submitMessage = document.getElementById("submitMessage");
const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
});

function validateEmail() {
    if (input.value === "") {
        submitMessage.innerText = "This field is required";
        submitMessage.classList.add("error");
        errorIcon.classList.add("error");
        input.classList.add("error");
        submitMessage.classList.remove("success");
    } else if (!input.value.match(regExp)) {
        submitMessage.innerText = "Please provide a valid email";
        submitMessage.classList.add("error");
        errorIcon.classList.add("error");
        input.classList.add("error");
        submitMessage.classList.remove("success");
    } else {
        submitMessage.innerText = "Thank you for submiting your email";
        errorIcon.classList.remove("error");
        input.classList.remove("error");
        submitMessage.classList.add("success");
        input.value = "";
        setTimeout(() => {
            submitMessage.classList.remove("success");
        }, 2000);
    }
}

input.addEventListener("input", () => {
    if (input.value === "" || input.value.match(regExp)) {
        submitMessage.classList.remove("error");
        errorIcon.classList.remove("error");
        input.classList.remove("error");
    }
});


