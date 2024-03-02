import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AppStyled } from './app.styled';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors } from './utils';
import { useState } from 'react';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Router>
      <ThemeProvider theme={colors[theme]}>
        <AppStyled>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppStyled>
      </ThemeProvider>
    </Router>
  );
}

export default App;
