import React from 'react'
import useWorker from 'reacticoon/worker/useWorker'
import WorkerContainer from 'reacticoon/worker/WorkerContainer'

// import myWorker from './test.worker.js'
// TODO: Waiting for create-reacticoon-app to fix worker build

// const myWorker = new Worker('./test.worker.js')

import testWorker from './test.worker.js'

// import BookContainer from 'modules/book/container'

const calcFib = x => {
  // console.log('calcFib', isString(x))
  // does not work: Uncaught (in promise) ReferenceError: __WEBPACK_IMPORTED_MODULE_3_lodash_isString___default is not defined

  // our worker cannot have external dependancy if defined like this

  const fib = i => (i <= 1 ? i : fib(i - 1) + fib(i - 2))
  return fib(x)
}

const CalcFib = ({ count }) => {
  const { result, error, loading } = useWorker(calcFib, count)
  if (loading) return <div>loading</div>
  if (error) return <div>Error:{error}</div>
  return <div>Result:{result}</div>
}

const fibView = ({ data, result, error, loading }) => {
  if (loading) return <div>loading</div>
  if (error) return <div>Error:{error}</div>
  return <div>Result:{result}</div>
}

const TestPage = () => {
  try {
    // const myWorker = new testWorker()
    return (
      <div>
        WORKERS:
        <CalcFib count={10} />
        <WorkerContainer worker={calcFib} data={5}>
          {fibView}
        </WorkerContainer>
        {/* <WorkerContainer worker={calcFib} data={10}>
          {fibView}
        </WorkerContainer> */}
        {/* <WorkerContainer worker={myWorker} data={40}>
        {fibView}
      </WorkerContainer> */}
        {/* AAA
      <BookContainer apiCallParameters={[2, 10]}>
        {({ isFetching, data, error }) => (
          <div>
            <h1>TEST</h1>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )}
      </BookContainer>*/}
      </div>
    )
  } catch (e) {
    debugger
  }
}

export default TestPage
