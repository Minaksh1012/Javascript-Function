function check_numbers(num1,num2) {
    if(num1%2===0 && num2%2===0){
        console.log("Both are Even")
    }
    else{
        console.log("Both are not even")
    }
}
input=require("readline-sync")
num1=input.question("enter the number")
num2=input.question("enter the 2nd number")
check_numbers(num1,num2)