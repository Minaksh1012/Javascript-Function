// const { count } = require("console")

function isGreaterThan20(num) {
    if(num>20){
        return true
    }
}

function student(list_of_marks) {
    count=0
    for(var i of list_of_marks){
        var result=isGreaterThan20(i)
        if(result===true){
            console.log(count)
            count++
        }

    }
    console.log(count)
}
// console.log(count)
student([21,25,19,25,33,54])