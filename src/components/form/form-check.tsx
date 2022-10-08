import React from 'react'

type FormCheckProps = {
    children: React.ReactElement
}
export const FormCheck = ({ children }: FormCheckProps) => (
    <div className="form-check">{children}</div>
)
