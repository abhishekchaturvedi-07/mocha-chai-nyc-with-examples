const {User} = require('../src/asyncData')
const axios = require('axios')
const chai= require('chai')
const expect = chai.expect


describe("Calling the User Class", () => {
    it("should get the user id", (done)=>{
        const user = new User(3)
        user.getUserId().then(result=>{
            expect(result).to.be.a('number')
            expect(result).to.be.eq(1)
            done()
        })
        .catch(done)
    })
})