const name = [
    "islom",
    "usmon",
    "munis",
    "rahmon",
    "rahim",
    "abdu",
    "abu"
];

name[0] = "murod";
console.log(name)

const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Orange";
fruits[2] = "Kiwi";
fruits[3] = "Watermelon";
fruits[4] = "Lemon";
fruits[6] = "Coconut"
console.log(fruits)

const firstName = "Islom";
const greeting = "Hello";
const q = "do you wanna eat?"
console.log(greeting + ", " + firstName + "!");

console.log(`${firstName}, ${q}`)

var foo = 1;

function myFun(){
    console.log(foo);
    var foo = 2;
}
console.log(myFun())

console.log(cryBaby);
var cryBaby = 1

let price = 10, VAT = 0.25;
let total = `Total: ${(price * (1 * VAT)).toFixed(2)}`;
console.log(total)

let x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

let y = 9.656;
console.log(y.toPrecision());
console.log(y.toPrecision(2));
console.log(y.toPrecision(4));
console.log(y.toPrecision(6));
console.log(y.valueOf());

const person = {
    fname:'Islom',
    lname:'Sattorov',
    age:23    
};

console.table(person);
console.log(person);
console.trace(person);

let a, b, rest;
[a, b] = [10,20];
console.log(a);
console.log(b);
[a,b, ...rest] = [10,20,30,40,50];
console.log(rest)

const firstArray = [
    1,
    2,
    3,
    4,
    5
];

const secondArray = [
    6,
    7,
    8,
    9,
    10
]

const thirdArray = [...firstArray,...secondArray];
console.log(thirdArray)

const s = [1,2,3,4,5];
const [v,z] = s;
console.log(v);
console.log(z); 

const foooo = ['one', 'two', 'three'];
const [red, yellow, green] = foooo;
console.log(red);
console.log(yellow)
console.log(green)
console.log(foooo)



let text = '';
for(let x in person){
    text += person[x];
};

console.log(text);

const numbers = [45,4,9,16,25];
let txt = "";
for(let x in numbers){
    txt += numbers[x];
}

console.log(txt)



const numbers1 = [45,24,9,16,25];
let txt1 = "";
let txt2 = "";
let txt3 = "";
numbers1.forEach(MyFunction);

function MyFunction(value, index, array){
    txt1 += value;
    txt2 += index;
    txt3 += array;
}

console.log(txt1);
console.log(txt2);
console.log(txt3);

function medalForScore(score){
    if(score < 3){
        return "Бронзовая"
    }
    
    if(score < 7){
        return "Серебрянная";
    }
    
    return "Золотая"
};

console.log(medalForScore(7))

function medalForScore1(score){
    if(score < 3){
        return "Bronze"
    }else if(score < 7){
        return "Silver"
    }else{
        return "Gold"
    }
}

console.log(medalForScore1(2));

let txt4 = "";
let i = 1;
while(i <= 10){
    txt4 += "The number is " + i + "!";
    i++;
}

console.log(txt4);

let txt5 = "";
let p = 10;
do{
    txt5 += "The number is " + p + "!";
    p++
}
while(p < 10);

console.log(txt5);
console.log(p);

const cars = [
    "BMW",
    "Audi",
    "Nexia",
    "Opel",
    "Mercedes-Benz",
    "Lamborghini",
    "Ferrari"
]

let txt6 = "";

for(let i = 0; i < cars.length; i++){
    txt6 += cars[i] + "<br>";
}
console.log(txt6);
