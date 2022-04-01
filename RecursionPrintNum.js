function countdown(number) {
    //display the number
    console.log(number)
    //decrease the number value
    const newNumber=number-1
    // base case
    if(newNumber>0){
        countdown(newNumber)
    }
}
countdown(4)