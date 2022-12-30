
setTimeout(()=>{
  console.log('completed')
},1000)
/**
 * 
 * 其实真正占用cpu的时间还是40ms 但是因为有了setTimeout的存在 所以整体等待的时间是1s
real    0m1.070s
user    0m0.040s
sys     0m0.021s
 */