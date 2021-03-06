// type conversion--

console.log('typeconversion and coercion');

let myVar;
myVar= String(34);
console.log(myVar, (typeof myVar));

let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

let date=new Date();
console.log(date, (typeof date));

let arr=[1,2,3,4,5];
console.log(arr, (typeof arr)); 

let i=8;
console.log(i.tostring);

let number=parseFloat('34.098');

console.log(number.toFixed(2),(typeof number));
// tofixed is to decide how many decimal points to see after a number

// type coercion--
let mystr ="698";
let mynum=34;
console.log(mystr + mynum);
