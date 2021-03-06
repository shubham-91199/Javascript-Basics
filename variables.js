console.log('variables');
// variables are created in js using var,let,const
// varibales is a container to assign data
var name = 'harry';
var channel;
var marks= 34;
// harry is stored in name variable using var.var has global scope
console.log(name,channel,marks);
/*
rules for creating javascript variables
1.cannot start with nos
2.can start with letters,numbers, _ or $.Try not to use _ and $ while declaring variable names.
3.are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersname= 'Hari Ram';

// const is used for declaring varibales whose value cannot be changed once declared.while declaring variables using var the value of var ca be changed but if the value of variable is not changing throughout the script,then declare the variable using const
console.log(ownersname)
// let has block level scope.block is {}

{
    let city='rampur';
    city='kolkata';
    console.log(city);
}
// let only works inside the above block.the variable city can be changed if it is inside the above block.if it is outside the block,then it will become a global variable.
console.log(city);
// try to use let and const and try to avoid var
// if const is used to declare an array,values can be added to that array,but a new array can be added to that variable

/*Most common programming case types-
1.camelCase
2.kebab-Case
3.snake_case
4.PascalCase
camelCase is used much for convenience 
*/