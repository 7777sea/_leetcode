import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `给定一个二叉树，返回它的 中序 遍历。

        示例:
        
        输入: [1,null,2,3]
           1
            \
             2
            /
           3
        
        输出: [1,3,2]
        进阶:  递归算法很简单，你可以通过迭代算法完成吗？`
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
     * @return {number[]}
     */
    const answer = (root) => {
        let arr = []
        let stackArr = []
        while(root!=null || stackArr.length!=0){

            while(root!=null){
                stackArr.push(root)
                root = root.left
            }
            root = stackArr.pop()
            arr.push(root.val)
            root = root.right
        }
        return arr
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



