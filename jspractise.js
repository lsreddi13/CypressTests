//this is javascript practise

console.log("this is javascript")


let name = "Sasidhar"

console.log(name)
// name is a var with string type
// understand the primitive data types
// in javascript no need to mention the var type, it will take automatically.


let name2 = 10457 // this is number type var
console.log(name)

let name3 = 10457.9 // this is duouble / float type var
console.log(name)

let name4 = true // var is boolena type 
console.log(name)

let name5 // undefined var 
console.log(name)

//note - naming convention vars
let a = 7
a = 9 // reassign value to the var
a = "sasidhar"  // reasign the value to the same var with diff type of var type.
console.log(a)

console.log(typeof(a)) // find the type of var when we assign and reassign..


let c = null
c = 9
console.log(c)
console.log(typeof(c))

//constant values, which you should not change once you assing it.
// we can use 'const' keyword
const username = "sasidhar"
// username=9
console.log(username)
console.log(typeof(username))

//note - conditions
//if, if-else, if-elseif- else

let age = 30
if(age>18){
    console.log("you can vote")
}
else{
    console.log("you can not vote")
}

let age2 = 18
if(age2>18){
    console.log("you can vote")
} 
else if(age2 = 18){
    console.log("you can vote")
}
else{
    console.log("you can not vote")
}


// let age = age>18?true  == complete the condition in a single line this is advanced.

//note - loops
let i=0
while (i<5) {
console.log(i)
i++    
}

for (let k = 0; k < 5; k++) {
    // const element = array[index];
    console.log(k)
    
}
/*
array.forEach(element => {
    
});

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        

        for (const iterator of object) {
            
        }
    }

    for (const iterator of object) {
        
    }
}
*/

/*
for (const iterator of object) {
    
}
*/

//note - reference types
//object, array, function

