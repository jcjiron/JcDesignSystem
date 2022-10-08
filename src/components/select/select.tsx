import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Option } from '.'
import { DropdownBase } from '../dropdown-base/dropdown-base'
import { customScrollBar } from '../scroll-bar'

const SelectContainer = styled(DropdownBase)`
    .dropdown-menu {
        max-height: 265px;
        overflow-y: scroll;
        /* :: Custom scroll bar :: */
        ${customScrollBar}
    }
`

type OptionProps = {
    name: string | number
    disabled?: boolean
    value: number | string
    className?: string
    style?: React.CSSProperties
    key?: React.Key
    onClick: (value: Option) => void
    isSelected: boolean
}

const OptionComponent: React.FC<OptionProps> = ({
    name,
    disabled,
    onClick,
    value,
    isSelected,
}) => {
    return (
        <button
            className={`dropdown-item ${isSelected ? 'selected-item' : ''}`}
            disabled={disabled}
            onClick={() => onClick({ value, name })}
        >
            {name}
        </button>
    )
}

type SelectProps = {
    disabled?: boolean
    onChange?: (option: Option) => void
    selectedOption?: Option
    placeholder?: string
    options: Option[]
    variant?: 'dark' | 'light'
    fullScreen?: boolean
    className?: string
    isOpen?: boolean
    onOpenClick?: () => void
    onCloseClick?: () => void
    closeOnItemClick?: boolean
    onGoBackClick?: () => void
    buttonRef?: React.RefObject<HTMLButtonElement>
}

type ControlledState = {
    isOpen: boolean
}

const Select: React.FC<SelectProps> = (props: SelectProps): ReactElement => {
    const [isOpen, setIsOpen] = useState(false)

    const isControlled = (prop: string) => {
        return props[prop] !== undefined
    }

    const openDropdown = () => {
        const isOpenControlled = isControlled('isOpen')
        if (isOpenControlled) {
            props.onOpenClick()
        } else {
            setIsOpen(true)
        }
    }

    const closeDropdown = () => {
        const isOpenControlled = isControlled('isOpen')
        if (isOpenControlled) {
            props.onCloseClick()
        } else {
            setIsOpen(false)
        }
    }

    const getState = (): ControlledState => {
        const state: ControlledState = {
            isOpen,
        }
        return Object.entries(state).reduce((combinedState, [key, value]) => {
            if (isControlled(key)) {
                combinedState[key] = props[key]
            } else {
                combinedState[key] = value
            }
            return combinedState
        }, {}) as ControlledState
    }

    const onClickItem = (option: Option) => {
        props.onChange(option)
        if (props.closeOnItemClick) {
            closeDropdown()
        }
    }

    return (
        <SelectContainer
            disabled={props.disabled}
            isOpen={getState().isOpen}
            onCloseClick={closeDropdown}
            onOpenClick={openDropdown}
            fullScreen={props.fullScreen}
            placeholder={props.selectedOption?.name || props.placeholder}
            variant={props.variant}
            className={props.className}
            buttonRef={props.buttonRef}
            onGoBackClick={props.onGoBackClick}
        >
            {props.options.map(({ name, value }) => (
                <OptionComponent
                    value={value}
                    key={value}
                    onClick={onClickItem}
                    isSelected={value === props.selectedOption?.value}
                    name={name}
                />
            ))}
        </SelectContainer>
    )
}

Select.defaultProps = {
    variant: 'light',
    fullScreen: false,
    closeOnItemClick: true,
}

export default Select
