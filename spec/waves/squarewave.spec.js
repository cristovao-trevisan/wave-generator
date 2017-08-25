const { Squarewave } = require('../../index')

const square1 = Squarewave(12, 2, 12)
const square2 = Squarewave(12, 2, 12, 1, false)

const squareExpected = [1, 1, 1, -1, -1, -1, 1, 1, 1, -1, -1, -1]

describe('Squarewave', () => {
  it('should return correct values', () => {
    expect(square1(12)).toEqual(squareExpected)
  })

  it('should return next data', () => {
    expect(square1(3)).not.toEqual(square1(3))
    expect(square1(3).concat(square1(3))).toEqual(squareExpected.slice(6))
  })

  it('should return same data', () => {
    expect(square2(3)).toEqual(square2(3))
  })
})
