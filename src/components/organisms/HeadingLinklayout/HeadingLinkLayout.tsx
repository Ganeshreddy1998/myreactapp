import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { ReactNode } from "react";
import { colors } from "../../../constants";
import Typography from "../../atoms/Typography/Typography";

interface props {
  heading: string;
  linkText?: string;
  linkUrl: string;
  children?: ReactNode;
}
const HeadingLinkLayout: React.FC<props> = ({
  heading,
  linkUrl,
  linkText,
  children,
}) => {
  return (
    <Root>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography type="md">{heading}</Typography>
        </Grid>
        <Grid item>
          <a href={linkUrl}>
            {linkText ? linkText : <Typography type="sm">See more</Typography>}
            <img src="/icons/chevrons-right.svg" alt="arrow" />
          </a>
        </Grid>
      </Grid>
      {children}
    </Root>
  );
};

export default HeadingLinkLayout;

const Root = styled.div`
  a {
    display: flex;
    align-items: center;
    color: ${colors.blue_800};
    img {
      margin-left: 5px;
    }
  }
`;
