import styled from "@emotion/styled";
import { Chip } from "@mui/material";
import { FC, MouseEventHandler, ReactNode } from "react";
import { colors } from "../../../constants";

interface props {
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler;
}

const Tag: FC<props> = ({ children, active, onClick }) => {
  return (
    <StyledChip
      label={children}
      onClick={onClick}
      active={active}
      data-testid="chip-tag"
    ></StyledChip>
  );
};

export default Tag;

interface ChipProps {
  active?: boolean;
}

const StyledChip = styled(Chip)<ChipProps>`
  background-color: ${colors.grey_100};
  padding: 6px 12px;
  height: 32px;
  margin-right: 12px;
  ${(props) =>
    props.active && {
      backgroundColor: colors.blue_800,
      color: "white",
    }}
`;
