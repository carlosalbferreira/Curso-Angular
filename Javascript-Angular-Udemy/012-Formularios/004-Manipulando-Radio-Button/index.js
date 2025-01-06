"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector('#submit');
const change =  document.querySelector('#change')

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const radio = form.radio;
    submit.innerHTML = radio.value;


form.radio.forEach((res) => {
    res.addEventListener('change', (event) => {
        const {target } = event;

        if(target.checked) {
            console.log(target.value);
            change.innerHTML =  target.value;
        }

    })
});

});
    
    // console.log(radio.value);
    // radio.forEach(res => {
    //     console.log(res);
    //     if(res.checked) {
    //         console.log(res);
    //     }
    // });


    //Usando o Switch case


    // switch (radio.value) {
    //     case 'html5':
    //         radio.value = document.querySelector('.label-html').style.background = 'green';
    //         radio.value =  document.querySelector('.label-css').style.background = 'white';
    //         radio.value = document.querySelector('.label-js').style.background = 'white'
    //         break;
        
    //     case 'css3':
    //         radio.value = document.querySelector('.label-css').style.background = 'green';
    //         radio.value =  document.querySelector('.label-html').style.background = 'white';
    //         radio.value = document.querySelector('.label-js').style.background = 'white'
    //         break;
        
    //         case 'javascript':
    //         radio.value = document.querySelector('.label-js').style.background = 'green';
    //         radio.value =  document.querySelector('.label-css').style.background = 'white';
    //         radio.value = document.querySelector('.label-html').style.background = 'white'
    //         break;
    //     default:
    // }

    //Usando O IF

    // if(radio.value == 'html5'){
    //     radio.value = document.querySelector('.label-html').style.background = 'green'
    // }else{
    //     radio.value = document.querySelector('.label-html').style.background = 'white'
    // }

    // if(radio.value == 'css3'){
    //     radio.value = document.querySelector('.label-css').style.background = 'green'
    // }else{
    //     radio.value = document.querySelector('.label-css').style.background = 'white'
    // }

    // if(radio.value == 'javascript'){
    //     radio.value = document.querySelector('.label-js').style.background = 'green'
    // }else{
    //     radio.value = document.querySelector('.label-js').style.background = 'white'
    // }



// DEPOIS DESCOBRIR COMO INTERAR CORRETAMENTE COM OS TARGETS

// form.radio.forEach(res => {
//     res.addEventListener('change', (event) => {

// console.log(res);

//         switch (event.target.value) {
//             case 'html5':
//                 event.target.value = document.querySelector('.label-html').style.background = 'green';
//                 event.target.value =  document.querySelector('.label-css').style.background = 'white';
//                 event.target.value = document.querySelector('.label-js').style.background = 'white'
//                 break;
            
//             case 'css3':
//                 event.target.value = document.querySelector('.label-css').style.background = 'green';
//                 event.target.value =  document.querySelector('.label-html').style.background = 'white';
//                 event.target.value = document.querySelector('.label-js').style.background = 'white'
//                 break;
            
//                 case 'javascript':
//                 event.target.value = document.querySelector('.label-js').style.background = 'green';
//                 event.target.value =  document.querySelector('.label-css').style.background = 'white';
//                 event.target.value = document.querySelector('.label-html').style.background = 'white'
//                 break;
//             default:
//         }
        
//     })
// });

