import styled from 'styled-components'

const StyledCalendar = styled.div`
    width: fit-content;
    .dark {
        --bg-color: #141412;
        --color: #f2f2f2;
        --line-through-color: #f2f2f2;
        --disabled-day-color: rgba(107, 107, 107, 1);
        --special-day-color: rgba(165, 165, 165, 1);
        --range-bg: #2b2b2b;
        --range-color: var(--primary);
        --range-edge-bg: #000000;
        --range-edge-color: var(--primary);
        --days-header-color: rgb(132, 144, 149);
    }
    .light {
        --bg-color: #ffffff;
        --color: #000000;
        --line-through-color: rgba(0, 0, 0, 0.6);
        --disabled-day-color: rgba(165, 165, 165, 1);
        --special-day-color: rgba(107, 107, 107, 1);
        --range-bg: #f0f0f0;
        --range-color: #ffffff;
        --range-edge-bg: #000000;
        --range-edge-color: #000000;
        --days-header-color: rgb(132, 144, 149);
    }

    color: var(--color);
    background: var(--bg-color);

    .rdrCalendarWrapper {
        /* Container  */
        background: var(--bg-color);
        font-weight: 500;
        display: block;
    }

    .rdrDayDisabled {
        background: transparent;
        .rdrDayNumber {
            span {
                color: var(--disabled-day-color);
                text-decoration: line-through;
                font-weight: 500;
            }
        }
    }

    .rdrDayNumber span {
        color: var(--color);
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
    }

    .rdrInRange {
        /* :: Range background :: */
        background: var(--range-bg);
        top: 0;
        bottom: 0;
    }

    .rdrStartEdge,
    .rdrEndEdge {
        /* Start and end date background */
        background: var(--range-edge-bg);
    }

    .rdrMonthName {
        color: var(--color);
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        padding: 0;
        line-height: 17px;
        margin-bottom: 17px;
    }

    .rdrMonths .rdrWeekDays .rdrWeekDay {
        color: var(--days-header-color);
    }

    .controls {
        background: var(--bg-color);
        .reset,
        .notice {
            font-weight: 500;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: right;
            color: var(--color);
        }
    }

    .rdrDayToday .rdrDayNumber span:after {
        /* hide today bottom mark */
        display: none !important;
    }
    .rdrDayToday span {
        color: var(--primary);
        font-weight: 600;
    }
    .rdrDayDisabled.rdrDayToday span {
        color: var(--primary);
        font-weight: 600;
    }

    .rdrStartEdge.rdrEndEdge::before {
        background: none !important;
    }

    .rdrDayEndOfMonth .rdrInRange,
    .rdrDayEndOfWeek .rdrInRange,
    .rdrDayStartOfMonth .rdrInRange,
    .rdrDayStartOfWeek .rdrInRange {
        border-radius: 0;
    }

    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
    .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
    .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
    .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
        color: var(--range-color);
    }

    .rdrDay:not(.rdrStartEdge) .rdrInRange ~ .rdrDayNumber span,
    .rdrDay:not(.rdrEndEdge) .rdrInRange ~ .rdrDayNumber span {
        color: var(--range-edge-color);
    }

    .rdrMonths .rdrMonth .rdrDays .rdrDay .rdrEndEdge:before {
        background: var(--range-bg); // --range-bg
    }
    .rdrMonths .rdrMonth .rdrDays .rdrDay .rdrStartEdge:before {
        background: var(--range-bg); // --range-bg
    }

    .rdrDayPassive span {
        display: none;
    }

    .rdrMonthAndYearWrapper {
        height: 0px;
        padding: 0;
    }

    .rdrMonthAndYearPickers {
        display: none;
    }

    .rdrNextPrevButton {
        margin: 0px;
        background: none;
        position: relative;
        bottom: -46px;
        i {
            display: none;
        }
        &:hover {
            background: none;
        }
    }

    .rdrNextPrevButton.rdrPprevButton,
    .rdrNextPrevButton.rdrNextButton {
        line-height: 0;
        &:after {
            font-family: 'icomoon' !important;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            color: var(--color);
        }
    }

    .rdrNextPrevButton.rdrPprevButton {
        left: 33px;
        &:after {
            content: '\\e97c';
        }
    }

    .rdrNextPrevButton.rdrNextButton {
        right: 33px;
        &:after {
            content: '\\e97d';
        }
    }

    .rdrMonths {
        margin-top: 24px;
        display: flex;
        justify-content: center;

        .rdrMonth {
            padding: 14px 22px 0 22px;
            .rdrDays {
                .rdrDay {
                    height: 39px;
                    z-index: 10;
                }
            }
        }

        .rdrWeekDays {
            margin-bottom: 6px;
            .rdrWeekDay {
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
            }
        }
    }

    .rdrStartEdge:before,
    .rdrEndEdge:before {
        -webkit-transform: translate(-50%, 0);
        -webkit-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        width: 50%;
        z-index: -1;
        content: '';
        position: absolute;
        bottom: 0px;
        height: 39px;
    }

    .rdrStartEdge:before {
        left: 75%;
    }

    .rdrEndEdge:before {
        left: 25%;
    }

    .rdrStartEdge,
    .rdrEndEdge {
        top: 0;
        left: 0 !important;
        border-radius: 50% !important;
        height: 39px;
    }
`

export default StyledCalendar
