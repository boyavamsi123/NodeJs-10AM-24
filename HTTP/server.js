/*import http from 'http'
import http, { createServer } from 'http'
let server=http.createServer((req,resp)=>{
    resp.end("Hello,GM")
});
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err

    console.log("server is running on port:8080");
})*/

import http from 'http'
//create server
let server=http.createServer((req,resp)=>{
    resp.end("Hello,GM")
});
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 

    console.log("Server is Running on port :8080")
})