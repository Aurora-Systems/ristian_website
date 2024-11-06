import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Site from './site'
import Companies from "./pages/companies.tsx";
import Individuals from "./pages/individuals.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<Site/>} />
              <Route path={"/business_improvement"} element={<Companies/>} />
              <Route path={"/individuals"} element={<Individuals/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
