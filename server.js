
//const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
//   res.sendfile('index.html');
// });

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var emp = [{
    "name": "neha",
    "empId": "1"
},
{
    "name": "sneha",
    "empId": "2"
}
];

// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });

app.get('/emp', function (req, res) {
    res.json(emp);
});
//Array.prototype.filter() creates a new array with all elements that pass the test 
app.get('/emp/:id', function (req, res) {
    var currEmp = emp.filter(function(emp){
        console.log("in filter function",emp);
        if(emp.empId == req.params.id){
           return true;
        }
     });
     
     console.log("currentEmp is",currEmp);
     if(currEmp.length == 1){
        res.json(currEmp[0])
     } else {
        res.status(404);  //Set status to 404 as emp was not found
        res.json({message: "Not Found"});
     }

    // var flag;
    // console.log("emp id", req.params.id);
    // for (var i = 0; i < emp.length; i++) {
    //     console.log("going to compare", req.params.id, emp[i].empId);
    //     if (req.params.id == emp[i].empId) {
    //         flag = 1;
    //         //res.send(emp[i]);
    //     }
    //     else {
    //         flag = 2;
    //         // res.send("ok");
    //     }
    // }
    // if (flag == 1) {
    //     res.send("flag 1");
    // }
    // else if (flag == 2) {
    //     res.send("flag 2");
    // }
    // else {
    //     res.status(404);//Set status to 404 as movie was not found
    //     res.json({ message: "Not Found" });
    // }
});



app.listen(port);
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// var express = require('express');
//  var app = express();
//  app.get('/', function(req, res) {
//      res.sendFile('path-to-file');
//  });