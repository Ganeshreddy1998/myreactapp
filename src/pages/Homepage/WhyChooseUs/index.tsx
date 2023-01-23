import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../../components/atoms/Icon/Icon";
import Typography from "../../../components/atoms/Typography/Typography";
import FullWidthColoredContainer from "../../../components/molecules/FullWidthColoredContainer/FullWidthColoredContainer";
import Gutter from "../../../components/templates/Gutter";
import { colors } from "../../../constants";

const items = [
  { icon: "test", label: "1600+ Tests" },
  { icon: "home", label: "At Home Services" },
  { icon: "lab_technician", label: "Certified Professionals" },
  { icon: "award", label: "CLIA Certified Labs" },
  { icon: "reports", label: "Reports in 24 - 48 Hours" },
  { icon: "shield", label: "Safe and Hygenic" },
];
const WhyChooseUs = () => {
  return (
    <FullWidthColoredContainer title=" Why Choose Us">
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid item xs={4}>
            <CardRoot>
              <IconWrap>
                <Icon name={item.icon} />
              </IconWrap>
              <Typography type="sm">{item.label}</Typography>
            </CardRoot>
          </Grid>
        ))}
      </Grid>
    </FullWidthColoredContainer>
  );
};

export default WhyChooseUs;

const Root = styled.div`
  background-color: ${colors.blue_800};
  padding: 60px 0;
  margin-bottom: 60px;
`;
const CardRoot = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${colors.purple_50};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
