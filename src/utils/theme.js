import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        padding: "12px 24px",
      },
      containedPrimary: {
        color: "#fff",
      },
      containedSecondary: {
        color: "#fff",
      },
    },
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: "black",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
      },
    },
  },
});

export default theme;
