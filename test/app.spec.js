const assert = require('assert')
const {add} = require('../src/addNumbers')
const {expect} = require('chai')

describe("Calling Add Function", () => {
    it("should add 2 numbers", ()=>{
        const result = add(2,3)
        // assert.equal(result,5)
        expect(result).to.be.eq(5)
    })
    it("should handle only 1 number", ()=>{
        const result = add(2)
        expect(result).to.be.eq(2)
    })

    it("should handle 0 number", ()=>{
        const result = add()
        expect(result).to.be.eq(0)
    })
    it("should return 0 if any single number is not a number", ()=>{
        const result = add(2,'abc')
        expect(result).to.be.eq(0)
    })
})