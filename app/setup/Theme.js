import { DefaultTheme } from 'react-native-paper';


const primaryTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#81CFAE',
    background: '#212121',
    accent: '#81CFAE',
    surface: '#212121',
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export default primaryTheme;
