const final = require('./final_assessment') 

test("Testing goldenRatio", () => {
    expect(final.goldenRatio(1)).toBe(1.61803398875)
    expect(final.goldenRatio(7)).toBe(11.32623792125)})