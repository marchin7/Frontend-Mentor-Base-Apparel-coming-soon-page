const form = document.getElementById("form");
const input = document.getElementById("input");
const errorIcon = document.getElementById("errorIcon");
const submitBtn = document.getElementById("submitBtn");
const submitMessage = document.getElementById("submitMessage");
const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
    console.log("wtf?");
});

function validateEmail() {
    if (input.value === "") {
        submitMessage.innerText = "This field is required";
        submitMessage.style.opacity = "1";
        errorIcon.style.opacity = "1";
        submitMessage.style.color = "red";
        input.style.borderColor = "rgb(249, 98, 98)";
    } else if (!input.value.match(regExp)) {
        submitMessage.innerText = "Please provide a valid email";
        submitMessage.style.opacity = "1";
        submitMessage.style.color = "red";
        errorIcon.style.opacity = "1";
        input.style.borderColor = "rgb(249, 98, 98)";
    } else {
        submitMessage.innerText = "Thank you for submiting your email";
        submitMessage.style.opacity = "1";
        submitMessage.style.color = "green";
        errorIcon.style.opacity = "0";
        input.style.borderColor = "rgba(206, 151, 151, 0.5)";
        input.value = "";
        setTimeout(() => {
            submitMessage.style.opacity = "0";
        }, 2000);
    }
}

input.addEventListener("input", () => {
    if (input.value === "" || input.value.match(regExp)) {
        submitMessage.style.opacity = "0";
        errorIcon.style.opacity = "0";
        input.style.borderColor = "rgba(206, 151, 151, 0.5)";
    }
});
