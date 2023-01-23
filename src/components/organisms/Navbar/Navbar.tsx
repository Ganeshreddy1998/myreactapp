import styled from "@emotion/styled";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";
import Link from "../../atoms/Link/Link";
import Gutter from "../../templates/Gutter";

const Root = styled.div`
  width: 100%;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  padding: 10px 0;
`;

const Navbar = () => {
  return (
    <Root>
      <Gutter>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item lg={3}>
            <img src="/images/logo_name.png" alt="logo" data-testid="logo" />
          </Grid>
          <Grid item lg={3}>
            <Link href="/" active>
              Home
            </Link>
            <Link href="/reports">Reports</Link>
            <Link href="/appointments">My Appointments</Link>
          </Grid>
          <Grid item container alignItems="center" justifyContent="end" lg={3}>
            <IconButton>
              <Icon name="user" />
            </IconButton>
            <IconButton>
              <Icon name="shopping-cart" />
            </IconButton>
          </Grid>
        </Grid>
      </Gutter>
    </Root>
  );
};

export default Navbar;
