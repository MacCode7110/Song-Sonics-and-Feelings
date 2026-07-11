import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ExploratoryPCAPage from './pages/ExploratoryPCAPage'
import DataMethodologyPage from './pages/DataMethodologyPage'
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
                                        to="/exploratory-pca"
                                        replace
                                   />
                              }
                         />
                         <Route
                              path="exploratory-pca"
                              element={<ExploratoryPCAPage />}
                         />
                         <Route
                              path="data-methodology"
                              element={<DataMethodologyPage />}
                         />
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App
