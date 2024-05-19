let a = "Hello"; // double quotes
let b = 'world'; // single quotes
let c = `There`; // template literals


console.log('length',a.length);
console.log('index', a[3]);
console.log('position',a.indexOf('o'));
a[2] = 'f';
console.log({a});

// types of concetenation: +, template literals

// concatenation

let d = a + " "  +b;
console.log({d});

// template literals

let e = `${a} ${b}. I like coding! `;

console.log({e});



const string3= "The pupils are reading in the library";
const subscript = "are";
console.log(string3.includes(subscript));
console.log(string3.length);

console.log(string3.indexOf("are"));

