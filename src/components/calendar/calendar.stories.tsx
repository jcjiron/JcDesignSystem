import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import addDays from 'date-fns/addDays';
import {
  Calendar,
  CalendarProps,
  ICalendarRange,
  ISelectionRange,
} from './index';

export default {
  title: 'Example/Calendar',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const checkoutDate = addDays(new Date(), 3);

const Base: Story<CalendarProps> = ({ ...args }: CalendarProps) => {
  const [
    calendarSelectionRange,
    setCalendarSelectionRange,
  ] = useState<ICalendarRange>({
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 4),
    key: 'selection',
  });
  const handleSelectRange = ({ selection }: ISelectionRange) => {
    setCalendarSelectionRange(selection);
  };
  return (
    <Calendar
      ranges={[calendarSelectionRange]}
      onChange={handleSelectRange}
      columns={1}
      minDate={new Date()}
      maxDate={addDays(new Date(), 180)}
      {...args}
    ></Calendar>
  );
};

export const Dark = Base.bind({});

export const Light = Base.bind({});

Dark.args = {
  variant: 'dark',
  columns: 2,
  resetDateLabel: 'Reiniciar fechas',
  notice: 'Minimum of nights my vary',
  showResetDateButton: false,
} as CalendarProps;

Light.args = {
  variant: 'light',
  columns: 2,
  resetDateLabel: 'Reiniciar fechas',
  notice: 'Minimum of nights my vary',
  showResetDateButton: false,
} as CalendarProps;
