import React from 'react';

const DataStructure = () => {

    const problem = () => {
        return `模拟实现 new 操作符`
    }

    function New_create(){
        // 创建一个空的对象
        let obj = new Object()
        // 获得构造函数
        let Con = [].shift.call(arguments)
        // 链接到原型 （不推荐使用）
        obj.__proto__ = Con.prototype
        // 绑定 this，执行构造函数
        let result = Con.apply(obj, arguments)
        // 确保 new 出来的是个对象
        return typeof result === 'object' ? result : obj
    }

    function Dog(obj={}){
        this.name = obj.name;
        this.age = obj.age;
    }

    let a = New_create(Dog, {
        name:'123'
    })
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