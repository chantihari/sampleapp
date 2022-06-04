var http = require('http');
var fs = require('fs');

const PORT=80; 

fs.readFile('./bitmovin.html', function (err, html) {

    if (err) throw err;    
    console.log("started")
    console.log("PORT ", PORT)
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
        
    }).listen(PORT);
});
