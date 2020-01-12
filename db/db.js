const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '140.114.216.118',
  user: 'edorm',
  password: 'edorm',
  database: 'Washer'
});

connection.connect(err => console.log(err.message));

connection.query()

