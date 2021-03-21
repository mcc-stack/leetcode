/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let set = new Set();
  const len = s.length;
  let i = 0,
    j = 0;
  while (i < len) {
    while (!set.has(s[j]) && j < len) {
      set.add(s[j++]);
    }
    max = Math.max(max, j - i);
    if (j === len) {
      return max;
    }
    set.delete(s[i]);
    i++;
  }
  return max;
};
// @lc code=end
