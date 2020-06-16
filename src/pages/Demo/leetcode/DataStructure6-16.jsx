import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。

        如果小镇的法官真的存在，那么：
        
        小镇的法官不相信任何人。
        每个人（除了小镇法官外）都信任小镇的法官。
        只有一个人同时满足属性 1 和属性 2 。
        给定数组 trust ，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。
        
        如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1 。
        
        示例 1：
        
        输入：N = 2, trust = [[1,2]]
        输出：2
        示例 2：
        
        输入：N = 3, trust = [[1,3],[2,3]]
        输出：3
        示例 3：
        
        输入：N = 3, trust = [[1,3],[2,3],[3,1]]
        输出：-1
        示例 4：
        
        示例 4：
        
        输入：N = 3, trust = [[1,2],[2,3]]
        输出：-1
        示例 5：
        
        输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
        输出：3
        提示：
        
        1 <= N <= 1000
        trust.length <= 10000
        trust[i] 是完全不同的
        trust[i][0] != trust[i][1]
        1 <= trust[i][0], trust[i][1] <= N`
    }

    /**
     * @param {number} N
     * @param {number[][]} trust
     * @return {number}
     */
    var findJudge = function(N, trust) {
        var inDegree = new Array(N);
        var outDegree = new Array(N);
        
        for(var i = 0; i < N; i++) {
            inDegree[i] = 0;
            outDegree[i] = 0;
        }
        
        
        for(var i = 0; i < trust.length; i++) {
            inDegree[trust[i][1] - 1]++;
            outDegree[trust[i][0] - 1]++;
        }
        
        
        for(var i = 0; i < N; i++) {
            if ((inDegree[i] == (N - 1)) && 
                (outDegree[i] == 0)) {
                return (i + 1);
            }
        }
        
        return -1;
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



