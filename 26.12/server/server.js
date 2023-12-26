import http from 'node:http'
import { readFileSync } from 'node:fs';

const server = http.createServer((req, res) => {
  const { url ,method } = req;
  console.log('method' ,method)  
  console.log('url' ,url) 

  switch(url){
    case '/about':
      switch(method){
        case 'GET':
          const htmlFile= readFileSync('./src/index.html', 'utf-8')
          res.end(htmlFile)
          return;

        case 'DELETE':
          res.end("delete in about")
          return;
      }
    case '/style.css':
        const cssFile= readFileSync('./src/style.css', 'utf-8')
        res.end(cssFile)
        return;

    case '/contact':
      switch(method){
        case 'GET':
          res.end("get in contact")
          return;
        case 'DELETE':
          res.end("delete in contact")
          return;
      }
  } 
  });
  
  server.listen(5500,()=>{
    console.log("server listening on port 5500")
  })