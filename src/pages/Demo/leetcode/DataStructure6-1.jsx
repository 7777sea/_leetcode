import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

        不占用额外内存空间能否做到？
        
         
        
        示例 1:
        
        给定 matrix = 
        [
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ],
        
        原地旋转输入矩阵，使其变为:
        [
          [7,4,1],
          [8,5,2],
          [9,6,3]
        ]
        示例 2:
        
        给定 matrix =
        [
          [ 5, 1, 9,11],
          [ 2, 4, 8,10],
          [13, 3, 6, 7],
          [15,14,12,16]
        ], 
        
        原地旋转输入矩阵，使其变为:
        [
          [15,13, 2, 5],
          [14, 3, 4, 1],
          [12, 6, 8, 9],
          [16, 7,10,11]
        ]`
    }

    /**
     * @param {number[][]} matrix
     * @return {void} Do not return anything, modify matrix in-place instead.
     */
    var rotate = function(matrix) {
        const n = matrix.length;
        //对角线反转 0,0  n-1,n-1
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < i; j++) {
                swap(matrix, [i, j], [j, i]);
            }
        }

        //中线左右反转
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n / 2; j++) {
                swap(matrix, [i, j], [i, n - 1 - j]);
            }
        }

        function swap(matrix, [x1, y1], [x2, y2]) {
            const tmp = matrix[x1][y1];
            matrix[x1][y1] = matrix[x2][y2];
            matrix[x2][y2] = tmp;
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




