import React, { useRef, useEffect } from 'react';
import { helper } from '@/utils/T';

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

    return <div style={{height: '100%'}} ref={divRef}>
        <canvas ref={canvasRef}/>
    </div>
}

export default Demo;