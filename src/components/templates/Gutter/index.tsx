import React, { ReactNode } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

interface propTypes {
  children: ReactNode;
  style?: object;
}

const GutterRoot = styled(Grid)`
  margin: 0 auto;
`;

const Gutter = (props: propTypes) => {
  const { children, style } = props;
  return (
    <GutterRoot item container xs={10} lg={11} style={style}>
      {children}
    </GutterRoot>
  );
};

export default Gutter;
