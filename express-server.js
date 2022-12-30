const express = require('express');

const app = express();

app.listen(9090,() => {
    console.log('completed')
    process.exit(0)
})
/**
 * express 比native-server.js多了一些启动时间 大概是100ms
 * real    0m0.135s
user    0m0.102s
sys     0m0.031s
 */