export const Default = {
  palette: {
    type: "light",
    primary: {
      main: "#808080",
    },
    secondary: {
      main: "#000000",
    },
    success: {
      main: "#008000",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: "Roboto",
    span: { color: "#ff0000" },
    h1: { fontWeight: 900 },
    h4: { color: "#000000", fontWeight: 550 },
    h5: { fontWeight: 550 },
    // h6: { color: "#f1cece", fontWeight: 900 },
  },
  overrides: {
    MuiPaper: {
      borderRadius: 0,
    },
    MuiButton: {
      root: {
        backgroundColor: "#808080",
        color: "#ffffff",
        border: "1px solid #808080",

        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#808080",
        },
      },
    },
  },
  props: {
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiButtonBase: {
      disableRipple: false,
    },
  },
};

export const Flame = {
    primary:"",
    secondary:"",
  palette: {
    type: "dark",
    primary: {
      main: "#ffff00",
    },
    secondary: {
      main: "#ff0000",
    },
    success: {
      main: "#008000",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: "Roboto",
    span: { color: "#ff0000" },
    h1: { fontWeight: 900 },
    h4: { fontWeight: 550 },
    h5: { fontWeight: 550 },
    // h6: { color: "#f1cece", fontWeight: 900 },
  },
  overrides: {
    MuiPaper: {
      borderRadius: 0,
    },
    MuiButton: {
      root: {
        backgroundColor: "#ff0000",
        color: "#ffff00",
        border: "1px solid #ff0000",

        "&:hover": {
          backgroundColor: "#ffff00",
          color: "#ff0000",
        },
      },
    },
  },
  props: {
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiButtonBase: {
      disableRipple: false,
    },
  },
};
