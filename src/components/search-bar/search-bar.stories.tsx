import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SearchBar from './index'
import styled from 'styled-components'
import { Calendar, ICalendarRange, ISelectionRange } from '../calendar'
import addDays from 'date-fns/addDays'
import { Option, Select } from '../select'
import { DropdownBase } from '../dropdown-base/dropdown-base'
import { Counter } from '../counter'
import Button from '../button'
import { Icon } from '../icon'

export default {
    title: 'Example/Search Bar',
    component: SearchBar,
} as Meta

const StyledSelect = styled(Select)`
    .dropdown {
        height: 100%;
    }
    .dropdown-toggle {
        height: 100%;
        padding: 8px 16px;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
    }
    .dropdown-toggle:focus {
        border-radius: 25px;
        border: 2px solid var(--primary);
        box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);
    }
`

const StyledDropDown = styled(DropdownBase)`
    .dropdown {
        height: 100%;
    }
    .dropdown-toggle {
        height: 100%;
        padding: 8px 16px;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
    }
    .dropdown-toggle:focus {
        border-radius: 25px;
        border: 2px solid var(--primary);
        box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.09);
    }
`

const CalendarDropdown = styled(StyledDropDown)``

const CounterContainer = styled.div`
    background: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    width: 200px;
`

const checkoutDate = addDays(new Date(), 3)

const CalendarComponent = ({ columns, className }) => {
    const [calendarSelectionRange, setCalendarSelectionRange] =
        React.useState<ICalendarRange>({
            startDate: checkoutDate,
            endDate: addDays(checkoutDate, 5),
            key: 'selection',
        })
    const handleSelectRange = ({ selection }: ISelectionRange) => {
        setCalendarSelectionRange({ ...selection, startDate: checkoutDate })
    }
    return (
        <Calendar
            ranges={[calendarSelectionRange]}
            onChange={handleSelectRange}
            columns={columns}
            variant="light"
            className={className}
        ></Calendar>
    )
}

const cities: Option[] = [
    { name: 'CDMX', value: 'cdmx' },
    { name: 'Sao Paulo', value: 'sp' },
]

const neighborhoods: Option[] = [
    { name: 'Condesa', value: 'condesa' },
    { name: 'Roma', value: 'roma' },
    { name: 'Polanco', value: 'polanco' },
]

const Template: Story = () => {
    const [selectedCity, setSelectedCity] = React.useState<Option>()
    const [selectedNeighborhood, setSelectedNeighborhood] =
        React.useState<Option>()
    const [guests, setGuests] = React.useState<number>(1)

    return (
        <SearchBar>
            <StyledSelect
                options={cities}
                onChange={setSelectedCity}
                placeholder="Select City"
                selectedOption={selectedCity}
                variant="light"
            />
            <StyledSelect
                options={neighborhoods}
                onChange={setSelectedNeighborhood}
                placeholder="Neighborhood"
                selectedOption={selectedNeighborhood}
                variant="light"
            />
            <CalendarDropdown
                placeholder="Check In - Check Out"
                variant="light"
            >
                <CalendarComponent columns={2} className="" />
            </CalendarDropdown>
            <StyledDropDown variant="light" placeholder={`${guests} guests`}>
                <CounterContainer>
                    <Counter
                        onChange={setGuests}
                        value={guests}
                        placeholder="Guests"
                        max={7}
                        min={1}
                    />
                </CounterContainer>
            </StyledDropDown>
        </SearchBar>
    )
}

type FilterStep = 'initial' | 'city' | 'neighborhood' | 'date' | 'guests'

type State = {
    step: FilterStep
    isCompleted: boolean
}

const initialState: State = {
    step: undefined,
    isCompleted: false,
}

type Action =
    | { type: 'OPEN_CITY_FILTER' }
    | { type: 'OPEN_NEIGHBORHOOD_FILTER' }
    | { type: 'OPEN_DATE_FILTER' }
    | { type: 'OPEN_GUESTS_FILTER' }
    | { type: 'CLOSE_FILTER' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'OPEN_CITY_FILTER':
            return {
                ...state,
                step: 'city',
            }
        case 'OPEN_NEIGHBORHOOD_FILTER':
            return {
                ...state,
                step: 'neighborhood',
            }
        case 'OPEN_DATE_FILTER':
            return {
                ...state,
                step: 'date',
            }
        case 'OPEN_GUESTS_FILTER':
            return {
                ...state,
                step: 'guests',
                isCompleted: true,
            }
        case 'CLOSE_FILTER':
            return {
                ...state,
                step: 'initial',
                isCompleted: true,
            }
        default:
            throw new Error()
    }
}

