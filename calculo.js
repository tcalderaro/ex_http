
var http = require("http");
var cilindro = require('./cilindro.js');

http.createServer(function(req,res){
    return res.end("Um cilíndro com raio 2 e altura 4 possui volume igual a "+cilindro.volume(2,4)+" e área externa igual a "+cilindro.area(2,4)+".");
}).listen(process.env.PORT || 8182);