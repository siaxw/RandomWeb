// Import Arrays with names
import { boysNames } from "./names/bnames.js";
import { girlsNames } from "./names/gnames.js";

// GIRLS
let randomGirlsNameTd, randomGirlsNameTdBtn, randomizerGirlsNames;
randomGirlsNamesTd = document.getElementById('randomNameG');
randomGirlsNamesTdBtn = document.getElementById('randomNameGBtn');
randomizerGirlsNames = girlsNames[Math.floor(Math.random() * girlsNames.length)];

randomGirlsNameTd.innerHTML = randomizerGirlsNames;

randomGirlsNameTdBtn.addEventListener('click', () =>{
    let randomizer = girlsNames[Math.floor(Math.random() * girlsNames.length)]
    randomGirlsNameTd.innerHTML = randomizer;
});

// BOYS
let randomBoysNameTd, randomBoysNameTdBtn, randomizerBoysNames;
randomBoysNameTd = document.getElementById('randomNameB');
randomBoysNameTdBtn = document.getElementById('randomNameBBtn');
randomizerBoysName = boysName[Math.floor(Math.random() * boysName.length)];

// RANDOM
let randomNameTd, randomNameTdBtn, randomMixArray, randomizerRandomNames;
randomNameTd = document.getElementById('randomName');
randomNameTdBtn = document.getElementById('randomNameBtn');
// Es6 destructuring 
randomMixArray = [...girlsNames, ...boysNames];
// multiple to 0.5 give us absolute random
randomizerRandomNames = randomMixArray[Math.floor(Math.random() * 0.5 * randomMixArray.length)];

// By default output will be random name from Name Arrays

randomBoysNameTd.innerHTML = randomizerBoysNames;
randomNameTd.innerHTML = randomizerRandomNames;

// Buttons for G, B & R


randomBoysNameTdBtn.addEventListener('click', () =>{
    randomBoysNameTd.innerHTML = randomizerBoysNames;
});

randomNameTdBtn.addEventListener('click', () =>{
    randomNameTd.innerHTML = randomizerRandomNames;
});


