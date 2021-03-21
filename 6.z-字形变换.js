/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const len = Math.min(s.length, numRows);
  const rows = Array(len).fill("");
  let loc = 0;
  let down = false;
  for (const c of s) {
    rows[loc] += c;
    if (loc === 0 || loc === numRows - 1) {
      down = !down;
    }
    loc += down ? 1 : -1;
  }
  return rows.join("");
};
// @lc code=end
