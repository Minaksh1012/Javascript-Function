const input=require("readline-sync")
// var x=input.questionInt("enter the number")
// var y=input.questionInt("enter the second number")
// var z=input.question("enter the operator")


function calculatoe(a,b,c) {
    if(c=="-"){
        console.log( a-b)
    }else if(c=="+"){
        console.log( a+b)
    }else if(c=="*"){
        console.log(a*b)
    }else if(c=="/"){
        console.log(a/b)
    }
}
// console.log()
// const input=require("readline-sync")
// var a=input.questionInt("enter the number")
// var b=input.questionInt("enter the second number")
// var c=input.question("enter the operator")
calculatoe(x=input.question('enter the 1st number'),y=input.question('enter the 2nd number'),z=input.question('enter the operator'))