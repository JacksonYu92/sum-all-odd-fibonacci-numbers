function sumFibs(num) {
  let fibonacciArr = [1,1];
  let oddFibonacciArr=[]
  let sum = 0;
  if (num === 1) {
    return 1;
  } else {
    for (let i=1; i<num; i++) {
      fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i-1]);
      }
  }
  oddFibonacciArr= fibonacciArr.filter(item => item % 2).filter(item => item <= num)
  console.log(oddFibonacciArr)
  console.log(oddFibonacciArr.reduce((a, b) => a + b, 0))
  return oddFibonacciArr.reduce((a, b) => a + b, 0)
}

sumFibs(4);
sumFibs(75025)
