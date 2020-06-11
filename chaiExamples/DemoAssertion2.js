// const { assert, should, expect } = require("chai")

const { assert, should, expect } = require("chai")
// 
describe("Test demo assertions in chai framework", function(){
    

    

    it("Simple assertions.", function() {
        console.log("this is test report.")
        let name = "Pramati";
        name2 = "Pramati"
        // console.log(expect(name).to.deep.equal({name : "Sasidhar"}))
        // console.log(expect(name).to.deep.equal({name : "Pramati"}))
        // console.log(expect(name).to.equal({name : "Pramati"}))

        // expect(name).to.not.equal({name : "Pramati"})

        console.log(expect(name).to.not.equal({name : "Pramati"}))


        console.log(expect('test').to.be.a('String'))

        let a = [1,2,3]
        console.log(expect(a).to.include(1))
        console.log(expect(a).to.include(2))

        console.log(expect(undefined).to.not.be.ok)

        console.log(expect(true).to.be.true)

        console.log(expect(false).to.be.false)

        console.log(expect(null).to.be.null)

        console.log(expect([]).to.be.empty)

        // console.log(expect({name: 'Sasi'}).to.equal({name:'Sasi'}))

        console.log(expect('testing').to.have.string('test'))

        console.log(expect('testing').to.match(/^test/)) // regular expression with matches.

        console.log(expect('tet').to.have.lengthOf(3))


    })

   





})