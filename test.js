const { expect, test } = require('@jest/globals')
const result = require('./final_assessment') 

test("Testing goldenRatio", () => {
    expect(result.goldenRatio(1)).toBe(1.61803398875)
    expect(result.goldenRatio(7)).toBe(11.32623792125)})

    test("Testing radians", () => {
        expect(result.radians(75)).toBe(1.3089969389957472)
        expect(result.radians(90)).toBe(1.5707963267948966)

    })
    
    test("Testing degrees", () => {
        expect(result.degrees(1.5707963267948966)).toBe(90)
        expect(result.degrees(1.3089969389957472)).toBe(75)
        expect(result.degrees(90)).toBe(5156.620156177409)
        expect(result.degrees(75)).toBe(4297.183463481174)
    })

    test("Testing toDollar", () => {
        expect(result.toDollar(482)).toBe('$482.00')
        expect(result.toDollar(4.995)).toBe('$5.00')
        expect(result.toDollar(99.009)).toBe('$99.01')
    })

    test("Testing randomInt", () => {
        expect(result.randomInt(3, 5)).toBeGreaterThanOrEqual(3)
        expect(result.randomInt(3, 5)).toBeLessThanOrEqual(5)
        expect(result.randomInt(0, 1)).toBeGreaterThanOrEqual(0)
        expect(result.randomInt(0, 1)).toBeLessThanOrEqual(1)
        expect(result.randomInt(9, 99)).toBeGreaterThanOrEqual(9)
        expect(result.randomInt(9, 99)).toBeLessThanOrEqual(99)
    })