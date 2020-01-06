import React from "react";
import { Toggle } from "../template/Toggle";
import styled from "styled-components";

const Header = ({ className }: any) => (
  <header className={className}>
    <img src="./images/logo.svg" alt="logo" />
    <Toggle />
  </header>
);

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 100%;
    height: 80px;
    text-align: center;
  }
`;
