console.log('manipulating websites using objects');
/*DOM-document object model
DOM is part of window.It is part of client side,which can be viewd on console in chrome.
*/
let a=window.document;
/*window.*/alert('hello harry');
// window is global object,so whether it is written or not it does not matter.

a=prompt('this will destroy your computer');
// prompt gives a promt and whatever is typed in it,gets stored in the variable assigned to prompt.

a=confirm('are you sure you want to delete this page');
// confirms returns a boolean value-true or false in console.

 a=window.innerHeight;
 a=window.innerWidth;
//  they give the width and height of window
a= scrollX;
a=scrollY
// they give the scrolled simensions in x and y axis respectively.
a=location;
// location has many methods inside it,which can be done by a=location.method name;

a=window.history;
// the history function has functions which can be used to go forward or backward.


console.log(a);