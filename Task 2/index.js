/**
 * Task 2: Data Manipulation
Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/
// Using Reduce builtin function
function sumOfAllNumbers(arr){
    return arr.reduce((acc,currentItem)=>acc+currentItem,0)
}

// Without builtin function
function sumOfArray(arr){
    let sum =0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

let arr = [1,2,10,4,5]

console.log(sumOfAllNumbers(arr))
console.log(sumOfArray(arr))