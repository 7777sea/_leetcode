const http = require('http');
const URL = require("url");
const querystring = require("querystring");

http.createServer(function(request, response){
    const { headers, method, url } = request;
    let body = [];

    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        // BEGINNING OF NEW STUFF

        response.on('error', (err) => {
            console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url, body };

        console.log(responseBody);

        // //获取返回的url对象的query属性值
        const arg = URL.parse(request.url).query;
        //
        // //将arg参数字符串反序列化为一个对象
        const params = querystring.parse(arg);
        console.log(params);

        response.write(JSON.stringify(responseBody));
        response.end();
    });

// }).listen(8020,'127.0.0.1');
}).listen(8020,'10.0.5.172');
