import React from "react";
import styled from "styled-components";

const Element = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="element">H1</div>
    </div>
  );
};

export default styled(Element)`
  background-color: pink;

  .element{
    background-color: pink;
    /* grid-column: ${xpos}; 
    grid-row: ${ypos};  */
  }
`;
