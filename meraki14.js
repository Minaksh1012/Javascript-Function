function addingList(l1,l2) {
    for(i=0;i<l1.length;i++){
        if (l1[i]%2==0 && l2[i]%2==0){
            console.log("dono even hai")
        }if ((l1[i]%2==0 && l2[i]%2!=0)||(l1[i]%2!=0 && l2[i]%2==0)||(l1[i]%2!=0 && l2[i]%2!=0)){
            console.log("Dono even nahi hai")
        
        }
    }
}
addingList([2,6,18,10,3,75],[6,19,24,12,3,87])