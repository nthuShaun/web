const express = require('express');
const path = require('path');
const app = express();
const dataFormat = require('dataformat');
const mysql = require('mysql');

const wm1 = "SELECT current, Time_Stamp FROM current_data WHERE address=1 ORDER BY Time_Stamp DESC LIMIT 3;";
const wm2 = "SELECT current, Time_Stamp FROM current_data WHERE address=2 ORDER BY Time_Stamp DESC LIMIT 3;";
const wm3 = "SELECT current, Time_Stamp FROM current_data WHERE address=3 ORDER BY Time_Stamp DESC LIMIT 3;";
const wm4 = "SELECT current, Time_Stamp FROM current_data WHERE address=4 ORDER BY Time_Stamp DESC LIMIT 3;";

const con = mysql.createConnection({
	host: "140.114.216.81",
	user: "edorm",
	password: "edorm",
	database: "Washer"
});

con.connect((err) => {
  if (err) {
    console.log('connection error');
    return;
  }
  console.log('connection success');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/data', (req, res) => {
  let data = {};
  con.query(wm1, (err, result, field) => {
    if (err) {
      throw err;
    }
    res.json({current: 3});
  });
});

app.listen(5000, () => console.log('Server listening...'));
// const server = app.listen(2580, '192.168.1.71',function () {
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log("app listening at http://%s:%s", host, port);
// 	console.log( Math.floor(new Date/1000));
// });