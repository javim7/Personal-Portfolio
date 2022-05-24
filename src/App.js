import './App.css';
import { Route, Routes } from "react-router-dom";
import {lightTheme, darkTheme} from './components/Themes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyles'

import Main from './Pages/Main'
import About from './Pages/AboutPage'
import Projects from './Pages/ProjectsPage'
import Work from './Pages/WorkPage'
import Skills from './Pages/SkillsPage'

function App() {
  return <>
    <GlobalStyle />
      <ThemeProvider theme ={lightTheme}>
        <Routes>
          <Route exact path="" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/skills" element={<Skills /> } />
        </Routes>
      </ThemeProvider>
    </>
    
}

export default App

