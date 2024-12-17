import { ChangeEvent, useState } from 'react';

interface TicketProps{
  getTicketCount : (count :number)  => void;
}

const TicketForm : React.FC<TicketProps> = ({getTicketCount}) => {
  const [ticketCount, setTicketCount] = useState(1);
  const maxTickets = 10; 
  const minTickets = 1; 

  const handleIncrease = () => {
    if (ticketCount < maxTickets) {
      setTicketCount(ticketCount + 1);
      getTicketCount(ticketCount + 1);
    }
  };

  const handleDecrease = () => {
    if (ticketCount > minTickets) {
      setTicketCount(ticketCount - 1);
      getTicketCount(ticketCount - 1);
    }
  };

  // Handle manual input changes
  const handleInputChange = (e :  ChangeEvent<HTMLInputElement>) => {
    if(e != null && e.target != null)
    {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= minTickets && value <= maxTickets) {
      setTicketCount(value);
      getTicketCount(value);
    }
  }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-md bg-background text-text">
      <h1 className="text-2xl font-bold text-center mb-4 text-text">Select Tickets</h1>

      <div className="flex items-center justify-between">
        {/* Decrease Button */}
        <button
          type="button"
          onClick={handleDecrease}
          className="w-12 h-12 bg-primary hover:bg-background text-lg font-bold rounded-full flex items-center justify-center"
          aria-label="Decrease ticket count"
        >
          -
        </button>

        <input
          type="number"
          min={minTickets}
          max={maxTickets}
          value={ticketCount}
          onChange={handleInputChange}
          className="w-16 h-12 text-center text-lg font-semibold border rounded-md focus:ring-2 focus:ring-blue-400 bg-background"
        />

        <button
          type="button"
          onClick={handleIncrease}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-text text-lg font-bold rounded-full flex items-center justify-center"
          aria-label="Increase ticket count"
        >
          +
        </button>
      </div>

      <p className="mt-4 text-center text-text">
        You have selected{' '}
        <span className="text-blue-600 font-bold">{ticketCount}</span> ticket{ticketCount > 1 ? 's' : ''}.
      </p>
    </div>
  );
};

export default TicketForm;
