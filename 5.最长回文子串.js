/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxstr = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let l = i,
        r = i + j;
      while (s[l] && s[l] === s[r]) {
        l--;
        r++;
      }
      maxstr = r - l - 1 > maxstr.length ? s.substring(l + 1, r) : maxstr;
    }
  }
  return maxstr;
};
// @lc code=end
