import React, { useEffect } from 'react';

const DataStructure = () => {
    
    useEffect(() => {
        console.log(answer("{{name}}很厉害，才{{age}}岁", {name:"二月"}))
    }, [])


    const problem = () => {
        return `实现一个 render(template, context) 方法，将 template 中的占位符用 context 填充。

        示例：
        
        var template = "{{name}}很厉害，才{{age}}岁";
        var context = {name:"二月",age:"15"};
        输入：template context
        输出：二月很厉害，才15岁。
        要求：
        
        级联的变量也可以展开
        分隔符与变量之间允许有空白字符`
    }


    const answer = (contentTpl, contentTplData, noMatchStr = "-") => {
        let reg = "(.*)";
        const keys = [];
        let current = [];
        Object.keys(contentTplData).forEach((key) => {
            const index = contentTpl.indexOf(key);
            if(index >= 0) {
                current.push({
                    index,
                    value: key
                })
            }
        });
    
        const sortBy = (field) => (a,b) => (a[field] - b[field]);
    
        current.sort(sortBy('index')).forEach(item => {
            reg += `\\\{{${item.value}}}(.*)`;
            keys.push(item.value);
        });
    
        const contents = [];
        const matchArr = contentTpl.match(new RegExp(reg));
    
        (matchArr ? matchArr.slice(1) : []).forEach((item, index) => {
            item = item.replace(/\{{(.*)}}/, noMatchStr);
    
            contents.push(item);

            const key = keys[index]

            if(key !== undefined){
                contents.push(contentTplData[key]);
            }
        });
        return contents.join('');
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

