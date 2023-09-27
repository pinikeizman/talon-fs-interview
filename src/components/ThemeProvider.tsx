"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

import { grey } from "@mui/material/colors";

const secondaryColor = "#919EAB";

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: secondaryColor,
            },
          },
        },
        notchedOutline: {
          borderColor: secondaryColor,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#3D4752",
          borderBottomWidth: 2,
        },
      },
    },
  },
  shape: { borderRadius: 6 },

  palette: {
    info: { main: "#3A90E5" },
    error: { main: "#F06161" },
    warning: { main: "#FFB547", contrastText: "#FFF" },
    background: { paper: "#222B36", default: "#222B36" },
    text: {
      secondary: "#919EAB",
    },
    mode: "dark",
    secondary: { main: secondaryColor },
    action: {
      disabled: grey[700],
      active: secondaryColor,
    },
  },
  typography: {
    body1: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.8125rem",
    },
  },
});

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <MuiThemeProvider {...props} theme={theme} />;
};
export default ThemeProvider;
