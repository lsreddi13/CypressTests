describe("this is Chai tests", function(){

    var should = require('chai').should() 
    , foo = 'bar'
 , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
 foo.should.be.a('string');
    it("this is test case", function(){

        foo.should.be.a('string');
        console.log("this is testing demo.")
    })
})