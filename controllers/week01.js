const path = require('path');

const route01 = (req, res) => {
  res.send('Hello Eduardo Pulido');
}

const route02 = (req, res) => {
  res.send('Hello Rocio Ravello');
};

const route03 = (req, res) => {
  res.sendFile(path.join(__dirname,'../cse341-ww-student-code/frontend/index.html'));
};
module.exports = {route01, route02,route03}
