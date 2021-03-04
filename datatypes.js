/*
datatypes in  js-
1.primitive(base datatype) and 
2.reference data type(objects or derived datatypes)

1.primitive are stacks,boolean,null,undefined,symbol
2.reference datatypes include arrays,object literals,functions,dates
string,number and refernece is heap
*/
// string is collection of character
// number is not written in quotes
// boolean is true or false,i.e. t or f
// null is an intensional empty value
// undefined is a variable where default value is undefined
// in js latest version symbol is defined
console.log('datatypes');
// primitive datattypes

// string
let name="harry";
console.log("my string is" + name);
console.log("data type is" + (typeof name));
// typeof gives the type of datatype being used

// numbers
let marks=34;
console.log("data type is"+(typeof marks));

// boolean
let isDriver =true;
console.log("data type is " + (typeof isDriver));

// Null
let nullVar=null;
console.log("data type is "+ (typeof nullVar));
// null is primitive datatype,and return value is bogus.
// undefined
let undef= undefined;
console.log("data type is" + (typeof undefined));

// Reference datatypes

//  arrays
let myarr=[1,2,3,4];
console.log("data type is" + (typeof myarr));

// object literals
let stMarks ={
    harry:89,
    shubham:36,
    Rohan:34
}
console.log(stMarks);
console.log(typeof stMarks);

// functions
function findName(){

}
console.log(typeof findName);

// date
let date=new Date();
console.log(typeof date);
