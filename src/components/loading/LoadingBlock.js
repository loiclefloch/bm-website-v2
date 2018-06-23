import React from "react";
import PropTypes from "prop-types";

import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingBlock = ({ size = 50, show = false, children }) => {
  if (!show) {
    return children;
  }

  return (
    <div
      className="u-flexCenter u-justifyContentCenter u-sizeFull u-absolute u-zIndexFloating"
      style={{
        left: "0",
        top: "0",
      }}
    >
      <CircularProgress size={size} thickness={5} style={{}} />
    </div>
  );
};

LoadingBlock.propTypes = {
  size: PropTypes.number,
  show: PropTypes.bool.isRequired
};

export default LoadingBlock;
