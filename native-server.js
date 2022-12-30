const http = require('http');

http.createServer((req, res) => {

}).listen(9090);
console.log('completed')
process.exit(0)
/**
 * 添加了启动服务基本也没变 总体也就60ms  
 * real    0m0.063s
user    0m0.044s
sys     0m0.015s
 */