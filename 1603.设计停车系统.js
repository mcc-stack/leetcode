/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  constructor(big, medium, small) {
    this.carNums = [0, big, medium, small];
  }
  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    if (this.carNums[carType]) {
      this.carNums[carType]--;
      return true;
    }
    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
