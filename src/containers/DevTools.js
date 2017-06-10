import React from 'react'
// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

// export default createDevTools(
const DevTools = () => (
  <button
    onClick={() => window.__REDUX_DEVTOOLS_EXTENSION__.open()}
    style={{
      zIndex: 99999,
      position: 'fixed',
      left: 0,
      top: 10,
    }}
  >
    OPEN DEV TOOLS
  </button>
  // <DockMonitor
  //   toggleVisibilityKey="ctrl-h"
  //   changePositionKey="ctrl-w"
  // >
  //   <LogMonitor />
  // </DockMonitor>
)

export default DevTools
