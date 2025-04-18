import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
//import { ThemeProvider } from '../context/ThemeProvider';

function App() {
  return (
    // <ThemeProvider>
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>
    </Box>
    // </ThemeProvider>
  );
}

export default App;
