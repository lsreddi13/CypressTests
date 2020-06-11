const chai = require("chai");
assert = chai.assert,
should = chai.should(),
expect = chai.expect;
// const { assert, should, expect } = require("chai")
// 
describe("Test demo assertions in chai framework", function(){
    before(function() {
        console.log("this is before function.")
    })

    after(function(){
        console.log("this is after function.")
    })

    beforeEach(function(){
        console.log("this is before each.")
    })

    afterEach(function() {
        console.log("after each.")
    })

    it("this is first test method.", function() {
        console.log("this is test report.")
        let name = "Pramati";
        console.log(expect(name).to.deep.equal({name : "Sasidhar"}))
    })

    it("this is 2nd test method.", function(){
        console.log("this is 2nd method report.")
    })





})