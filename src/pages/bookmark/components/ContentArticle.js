import React from 'react'

import HtmlBlock from '../../../components/html/HtmlBlock'
import BookmarkReadingPercent from './BookmarkReadingPercent'
import ScrollPercentage from '../../../components/scroll/ScrollPercentage'

import annotator from 'annotator'
import AnnotatorModule from './AnnotatorModule'

import './annotator.scss'
// TO SEE:
// http://annotatorjs.org/plugins/index.html
//
// https://annotorious.github.io/#
// https://github.com/aron/annotator.touch.js
// https://github.com/aron/annotator.offline.js
//
// For API:
// https://github.com/Luperi/PageAnnotatorBundle/blob/master/Controller/AnnotationController.php
//

const ContentArticle = ({ bookmark }) => {
  // const app = new annotator.App()
  //
  // // http://docs.annotatorjs.org/en/latest/modules/ui.html
  // app.include(annotator.ui.main, {
  //   // allow creation of annotations within a specific element on the page
  //   element: document.querySelector('.bookmark_content'),
  //   viewerExtensions: [
  //     // A viewer extension that depends on Showdown, and makes the viewer render Markdown annotation bodies.
  //     annotator.ui.markdown.viewerExtension,
  //
  //     // An editor extension that provides a field for editing annotation tags.
  //     annotator.ui.tags.editorExtension,
  //
  //     // A viewer extension that displays any tags stored on annotations.
  //     annotator.ui.tags.viewerExtension,
  //   ]
  // })
  // app.include(AnnotatorModule)
  // // app.include(annotator.storage.http)
  // app.start()
  // .then(function () {
  //   app.annotations.load()
  // })

  return (
    <ScrollPercentage>
      {({ percentage }) => (
        <div className="bookmark_content">
          <BookmarkReadingPercent
            percentage={percentage * 100}
          />
          <HtmlBlock
            content={bookmark.content}
          />
        </div>
      )}
    </ScrollPercentage>
  )
}

export default ContentArticle
