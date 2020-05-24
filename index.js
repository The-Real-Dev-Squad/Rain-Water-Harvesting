/**
 * Calculates the number of units of trapped water in the two columns
 *
 * @param {Number} leftHeight
 * @param {Number} rightHeight
 * @param {Number} length
 * @returns {Number} Trapped water
 */
const calculateTrappedWater = (leftHeight, rightHeight, length) => {
  return Math.min(leftHeight, rightHeight) * length
}

/**
 * Main function to calculate the number of units of water trapped
 *
 * @param {Array} array - Array of wall heights
 * @returns {Number} result - number opf units of water trapped
 */
const harvestRainWater = (array) => {
  let result = 0, prevHeight = 0, current, lengthCovered = 0
  array.forEach((wallHeight, index) => {
    lengthCovered += 1
    if (prevHeight < wallHeight) {
      result += calculateTrappedWater(prevHeight, wallHeight, lengthCovered)
      prevHeight = wallHeight
      lengthCovered = 0
    }
  })

  result += calculateTrappedWater(prevHeight, array[array.length - 1], lengthCovered)

  return result
}

module.exports = harvestRainWater
