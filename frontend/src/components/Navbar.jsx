import { useState } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Create', path: '/create' },
  ];

  return (
    <>
      <AppBar
        sx={{
          background:
            location.pathname === '/create'
              ? 'transparent'
              : 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Box
          sx={{
            maxWidth: 1140,
            width: '100%',
            margin: '0 auto',
            padding: { xs: '0 16px', sm: '0 24px' },
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'orange',
              padding: 0,
            }}
          >
            <Typography
              onClick={() => navigate('/')}
              sx={{
                typography: { xs: 'h6', md: 'h5' },
                fontWeight: 'bold !important',
                cursor: 'pointer',
              }}
            >
              PRODUCT STORE 🛒
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      color:
                        location.pathname === link.path ? 'orange' : 'white',
                      '&:hover': { color: 'grey', cursor: 'pointer' },
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Box>

            {/* Hamburger Menu */}
            <IconButton
              sx={{ display: { xs: 'block', md: 'none' }, color: 'orange' }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            height: '100vh',
            backgroundColor: 'black',
            opacity: 0.8,
          }}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.name} onClick={() => setOpen(false)}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    width: '100%',
                  }}
                >
                  <ListItemText
                    sx={{
                      color:
                        location.pathname === link.path ? 'orange' : 'white',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: 'grey', cursor: 'pointer' },
                    }}
                    primary={link.name}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

// import { useState, useContext } from 'react';
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useTheme,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ColorModeContext } from '../context/ThemeContext';

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const theme = useTheme(); // Get current theme
//   const colorMode = useContext(ColorModeContext); // Get toggle function

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Create', path: '/create' },
//   ];

//   return (
//     <>
//       <AppBar
//         sx={{
//           background:
//             location.pathname === '/create'
//               ? 'transparent'
//               : theme.palette.mode === 'dark'
//               ? 'rgba(255, 255, 255, 0.1)'
//               : 'rgba(0, 0, 0, 0.7)',
//           backdropFilter: 'blur(10px)',
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: 1140,
//             width: '100%',
//             margin: '0 auto',
//             padding: { xs: '0 16px', sm: '0 24px' },
//           }}
//         >
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               color: theme.palette.text.primary,
//               padding: 0,
//             }}
//           >
//             {/* Logo */}
//             <Typography
//               onClick={() => navigate('/')}
//               sx={{
//                 typography: { xs: 'h6', md: 'h5' },
//                 fontWeight: 'bold !important',
//                 cursor: 'pointer',
//               }}
//             >
//               PRODUCT STORE 🛒
//             </Typography>

//             {/* Navigation Links */}
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   style={{ textDecoration: 'none' }}
//                 >
//                   <Typography
//                     variant='h6'
//                     sx={{
//                       color:
//                         location.pathname === link.path
//                           ? theme.palette.primary.main
//                           : theme.palette.text.primary,
//                       '&:hover': { color: theme.palette.text.secondary },
//                     }}
//                   >
//                     {link.name}
//                   </Typography>
//                 </Link>
//               ))}
//             </Box>

//             {/* Theme Toggle & Hamburger Menu */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               {/* Dark/Light Mode Toggle Button */}
//               <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
//                 {theme.palette.mode === 'dark' ? (
//                   <Brightness7 />
//                 ) : (
//                   <Brightness4 />
//                 )}
//               </IconButton>

//               {/* Hamburger Menu */}
//               <IconButton
//                 sx={{ display: { xs: 'block', md: 'none' } }}
//                 onClick={() => setOpen(true)}
//                 color='inherit'
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </Box>
//       </AppBar>

//       {/* Drawer for Mobile Menu */}
//       <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
//         <Box
//           sx={{
//             width: 250,
//             height: '100vh',
//             backgroundColor: theme.palette.background.default,
//           }}
//         >
//           <List>
//             {navLinks.map((link) => (
//               <ListItem button key={link.name} onClick={() => setOpen(false)}>
//                 <Link
//                   to={link.path}
//                   style={{
//                     textDecoration: 'none',
//                     width: '100%',
//                   }}
//                 >
//                   <ListItemText
//                     sx={{
//                       color:
//                         location.pathname === link.path
//                           ? theme.palette.primary.main
//                           : theme.palette.text.primary,
//                       '&:hover': { color: theme.palette.text.secondary },
//                     }}
//                     primary={link.name}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
