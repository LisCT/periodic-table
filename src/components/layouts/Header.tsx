import React, { useContext } from "react";
import Toggle from "../template/Toggle";
import styled from "styled-components";
import LogoDark from "../template/LogoDark";
import LogoLight from "../template/LogoLight";
import { GlobalContext } from "../../GlobalState";

const Header = ({ className }: { className: string }) => {
  const { theme } = useContext(GlobalContext);

  return (
    <header className={className}>
      {theme.colors.palette == "light" ? <LogoDark /> : <LogoLight />}
      <Toggle />
    </header>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3em 2em;
  background: ${(props: any) => props.theme.colors.main};

  svg {
    text-align: center;
    width: 100%;
    height: 70px;
  }
`;