const BottomBarContainer = styled.div`
    padding: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: 0px -6px 8px 0 rgb(113 113 113 / 10%);
    width: 100%;
    display: flex;
    justify-content: center;
`

const Mobile: Story = () => {
    const [{ step }, dispatch] = React.useReducer(reducer, initialState)
    const [selectedCity, setSelectedCity] = React.useState<Option>()
    const [calendarSelectionRange, setCalendarSelectionRange] =
        React.useState<ICalendarRange>({
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        })
    const handleSelectRange = ({ selection }: ISelectionRange) => {
        setCalendarSelectionRange({ ...selection })
    }
    const [selectedNeighborhood, setSelectedNeighborhood] =
        React.useState<Option>()
    const [guests, setGuests] = React.useState<number>(1)

    const resetDates = () => {
        setCalendarSelectionRange({
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        })
    }

    const onSelectCity = (option: Option) => {
        setSelectedCity(option)
        dispatch({ type: 'OPEN_NEIGHBORHOOD_FILTER' })
    }

    const onSelectNeighborhood = (option: Option) => {
        setSelectedNeighborhood(option)
        dispatch({ type: 'OPEN_DATE_FILTER' })
    }

    const onSelectDates = () => {
        dispatch({ type: 'OPEN_GUESTS_FILTER' })
    }

    const onSearch = () => {
        dispatch({ type: 'OPEN_CITY_FILTER' })
    }

    const closeFilter = () => {
        dispatch({ type: 'CLOSE_FILTER' })
    }

    if (step === 'city') {
        return (
            <StyledSelect
                isOpen={true}
                fullScreen={true}
                options={cities}
                onChange={onSelectCity}
                placeholder="Select City"
                onCloseClick={closeFilter}
                onGoBackClick={closeFilter}
                selectedOption={selectedCity}
                closeOnItemClick={false}
                variant="light"
            />
        )
    }
    if (step === 'neighborhood') {
        return (
            <StyledSelect
                isOpen={true}
                options={neighborhoods}
                fullScreen={true}
                onChange={onSelectNeighborhood}
                onGoBackClick={() => {
                    dispatch({ type: 'OPEN_CITY_FILTER' })
                }}
                onCloseClick={closeFilter}
                placeholder="Neighborhood"
                selectedOption={selectedNeighborhood}
                closeOnItemClick={false}
                variant="light"
            />
        )
    }

    if (step === 'date') {
        return (
            <CalendarDropdown
                placeholder="Check In - Check Out"
                variant="light"
                isOpen={true}
                onCloseClick={closeFilter}
                onGoBackClick={() => {
                    dispatch({ type: 'OPEN_NEIGHBORHOOD_FILTER' })
                }}
                fullScreen={true}
            >
                <Calendar
                    ranges={[calendarSelectionRange]}
                    onChange={handleSelectRange}
                    columns={1}
                    variant="light"
                    className="w-100"
                    showResetDateButton={false}
                ></Calendar>
                <BottomBarContainer className="justify-content-around">
                    <button
                        style={{
                            height: 48,
                            border: 'none',
                            background: 'transparent',
                        }}
                        onClick={resetDates}
                    >
                        Reset Dates
                    </button>
                    <Button
                        onClick={onSelectDates}
                        variant="primary"
                        style={{ height: 48 }}
                    >
                        Next
                    </Button>
                </BottomBarContainer>
            </CalendarDropdown>
        )
    }

    if (step === 'guests') {
        return (
            <StyledDropDown
                variant="light"
                fullScreen={true}
                onGoBackClick={() => {
                    dispatch({ type: 'OPEN_DATE_FILTER' })
                }}
                isOpen={true}
                placeholder={`${guests} guests`}
                onCloseClick={closeFilter}
            >
                <CounterContainer>
                    <Counter
                        onChange={setGuests}
                        value={guests}
                        placeholder="Guests"
                    />
                </CounterContainer>
                <BottomBarContainer>
                    <Button
                        variant="primary"
                        style={{ height: 48 }}
                        icon={<Icon variant="icon-Search" />}
                        onClick={() => {
                            alert('hola')
                        }}
                    >
                        Search
                    </Button>
                </BottomBarContainer>
            </StyledDropDown>
        )
    }

    return (
        <SearchBar onSearchClick={onSearch}>
            <div
                className="d-flex align-items-center"
                style={{ padding: '8px 16px' }}
            >
                <span>Find your next stay</span>
            </div>
        </SearchBar>
    )
}

export const Primary = Template.bind({})
export const MobileSearchBar = Mobile.bind({})

Primary.args = {}

MobileSearchBar.args = {}
