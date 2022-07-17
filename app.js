/* Fill your code*/
const inputs = document.querySelectorAll('input');
const passwordField = document.querySelector('.password');
const showPasswordIcon = document.querySelector('.show-password');
const hidePasswordIcon = document.querySelector('.hide-password');
var savePass = '';

showPasswordIcon.addEventListener('click', () => {
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'block';
    passwordField.setAttribute('type', 'text');
});

hidePasswordIcon.addEventListener('click', () => {
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'block';
    passwordField.setAttribute('type', 'password');
});

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@_-]{8,30}$/i,
    phone: /^\d{10}$/,
    address: /^.+$/
};

const validate = (field, regex) => {
    console.log(field);
    if (field.name == 'cpassword') {
        let k = field.value;
        if (k == savePass) {
        field.className = 'valid';
        } else {
        field.className = 'invalid';
        }
        return;
    }
    const valid = regex.test(field.value);
    if (valid) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.name == 'password') {
            savePass = '';
            savePass += e.target.value;
            console.log(savePass);
        }
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});