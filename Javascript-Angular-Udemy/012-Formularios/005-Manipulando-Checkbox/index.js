'use strict';

const form = document.forms.namedItem('select-checkbox');
const submit = document.querySelector('#submit');
const change = document.querySelector('#change');

const checkedValues = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;

    checkbox.forEach((element) => {
        if(element.checked){
            checkedValues.push(element.value);
            console.log(checkedValues)
        }
    });
});