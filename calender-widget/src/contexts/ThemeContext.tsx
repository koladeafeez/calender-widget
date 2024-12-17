import React, { createContext, useContext, useEffect, useState } from "react";
import { EventService } from "../services/EventService";


type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    companyName : string
  }

  const defaultTheme = 'light';

const ThemeContext = createContext< ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode; companyId: number }> = ({
  children,
  companyId,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [companyName, setCompanyName] = useState("Error");

  useEffect(() => {
    if(companyId != 0)
    {
    const fetchTheme = async (companyId : number) : Promise<Theme> =>  {
    try {
          let response = await new EventService().getSetting(companyId);  
          if (response.success) {
            if(response.data)
            {   
              setCompanyName(response.data.name);
              return response.data.color as Theme;;

            }
            else
              return defaultTheme;
          } else {
            return defaultTheme;
          }
        } catch (err) {
            return defaultTheme;
        }
    }

    fetchTheme(companyId).then( (value) => {
            document.documentElement.setAttribute('data-theme', value);

            if (value === defaultTheme) {
                document.documentElement.style.setProperty('--calender-widget-primary-color', '#3b82f6'); // Blue
                document.documentElement.style.setProperty('--calender-widget-bg-color', '#ffffff'); // White
                document.documentElement.style.setProperty('--calender-widget-text-color', '#1f2937'); // Gray-800
              } else {
                document.documentElement.style.setProperty('--calender-widget-primary-color', '#2563eb'); // Darker Blue
                document.documentElement.style.setProperty('--calender-widget-bg-color', '#1f2937'); // Gray-800
                document.documentElement.style.setProperty('--calender-widget-text-color', '#ffffff'); // White
              }

        setTheme(value);
    },
    (err) => {
        console.log(err?.message);   
    }
)
    }
  }, [companyId]);

  return <ThemeContext.Provider value={{ theme, setTheme, companyName }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
