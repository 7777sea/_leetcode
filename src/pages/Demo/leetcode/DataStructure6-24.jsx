import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `介绍一下快排原理以及时间复杂度，并实现一个快排`
    }

    
    const answer = () => {
        return `快排的原理是基于二分法的思想，时间复杂度比较复杂，
            最好的情况是O(N)，最差的时候是O(N^2)，所以平时说的O(N*logN)为其平均时间复杂度。
            它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，
            其中一部分的所有数据都比另外一部分的所有数据都要小，
            然后再按此方法对这两部分数据分别进行快速排序，
            整个排序过程可以递归进行，以此达到整个数据变成有序序列。`
    }

    var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
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