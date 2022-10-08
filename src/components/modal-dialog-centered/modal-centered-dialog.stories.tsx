import React, { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
    ModalCenteredDialog,
    ModalCenteredDialogProps,
} from './modal-centered-dialog'

export default {
    title: 'Example/ModalCenteredDialog',
    component: ModalCenteredDialog,
} as Meta

const Template: Story<ModalCenteredDialogProps> = ({
    children,
    ...args
}: ModalCenteredDialogProps) => {
    const [show, setShow] = useState(args.show)
    const handleShow = () => setShow(!show)

    useEffect(() => {
        if (show !== args.show) {
            setShow(args.show)
        }
    }, [args.show])

    return (
        <>
            <button onClick={handleShow}>Open Modal</button>
            <ModalCenteredDialog {...args} closeModal={handleShow} show={show}>
                {children}
            </ModalCenteredDialog>
        </>
    )
}

export const Primary = Template.bind({})
const args = {
    children: (
        <div
            style={{
                minHeight: '400px',
                maxWidth: '400px',
            }}
            className="p-5"
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
        </div>
    ),
    show: false,
    variant: 'dark',
} as ModalCenteredDialogProps

Primary.args = args
