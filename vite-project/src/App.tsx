// common react lib
import { useState , useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

// page layouts
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { NotFound } from "./pages/NotFound";

//components
// import { ResultCard } from "./components/resultCard/resultCard";
import { Header } from "./common/Header/header";
import { Footer } from "./common/Footer/footer";


// style
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#9ccc65',
      },
      secondary: {
        main: '#FFC20D',
      },
    },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
