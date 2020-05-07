import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

        示例:
        
        输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
        输出: [3,3,5,5,6,7] 
        解释:
        
        滑动窗口的位置 最大值
        
        [1 3 -1] -3 5 3 6 7 3
        1 [3 -1 -3] 5 3 6 7 3
        1 3 [-1 -3 5] 3 6 7 5
        1 3 -1 [-3 5 3] 6 7 5
        1 3 -1 -3 [5 3 6] 7 6
        1 3 -1 -3 5 [3 6 7] 7
        
        提示：
        
        你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。`
    }


    const answer = (nums, k) => {
        let max = [];  //存放最大值
    
        for(let i=0;i<nums.length;i++){
            const _ = nums.slice(i,i + k)
            if(_.length === k){
                max.push(Math.max(..._))
            }
            
        }
    
        return max
    }

    return <div className='dataStructure'>   
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;

