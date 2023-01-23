import { MouseEventHandler, ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "../../../constants";

interface propTypes {
  variant: "white" | "blue" | "red_text";
  children: ReactNode;
  onClick: MouseEventHandler;
}

const StyledButton = styled(MuiButton)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.blue_800};
  background-color: white;
  border-radius: 8px;
  padding: 6px 16px;
  text-transform: none;
  &:hover {
    color: ${colors.blue_800};
    background-color: white;
  }
`;
const StyledBlueButton = styled(MuiButton)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  background-color: ${colors.blue_500};
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  text-transform: none;
  width: 222px;
  height: 42px;
  &:hover {
    background-color: ${colors.blue_500};
    color: white;
  }
`;
const StyledErrorButton = styled(MuiButton)`
  color: ${colors.red_200};
  text-transform: none;
  &:hover {
    color: ${colors.red_200};
    background-color: none;
  }
`;

const Button = (props: propTypes) => {
  const { variant, children, onClick } = props;
  switch (variant) {
    case "white":
      return (
        <StyledButton onClick={onClick} data-testid="custom-button">
          {children}
        </StyledButton>
      );
    case "blue":
      return (
        <StyledBlueButton onClick={onClick} data-testid="custom-button">
          {children}
        </StyledBlueButton>
      );
    case "red_text":
      return (
        <StyledErrorButton onClick={onClick} data-testid="custom-button">
          {children}
        </StyledErrorButton>
      );
    default:
      return null;
  }
};

export default Button;