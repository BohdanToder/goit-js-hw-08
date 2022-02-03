import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

populateOutput();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {    
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateOutput() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        if (JSON.parse(savedData).email) {
        emailInputRef.value = JSON.parse(savedData).email;
        }

        if (JSON.parse(savedData).message) {
            textareaRef.value = JSON.parse(savedData).message;
        }
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    console.log(formData);
    
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}
