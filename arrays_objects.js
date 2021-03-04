console.log('arrays');
let marks=[34,23,234,93,73,25];
const fruits=['orange','apple','pineaple'];
const mixed=['str',89,[3,5]];

const arr=new Array (23,123,21,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits);
// in array indexong starts from 0

console.log(arr.length);
// this is returns the length of array
console.log(Array.isArray(arr));
// this will return boolean value as it is a method of Array class

// to access value of array
arr[0]='harry';

let arrelement=arr[0];

// this gives the index of a value in an array
let value=marks.indexOf(34);
console.log(value);

marks.push(3564);
console.log(marks);
// this add the value to the end of an array

marks.unshift(134);
console.log(marks);
marks.pop(3);
marks.shift(1);
marks.splice(1,2);
marks.reverse();
// original array,i.e marks array gets reversed
let marks2=[1,2,3,7];
marks=marks.concat(marks2);
// this concats the two arrays,both should be of the same let or const


// objects--

let myobj={
    name: 'harry',
    channel: 'code with harry',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myobj);
console.log(myobj.isActive);
console.log(myobj.channel);
// to store any value use array
// to store key values use objects to store them
