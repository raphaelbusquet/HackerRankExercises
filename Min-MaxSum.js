function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let minSum = 0;
    let maxSum = 0;
    let largest = arr[0];
    let smallest = arr[0];
    
    for (let i = 0; i < arr.length; i++){
         if (arr[i] > largest){
             largest = arr[i];
         } else if (arr[i] < smallest){
             smallest = arr[i];
         }
    }
    
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    minSum = sum - largest;
    maxSum = sum - smallest;
    
    console.log(minSum, maxSum)
}