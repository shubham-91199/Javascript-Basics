console.log('if else/switch');
const age=19;

if(age==19)
{
    console.log('age is 19');
}
else
{
    console.log('age is not 19');
}

if(age==19)
{
    console.log('age is 19');
}
else if(age==65)
{
    console.log('age is not 65');

}
else{
    console.log('age is not 19');

}
// for comparing the value use ==
// to compare both value and datatype of the variable use ===

// switch case
switch (age){
    case 18:
        console.log("you are 18");
        break;
    case 19:
        console.log("you are 19");
        break;  
    case 28:
        console.log("you are 28");
    default:
        console.log("you are unknown age");    
        break;        
}

