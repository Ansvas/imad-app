var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1', function (req,res){
    res.sendFile(path.join(__dirname,'ui','article1.html'));
    });
app.get('/userpage', function (req,res){
    res.sendFile(path.join(__dirname,'ui','userpage.html'));
    });
    
app.get('/auto', function(req,res){
    res.sendFile(path.join(__dirname,'ui','auto.html'));
    
});
app.get('/article3', function(req,res){
   res.sendFile(path.join(__dirname,'ui','article3.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/myprofile',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'myprofile.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var nam=document.getElementById("name").value;
var username = document.getElementById("un").value;
var password= document.getElementById("pass").value;
document.write("ur name is"+ nam+"<br/>");
document.write("ur userid is"+ username+"<br/>");
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
