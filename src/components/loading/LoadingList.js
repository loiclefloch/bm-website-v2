import React from "react";

import _ from "lodash";

import CircularProgress from "@material-ui/core/CircularProgress";

import "./loading_list.css";

const style = {
  listEmpty: {
    position: "relative",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: 0,
    zIndex: 100
  },
  listNotEmpty: {
    position: "fixed",
    top: "8%",
    left: "50%",
    textAlign: "center",
    marginBottom: "40px",
    zIndex: 100
  },
  refresh: {
    display: "inline-block",
    position: "relative"
  }
};

const emptyList = ({ size, thickness }) => {
  return <CircularProgress size={size} thickness={thickness} />;
};

const notEmptyList = ({ size, thickness }) => {
  return (
    <CircularProgress
      left={10}
      top={0}
      status="loading"
      size={size}
      thickness={thickness}
      style={style.refresh}
    />
  );
};

/**
 * A loading for a list.
 * The loading is centered, and differ if the list is already displayed are not.
 *
 * @param size the size of the indicator, default 50.
 * @param thickness the thickness of the indicator, default 4.
 * @param listEmpty a bool are an array to test emptiness.
 */
const LoadingList = ({ size = 50, listEmpty = false, thickness = 4 }) => {
  listEmpty = listEmpty instanceof Boolean ? listEmpty : _.isEmpty(listEmpty);

  const loaderProps = { size, thickness };

  return (
    <div style={listEmpty ? style.listEmpty : style.listNotEmpty}>
      {listEmpty ? emptyList(loaderProps) : notEmptyList(loaderProps)}
    </div>
  );
};

export default LoadingList;
