import React, { ReactNode } from "react";

import { Typography as Text } from "@mui/material";
import styled from "@emotion/styled";

interface PropTypes {
  type: "lg" | "md" | "sm" | "xs";
  children: ReactNode;
  color?: "white";
  style?: object;
}

interface StyledTextTypes {
  color?: "white";
}

export const StyledText = styled(Text)<StyledTextTypes>`
  ${(props) =>
    props.color && {
      color: props.color,
    }}
`;

const Typography = (props: PropTypes) => {
  const { type, children, color, style } = props;
  switch (type) {
    case "lg":
      return (
        <StyledText
          variant="h1"
          color={color}
          style={style}
          data-testid="typography-test"
        >
          {children}
        </StyledText>
      );
    case "md":
      return (
        <StyledText
          variant="h2"
          color={color}
          style={style}
          data-testid="typography-test"
        >
          {children}
        </StyledText>
      );
    case "sm":
      return (
        <StyledText
          variant="body1"
          color={color}
          style={style}
          data-testid="typography-test"
        >
          {children}
        </StyledText>
      );
    case "xs":
      return (
        <StyledText
          variant="body2"
          color={color}
          style={style}
          data-testid="typography-test"
        >
          {children}
        </StyledText>
      );
    default:
      return null;
  }
};

export default Typography;
