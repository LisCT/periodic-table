import React, { useContext } from "react";
import styled from "styled-components";
import { branding, dark, light } from "../../utils/Colors";
import { GlobalContext } from "../../GlobalState";

const Toggle = ({ className }: { className: string }) => {
  const { theme, setTheme } = useContext(GlobalContext);

  const themeResult = theme.colors.palette == "light" ? dark : light;

  return (
    <div>
      <button
        className={`${className} ${
          theme.colors.palette == "light" ? "" : "active"
        } `}
        onClick={() => setTheme(themeResult)}
      >
        <div className="handle"></div>
      </button>
    </div>
  );
};

export default styled(Toggle)`
  border: none;
  border-radius: 1.5rem;
  background: ${branding.blue};
  color: ${branding.blue};
  height: 1.5rem;
  width: 3rem;
  margin: 0 4rem;
  padding: 0;
  position: relative;
  cursor: pointer;

  &:focus,
  &.focus.active {
    outline: none;
  }

  &:before,
  &:after {
    line-height: 1.5rem;
    width: 4rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    transition: opacity 0.25s;
  }

  &:before {
    content: "Light";
    left: -4rem;
  }

  &:after {
    content: "Dark";
    right: -4rem;
    color: ${(props: any) => props.theme.colors.dark};
  }

  & > .handle {
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1.125rem;
    background: ${branding.light};
    transition: left 0.25s;
  }

  &.active {
    transition: background-color 0.25s;
  }
  &.active > .handle {
    left: 1.6rem;
    transition: left 0.25s;
  }
  &.active:before {
    color: ${dark.colors.logo};
  }
  &.active:after {
    color: ${branding.blue};
  }
`;
