let calc = function(num1, num2, calType){
    if(calType=== "add"){  // === validate the datatype of var 

        return num1 + num2;
    }

    else if (calType=== "multiply"){
        return num1 * num2;
    }
}

console.log(calc(2,3, "add"));

console.log(calc(3,4, "multiply"));