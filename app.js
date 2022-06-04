const girlsName = [
    "Maria",
    "Janna",
    "Kamilla",
    "Inna",
    "Mika",
    "Shadi",
    "Lili",
    "Lisa",
    "Slovenia",
    "Mahbuba"
];

const boysName = [
    "Islom",
    "Munis",
    "Usmon",
    "Rahim",
    "Kodir",
    "Mansur",
    "Aziz",
    "Karim",
    "Ozod",
    "Shahrom"
];


let randomGirlsName = document.getElementById('randomGirlsName');
let randomGirlsNameArray = girlsName[Math.floor(Math.random() * girlsName.length)];
randomGirlsName.innerHTML = randomGirlsNameArray;

let randomBoysName = document.getElementById('randomBoysName');
let randomBoysNameArray = boysName[Math.floor(Math.random() * boysName.length)]
randomBoysName.innerHTML = randomBoysNameArray;

let randomName = document.getElementById('randomName');
let mixNameArray = girlsName.concat(boysName);
let randomNameArray = mixNameArray[Math.floor(Math.random() * mixNameArray.length)]
randomName.innerHTML = randomNameArray;

let girlsButton = document.getElementById('anotherGirlsButton');
let boysButton = document.getElementById('anotherBoysButton');
let randomButton = document.getElementById('anotherRandomButton');

girlsButton.addEventListener('click', ()  =>{
    let randomGirlsNameArray = girlsName[Math.floor(Math.random() * girlsName.length * 0.5)];
    return randomGirlsName.innerHTML = randomGirlsNameArray;
})

boysButton.addEventListener('click', () =>{
    let randomBoysNameArray = boysName[Math.floor(Math.random() * boysName.length * 0.5)]
    return randomBoysName.innerHTML = randomBoysNameArray;
} )

randomButton.addEventListener('click', () =>{
    let mixNameArray = girlsName.concat(boysName);
    let randomNameArray = mixNameArray[Math.floor(Math.random() * mixNameArray.length * 0.5)]
    return randomName.innerHTML = randomNameArray;
})