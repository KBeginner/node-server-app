// http请求返回内容提出来，可复用
const res = (code, data)=>{
    return {
        200: {
            code: code,
            status: 1,
            msg: 'ok',
            data
        },
        302: {
            code: code,
            status: 0,
            msg: 'Found',
            data
        },
        400: {
            code: code,
            status: 0,
            msg: 'Bad Request',
            data
        },
        403: {
            code: code,
            status: 0,
            msg: 'Forbidden',
            data
        },
        404: {
            code: code,
            status: 0,
            msg: 'Not Found',
            data
        }, 
        500: {
            code: code,
            status: 0,
            msg: 'Internal Server Error',
            data
        }
    }[code]
}

module.exports = res