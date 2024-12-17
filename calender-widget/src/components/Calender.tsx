import type {CalendarProps, DateValue} from 'react-aria-components';
import {Calendar, Button, Heading, CalendarGrid, CalendarCell, 
  CalendarGridHeader, CalendarGridBody} from 'react-aria-components'
import {Text} from 'react-aria-components';
import {I18nProvider} from 'react-aria';


interface MyCalendarProps<T extends DateValue> extends CalendarProps<T> {
  errorMessage?: string;
}

export default function  ProductCalender<T extends DateValue>(
  { errorMessage, ...props }: MyCalendarProps<T>
) {

  return (

  <I18nProvider locale="en">
      <Calendar {...props} className="w-fit max-w-full text-text">
        {/* Header */}
        <header className="flex items-center mx-1 mb-2">
          <Button className="w-8 h-8 flex items-center justify-center p-0" slot="previous">
            ◀
          </Button>
          <Heading className="flex-1 text-center text-lg font-medium" />
          <Button className="w-8 h-8 flex items-center justify-center p-0" slot="next">
            ▶
          </Button>
        </header>

        <CalendarGrid className="grid grid-cols-7 gap-1">         
              <CalendarGridHeader>
                {(column) => (
                  <th
                    key={column}
                    className="w-8 h-8 flex items-center justify-center uppercase text-sm font-medium text-text"
                  >
                    {column}
                  </th>
                )}
              </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                //key={date}
                date={date}
                className={`
                  w-8 h-8 text-center rounded-md cursor-pointer 
                  focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 
                  data-[pressed]:bg-text
                  data-[selected]:bg-blue-500 data-[selected]:text-text
                  data-[outside-month]:text-text
                `}
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>

        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </Calendar>
    </I18nProvider>

  );
}