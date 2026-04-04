function maxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i= 1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return{max,min}

}
console.log(maxMin([2,3,4,5,5,5,1,8,9]))
