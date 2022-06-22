import { boysNames } from "./bnames.js";
import { girlsNames } from "./gnames.js";


// Girls
const randomGirlsName = document.getElementById('randomNameG');
const randomGirlsNameBtn = document.getElementById('randomNameGBtn');
let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];

console.log(randomGName)

randomGirlsName.innerHTML = randomGName;

randomGirlsNameBtn.addEventListener('click', () =>{
    let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];
    randomGirlsName.innerHTML = randomGName;
})


//Boys
const randomBoysName = document.getElementById('randomNameB');
const randomBoysNameBtn = document.getElementById('randomNameBBtn');
let randomBName = boysNames[Math.floor(Math.random() * boysNames.length)];

randomBoysName.innerHTML = randomBName;

randomBoysNameBtn.addEventListener('click', () =>{
    let randomBName = boysNames[Math.floor(Math.random() * boysNames.length)];
    randomBoysName.innerHTML = randomBName;
})