// Import Arrays with names
import { boysNames } from "./names/bnames.js";
import { girlsNames } from "./names/gnames.js";

// GIRLS
const randomGirlsTdName = document.getElementById('randomNameG');
const randomGirlsTdNameBtn = document.getElementById('randomNameGBtn');

//Function for Random Girls Name
function randomGName(){
    let randomName = girlsNames[Math.floor(Math.random() * 0.5 * girlsNames.length)];
    return randomName;
}

// By default output equal to random name from Girl Array
randomGirlsTdName.innerHTML = randomGName();

// Girls Button
randomGirlsTdNameBtn.addEventListener('click', () =>{
    randomGirlsTdName.innerHTML = randomGName();
});

// BOYS
const randomBoysTdName = document.getElementById('randomNameB');
const randomBoysTdNameBtn = document.getElementById('randomNameBBtn');

// Function for Random Boys Name
function randomBName(){
    let randomName = boysNames[Math.floor(Math.random() * 0.5 * boysNames.length)];
    return randomName;
}

// By Default output equal to random name from Boys Array
randomBoysTdName.innerHTML = randomBName();

// Event listener for boys btn
randomBoysTdNameBtn.addEventListener('click', () =>{
    randomBoysTdName.innerHTML = randomBName();
})

// RANDOM
const randomTdName = document.getElementById('randomName');
const randomNameBtn = document.getElementById('randomNameBtn');

// Function for Random Mix Name
function randomMixName(){
    let mixName = [...girlsNames, ...boysNames];
    let randomName = mixName[Math.floor(Math.random() * mixName.length)];
    return randomName;
}

// By Default output equal to random name form Mix Name
randomTdName.innerHTML = randomMixName();

// Event listener for random btn
randomNameBtn.addEventListener('click', () =>{
    randomTdName.innerHTML = randomMixName();
});

// FIND NAME BTN
const findNameBtn = document.querySelector('#findnamebtn');
const radioGenderButtons = document.querySelectorAll('input[name="gender"]');
const outputRadioGenderBtn = document.querySelector('#outputRadioBtn');
const randomMixNameForRadioOutput = randomMixName();

outputRadioGenderBtn.innerHTML = randomMixNameForRadioOutput;

findNameBtn.addEventListener('click', () =>{
    for(const radioGenderButton of radioGenderButtons){
        if(radioGenderButton.value == "Girl" && radioGenderButton.checked){
            outputRadioGenderBtn.innerHTML = randomGName();
            outputRadioGenderBtn.style.color = "rgb(248, 145, 162)";
        }else if(radioGenderButton.checked && radioGenderButton.value == "Boy"){
            outputRadioGenderBtn.innerHTML = randomBName();
            outputRadioGenderBtn.style.color = "#003885";
        }else if(radioGenderButton.checked && radioGenderButton.value == "Any"){
            outputRadioGenderBtn.innerHTML = randomMixName();
            outputRadioGenderBtn.style.color = "rgb(0,0,0)";
        }
    }
});

// TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH TRASH  
/*
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
*/
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




