import { createTheme } from "@mui/material/styles";
import { colors } from "./constants";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      ...colors,
    },
    // secondary: {
    //   main: '#19857b',
    // },
    colors: {
      ...colors,
    },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "blue" },
          style: {
            background: colors.blue_500 + "!important",
            borderRadius: "8px",
            height: "42px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "25px",
            color: "#FFFFFF",
          },
        },
      ],
    },
  },
});

export default theme;
