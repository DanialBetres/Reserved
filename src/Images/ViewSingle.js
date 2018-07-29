import React, { Component } from "react";

const ViewSingle = ({styling}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={ styling ? styling : null}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6h12v12H6z" />
    </svg>
  );
};

export default ViewSingle;