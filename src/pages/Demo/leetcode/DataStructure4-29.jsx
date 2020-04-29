import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `
            // 实现一个add方法，使计算结果能够满足如下预期：
            add(1)(2)(3) = 6;
            add(1, 2, 3)(4) = 10;
            add(1)(2)(3)(4)(5) = 15;
        `
    }

    function add() {
        // 第一次执行时，定义一个数组专门用来存储所有的参数
        var _args = [].slice.call(arguments);
    
        // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
        var adder = function () {
            var _adder = function() {
                // [].push.apply(_args, [].slice.call(arguments));
                _args.push(...arguments);
                return _adder;
            };
    
            // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
            _adder.toString = function () {
                return _args.reduce(function (a, b) {
                    return a + b;
                });
            }
    
            return _adder;
        }
        // return adder.apply(null, _args);
        return adder(..._args);
    }

    console.log(add(1, 2, 3, 4)(5) + 0);  // 15


    function fn() {
        return 20;
    }
    
    fn.toString = function() {
        return 10;
    }

    console.log(fn)
    
    
    return <div className='dataStructure'>   
        
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;