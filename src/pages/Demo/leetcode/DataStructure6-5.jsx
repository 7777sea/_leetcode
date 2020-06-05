import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

        示例 1:
        
        输入: nums = [1,1,1,2,2,3], k = 2
        输出: [1,2]
        示例 2:
        
        输入: nums = [1], k = 1
        输出: [1]
        提示：
        
        你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
        你的算法的时间复杂度必须优于 O(nlogn) , n 是数组的大小。
        题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
        你可以按任意顺序返回答案。`
    }

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    var topKFrequent = function(nums, k) {

        let i = 0;
        let obj = {};
        let arr = [];
        while (i < nums.length) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1;
            arr.push(nums[i]);
        }
        i++;
        }
        arr.sort((a, b) => {
        return obj[b] - obj[a];
        });
        return arr.splice(0, k);
    };
    return <div className='dataStructure'>   
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;




