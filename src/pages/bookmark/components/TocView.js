import React from 'react'
import isEmpty from 'lodash/isEmpty'

const styles = {
  H1: {

  },
  H2: {
    display: 'inline-block',
    paddingLeft: '10px',
    paddingTop: '5px',
  },
  H3: {
    display: 'inline-block',
    paddingLeft: '20px',
    paddingTop: '5px',
  },
  H4: {
    display: 'inline-block',
    paddingLeft: '30px',
    paddingTop: '5px',
  },
  H5: {
    display: 'inline-block',
    paddingLeft: '40px',
    paddingTop: '5px',
  },
  h5: {
    display: 'inline-block',
    paddingLeft: '50px',
    paddingTop: '5px',
  },
  link: {
    color: '#444',
    fontSize: '13px',
    lineHeight: 'initial',
  },
}

const TocView = ({ bookmark }) => {
  const toc = bookmark.toc
  return (
    <div
      className="u-zIndexFloating u-borderLeft4 borderPrimary"
      style={{
        overflowX: 'hidden',
        overflowY: 'auto',
        width: '160px',
      }}
    >
      <ul>
        {toc.map(elem => (
          <li>
            <a
              href={`#${elem.id}`}
              className="link hoverPrimary u-marginBottom4"
              style={{...styles[elem.type], ...styles.link}}
            >
              {elem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TocView
