import React from 'react'

import isEmpty from 'lodash/isEmpty';

import YouTubePlayer from '../../../components/player/YouTubePlayer';


const VideoContent = ({ bookmark }) => {
  if (bookmark.isYouTubeVideo) {
    if (!isEmpty(bookmark.videoId)) {
      return (
        <div
          className="u-height460"
        >
          <YouTubePlayer
            videoId={bookmark.videoId}
            playbackState={'unstarted'}
          />
        </div>
      );
    }
  }

  return (
    <div>
      Player not supported yet.
    </div>
  );
}

export default VideoContent
