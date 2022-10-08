import React, { ReactElement, useRef, useState } from 'react'
import useOnFocus from '../hooks/use-on-focus/use-on-focus'
import { ModalWithNavigation } from '../modal-with-navigation'
import { DropdownContainer } from './drop-down-container'

export type Option = {
    name: string | number
    value: string | number
}

export type DropdownBaseProps = {
    placeholder?: string | number
    disabled?: boolean
    variant?: 'dark' | 'light'
    fullScreen?: boolean
    className?: string
    children?: React.ReactNode
    isOpen?: boolean
    animate?: boolean
    onOpenClick?: () => void
    onCloseClick?: () => void
    onGoBackClick?: () => void
    buttonRef?: React.RefObject<HTMLButtonElement>
}

// This is the state that can be controlled by the component or by the parent
type ControlledState = {
    isOpen: boolean
}

export const DropdownBase: React.FC<DropdownBaseProps> = (
    props: DropdownBaseProps
): ReactElement => {
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

    const { onBlurHandler, onFocusHandler, listeningRef } = useOnFocus({
        onFocusOut: () => {
            if (!props.fullScreen) {
                closeDropdown()
            }
        },
    })

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

    return (
        <DropdownContainer
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            ref={listeningRef}
            isOpen={getState().isOpen}
            className={`${props.variant} ${props.className || ''}`}
        >
            <div className="dropdown">
                <button
                    ref={props.buttonRef}
                    className="btn btn-secondary dropdown-toggle d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    onClick={openDropdown}
                    aria-haspopup="true"
                    aria-expanded={getState().isOpen}
                    disabled={props.disabled}
                >
                    <span className="shrink-text">{props.placeholder}</span>
                </button>
                {props.fullScreen ? (
                    <ModalWithNavigation
                        onGoBack={props.onGoBackClick}
                        onClose={closeDropdown}
                        title={String(props.placeholder)}
                        show={getState().isOpen}
                        animate={props.animate || false}
                        variant={props.variant}
                    >
                        <div
                            className={`${
                                getState().isOpen ? 'd-block' : 'd-none'
                            }`}
                            aria-labelledby="dropdownMenuButton"
                        >
                            {props.children}
                        </div>
                    </ModalWithNavigation>
                ) : (
                    <div
                        className={`dropdown-menu ${
                            getState().isOpen ? 'd-block' : 'd-none'
                        }`}
                        aria-labelledby="dropdownMenuButton"
                    >
                        {props.children}
                    </div>
                )}
            </div>
        </DropdownContainer>
    )
}
