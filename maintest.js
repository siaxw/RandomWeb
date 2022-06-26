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



