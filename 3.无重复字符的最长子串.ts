/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 * 1.0 循环查找， 当找到相同字段时， 比较当前的数组长度 是否 大于 之前前出现过的， 如果大于则更新
 *               将从0到第一位相同字段 移除， 重新更新数组
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let compareArr = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (compareArr.includes(element)) {
      if (compareArr.length > max) {
        max = compareArr.length;
      }

      compareArr.splice(0, compareArr.indexOf(element) + 1);
    }
    compareArr.push(element);
  }
  return Math.max(compareArr.length, max);
}
// @lc code=end
