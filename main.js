import { boysNames } from "./bnames.js";
import { girlsNames } from "./gnames.js";

const randomGirlsName = document.getElementById('randomNameG');
const randomGirlsNameBtn = document.getElementById('randomNameGBtn');
let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];

console.log(randomGName)

randomGirlsName.innerHTML = randomGName;

randomGirlsNameBtn.addEventListener('click', () =>{
    let randomGName = girlsNames[Math.floor(Math.random() * girlsNames.length)];
    randomGirlsName.innerHTML = randomGName;
})
