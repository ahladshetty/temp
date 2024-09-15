const rls = require('readline-sync')

// input from keyboard
let n = rls.questionInt('Enter the number of elements ')
let input = rls.question('Enter the elements separated by space ')
let nums = input.split(' ').map(Number);
console.log(nums)

function fn(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    console.log(sum);
}

// direct
// let arr = [-1, 0, 1, 2, -1, -4]
// let ans = fn(arr)
// console.log(ans)