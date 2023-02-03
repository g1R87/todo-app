/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let o = [i];
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      if (nums[i] + nums[j] === target) {
        o.push(j);
        return o;
      }
    }
  }
};

console.log(twoSum([2, 3, 4, 5, 11, 5, 6, 60, 15, 7, 2, 9], 69));
