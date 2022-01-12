/*
 * @lc app=leetcode.cn id=3 lang=csharp
 *
 * [3] 无重复字符的最长子串
 */
public class Solution {
   public int LengthOfLongestSubstring(string s) {
          int max =0;
            char[] s_array = s.ToCharArray();
            ArrayList temp_array = new ArrayList();
            for (int i = 0; i < s_array.Length; i++)
            {
                if (temp_array.Contains(s_array[i]))
                {
                    if (temp_array.Count > max)
                    {
                        max = temp_array.Count;
                    }
               
                    temp_array.RemoveRange(0,temp_array.IndexOf(s_array[i])+1);
                }
                temp_array.Add(s_array[i]);
            }
            return temp_array.Count>max?temp_array.Count:max;
    }
}

