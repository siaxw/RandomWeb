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
let randomBOysNameArray = boysName[Math.floor(Math.random() * boysName.length)]
randomBoysName.innerHTML = randomBOysNameArray;

let randomName = document.getElementById('randomName');
let mixNameArray = girlsName.concat(boysName);
let randomNameArray = mixNameArray[Math.floor(Math.random() * mixNameArray.length)]
randomName.innerHTML = randomNameArray;