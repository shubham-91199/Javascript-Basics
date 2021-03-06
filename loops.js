// for loop
// for(let i=0; i<100; i++)
// {
//     console.log(i);
// }

// while loop
// let j=0
// while(j<100)
// {
//     console.log(j);
//     j++;
// }

// do-while loop
// let k=0;
// do{
//     console.log(k);
//     k++;
// }
// while(k<100)

// to iterate in an array
let arr1=[2,5,6,7,4,3,2];
arr1.forEach(function(element,index,array){console.log(element,index,array);}
);

// OR
let arr2=[3,5,6,3,2,4,5];
for(let i=0;i<arr2.length;i++)
{
    const element=arr2[i];
    console.log(element);
}

// to iterate using for loop to print the key objects in js---
let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}