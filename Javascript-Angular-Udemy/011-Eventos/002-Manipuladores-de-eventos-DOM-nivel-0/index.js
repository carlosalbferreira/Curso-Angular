'use strict';

const btn = document.querySelector('button');

btn.onclick = function alertOne() {
    alert(123);
};

btn.onclick = function alertTwo() { //Se deixar dessa forma ele sempre vai chamar o último alert.
    alert(456);
};