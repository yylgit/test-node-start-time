const express = require('express');
const mysql = require('mysql2');
const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'test_faas'
});

app.listen(9090,() => {
    console.log('completed')
    process.exit(0)
})

/**
 * 增加了mysql 增加了40ms 使用了140ms 总体170ms
real    0m0.174s
user    0m0.143s
sys     0m0.040s
 */