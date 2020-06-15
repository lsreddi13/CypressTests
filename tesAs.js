const { expect } = require("chai");

describe("chaijs expect", function() {

    it("assert", function(){
        let name = "sasidhar";    
        console.log(name.length)
        expect(name).to.be.a("String");
        name

    })

  
})