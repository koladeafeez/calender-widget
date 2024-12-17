

export default function formatEventDate(date: Date) {
  const optionsDay: Intl.DateTimeFormatOptions = { weekday: "short" };
  const optionsTime: Intl.DateTimeFormatOptions = { 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: false 
  }; 

  const startTime = new Date(date);
  const endTime = new Date(date);

  endTime.setHours(startTime.getHours() + 2);

  const day = new Intl.DateTimeFormat("en-US", optionsDay).format(startTime);
  const start = new Intl.DateTimeFormat("en-US", optionsTime).format(startTime);
  const end = new Intl.DateTimeFormat("en-US", optionsTime).format(endTime);

  return `${day}, ${start} - ${end} GMT`;
}
