/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 * 1.0 遍历查询 每次遍历时 计算目标值， 从当前位数 查找目标值是否存在  时间复杂度 O*((0-1+O)/2)
 * 2.0 遍历查询 每次遍历时 从目标值集合中获取 是否成立，如果不成立 记录目标值 时间复杂度 O
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let targetMaps = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let value = target - element;
    if (targetMaps.has(value)) {
      return [targetMaps.get(value), i];
    } else {
      targetMaps.set(element, i);
    }
  }

  return [];
}
// @lc code=end
