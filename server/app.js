let express = require('express');
let app = express();
//let cors = require('cors');
//CORS
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"http://localhost:8080");//来源的域名和端口号
  res.header('Access-Control-Allow-Header',"Content-Type,Accept");//允许的跨域头
  res.header('Access-Control-Allow-Methods',"GET,POST,PUT,OPTIONS,DELETE");//允许的方法
  //如果请求的方法名是OPTIONS的话，则直接结束 请求
  if(req.method == 'OPTIONS'){
      return res.sendStatus(200);
  }else{
    next();
  }
});
let sliders = require('./mock/sliders');
app.get('/getSliders',function(req,res){
   res.json(sliders);
});
app.listen(3000);