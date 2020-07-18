import React, { useRef, useEffect } from 'react';
import { helper } from '@/utils/T';
// import DataStructure from './leetcode/DataStructure7-6';

const Demo = () => {

    const canvasRef = useRef(null);
    const divRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if(canvasRef && divRef){
                helper.drawSkyGraph(canvasRef.current, divRef.current.clientWidth,divRef.current.clientHeight)
            }
        },300)
    }, [canvasRef, divRef])

    const curry = function(){
        
        var stack = [].slice.call(arguments);

        var adder = function(){
            var _add = function(){
                stack.push(...arguments);
                return _add
            }
            _add.getCount = function(){
                return stack.reduce((count, num) => count+num)
            }
            return _add
        }

        return adder(stack)
    }
    console.log(curry(1,2,3)(2,10,'lql').getCount())
    return <div style={{height: '100%'}} ref={divRef}>
        <canvas ref={canvasRef}/>
        {/* <DataStructure /> */}
    </div>
}

export default Demo;