import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `实现一个方法，拆解URL参数中queryString`
    }

    
    const queryString = (str)=>{
        const obj = {}
        str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v))
        return obj
    }


    function getParams() {
        const s = new URLSearchParams(u.search)
        const obj = {}
        s.forEach((v, k) => (obj[k] = v))
        return obj
    }
    
    const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
    getParams(new URL(url))

    return <div className='dataStructure'>   
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;



