
let a = 5 // this is global var
function product(num1, num2){
    return num1*num2 // return multiplication value

    let b = 4 // local var
}

console.log(a) // calling globla  var - it will pass.
console.log(b) // calling local var - it will throw error.

