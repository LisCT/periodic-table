import React from "react";
import styled from "styled-components";

const Table = ({ className }: { className: string }) => (
  <div className={className}>
    <div className="grid">
      {/* Elements Here */}
      <div className="element">H</div>
    </div>
  </div>
);

export default styled(Table)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.colors.middle};

  .grid {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(10, 1fr);
    width: 100vw;
    grid-gap: 4px;
    min-height: calc(10 * 70px);
    max-width: calc(18 * 70px);
    justify-content: center;
  }

  .element {
    background-color: pink;
    grid-column: 18;
    grid-row: 2;
  }
`;
