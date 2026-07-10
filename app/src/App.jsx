import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import InteractivePCA from './pages/InteractivePCA'
import DataMethodology from './pages/DataMethodology'

const App = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                         <Route path="interactive-pca" element={<InteractivePCA />} />
                         <Route path="data-methodology" element={<DataMethodology />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App
