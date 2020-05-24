function max(a, b) {
  if (a > b)
    return a
  return b
}

function min(a, b) {
  if (a < b)
    return a
  return b
}

function waterTrapped(arr) {
  if (!arr.length){ // blank array
    return 0
  }

  let left = [] // to store the left max respective current index
  let right = [] // to store the right max respective of current index
  let answer = 0

  left[0] = arr[0]
  for (let i=1; i<arr.length; i++) {
    left[i] = max(left[i-1], arr[i])
  }

  right[arr.length-1] = arr[arr.length-1]
  for (let i=arr.length-2; i>=0; i--) {
    right[i] = max(right[i+1], arr[i])
  }

  for (let i = 0; i<arr.length; i++) {
    answer += min(left[i], right[i]) - arr[i] // minimum of both left and right - current element (this is the water stored at current column)
  }
  
  return answer
}

// Test Cases
console.log(waterTrapped([])) // 0
console.log(waterTrapped([4,3,5,9,6,8,7,2,3,5,9])) // 24
console.log(waterTrapped([1,0,3])) // 1
