document.getElementById("log-in").onsubmit = () =>{
    let isValid = true;
    clearErrors();

    let user = document.getElementById("username").value.trim();
    if (user === "") {
        document.getElementById("err-user").style.display = "block";
        isValid = false;
    }

    let password = document.getElementById("password").value.trim();
    if (password === "") {
        document.getElementById("err-password").style.display = "block";
        isValid = false;
    }
    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}

