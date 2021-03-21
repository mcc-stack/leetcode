/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const num3 = [...nums1, ...nums2];
  const len = num3.length;
  num3.sort((a, b) => a - b);
  if (len & 1) {
    return num3[len >> 1];
  } else {
    console.log(num3);
    return (num3[len / 2 - 1] + num3[len / 2]) / 2;
  }
};
// @lc code=end
