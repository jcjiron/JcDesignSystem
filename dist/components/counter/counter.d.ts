import React from 'react'
declare type CounterProps = {
    onChange: (value: number) => void
    value: number
    max?: number
    min?: number
    className?: string
    placeholder?: string
    style?: React.CSSProperties
}
declare const Counter: React.FC<CounterProps>
export default Counter
