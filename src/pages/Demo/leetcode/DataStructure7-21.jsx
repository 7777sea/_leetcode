import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `
        给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
        
        说明：
        你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
        
        示例 1:
        
        输入: root = [3,1,4,null,2], k = 1
           3
          / \
         1   4
          \
           2
        输出: 1
        示例 2:
        
        输入: root = [5,3,6,2,4,null,null,1], k = 3
               5
              / \
             3   6
            / \
           2   4
          /
         1
        输出: 3`
    }

    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    var kthSmallest = function(root, k) {
        let i = 0;
        let val = null;
        travel(root);
        return val;

        function travel(node) {
            node.left && travel(node.left);

            if (++i === k) {
                val = node.val;
                return;
            }

            node.right && travel(node.right);
        }
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