import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import { colors } from "../../../constants";
import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

interface propTypes {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const BookNowContainer = (props: propTypes) => {
  const { title, subTitle, buttonText, buttonLink, imageUrl } = props;
  return (
    <Root>
      <Grid container>
        <Grid
          item
          xs={6}
          container
          flexDirection="column"
          justifyContent="space-between"
        >
          <div>
            <Typography
              type="md"
              color="white"
              style={{ marginBottom: "10px" }}
            >
              {title}
            </Typography>
            <Typography type="sm" color="white">
              {subTitle}
            </Typography>
          </div>
          <div>
            <Button variant="white" onClick={() => {}}>
              {buttonText}
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="end">
          <BannerImage src={imageUrl} alt="image" />
        </Grid>
      </Grid>
    </Root>
  );
};

export default BookNowContainer;

const Root = styled.div`
  background-color: ${colors.blue_800};
  padding: 40px 48px;
  border-radius: 12px;
  margin: 40px 0;
`;
const BannerImage = styled.img`
  width: 250px;
  height: 160px;
  object-fit: cover;
`;
