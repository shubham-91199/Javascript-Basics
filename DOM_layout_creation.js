console.log('Understanding Dom and creating a website layout');
let a=document;
a=document.all;
a=document.body;
a=document.forms;
Array.from(a).forEach(function(element){
    console.log(element);
})
// array.from creates an array using a

a=document.links;

console.log(a);