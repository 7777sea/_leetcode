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


    function getParams(u) {
        const s = new URLSearchParams(u.search)
        const obj = {}
        s.forEach((v, k) => (obj[k] = v))
        return obj
    }
    
    const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
    getParams(new URL(url))

    const parse = (url) => {
        const l = new URL(url).searchParams;
        const _params = {};
        l.forEach((v,k) => _params[k] = v);
       return _params
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



