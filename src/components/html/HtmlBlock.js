import React from 'react'

/**
 * Display a block with inner html.
 * Use react dangerouslySetInnerHTML or jquery.
 * Use jquery to remove error "Uncaught Invariant Violation: Danger: Expected
 * markup to render 14 nodes, but rendered 2."
 * See http://stackoverflow.com/questions/26689900/react-js-invariant-violation-processupdates-when-rendering-a-table-with-a-di
 * "Every table needs a <tbody> element. If it doesn't exist, the browser will
 * add it. However, React doesn't work if the DOM is manipulated from the outside"
 * So we add the html content with jquery manually on componentDidUpdate because
 * we don't need react on it, and it fix the problem.
 */
const HtmlBlock = ({ content }) => {
  return (
    <div className="html_block">
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}

export default HtmlBlock
