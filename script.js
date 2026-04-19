console.log("hello world");
console.log("i am jit");
console.log(10);

//varriables

fullname = "satyajit kundu";
age = 18;
console.log(fullname);
console.log(age);

//var,let,const

let fullName = "satyajit kundu"
console.log(fullName);
fullName = "jit kundu" //change the value

var water = 10;
var water = 12;
console.log(water);

const pineapple = 11;
console.log(pineapple);

{
    let x=10;
    console.log(x);
};//this is a block

{
    var y=122;
}
console.log(y);

//Data type 
// primitive
//1.number
let pnumber = 40.44;
//2.string
let pstring = "satyajit";
//3.boolean
let pboolean = true;
//4.undefined
let pundefined = undefined;
//5.null
let pnull = null;
//6.bigint
let pbigint = BigInt;
//7.symbol
let psymbol = Symbol;

//Non primitive
//1.object
const student ={
fullname:"satyajit kundu",
age:18,
cgpa:5.5,
ispass:false
}
console.log(student);
//you can also print a single value
console.log(student.fullname);
console.log(student["fullname"]);
//if you want to change the value of a key in the object
student.fullname = "jit kundu";
console.log(student);
student.age = student.age+1;
console.log(student.age);