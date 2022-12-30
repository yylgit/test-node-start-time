
(async()=>{
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
})();
/**
 * 和setTime类似
 * real    0m1.069s
user    0m0.036s
sys     0m0.019s
 */