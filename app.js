document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const regexp = /^[a-zA-Z]{2,10}$/;
    addValidationClass(name, regexp)
}
function validateZip() {
    const zip = document.getElementById('zip');
    const regexp = /^[0-9]{5}$/;
    addValidationClass(zip, regexp)    
}
function validateEmail() {
    const email = document.getElementById('email');
    const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    addValidationClass(email, regexp);
}
function validatePhone() {
    const phone = document.getElementById('phone');
    const regexp = /^\+?\d?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4,6}$/;
    addValidationClass(phone, regexp)
}

function addValidationClass(field, regexp) {
    if (!regexp.test(field.value)) {
        field.classList.add('is-invalid');
    } else {
        field.classList.remove('is-invalid');
    }
}