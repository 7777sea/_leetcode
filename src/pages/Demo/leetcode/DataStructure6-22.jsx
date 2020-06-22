import React from 'react';

const DataStructure = () => {

    const problem = () => {
        const q = `字节：输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法`
        return `const list = [1, 2, 3]
        const square = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(num * num)
            }, 1000)
        })
        }
    
        function test() {
        list.forEach(async x=> {
            const res = await square(x)
            console.log(res)
        })
        }
        test()`
    }

    

    const answer = () => {
        return `运行结果：一秒后输出1，4，9

        原因：在forEach里面写的callback函数会直接在while循环里面调用
        
        改造：用for...of 或者for循环代替 forEach
        
         async function test () {
          for(let x of list) {
            var res = await square(x)
            console.log(res)
          }
        }
        贴一下forEach的源码
        
        if (!Array.prototype.forEach) {
          Array.prototype.forEach = function(callback, thisArg) {
            var T, k;
            if (this == null) {
              throw new TypeError(' this is null or not defined');
            }
        
            var O = Object(this);
            var len = O.length >>> 0;
        
            if (typeof callback !== "function") {
              throw new TypeError(callback + ' is not a function');
            }
        
            if (arguments.length > 1) {
              T = thisArg;
            }
            k = 0;
        
            while (k < len) {
              var kValue;
              if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
              }
              k++;
            }
          };
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