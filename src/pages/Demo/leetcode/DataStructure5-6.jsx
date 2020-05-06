import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。

        例如：
        
        "111" + ”2222“ = ”2333“
        
        注意：
        
        num1 和 num2 的长度都小于 5100
        num1 和 num2 都只包含数字 0-9
        num1 和 num2 都不包含任何前导零
        你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式`
    }


    const answer = (num1='', num2='') => {
        let a = num1.length, b = num2.length, result = '', sum = 0
        while(a || b) {
            a ? sum += +num1[--a] : ''
            b ? sum +=  +num2[--b] : ''
            
            result = sum % 10 + result
            if(sum > 9) sum = 1
            else sum = 0
        }
        if (sum) result = 1 + result
        return result
        // let result = ''
        // let tempVal = 0
        // let arr1 = str1.split('')
        // let arr2 = str2.split('')
      
        // while (arr1.length || arr2.length || tempVal) {
        //     tempVal += ~~arr1.pop() + ~~arr2.pop()
        //     result = tempVal % 10 + result
        //     tempVal = ~~(tempVal / 10)
        //     console.log(tempVal, result)
        // }
      
        // return result.replace(/^0+/, '')
    }

    const a = answer("111", '22222')
    console.log(a)
    return <div className='dataStructure'>   
        
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;

