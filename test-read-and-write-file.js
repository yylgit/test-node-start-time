const fs = require('fs');

const time = Date.now()
// console.log(time)
const file = fs.readFileSync('./yarn.lock', 'utf8');

fs.writeFileSync('./test.txt', file);

// console.log(Date.now())
console.log(Date.now() - time)

/**
 * 
 * package.json
 * real    0m0.056s
user    0m0.035s
sys     0m0.014s


yan.lock

real    0m0.056s
user    0m0.037s
sys     0m0.015s

单纯的node中的读写文件非常快 只有1,2毫秒
 */