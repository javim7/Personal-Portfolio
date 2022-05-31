import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import {lightTheme} from './components/Themes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyles'
import { AnimatePresence } from "framer-motion";

import Main from './Pages/Main'
import About from './Pages/AboutPage'
import Projects from './Pages/ProjectsPage'
import Work from './Pages/WorkPage'
import Skills from './Pages/SkillsPage'
import SoundBtn from './subComponents/SoundBtn';

function App() {
  const location = useLocation()
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <SoundBtn />
      <AnimatePresence exitBeforeEnter>
         <Routes  location={location} key={location.pathname}>
          <Route exact path="" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/skills" element={<Skills /> } />
        </Routes>
      </AnimatePresence>
      </ThemeProvider>
    </>
    
}

export default App

