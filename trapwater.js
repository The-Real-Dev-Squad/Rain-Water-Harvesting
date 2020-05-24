let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Time complexity = O(n^2) Space = O(1)
function waterCollected(map = []) {

    if (!map.length) {
        return 0;
    }
    var ans = 0;
    for (let i = 0; i < map.length; ++i) {
        // for every element find the maximum right and left boundary
        let left_max = 0;
        let right_max = 0;
        let j = i;
        // find left;
        while (j >= 0) {
            left_max = Math.max(left_max, map[j]);
            j--;
        }
        // find right
        j = i;
        while (j < map.length) {
            right_max = Math.max(right_max, map[j]);
            j++;
        }

        ans += Math.min(left_max, right_max) - map[i];


    }
    return ans;
}


// using Dynamic Programming
// Time complexity O(n) Space = O(n)  where n is length of array

function dynamicWaterCollected(map = []) {
    if (!map.length) {
        return 0;
    }
    var left_max = new Array(map.length).fill(0);
    var right_max = new Array(map.length).fill(0);
    var ans = 0;
    left_max[0] = map[0];
    for (var i = 1; i < map.length; ++i) {
        left_max[i] = Math.max(map[i], left_max[i - 1]);
    }
    right_max[map.length - 1] = map[map.length - 1];
    for (i = map.length - 2; i >= 0; --i) {
        right_max[i] = Math.max(map[i], right_max[i + 1])
    }

    for (i = 0; i < map.length; ++i) {
        ans += Math.min(left_max[i], right_max[i]) - map[i];
    }
    return ans;
}

console.log(dynamicWaterCollected(arr))

module.exports = {
    waterCollected,
    dynamicWaterCollected
}