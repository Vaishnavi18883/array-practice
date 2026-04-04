function largetnum(arr) {
    let max = arr[0];
    for(let i=1; i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
    
}
console.log(largetnum([3,4,5,67,8,89]))
