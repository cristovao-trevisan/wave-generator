const { Sinewave } = require('../../index')

const fs = 10
const f = 1
const sine1 = Sinewave(fs, f, fs)
const sine2 = Sinewave(fs, f, fs, 1, false)

const perCentSine = perCent => Math.sin(2 * Math.PI * perCent)
const sine1Expected = new Array(fs).fill(1).map((x, i) => perCentSine(i / fs))

describe('Sinewave', () => {
  it('should return correct values', () => {
    expect(sine1(fs)).toEqual(sine1Expected)
  })

  it('should return next data', () => {
    expect(sine1(fs / 2)).not.toEqual(sine1(fs / 2))
    expect(sine1(fs / 2).concat(sine1(fs / 2))).toEqual(sine1Expected)
  })

  it('should return same data', () => {
    expect(sine2(fs / 2)).toEqual(sine2(fs / 2))
  })
})
