const { expect } = require('@jest/globals')
const final = require('./final_assessment') 

test("Testing goldenRatio", () => {
    expect(final.goldenRatio(1)).toBe(1.61803398875)
    expect(final.goldenRatio(7)).toBe(11.32623792125)})

    test("Testing radians", () => {
        expect(final.radians(75)).toBe(1.3089969389957472)
        expect(final.radians(90)).toBe(1.5707963267948966)

    })
    
    test("Testing degrees", () => {
        expect(final.degrees(1.5707963267948966)).toBe(90)
        expect(final.degrees(1.3089969389957472)).toBe(75)
        expect(final.degrees(90)).toBe(5156.620156177409)
        expect(final.degrees(75)).toBe(4297.183463481174)
    })