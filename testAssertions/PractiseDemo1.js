const { assert, should, expect } = require("chai")

describe("Cypress Assertions.", function(){
    it("this is first test method.", function() {
       
        //assert
        // assert.isOk('everythig is fine',  'ever' );
        
        // console.log("dfadsf", assert.isNotOk(false,  'dfadsfasdf' ))

        // console.log(assert.fail("custom message."))
        // assert.fail(1,2);
        // console.log("99999999999999", assert.fail(1,2))
        // assert.fail(1,2, "Custom error message");
        // console.log(assert.fail(1,2, "Custom error message"))
        console.log( assert.fail(1,2, "Custom error message", ">"))
        assert.fail(1,2, undefined, ">");

    })

    it(" .isNotOk ", function(){
        assert.isNotOk(false, "this will pass.")
    })
    it(" .isNotOk2 ", function(){
        assert.isNotOk('everything', "everything is ok")
    })

    it(" .isOk ", function(){
        assert.isOk(false, "this will fail.")
    })

    it(" .isOk2 ", function(){
        assert.isOk('everything', "everything is ok")
    })

    it(" .equal-actual-expected-message-pass ", function(){
        assert.equal(3,3, 'not matched.')
    })

    it(" .equal-actual-expected-message fail ", function(){
        assert.equal(2,3, 'not matched.')
    })

    it(" .equal-int and string ", function(){
        assert.equal(3,'3', 'not matched.')  // this case will pass even you compare with different data types with same value.
    })

    it(" .equal-int and string ", function(){
        assert.equal(3,'4', 'not matched.')  // this case will fail value is not same.
    })

    it(" .not equal ", function(){
        assert.notEqual(3,4, 'not matched.')  
    })

    it(" .not equal2 ", function(){
        assert.notEqual(3,3, 'not matched.')  
    })


})