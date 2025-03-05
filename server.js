const express = require('express');
const app = express();
const path = require('path');

app.use('/', require('./routes'));
// Serve the frontend folder
app.use(express.static(path.join(__dirname, './cse341-ww-student-code/frontend')));


const port = 8080;

app.listen(process.env.port || port);
console.log('Web Server is listening at port' + (process.env.port || port));

