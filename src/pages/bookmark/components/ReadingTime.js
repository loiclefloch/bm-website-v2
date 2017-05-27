import React from 'react';

import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';

const BookmarkEstimatedTime = ({ readingTime, style }) => {
  const readingTimeInt = parseInt(readingTime, 10);

  return (
    <em
      style={style}
    >
      <AccessTimeIcon
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
          color: style.color,
          height: '18px',
        }}
      />

      &nbsp;

      <span
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      >
        { readingTimeInt === 1
          ? readingTime + " minute"
          : readingTime + " minutes"
        }
      </span>
    </em>
  );
}

export default BookmarkEstimatedTime
