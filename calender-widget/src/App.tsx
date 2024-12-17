import React, { useState } from "react";
import EventCalender from "./components/EventCalender";
import { useData } from "./contexts/EventContext";
import { EventModel } from "./models/Event";
import TicketForm from "./components/TicketForm";
import { useTheme } from "./contexts/ThemeContext";


const App: React.FC = () => {
  const { theme, companyName } = useTheme();
  const { saveBooking, loading, data } = useData();
  const [selectedEvent, setSelectedEvent] = useState<EventModel>();
  let [ticketCount, setTicketCount] = useState(1);

  const [currentStep, setCurrentStep] = useState(1);

  const handleTicketSelection = (event: EventModel) => {
    setSelectedEvent(event)
    setCurrentStep((prev) => prev + 1);
  };

  const handleEventBook = () => {
    if (selectedEvent) {
      saveBooking(selectedEvent.id, ticketCount);
      prevStep();
    }else
    {
      ("No Event Selected");
    }
  };

  console.log("Theme Is " + theme);
  const prevStep = () => setCurrentStep((prev) => prev - 1);


  const handleTicketCount = (value: number) => {
    setTicketCount(value);
  }

  return (
    <>
    {loading ? (
      <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 z-10">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    ) : (
    <div className="max-w-md mx-auto p-6 mt-10 rounded-lg shadow-md bg-background ">
      <form className="bg-background text-text">
        {currentStep === 1 && (
          <>
          <EventCalender sentEvent={handleTicketSelection} companyName={companyName} />
          <h2 style={{ display: data && data.length  > 0 && !loading ? 'none' : 'block' }}>
                 No Data to Display
          </h2>
          </>
          
        )}
        {currentStep === 2 && (
          <div>
            <label className="block mb-2 ">
              Name: {selectedEvent?.name}
            </label>
            <label className="block mb-2">
              Location: {selectedEvent?.location}
            </label>
            <label className="block mb-4">
              Date: {selectedEvent?.date ? new Date(selectedEvent?.date).toLocaleDateString() : ""}

            </label>
            <TicketForm getTicketCount={handleTicketCount} />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleEventBook}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Book
              </button>
            </div>
          </div>
        )}
      </form>
      
    </div>
    )}
    </>
  );
};

export default App;
