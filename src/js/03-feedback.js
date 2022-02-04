import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {}

populateOutput();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {    
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateOutput() {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

        Object.entries(savedData).forEach(([key, value]) => {
            formData[key] = value;
            formRef.elements[key].value = value;
        });
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    console.log(formData);
    
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formData = {};
}
