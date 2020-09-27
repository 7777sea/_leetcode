import React, { useEffect } from 'react';
import { eventEmitter } from './eventEmitter';

const PublishSubscriber = () => {

    useEffect(() => {
        // 订阅
        eventEmitter.on('article1', (content) => {
            console.log('用户1订阅了:', content);
        });
        eventEmitter.on('article1', (content) => {
            console.log('用户2订阅了:', content);
        });
        eventEmitter.on('article1', (content) => {
            console.log('用户3订阅了:', content);
        });
    }, [])

    const addEmitHandle = () => {
        eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
        // eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
        // eventEmitter.emit('article2', 'Javascript 观察者模式');
        // eventEmitter.emit('article2', 'Javascript 观察者模式');
    }

    return <div>
        PublishSubscriber
        <div onClick={addEmitHandle}>add emit</div>
    </div>
}

export default PublishSubscriber;