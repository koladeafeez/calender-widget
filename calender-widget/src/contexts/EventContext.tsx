import { createContext, useContext, useState, useEffect, ReactNode, FC } from "react";
import { EventService } from "../services/EventService";
import { EventModel } from "../models/Event";


interface DataContextType {
  companyId : number, // Customer Pass this
  data: EventModel[];
  eventBooked : boolean;
  loading: boolean;
  error: string;
  saveBooking: (eventId: number, ticketCount: number) => void;
}


const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}


export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setEventData] = useState<EventModel[]>([]);

  let companyId = 1;
  const [eventBooked, setEventBooked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const saveBooking = async (eventId: number, ticketCount: number) => {
    try {
      let response = await new EventService().saveBooking(1, eventId, ticketCount);      
      if (response.success) {
        setEventBooked(true);
        setLoading(false);
      } else {
        setError("Fails to Booked Event");
        setLoading(false);
      }
    } catch (err) {
      if (err instanceof Error) 
          setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data with Axios
    const fetchData = async () => {
      try {
        const response = await new EventService().getEvents();
        if (response.success) {
          setEventData(response.data as EventModel[]);
          setLoading(false);
        } else {
          setError("Fails to Fetch Data");
          setLoading(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ companyId, data, loading, error, saveBooking, eventBooked }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () =>{
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
 return context;
}