// import isString from 'lodash/isString'

const TestWorker = x => {
  console.log('This is a worker builded by webpack')
  // console.log('calcFib', isString(x))

  const fib = i => (i <= 1 ? i : fib(i - 1) + fib(i - 2))
  return fib(x)
}

TestWorker.__IS_WORKER = true
export default TestWorker

// self.addEventListener('message', TestWorker)

// // export default TestWorker
// self.addEventListener('message', startCounter)

// function startCounter(event) {
//   console.log(event.data, this)
//   let initial = event.data
//   setInterval(() => this.postMessage(initial++), 1000)
// }
