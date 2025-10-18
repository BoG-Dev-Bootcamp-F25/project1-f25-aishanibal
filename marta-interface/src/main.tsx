import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import LinesPage from './pages/LinesPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<App />}>
          <Route index element={<Home/>}></Route>
          <Route path="lines" element = {<LinesPage/>}></Route>
          <Route path ="about" element = {<About/>}></Route>
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
