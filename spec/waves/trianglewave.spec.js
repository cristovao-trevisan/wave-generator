const { Trianglewave } = require('../../index')

const triangle1 = Trianglewave(12, 1, 12)
const triangle2 = Trianglewave(12, 1, 12, 1, false)

const triangleExpected = [0, 0.333, 0.666, 1, 0.666, 0.333, 0, -0.333, -0.666, -1, -0.666, -0.333]

describe('Trianglewave', () => {
  it('should return correct values', () => {
    const wave = triangle1(12)
    triangleExpected.forEach((value, i) => {
      expect(wave[i]).toBeCloseTo(value, 2)
    })
  })

  it('should return next data', () => {
    expect(triangle1(6)).not.toEqual(triangle1(6))
    const wave = triangle1(12)
    triangleExpected.forEach((value, i) => {
      expect(wave[i]).toBeCloseTo(value, 2)
    })
  })

  it('should return same data', () => {
    expect(triangle2(3)).toEqual(triangle2(3))
  })
})
