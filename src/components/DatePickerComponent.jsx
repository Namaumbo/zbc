"use client";

import { Datepicker } from "flowbite-react";

export function DatePickerComponent() {
  return (
    <Datepicker
      inline
      value={new Date()}
      disabledDates={[]}
      weekStart={1}
      showWeekNumbers
      theme={{
        weekend: "text-red-500",
        popup: {
          footer: {
            button: {
              today: "hidden",
              clear: "hidden"
            }
          }
        }
      }}
    />
  );
}
