describe("this is only test testcase", function(){

    it("this is first testcase", function(){
        console.log("this is first testcase log..")
    })

    it.only("this is 2nd testcase", function(){
        console.log("this is 2nd test case log..")
    })

    it("this is 3rd testcase", function(){
        console.log("this is 3rd test case log..")
    })

    it("this is 4th testcase", function(){
        console.log("this is 4th test case log..")
    })
    

})