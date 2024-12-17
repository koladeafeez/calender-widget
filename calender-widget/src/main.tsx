import { StrictMode} from 'react'
import "./index.css"
import { createRoot } from 'react-dom/client'
import { DataProvider } from './contexts/EventContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import App from './App.tsx'
import "./index.css";
import getCompanyIdFromPath from './helpers/getCompanyId.tsx'


createRoot(document.getElementById('calender-widget-root')!).render(

  
  <StrictMode>
    <DataProvider>
      <ThemeProvider companyId= {getCompanyIdFromPath()}>
     <App /> 
     </ThemeProvider> 
    </DataProvider>
  </StrictMode>,
)

