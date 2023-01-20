import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";
import { colors } from "../../../constants";
import Typography from "../../atoms/Typography/Typography";
import Gutter from "../../templates/Gutter";

interface propTypes {
  children: ReactNode;
  title?: string;
}

const FullWidthColoredContainer: FC<propTypes> = ({ children, title }) => {
  return (
    <Root>
      <Gutter>
        <InnerRoot>
          {title && (
            <Typography
              type="md"
              color="white"
              style={{ marginBottom: "30px" }}
            >
              {title}
            </Typography>
          )}
          {children}
        </InnerRoot>
      </Gutter>
    </Root>
  );
};

export default FullWidthColoredContainer;

const Root = styled.div`
  background-color: ${colors.blue_800};
  padding: 60px 0;
  margin-bottom: 60px;
`;
const InnerRoot = styled.div`
  width: 100%;
`;
