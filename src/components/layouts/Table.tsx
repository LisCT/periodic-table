import React, { useContext } from "react";
import styled from "styled-components";
import Elements from "../template/Elements";
import { GlobalContext } from "../../GlobalState";

const Table = ({ className }: { className: string }) => {
  const { items, isLoading } = useContext(GlobalContext);

  return (
    <div className={className}>
      <div className="grid">
        {/* Elements Here */}
        {isLoading
          ? "Loading..."
          : items.map((element: any) => (
              <Elements
                key={element.number}
                name={element.name}
                xpos={element.xpos}
                ypos={element.ypos}
              />
            ))}
      </div>
    </div>
  );
};

export default styled(Table)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.colors.middle};

  .grid {
    display: grid;
    grid-template-columns: repeat(18, 70px);
    grid-template-rows: repeat(10, 70px);
    width: 100vw;
    grid-gap: 4px;
    min-height: calc(10 * 70px);
    max-width: calc(18 * 70px);
    justify-content: center;
  }
`;
