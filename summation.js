function lis(a) {
    list=[1,2,3,4,5]
    var i=0
    sum=0
    while(i<list.length){
        if(a<list[i]){
            sum+=list[i]
        }
        i++
    }
    console.log(sum)
}
const input=require("readline-sync")
lis(a=input.questionInt("enter the number"))