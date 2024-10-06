function clearText(id) {
    var emailInput = document.getElementById(id);
    if (emailInput.value === "Email") {
        emailInput.value = "";
    }
}

function restoreText(id) {
    var emailInput = document.getElementById(id);
    if (emailInput.value === "") {
        emailInput.value = "Email";
    }
}