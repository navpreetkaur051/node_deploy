const express = require('express');
// const mongoose = require('mongoose');
const morgan = require('morgan');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static('client/build'));
// }

//http request logger
app.use(morgan('tiny'));
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.post('/data',(req,res)=>{
// const data=req.body;
// console.log('Server has data::',data);
// res.json({data});
// });

app.get('',(req,res)=>{
    var http = require('http');

res.writeHead(200);
res.end('Hi Team!');
});
    // res.json({
    //     msg:'begin'
    // });

app.listen(PORT,console.log(`Server is starting at ${PORT}`));