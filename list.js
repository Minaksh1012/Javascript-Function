function name() {
    
const input=require('readline-sync')
var num=input.question("enter the number")
var l=[]
var i=0
while (i<num){
    var name=input.question("enter the name")
    l.push(name)
    i++}


console.log(l)
}
name()