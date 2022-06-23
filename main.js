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
const mixArrays = boysNames.concat(girlsNames);
let randomMixName = mixArrays[Math.floor(Math.random() * mixArrays.length)];

randomName.innerHTML = randomMixName;

randomNameBtn.addEventListener('click', () =>{
    let randomMixName = mixArrays[Math.floor(Math.random() * mixArrays.length)];
    randomName.innerHTML = randomMixName;
});

// Find Name btn
const findName = document.getElementById('findnamebtn');
findName.addEventListener('click', () =>{
    
});