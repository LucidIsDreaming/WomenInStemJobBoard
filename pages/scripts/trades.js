document.getElementById("job-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    let job_title = document.getElementById("job-title").value.trim();
    if (job_title === "") {
        document.getElementById("err-job-title").style.display = "block";
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

