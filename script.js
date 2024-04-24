const popupContainer = document.querySelector('.success-container');
const signupContainer = document.querySelector('.container')
const closeBtn = document.querySelector('.close-btn');
const emailID = document.getElementById('email');
const validation = document.querySelector('.validation');
const emailText = document.querySelector('.email-text');
const form = document.querySelector('.form-box-form');


document.addEventListener('DOMContentLoaded', () => popupContainer.classList.add('hidden'));

const error = () => {
    validation.textContent = 'Valid email required';
    validation.style.color = 'red';
    emailID.style.border = '1px solid red';
    emailID.style.backgroundColor = 'var(--rgba-red)';
}

const success = email => {
    emailID.style.border = '1px solid green';
    emailID.style.backgroundColor = 'var(--rgba-green)';
    emailText.textContent = email;
    validation.textContent = 'Valid email';
    validation.style.color = 'green';
}

const checkEmail = function(email) {
const check =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return check.test(email);
    
}


//Event handlers
form.addEventListener('submit', e => {
    e.preventDefault();
    !checkEmail(emailID.value) ? error() : success(emailID.value), (popupContainer.classList.remove('hidden'), 
    signupContainer.classList.add('hidden'));

});

emailID.addEventListener('keyup', () => {
    !checkEmail(emailID.value) ? error() : success(emailID.value);
 
});

emailID.addEventListener('change', () => {
    !checkEmail(emailID.value) ? error() : success(emailID.value);
   
});

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    popupContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');

});

