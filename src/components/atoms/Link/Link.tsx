import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { colors } from "../../../constants";

interface PropTypes {
  children: ReactNode;
  href: string;
  target?: "_blank";
  active?: boolean;
}

interface AtagProp {
  active?: boolean;
}

const Root = styled.div`
  display: inline-block;
  .active {
    color: ${colors.blue_800};
    &::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${colors.blue_800};
      bottom: -8px;
      left: 0;
      right: 0;
    }
  }
`;

const ATag = styled.a`
  position: relative;
  color: ${colors.black_dark};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-right: 13px;
  .active {
    color: red;
  }
`;

const Link = (props: PropTypes) => {
  const { children, href, target, active } = props;
  return (
    <Root>
      <ATag href={href} target={target} className={`${active ? "active" : ""}`}>
        {children}
      </ATag>
    </Root>
  );
};

export default Link;
