const popupContainer = document.querySelector('.success-container');
const signupContainer = document.querySelector('.container')
const subscribeBtn = document.querySelector('.subscribe-btn');
const closeBtn = document.querySelector('.close-btn');

document.addEventListener('DOMContentLoaded', () => popupContainer.classList.add('hidden'));

subscribeBtn.addEventListener('click', e => {
    e.preventDefault();
    
    popupContainer.classList.remove('hidden');
    signupContainer.classList.add('hidden');
    

    console.log('d');
  
});


closeBtn.addEventListener('click', e => {
    e.preventDefault();
    
    popupContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');

});

