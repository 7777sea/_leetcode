import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `给定一个二叉树, 找到该树中两个指定节点间的最短距离`
    }

    const answer = () => {

        return `
        先找出两个节点的最近公共祖先
        分别求出两个节点到最近公共祖先的路径长度
        求出两个节点的路径长度

        求公共祖先

        var lowestCommonAncestor = function(root, p, q) { 
            if (root===null||root===p||root===q) {
                return root
            }
            let left = lowestCommonAncestor(root.left, p, q)
            let right = lowestCommonAncestor(root.right, p, q)
            if (left && right) {
                return root
            }
            return left || right
        };
        计算距离

        let visited = false
        let stack = []
        var getDisToPar = function(root, p, stack) {
            if(root==null){
                return ;
            }
            //将节点添加到栈中
            stack.push(root.val);
            //如果找到了
            if(!visited&&root==p){
                visited  = true;
                return;
            }
            //先找左子树
            if(!visited){
                getDisToPar(root.left,p,stack);
            }
            //左子树没找到再找右子树
            if(!visited){
                getDisToPar(root.right,p,stack);
            }
            //如果还没找到，说明不在这个节点下面，弹出来
            if(!visited){
                stack.pop();
            }
            return;
        }`
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