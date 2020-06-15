let x = function(){
    console.log("Executing X")
}

let y = function(callback){
    console.log("Executing Y")
    callback()
}
// y(x)
x(y)