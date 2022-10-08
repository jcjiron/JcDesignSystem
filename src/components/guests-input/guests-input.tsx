import React from 'react'
import styled from 'styled-components'
import { Input, InputProps } from '../input'
import { Icon } from '../icon'
import { Counter } from '../counter'

type GuestsInputProps = {
    onChange: (value: number) => void
    value: number
    max?: number
    min?: number
    placeholder?: string
} & InputProps

const StyledIcon = styled(Icon)`
    font-size: 20px;
`

const GuestsInput: React.FC<GuestsInputProps> = ({
    onChange,
    value,
    placeholder,
    max,
    min,
    ...props
}: GuestsInputProps) => {
    React.useEffect(() => {
        if (value > max) {
            onChange(max)
        }
        if (value < min) {
            onChange(min)
        }
    }, [value, max, min, onChange])

    return (
        <Input icon={<StyledIcon variant="icon-Guests" />} {...props}>
            <Counter
                max={max}
                min={min}
                className="w-100"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Input>
    )
}

export { GuestsInput, GuestsInputProps }
