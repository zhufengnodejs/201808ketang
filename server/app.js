let express = require('express');
let app = express();
let sliders = require('./mock/sliders');
app.get('/sliders',function(req,res){
   res.json(sliders);
});
app.listen(3000);