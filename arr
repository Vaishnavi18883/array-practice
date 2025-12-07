let arr= [3, 5, 2, 8, 7, 10];
let count = 0;
for(let i = 2; i<arr.length;i++){
  if(arr[i]>arr[i-2]){
     count++
  }
}
console.log(count);
