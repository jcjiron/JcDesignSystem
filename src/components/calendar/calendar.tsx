import React from 'react'
import '../../../assets/styles/casai/calendar.styles.scss'
import '../../../assets/styles/casai/calendar.default.scss'
import { DateRange, DateRangeProps } from '@casai-org/react-date-range'
import StyledCalendar from './StyledCalendar'

export interface ICalendarRange {
    startDate?: Date
    endDate?: Date
    key?: string
}

export interface ISelectionRange {
    selection?: ICalendarRange
}

const calendarConfig: DateRangeProps = {
    editableDateInputs: false,
    moveRangeOnFirstSelection: false,
    showMonthAndYearPickers: false,
    direction: 'horizontal',
    showSelectionPreview: false,
    showPreview: false,
    weekdayDisplayFormat: 'EEEEEE',
    dayDisplayFormat: 'dd',
    dragSelectionEnabled: false,
}

export interface CalendarProps extends DateRangeProps {
    resetRange?: () => void
    variant?: 'dark' | 'light'
    columns?: number
    className?: string
    resetDateLabel?: string
    showResetDateButton?: boolean
    noticeLabel?: string
}

export const Calendar = ({
    resetRange,
    variant = 'dark',
    columns = 2,
    className = '',
    resetDateLabel = 'Reset dates',
    showResetDateButton = true,
    noticeLabel = '',
    ..._calendarProps
}: CalendarProps) => {
    const calendarProps = {
        ..._calendarProps,
        months: columns,
    }

    return (
        <StyledCalendar className={`${variant} ${className}`}>
            <DateRange
                {...calendarConfig}
                {...calendarProps}
                className={variant}
            />
            {showResetDateButton && (
                <div
                    className={`${variant} controls px-4 pt-2 pb-3 d-flex justify-content-between align-items-center`}
                >
                    <span className="notice">{noticeLabel}</span>
                    <button
                        className="btn btn-link reset p-0 h-25"
                        onClick={resetRange}
                    >
                        {resetDateLabel}
                    </button>
                </div>
            )}
        </StyledCalendar>
    )
}
