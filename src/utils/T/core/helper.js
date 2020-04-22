import React from "react";
import { render as reactDomRender, unmountComponentAtNode } from 'react-dom';
import moment from 'moment'

import * as checkType from './checkType';
import isEqual from 'is-equal';
import deepmerge from './deepmerge';
import deepClone from './deepClone';

const mountDomId = 'tj-render-dom';

/**
 * 验证是否相等
 * 文档说明: https://github.com/ljharb/is-equal
 */
export { isEqual }
/**
 * 深度合并对象
 * 文档说明: https://github.com/KyleAMathews/deepmerge
 */
export { deepmerge }
/**
 * 深度clone
 */
export { deepClone }

/**
 * 模拟数据
 * @param data
 * @param isMockError
 * @return {Promise<any>}
 */
export const mockData = (data = null, isMockError = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isMockError) {
                resolve({
                    code: "success",
                    data,
                    msg: "success"
                })
            } else {
                reject({code: "error", data, msg: "error"});
            }
        }, 500);
    });
};


/**
 * 挂载react组件
 * @param component //reactElement react组件
 */
export const mountReact = (component) => {
    const domId = mountDomId;
    let domObject = document.querySelector('#' + domId);
    if(!domObject){
        const el = document.createElement('div');
        el.setAttribute('id', domId);
        document.querySelector('body').appendChild(el);
        domObject = el;
    }

    unmountComponentAtNode(domObject);

    reactDomRender(
        React.createElement({}, component),
        domObject
    );
};

/**
 * 销毁react组件
 */
export const unmountReact = () => {
    const domObject = document.querySelector('#' + mountDomId);
    if(domObject) unmountComponentAtNode(domObject);
}


/**
 * 转换数组为key value对象
 * @param {Array} data [{label: "a", value: "b"}]
 * @param {String} key
 */
export const convertToKeyVal = (data, key = "value") => {
    const newData = {};
    data.forEach(item => newData[item[key]] = item);

    return newData;
}


/**
 * 跳转页面
 * @param url
 * @param timeout
 */
export const redirect = (url, timeout) => {
    if (checkType.isNumber(url) && typeof timeout === 'undefined') {
        timeout = url;
        url = null;
    }

    setTimeout(function () {
        window.location.href = url || window.location.href;
    }, timeout || 0);
};


/**
 * 时间格式化
 * @param {number} timestamp
 * @param {string} fmt
 * @return {string}
 */
export const dateFormat = (timestamp, fmt = "YYYY-MM-DD HH:mm:ss") => {

    return moment(timestamp).format(fmt);
};

/**
 * 是否显示组件
 * @param Com
 * @param isShow
 * @return {null}
 */
export const showComponent = (Com, isShow = true) =>  isShow ? Com : null;

/**
 * 数组去重
 * @param {Array} data
 * @return {*[]}
 */
export const uniq = (data) => Array.from(new Set(data));


/**
 * 减速节流函数
 * @param {Function} fn 需要延迟执行的函数
 * @param {Number} time 延迟时间毫秒
 * @param {Object} context
 * @return {wrapperFn}
 *
 * usage:
     const a_fn = (params) => {}
     const render = throttle(a_fn, 16, null);
     render(1);
     render(2); // 将延迟16毫秒执行
 */
export const throttle = (fn, time, context) => {
    let lock, args;

    function later () {
        // reset lock and call if queued
        lock = false;
        if (args) {
            wrapperFn.apply(context, args);
            args = false;
        }
    }

    function wrapperFn () {
        if (lock) {
            // called too soon, queue to call later
            args = arguments;

        } else {
            // lock until later then call
            lock = true;
            fn.apply(context, arguments);
            setTimeout(later, time);
        }
    }

    return wrapperFn;
};


/**
 * 防抖函数
 * @param {Function} fn     回调函数
 * @param {Number} delay    延迟事件
 * @param {Object} [context]  回调函数上下文
 * @returns {Function}
 */
export const debounce = (fn, delay, context) => {
    let timeout;

    return function(e){

        clearTimeout(timeout);

        context = context || this;
        let args = arguments

        timeout = setTimeout(function(){

            fn.apply(context, args);

        },delay)

    };
};


