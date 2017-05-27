import React from 'react';

import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';

const BookmarkEstimatedTime = ({ readingTime }) => {
  const readingTimeInt = parseInt(readingTime, 10);

  return (
    <em>
      <span>
        <AccessTimeIcon />
      </span>
      &nbsp;
      { readingTimeInt === 1
        ? readingTime + " minute"
        : readingTime + " minutes"
      }
      &nbsp;
    </em>
  );
}

export default BookmarkEstimatedTime
