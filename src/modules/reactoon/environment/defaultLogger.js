
const defaultLogger = {
  warn: () => {},
  reduxException: () => {},

  componentDidCatch: (error, info) => {},
}

export default defaultLogger
