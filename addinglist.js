// const { isAsyncFunction } = require("util/types")

// function adding_list(list1,list2) {
//     for (i=0;i<=4;i++){
//         a=(list1[i]+list2[i])
//         console.log(a)
//     }
    
// }
// // console.log(a)
// adding_list([10,20,30,66,1],[10,22,33,7,99])

// function add_numbers(num1,num2){
//     console.log(num1+num2);
//     console.log("------------");
//  }
  
//  function add_numbers_list(list1,list2){
//     for(var i=0;i<3;i++){
//         add_numbers(list1[i],list2[i]);
//     }`
//  }
  
//  add_numbers_list([50, 60, 10],[10, 20, 13])



// ANONYMOUS Function

// let lis=function (list1,list2) {
//     for(i=0;i<list1.length;i++){
//         a=(list1[i]+list2[i])
//         console.log(a)
//     }
// }
// ([10,20,30,66,1],[10,22,33,7,99])


// ARROW FUNCTION

const lis=(list1,list2)=>{
    for(i=0;i<list1.length;i++){
        a=list1[i]+list2[i]
        console.log(a)
    }
}
lis([10,20,30,66,1],[10,22,33,7,99])