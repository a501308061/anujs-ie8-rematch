import 'fetch-ie8'
const queryParams = {
    'type': 'MOBILE',
    'APPTYPE': 'touch',
    'chanel': 'ss',
    'lang': 'zh',
    '_': new Date().getTime()
}

//使用fetch的promise特性取缔旧版的ajax
//使用.then和.catch对结果进行成功和失败的回调处理
//支持ie8+
const post = (url,para={},loading=true)=>{
    return fetch(url+='?'+object2string(queryParams),{
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON
            "Content-Type":"application/json;charset=UTF-8"
        }),
        credentials: 'include',
        body:JSON.stringify(para)
    })
    .then((res)=> {
        return res.json()
    })
}

function object2string (obj, idx = 0) {
    let str =''
    for (let item in obj) {
        str+=item+"="+obj[item]+"&"
    }
    return str
}
export default post