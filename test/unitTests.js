const expect = require('chai').expect

const harvestRainWater = require('../index')

describe('harvestRainWater', () => {
  it('should give correct response for multiple high barriers at the ends', () => {
    const array = [10, 2, 1, 16, 5, 7, 2, 11]
    let result = harvestRainWater(array)
    expect(result).to.equal(74)
  })

  it('should give correct response for multiple high barriers at the center', () => {
    const array = [1, 1000, 2000, 1]
    let result = harvestRainWater(array)
    expect(result).to.equal(1002)
  })

  it('should give correct response for no barriers', () => {
    const array = [0, 0, 0, 0]
    let result = harvestRainWater(array)
    expect(result).to.equal(0)
  })

})
