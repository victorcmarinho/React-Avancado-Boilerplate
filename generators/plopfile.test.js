const plopfile = require("./plopfile")
// @ponicode
describe("plopfile", () => {
    test("0", () => {
        let callFunction = () => {
            plopfile(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            plopfile(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            plopfile(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            plopfile(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            plopfile(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            plopfile(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
