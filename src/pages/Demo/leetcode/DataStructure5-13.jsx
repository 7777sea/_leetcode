import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `给定一个二叉树，返回它的 后序 遍历。

        示例:
        
        输入: [1,null,2,3]  
           1
            \
             2
            /
           3 
        
        输出: [3,2,1]
        进阶: 递归算法很简单，你可以通过迭代算法完成吗？`
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
        let res = []  // 用来存储后序遍历节点的值
        stack = []  
        cur = root

        var lastVisitedNode = null;
        while(cur || stack.length > 0) {
            if(cur !== null){
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                if(cur.right === null || lastVisitedNode === cur.right) {
                    res.push(cur.val);
                    lastVisitedNode = cur;
                    cur = null;
                } else {
                    stack.push(cur);
                    cur = cur.right;
                }
            }
        }
        return res;
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



