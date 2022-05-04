{
    var recaptcha = document.getElementById('recaptchaWidget');
    if (recaptcha !== null) {
        document.querySelector('input[name="searchTrialPersonAction"]').removeAttribute("disabled");
        document.querySelector('input[name="searchTrialCaseNumAction"]').removeAttribute("disabled");
        recaptcha.remove();
    }
    var disclaimer = document.querySelector('input[name="disclaimer"]');
    if (disclaimer !== null) {
        disclaimer.checked = true;
        document.getElementById('frmCasesearchdisclaimer').submit();
    }
}