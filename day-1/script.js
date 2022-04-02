//this is a comment line

// There are multiple ways to output in js. These: console, document, window, html,


//console.clear() => clean the console

//console.log()

console.log('rkgun');
console.log(3+6);

window.alert('rkgun');
window.alert(3+6);

document.write('rkgun');
document.write(3 + 6);

//console.error() => write the error level console log
console.error('This is a error message');

//console.info() => write the information log
console.info('This is a information message');

//console.warn() => Outputs a warning message
console.warn('Warning warning 3 days until the end of the world');


/*data types JS is have 8 data type they are..: number,string,BigInt,Boolean (true/false), undefined,null,symbol,object*/

// x,y,z type is number
let x,y,z;
x=5;
y=6;
z=x+y;

//Js is have 3 type of tick they are..: ' (one tick), " (double tick),` (backtick)

//name,nick,result type is it string

var name='rkgun';
let nick="rkgun_10";
//backtick is used manipulated string/output
const result=`${name} is learn the JS`;

//isChecked types Boolean
let isChecked=true;

//undef types undefined
let undef;

//value types Symbol
let value = Symbol('hello');

//student is a Object type
let student = { };

// val is a null type
let val=null;


//what is the let vs var vs const

/*The variable defined with the const key word cannot be changed after the application is started

Var is a functional key word 
let,const blockable key word
What is the block? Block is snippet written in curly braces.*/

/*
object delaration

let object={
    key1:value1,
    key2:value2,
    ...
    ...
    ...
    keyN:valueN
}
*/

let people={
    name: 'rkgun',
    age: '23',
    //skills is a array
    skills:[
        'C#',
        'HTML&CSS',
        'Python',
        'JS',
        'Vue'
    ]
}

//Js operators

//What is an Operator?
/*In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,*/

let a= 2+3; //a=5 (+) => math operator

//Assigment operators

let k=3; // (=) standart assign operator
console.log(k);
k+=3; // k=6 (+=) => addition assign operator
console.log(k);
k-=3; //k=3 (-=) => subtract assign operator
console.log(k);
k*=3; //k=9 (*=) => multiplact assign operator
console.log(k);
k/=3; //k=3 (/=) => division assign operator
console.log(k);

//Arithmetic operators
k=3+2; //k=5 addition
console.log(k);
k=3-1; //k=1 subtraction
console.log(k);
k=3*2; //k=6 multiply 
console.log(k);
k=6/2; //k=3 division
console.log(k);
k=2**2; //k=4 power
console.log(k);
k=5%2; //k=1 remainder
console.log(k);

//Compare operators
a=2;
b=3;
c='2';
console.log(a<b);   //write true a is letter b
console.log(a>b);   //write false a is not bigger b
console.log(a==b);  //write false a isn't equal b
console.log(a!=b); //write true a is not equal b
console.log(a<=b);  //write true b is bigger then a
console.log(a>=b);  //write false a isn't bigger then b
console.log(a===c);
console.log(a!==c);



//logic operators
console.log(true && true);
console.log(true || false);
console.log(!true);


//string concat

a= "I'm learn"+' JS';
console.log(a);

a="I'm learn";
a+=' JS string concat';
console.log(a);

a= (5>3) ? 'true' : 'false';
console.log(a);

//typeof(var x) => return x type

console.log(typeof(a));

//if-else if-else statement

// if...else statement to create decision making programs
a='cat';
if(a==='dog'){
    console.log('hav hav hav');
}
else if(a==='cat'){
    console.log('mrrrrr');
}
else{
    console.log('I dont have this animal sounds');
}

// prompt like window.alert(); but read the variable
const number = prompt("Enter a number: ");
if (number > 0) {
  console.log("The number is positive");
}

//loops
/*A loop usually does a job/operation/action
used in situations where it needs to be executed more than once*/

// for loop
/*
for(start value;condition;counter){
    Action
}
*/

for(let i=1;i<=5;i++){
    console.log(i);
}

//while loop

/*
while(condition){
    action
}
*/

i=1;
while(i<=5){
 console.log(i);
 i++;
}

//do-while loop
/*
do{
    action
}while(condition)
*/

i=1;
do{
 console.log(i);
 i++;
}while(i<=5)

//break is break statement is used to terminate the loop

for (i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

/*
The JavaScript switch statement is used in decision making.
The switch statement evaluates an expression and executes the corresponding body that matches the expression's result
*/

a = 2;

switch (a) {
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);


//function: A action that needs to be used repeatedly is defined in memory as a constant and can be used when needed.

//declare a func
function greet() {
    console.log("Hello there");
}

//func call
greet();


/*recursive functions: a recursive function must reach the result in itself
is the function that calls the previous step.*/

function factorial(x) {

    if (x === 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

let obj={
    name:'rkgun',
    age:22,
    greet:function(){console.log('Hello '+name)}
}
console.log(typeof(obj));
console.log('Name..:'+obj.name);
console.log('Age...:'+obj["age"]);
obj.greet();


//constructor function
function Person(){
    this.name='rkgun';
    this.age=23
}

const person = new Person();
console.log(person.name);
const person2 = new Person();

person.greet=function(){
    console.log('Hello '+ person.name);
}

const per = {
    firstName: 'Monica',

    get getName() {
        return this.firstName;
    },
    set setName(newName){
        this.firstName=newName;
    }
};


console.log(per.getName);
per.setName='Miya';
console.log(per.getName);