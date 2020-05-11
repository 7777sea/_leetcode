import React, { useEffect } from 'react';

const DataStructure = () => {
    
    useEffect(() => {
        console.log(answer("{{name}}很厉害，才{{age}}岁", {name:"二月"}))
    }, [])


    const problem = () => {
        return `给定一个二叉树，返回它的 前序 遍历。

        示例:
       
       输入: [1,null,2,3]  
          1
           \
            2
           /
          3 
       
       输出: [1,2,3]
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
        let stack = [root]
        let arr = []
        while (stack.length > 0) {
            let node = stack.pop();
            node && arr.push(node.val); // node不为空时，向arr中推入节点值
            node && node.right && stack.push(node.right); // 模拟栈，所以先压右节点
            node && node.left && stack.push(node.left); // 后入先出，后压左节点
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

