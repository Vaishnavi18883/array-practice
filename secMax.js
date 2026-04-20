function secMax(arr) {
    if(arr.length < 2 ){
        return null
    }

    let max = -Infinity;
    let sMax = -Infinity;


    for(let i = 0; i<arr.length; i++){
        if(max<arr[i]){
            sMax = max;
            max = arr[i]
        }else if(arr[i]>sMax && max !== arr[i]){
            sMax = arr[i]
        }
    }
    return sMax === -Infinity ? null : sMax;
}
