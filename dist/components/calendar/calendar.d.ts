/// <reference types="react" />
import './calendar.styles.scss'
import './calendar.default.scss'
import { DateRangeProps } from '@casai-org/react-date-range'
export interface ICalendarRange {
    startDate?: Date
    endDate?: Date
    key?: string
}
export interface ISelectionRange {
    selection?: ICalendarRange
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
export declare const Calendar: ({
    resetRange,
    variant,
    columns,
    className,
    resetDateLabel,
    showResetDateButton,
    noticeLabel,
    ..._calendarProps
}: CalendarProps) => JSX.Element
