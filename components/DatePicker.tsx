'use client';

import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="w-full border rounded-md py-2 px-3 text-left hover:bg-gray-100"
      >
        {format(date, 'MMM d, yyyy')}
      </button>

      {show && (
        <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-md">
          <Calendar
            date={date}
            onChange={(newDate) => {
              setDate(newDate);
              setShow(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