/**
 * 将Blod转成String
 * @param {Blob} blob       // Blob对象
 * @param {String} [characterSet]  // 字符集
 * @returns {Promise<any>}
 */
export const blobToString = (blob, characterSet = 'utf-8') => new Promise((resolve, reject)=> {
    const reader = new FileReader();
    reader.readAsText(blob, characterSet);
    reader.onload = function (e) {
        resolve(reader.result);
    };

    reader.onerror = (e) => {
        reject(e);
    };
});

/**
 * 下载文件
 * @param {String} content 下载内容
 * @param {String} fileName 文件名称
 */
export const downloadFile = (content = "", fileName = "") => {
    const blob = new Blob([content]);

    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;

    document.querySelector('body').appendChild(a);
    a.click();
    document.querySelector('body').removeChild(a)
};

/**
 * 将带有HTML的标签格式化处理
 * @param {*} str
 */
export const clearStringFormat = (str) => {
    if(str && String(str)){
        const reg=/<\/?.+?\/?>/g;
        return str.replace(reg,'')
    }
    return '';
}

/**
 * 生成唯一id
 * @param {*}
 */
export const guid =(length = 32)=>{

    const _str = new Array(length).fill('x').join('');

    return _str.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}

/**
 * 按照空格键进行分词
 * @param {*} str
 */
export const apartStr = (str) => {
    if(String(str) && str.trim && str.trim()){
        let arr = str.split(' ');
        let _arr = [];
        arr.forEach(item => {if(item !== ''){_arr.push(item)}})
        return _arr;
    }
    return [];
}

/**
 * 将p标签过滤
 */
export const filterHtmlP = (str) => {
    if(str && String(str)){
        const reg=/<\/?p[^>]*>/g;
        return str.replace(reg,'')
    }
    return '';
}

/**
 * 将富文本标签过滤内的图片标签转化为 [图片]
 */
export const filterImgToText = (str) => {
    if(str && String(str)){
        const reg=/<img[^>]*>/g;
        return str.replace(reg,' [ 图片 ] ')
    }
    return '';
}

/**
 * 数组对象去重
 * @param {Array} arr
 * @param {String} key
 */
export const deepUnique = (arr,key) => {
    return arr.filter((element, index, array) => array.findIndex(row => row[key]===element[key]) === index)
};


/**
 * 替换字符串
 * @param contentTpl    // "${assignedUserName} 通过 ${orderSource} 创建了工单 （${currentNodeName}） 备注：${remark}"
 * @param contentTplData // {"assignedUserName": "a", "orderSource: "b", "remark": "c"}
 * @param formatFn // 格式化被替换的值
 * @return {[]}
 */
export const replaceStr = (contentTpl, contentTplData, formatFn, noMatchStr = "-") => {
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
        reg += `\\\${${item.value}}(.*)`;
        keys.push(item.value);
    });

    const contents = [];
    const matchArr = contentTpl.match(new RegExp(reg));

    (matchArr ? matchArr.slice(1) : []).forEach((item, index) => {
        item = item.replace(/\${(.*)}/, noMatchStr);

        if(checkType.isFunction(formatFn)){
            contents.push(formatFn(item, false, contents.length));
        }else {
            contents.push(item);
        }
        const key = keys[index]
        if(key !== undefined){
            if(checkType.isFunction(formatFn)){
                contents.push(formatFn(contentTplData[key], true, contents.length));
            }else {
                contents.push(contentTplData[key]);
            }
        }
    });

    return contents;
};

/**
 * 删除数组中的空元素
 * @param {*} arr 
 */
export const delEmpty = (arr) => {
    return arr.filter(function(el) {
        // keep element if it's not an object, or if it's a non-empty object
        return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;
    })
}

/**
 绘制星空图
 */
export const drawSkyGraph = (canvas, width, height) => {
    if (!canvas) return '';
    let ctx = canvas.getContext('2d'),
        w = canvas.width = width,
        h = canvas.height = height,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 800; //星星数量
    let canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        let max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
    }

    let Star = function () {

        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 500000;
        //星星移动速度
        this.alpha = random(2, 10) / 500000;

        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        //this.timePassed += this.speed;
    }
    for (let i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        }

        window.requestAnimationFrame(animation);
    }

    animation();
}
