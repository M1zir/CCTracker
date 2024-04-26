import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import Details from './pages/details'; 
import  Navbar  from './components/Navbar';
import { registerLicense } from '@syncfusion/ej2-base';

import { CryptoProvider } from './contexts/CryptoContext';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x0QHxbf1x0ZFNMZFhbQXdPIiBoS35RckVnW3pfeHBRQ2JcWU1z');
function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CryptoProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/details" element={<Details />} />
          </Routes>
        </CryptoProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
