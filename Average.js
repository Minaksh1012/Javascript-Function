// function average(num1,num2,num3){
//     console.log("sum of three numbers -",num1+num2+num3);
//     console.log("Average of three numbers -",(num1+num2+num3)/3);
//  }
  
//  const input = require('readline-sync');
//  let number1 = input.questionInt('Enter the number1 :- ');
//  let number2 = input.questionInt('Enter the number2 :- ');
//  let number3 = input.questionInt('Enter the number3 :- ');
//  average(number1,number2,number3);


// ANONYMOUS FUNCTION
// let average=function (num1,num2,num3) {
//     console.log('sum of three numbers-',num1+num2+num3)
//     console.log("Average of three numbers-",(num1+num2+num3)/3)
// }
// const input=require('readline-sync')
// let num1=input.questionInt('enter the number1 :-')
// let num2=input.questionInt('enter the number2 :-')
// let num3=input.questionInt('enter the number3 :-')
// average(num1,num2,num3)


// ARROW FUNCTION

const average=(num1,num2,num3)=>{
    console.log('sum of three numbers-',num1+num2+num3)
    console.log('Average of three numbers-',(num1+num2+num3)/3)
}
const input=require('readline-sync')
let num1=input.questionInt('enter the number1 :-')
let num2=input.questionInt('enter the number2 :-')
let num3=input.questionInt('enter the number3 :-')
average(num1,num2,num3)


