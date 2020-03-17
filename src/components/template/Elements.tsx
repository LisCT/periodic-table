import React from "react";
import styled from "styled-components";

type props = {
  className: string;
  key: number;
  name: string;
  xpos: number;
  ypos: number;
};

const Element = ({ className, key, name, xpos, ypos }: props) => {
  return (
    <div className={className}>
      <p>{name}</p>
    </div>
  );
};

export default styled(Element)`
  background-color: pink;
  grid-column: ${(xpos: number) => xpos};
  grid-row: ${(ypos: number) => ypos};
`;
