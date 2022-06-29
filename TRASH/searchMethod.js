let str = "Islom is a great programmer";
console.log(str.indexOf('great'));
console.log(str.lastIndexOf('great', 20));
console.log(str.search('Islom'));

var re = /ab+c/;
console.log(re);

let str1 = "Hi do you know your abc's?"
console.log(str1.indexOf('abc'));
console.log(str1.search(/abc/));

let str2 = "The latest airplane designs evolved from slabcraft";
console.log(str2.indexOf('abc'));
console.log(str2.search(/abc/));

let str3 = "cbbabbbbcabcdebc";
console.log(str3.indexOf("abc")); // 9
console.log(str3.search(/ab*c/)); // 3

let str4 = "The rain in SPAIN stays mainly in the plain";
console.log(str4.match(/ain/g));
console.log(str4.match(/ain/));
console.log(str4.includes('rain')); // true
console.log(str4.includes('islom')); // false
console.log(str.includes('Islom')); // true
console.log(str.includes('islom')); // false

let str5 = "Hello world, welcome to the universe";
console.log(str5.endsWith('universe')); // True
console.log(str5.endsWith('Hello')); // false
console.log(str5.startsWith('universe')); // false
console.log(str5.startsWith('Hello')); // true


let day = new Date;
let hour = day.getHours();
console.log(hour)

if(hour > 4 && hour < 8){
    console.log('Good morning');
}else if(hour > 12){
    console.log('Good day')
}else{
    console.log('Good night');
}