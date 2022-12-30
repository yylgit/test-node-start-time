const exec = require('child_process').exec;


const child = exec('node express-mysql.js', (error, stdout, stderr) => {
  process.exit(0)
})

/**
 * 子进程的启动增加了30ms  
 * real    0m0.218s
user    0m0.177s
sys     0m0.048s
 */