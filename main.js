import { boysNames } from "./names/bnames.js";
import { girlsNames } from "./names/gnames.js";


// Girls
const randomGirlsName = document.getElementById('randomNameG');
const randomGirlsNameBtn = document.getElementById('randomNameGBtn');
let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];


randomGirlsName.innerHTML = randomGName;

randomGirlsNameBtn.addEventListener('click', () =>{
    let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];
    randomGirlsName.innerHTML = randomGName;
});


//Boys
const randomBoysName = document.getElementById('randomNameB');
const randomBoysNameBtn = document.getElementById('randomNameBBtn');
let randomBName = boysNames[Math.floor(Math.random() * boysNames.length)];

randomBoysName.innerHTML = randomBName;

randomBoysNameBtn.addEventListener('click', () =>{
    let randomBName = boysNames[Math.floor(Math.random() * boysNames.length)];
    randomBoysName.innerHTML = randomBName;
});

// Random

const randomName = document.getElementById('randomName');
const randomNameBtn = document.getElementById('randomNameBtn');
/*ES5 Version use Array.concat
const mixArrays = boysNames.concat(girlsNames);
*/
// ES6 version use destructuring
const mixArrays = [...boysNames, ...girlsNames];
let randomMixName = mixArrays[Math.floor(Math.random() * mixArrays.length)];

randomName.innerHTML = randomMixName;

randomNameBtn.addEventListener('click', () =>{
    let randomMixName = mixArrays[Math.floor(Math.random() * mixArrays.length)];
    randomName.innerHTML = randomMixName;
});

// Find Name btn
const findNameBtn = document.querySelector('#findnamebtn');
//const radioGenderButtons = document.querySelectorAll('input[name="gender"]:checked').value;//
const radioGenderButtons = document.querySelectorAll('input[name="gender"]');
const outputRadioGenderBtn = document.querySelector('#outputRadioBtn');
const randomMixNameForRadioOutput = mixArrays[Math.floor(Math.random() * 0.5 * mixArrays.length)]

outputRadioGenderBtn.innerHTML = randomMixNameForRadioOutput;

findNameBtn.addEventListener('click', () =>{
    const randomGirlsName = girlsNames[Math.floor(Math.random() * 0.5 * girlsNames.length)];
    const randomBoysName = boysNames[Math.floor(Math.random() * 0.5 * boysNames.length)];
    const mixName = boysNames.concat(girlsNames);
    const randomMixName = mixName[Math.floor(Math.random() * 0.5 * mixName.length)];

    for(const radioGenderButton of radioGenderButtons){
        if(radioGenderButton.value == "Girl" && radioGenderButton.checked){
            outputRadioGenderBtn.innerHTML = randomGirlsName;
            outputRadioGenderBtn.style.color = "rgb(248, 145, 162)";
        }else if(radioGenderButton.checked && radioGenderButton.value == "Boy"){
            outputRadioGenderBtn.innerHTML = randomBoysName;
            outputRadioGenderBtn.style.color = "#003885"
        }else{
            outputRadioGenderBtn.innerHTML = randomMixName;
        }
    }
    })

/*
findNameBtn.addEventListener('click', () =>{
    let selectedGender;
    for(const radioGenderButton of radioGenderButtons){
        if(radioGenderButton.checked){
            selectedGender = radioGenderButtons.value;
            break;
        }
    }
    outputRadioGenderBtn.innerHTML = selectedGender;
});
*/