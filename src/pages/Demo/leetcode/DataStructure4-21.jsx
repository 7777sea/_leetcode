import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

        示例 1:

        输入: "abcabcbb"
        输出: 3 
        解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
        示例 2:

        输入: "bbbbb"
        输出: 1
        解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
        示例 3:

        输入: "pwwkew"
        输出: 3
        解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
        请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。`
    }

    /**
     * 快慢指针维护一个滑动窗口，
     * 如果滑动窗口里面有快指针fastp所指向的元素（
     * 记录这重复元素在滑动窗口的索引tmp），
     * 那么滑动窗口要缩小，
     * 即慢指针slowp要移动到tmp的后一个元素。
     */
    const answer = (s) => {
        let res = 0, slowp = 0, tmp = 0
        for(let fastp = 0; fastp < s.length; fastp++) {
          tmp = s.substring(slowp,fastp).indexOf(s.charAt(fastp)) // 滑动窗口有没有重复元素
          if(tmp === -1) { // 没有
            res = Math.max(res, fastp-slowp+1) // 上一次值和滑动窗口值大小比较
          }else{ // 有，移动慢指针， 是slowp+tmp+1不是tmp+1，因为tmp是根据滑动窗口算的
            slowp = slowp + tmp + 1
          }
        }
        return res
    }
    
    return <div className='dataStructure'>   
        <div>
            {answer('abcabcbb') === 3} 
            {answer('bbbbb') === 1} 
            {answer('pwwkew') === 3} 
        </div>
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;