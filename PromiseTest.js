let promiseForTask = new Promise((resolve, reject) => {

let a =1 +2
if(a==3){
    resolve("success..")
}
else{
    reject("Fail..")
}
})

promiseForTask.then((message) => {
    console.log("What happend to Promise ??"+ message) // success come here..
}).catch((message) => {
    console.log("What happend catch to Promise ??"+ message) // reject will come here..
})