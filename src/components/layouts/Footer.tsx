import React from "react";
import styled from "styled-components";

const Footer = ({ className }: { className: string }) => (
  <div className={className}>
    <p>
      Lisct - <a href="https://github.com/LisCT/periodic-table"> Repository</a>
    </p>
  </div>
);

export default styled(Footer)`
  background: ${(props: any) => props.theme.colors.footer};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7em;
  padding: 0.4rem;
  text-align: center;
  letter-spacing: 0.08em;
  color: ${(props: any) => props.theme.colors.text};
`;
