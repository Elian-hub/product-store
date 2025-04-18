// import { useState, useMemo } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import { ColorModeContext } from '../context/ThemeContext';

// function ThemeContextProvider({ children }) {
//   const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => {
//           const newMode = prevMode === 'light' ? 'dark' : 'light';
//           localStorage.setItem('theme', newMode);
//           return newMode;
//         });
//       },
//     }),
//     []
//   );

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           primary: {
//             main: mode === 'light' ? '#ff9800' : '#ffb74d',
//           },
//           background: {
//             default: mode === 'light' ? '#f5f5f5' : '#121212',
//             paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
//           },
//           text: {
//             primary: mode === 'light' ? '#000' : '#fff',
//             secondary: mode === 'light' ? '#757575' : '#bdbdbd',
//           },
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
// export default ThemeContextProvider;
