describe("this is skip test testcase", function(){

    it("this is first testcase", function(){
        console.log("this is first testcase log..")
    })

    it("this is 2nd testcase", function(){
        console.log("this is 2nd test case log..")
    })

    it("this is 3rd testcase", function(){
        console.log("this is 3rd test case log..")
    })

    it.skip("this is 4th testcase", function(){
        console.log("this is 4th test case log..")
    })
    

})