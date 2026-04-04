
function smallestnum(arr){
    let min= arr[0];
    for(let i= 1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;

}
console.log(smallestnum([3,2,1,4,5,7]));
