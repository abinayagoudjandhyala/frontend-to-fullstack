//console.log("Hello World");
let name='Mosh';
console.log(name);
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number 
//cannot contain a space or hypen(-)

let intrestRate=0.3;
intrestRate=1;
console.log(intrestRate);
//primitive-Strings,Number,Boolean,Undefined,null

//Reference Types- Objects,Arrays,Functions

let name2="Abinaya";
let age=21;
let isApproved=true;
let firstName=undefined;
let LastName=null;

// in console typeof name

let person = {
  name: "AbinayaGoud",
  age:30
};
console.log(person);

// Dot Notation
person.name='John'; //shorter

let selection ='name';
person[selection]='Mary'; 

// person[name]='Mary';
console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2]='green';
console.log(selectedColors.length);


// Performing a task
function greet() {
    console.log('Hello World');
}
greet();
function greet2(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet2('abinaya', 'goud');

//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));