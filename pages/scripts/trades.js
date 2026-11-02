document.getElementById("job-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    let job_title = document.getElementById("job-title").value.trim();
    if (job_title === "") {
        document.getElementById("err-job-title").style.display = "block";
        isValid = false;
    }

    let comapny_name = document.getElementById("company-name").value.trim();
    if (comapny_name === "") {
        document.getElementById("err-company-name").style.display = "block";
        isValid = false;
    }

    let program = document.getElementById("trade-area").value.trim();
    if (program === "") {
        document.getElementById("err-trade-area").style.display = "block";
        isValid = false;
    }

    let job_location = document.getElementById("location").value.trim();
    if (job_location === "") {
        document.getElementById("err-location").style.display = "block";
        isValid = false;
    }

    /*let job_type = document.getElementById("part-or-full").value.trim();
    if (job_type === "") {
        document.getElementById("err-job-type").style.display = "block";
        isValid = false;
    }*/

    let date = document.getElementById("date-posted").value.trim();
    if (date === "") {
        document.getElementById("err-date").style.display = "block";
        isValid = false;
    }

    let exp_date = document.getElementById("exp-date").value.trim();
    if (exp_date === "") {
        document.getElementById("err-exp").style.display = "block";
        isValid = false;
    }

    let url = document.getElementById("app-url").value.trim();
    if (url === "") {
        document.getElementById("err-app-url").style.display = "block";
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

