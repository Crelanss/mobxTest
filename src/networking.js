export function testFetch (url, method ,data=null){
    const headers={}
    let body
    if(data!=null){
        headers['Content-Type']='application/json'
        body=JSON.stringify(data)
    }
    return fetch(url,{
        method:method,
        headers,
        body
    }).then()
}