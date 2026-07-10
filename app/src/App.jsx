import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import InteractivePCAPlot from './pages/InteractivePCAPlot'
import DataMethodology from './pages/DataMethodology'
import 'bulma/css/bulma.min.css'

const App = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                         <Route
                              index
                              element={
                                   <Navigate
                                        to="/interactive-pca"
                                        replace
                                   />
                              }
                         />
                         <Route
                              path="interactive-pca"
                              element={<InteractivePCAPlot />}
                         />
                         <Route
                              path="data-methodology"
                              element={<DataMethodology />}
                         />
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App
