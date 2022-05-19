const input = document.getElementById("email");
const error = document.getElementById("error");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btn = document.getElementById("btn");


function validateForm() {

    input.addEventListener("blur", function () {
        if (input.value === "") {
            error.style.display = "block";
            input.classList.add("error-icon");
            input.style.borderColor = "red";
        } else {
            input.classList.remove("error-icon");
            input.style.borderColor = "hsla(0, 0%, 76%, 0.404)";
        }

        if (input.value.match(mailformat)) {
            error.style.display = "none";
            input.classList.remove("error-icon");
            input.style.borderColor = "hsla(0, 0%, 76%, 0.404)";
        }else{
            error.style.display = "block";
            input.classList.add("error-icon");
            input.style.borderColor = "red";
        }
    })
    

    input.addEventListener("focus", function () {
        error.style.display = "none";
        input.classList.remove("error-icon");
        input.style.borderColor = "hsla(0, 0%, 76%, 0.404)";

    })
    
}

validateForm();