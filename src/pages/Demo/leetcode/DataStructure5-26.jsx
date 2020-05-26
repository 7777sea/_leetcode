import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return `
        在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
        
        示例:
        
        s = "abaccdeff"
        返回 "b"
        
        s = "" 
        返回 " "
         
        
        限制：
        
        0 <= s 的长度 <= 50000`
    }

    /**
     * @param {string} s
     * @return {character}
     */
    const firstUniqChar = function(s) {

        let map = {};
        let _s = ' ';
        for(let i=0; i<s.length; i++){
            if(map[s[i]]){
                map[s[i]] = map[s[i]] + 1
            }else{
                map[s[i]] = 1
            }
        }
        
        const _map = Object.entries(map);
        for(let j=0;j<_map.length;j++){
            if(_map[j][1] === 1){
                _s = _map[j][0];
                break
            }
        }

        return _s
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




