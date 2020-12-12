const final_assessment = require('./final_assessment') 

test("Testing goldenRatio", () => {
    expect(final_assessment.goldenRatio(1)).toBe(1.61803398875)
    expect(final_assessment.goldenRatio(0)).toBe(0)})