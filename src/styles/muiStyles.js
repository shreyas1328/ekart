export const defaultTheme = (type, fontsize) => {
  return {
    palette: {
      type: type,
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
      fontFamily: "Arial",
      // span: { color: "#ff0000" },
      h1: { fontWeight: 900, fontSize:`${1*fontsize}rem` },
      h4: { fontWeight: 550, fontSize:`${1*fontsize}rem` },
      h5: { fontWeight: 550, fontSize:`${1*fontsize}rem` },
      h6  : { fontWeight: 400, fontSize:`${1*fontsize}rem` },
      body2  : { fontWeight: 400, fontSize:`${1*fontsize}rem` },
      subtitle1: { fontWeight: 400, fontSize:`${1*fontsize}rem` },
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
};

export const flameTheme = (type, fontsize) => {
  return {
    palette: {
      type: type,
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
      fontFamily: "Arial",
      // span: { color: "#ff0000" },
      h1: { fontWeight: 900, fontSize:`${1*fontsize}rem` },
      h4: { fontWeight: 550, fontSize:`${1*fontsize}rem` },
      h5: { fontWeight: 550, fontSize:`${1*fontsize}rem` },
      h6  : { fontWeight: 400, fontSize:`${1*fontsize}rem` },
      body2  : { fontWeight: 400, fontSize:`${1*fontsize}rem` },
      subtitle1: { fontWeight: 400, fontSize:`${1*fontsize}rem` },
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
};
