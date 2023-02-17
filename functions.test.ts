const {shuffleArray} = require('./utils')
 let array = [5,7,9,11]
 let testArr = shuffleArray(array)

describe('shuffleArray should', () => {
    test("return array", () => { 
        expect(testArr).toBeInstanceOf(Array);
    })
    test("returned array matches original array", () => {
        expect(array.length).toEqual(testArr.length)
    })
})