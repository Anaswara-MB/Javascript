//Print command
console.log('Hello');
//Variables
a=10;   //Non-declared variables
console.log(a);
var a=10;    //variable declaration
console.log(a); //value is 10
{
var a=90; //value to 90
console.log(a); 
}
console.log(a);
var a=23;
console.log(a);
let b=24;
console.log(b);
{
    let b=23;
    console.log(b);
}
console.log(b);
b=45;
console.log(b);
const v=56;
{
    const v=78;
    console.log(v);
}
console.log(v)
//Datatypes
console.log(typeof(v));
let firstName='My name is Maya';
console.log(typeof(firstName));

let isAvailable=true;
console.log(typeof(isAvailable));
//Undefined
var t;
console.log(typeof(t));

var st=0;
  console.log(typeof(st));  

  //Arrays
  let arr1=[1,2,3,4,'mridula'];
  console.log(arr1[5]);
//JS Objects
let person={
    name:'Mridula',
    age:32,
    place:'TVM'
}
console.log(person.place)
//Use new ketword in JS
let car=new Object();
car.brand='Hyundai',
car.model='i10',
car.color='black';
console.log(car);
var arr_obj=[{name:'Maya',location:'Kochi'},{name:'Meera',location:'TVM'}]
console.log(arr_obj[1].location)

//Operators
let tr=8;
console.log(tr+=3);
//Increment operator
let inc=7; //first variable
let inc1=++inc; //second variable
console.log(inc1);
console.log(inc);
//Conditional satements
if (inc===inc1) {
    console.log('The values are equal')
    } else {
    console.log('The values are not equal')
    }
// Example activity
    let x= 10;
    let y= 5;
    console.log(x);
    console.log(y);
    if(x>y){
        console.log('x is greater than y');
    } else if( 'x<y') {
    console.log('x is less than y');
    } else {
        console.log('x is equal to y');
    }
//Logical Operators
if((inc===inc1)|| (inc==89)){
console.log('Both values are equal and inc value is 89')
}
else{
    console.log('The condition check failed');
}
let re=90;
let ne=100;
let m=(ne-re)+(8**2);
console.log(m);
//Functions
function addval(ad1,ad2) {  //Function declaration
   var sum=ad1+ad2;
   console.log('The calculated sum is '+sum); //+sum is concatenation
}
addval(10,20);//Function call

//Subtraction function
function subval(v,w) {
  var sub=v-w;
  console.log('The calculated subtraction is +subtract');
}
subval(5,8);

// Multiplication function
function multiply(v,w) {
   return v*w; 
}

// Division Function
function divide(v,w) {
    if (w!==0){
        return v/w;
    }else {
        return" Cannot divide by zero";
    }  
}
//Looping statements
//write a program for printing the numbers from 1 to 10
for (let i= 0; i<10; i++) {
    console.log(i+1);
    
}
for (let i = 1; i<=10; i++) {
    console.log(i);
    
}
//create an array with 5 elements and print all the elements in the array
let myArray =[10,20,30,40,50];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
}
let arr3=['apple','orange','pear','grape','berry'];
for(let i=0;i< arr3.length;i++){
    console.log(arr3[i]);
}
//for of loop
for(item of arr3){
    console.log(item);
}
//for in loop
let person1={name:'Joe',age:78,place:'tvm'}
for(item in person1){
    console.log(person1[item]);
}
//while loop
let j=1;
while(j<=10){
    console.log(j);
    j++;
}

// array printing using while loop
let arr4=['apple','orange','pear','grape','berry'];
while(i<arr4){
    console.log(arr4+1);
    i++;
}
//do while
do {
   console.log(j);
   j++; 
} while (j<=10);