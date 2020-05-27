import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `给定一个二叉树，检查它是否是镜像对称的。

        例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
        
            1
           / \
          2   2
         / \ / \
        3  4 4  3
        但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
        
            1
           / \
          2   2
           \   \
           3    3
        进阶：
        
        你可以运用递归和迭代两种方法解决这个问题吗？`
    }

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    var isSymmetric = function(root) {
        
        if(root === null) return true;
        
        function isEqual(left, right){
            
            if(left === null && right === null) return true;
            if(left === null || right === null) return false;
            if(left.val !== right.val) return false;

            return isEqual(left.left, right.right) && isEqual(left.right, right.left)
        }

        return isEqual(root.left, root.right)
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




