import React from "react";

function CountStack({ counts }) {
  return (
    <>
      <span className="falseNum">{counts[1]}</span>
      <span className="trueNum">{counts[0]}</span>
      <span>{counts[2]}</span>
    </>
  );
}

export default CountStack;
