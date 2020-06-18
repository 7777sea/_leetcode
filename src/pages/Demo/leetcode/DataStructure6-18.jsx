import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。

        在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
        
        给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？
        
        示例 1:
        
        输入: 2, [[1,0]] 
        输出: true
        解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
        示例 2:
        
        输入: 2, [[1,0],[0,1]]
        输出: false
        解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
        提示：
        
        输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵
        你可以假定输入的先决条件中没有重复的边
        1 <= numCourses <= 10^5`
    }

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    var canFinish = function(numCourses, prerequisites) {
        
        const graph={};
        const degree=new Array(numCourses).fill(0);

        // 采用邻接表来保存课程的依赖关系，并且记录被依赖课程的先导次数
        for(const it of prerequisites){
            if(graph[it[0]]===undefined) graph[it[0]]=[it[1]]
            else graph[it[0]].push(it[1])

            degree[it[1]]++;
        }
        
        //degree[i]为0，表示该课程不属于任何课程的先导课
        // 则需要将这些课程编号入栈
        const stack=[];
        for(let i=0;i<numCourses;i++){
            if(degree[i]===0) stack.push(i)
        }

        let cnt=0;
        while(stack.length){
            const c=stack.pop();
            cnt++;
            for(const pre of (graph[c]||[c])){

                // 注意下面degree[pre]可能为负数，但是不影响结果
                degree[pre]--;

                if(degree[pre]===0) {
                    stack.push(pre)
                
                }
            }
            
        }
        
        return cnt===numCourses
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