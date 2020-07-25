const colors = {
  white: '#fff',
  black: '#000',
  red: '#b71c1c',
  grey: '#424242',
  brown: '#4e342e',
  blue: '#0d47a1',
  torre: '#F3F3F3',
  header: '#27292D',
  headerText: 'rgba(255, 255, 255, 0.65)',
  headerActive: '#CDDC39',
  backgroundBody: '#f5f6f7',
  backgroundButton: '#1e88e5',
  backgroundButtonHover: '#1565c0',
};

const themes = {
  light: {
    colors,
    primaryColor: colors.black,
    secundaryColor: colors.white,
    buttonColor: colors.blue,
    hoverColor: colors.grey,
    activeLinkColor: colors.red,
    activeDynamicPageColor: colors.brown,
    torreColor: colors.torre,
    headerBackground: colors.header,
    headerText: colors.headerText,
    headerActive: colors.headerActive,
    backgroundBody: colors.backgroundBody,
    backgroundButton: colors.backgroundButton,
    backgroundButtonHover: colors.backgroundButtonHover,
  },
};

export default themes;
