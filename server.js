var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/fileUpload.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "fileUpload.html" );
})

app.get('/',function(req,res){
	res.send('Hello world');
})

app.get('/list_user',function(req,res){
	res.send('list_user');
})

app.post('/file_upload', function (req, res) {
   console.log(req.files);
    //res.end( req.files);
  // console.log(req.files.file.path);
  // console.log(req.files.file.type);
   //var file = __dirname + "/" + req.files.file.name;
   
   /*fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });*/
})


app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(9000,function(){
	var host = server.address().address
    var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

