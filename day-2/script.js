const Person={
    firstName:"Rkgun"
}

Object.defineProperty(Person,"getName",{
    get : function(){
        return this.firstName;
    }
});

Object.defineProperty(Person,'setName',{
    set: function(value){
        this.firstName=value;
    }
});


function Student () {
    this.name = 'Rkgun',
    this.age = 23
}

const student = new Student();

Student.prototype.gender = 'male';
console.log(Student.prototype);

Student.prototype.greet=function(){
    console.log('Hello '+this.name);
}

student.greet();

Student.prototype.age = 24;
console.log(student.__proto__); 

const words=['eat','sleep','watch'];
const array=new Array('eat','sleep','watch');
console.log(words);
for(i=0;i<array.length;i++){
    console.log(array[i])
}
console.log(array[0])

const newdata=[
    {'key':'sleep'},
    true,
    [1,2,3],
    function hello(){console.log('hello');}
];

for(i=0;i<newdata.length;i++){
    console.log(newdata[i]);
}

let activities=['eat','sleep'];
activities.push('exercise');
activities.unshift('work');
console.log(activities);
activities.pop();
console.log(activities);
activities.shift();
console.log(activities);

let arr=[1,2,3];
const arr2=[4,5,6];
console.log(arr.concat(arr2));
console.log(newdata.indexOf(true));

arr.forEach(myFunc);

function myFunc(item){
    console.log(item);
}

console.log(arr.includes(4));

console.log(arr.concat(arr2).slice(1,4));

arr = ['h', 'e'];
arr.name = 'rkgun';

console.log(arr);
console.log(arr.name);

let s1=['rkgun',24]
let s2=['redday',24]
let s3=['quin',24]
let sp=[s1,s2,s3]
console.log(sp)

sp.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

for(i of sp){
    for(let j of i){
        console.log(j)
    }
}


/*
The try and catch statements handle exceptions in a standard way which is provided by JavaScript. However, you can use the throw statement to pass user-defined exceptions.
*/

const numerator= 100, denominator = 'a';

try {
    console.log(numerator/denominator);
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}


try {
    setTimeout(function() {
        console.log(numerator/denominator);
        console.log(a);
    }, 3000);
} catch (e) {
  console.log( "won't work" );
}


/*When the throw statement is executed, it exits out of the block and goes to the catch block. And the code below the throw statement is not executed.*/
a = 40;
b=0;
try {
    if(b !== 0) {
        console.log(a/b);
    }
    else {
        throw new Error(`a=${a} b=${b}} this numbers aren't divided`);
    }
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

//arrow function

//standart functions

x = function(x, y) {
    return x * y;
}

// function expression using arrow function
x = (x,y) => x*y;

//promises
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

countValue.then(
    function successValue(result) {
        console.log(result); 
    },
)

//classes
/*JavaScript class is used to create an object. Class is similar to a constructor function.*/

class Per {
  constructor(name) {
    this.name = name;
  }
}

const person = new Per('rkgun');

console.log(person.name);

//destructuring
//The destructuring syntax makes it easier to assign values to a new variable.

const user= {
    name: 'rkgun',
    age: 23,
    gender: 'male'    
}

let { name, age, gender } = user;

console.log(name); 
console.log(age); 
console.log(gender);


//rest parameter

function multiply(a, b, ...args) {
    let total=a*b;
    args.forEach(function(item){
        total*=item;
    });
    console.log(total);
}
multiply(1,2,3,4,5,6);

//maps

let map=new Map();
map.set('info',{name:'rkgun',age:23},'address',{city:'ankara',neighbor:'keçiören'});
console.log(map);
console.log(map.has('info'));
map.delete('address');
console.log(map)




