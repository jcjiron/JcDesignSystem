import React, {
    ComponentPropsWithoutRef,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'
import styled from 'styled-components'
import { Portal } from '../portal'
import '../../../assets/styles/bootstrap/modal.scss'
const ModalStyles = styled.div`
    transition: top 0.5s;
    &.animate {
        top: 100vh !important;
    }
    display: block;
    z-index: 1072;
`

const Div = styled.div`
    opacity: 0.8 !important;
`

export function preventScrollOnBody({
    show,
    pageBody,
    modalContainer,
}: {
    show: boolean
    pageBody: HTMLBodyElement
    modalContainer: HTMLDivElement
}) {
    if (show) {
        const top = window.scrollY
        if (pageBody.style.top === '') {
            pageBody.style.top = `-${top}px`
            pageBody.style.position = 'fixed'
            pageBody.style.width = '100vw'
        }
    } else {
        if (!modalContainer && pageBody.style.top !== '') {
            const top = parseInt(pageBody.style.top.slice(0, -2), 10) * -1
            pageBody.style.position = ''
            pageBody.style.top = ``
            window.scrollTo(0, top)
        }
    }
}

export type ModalProps = {
    show: boolean
    animate?: boolean
    children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({
    children,
    show,
    animate = false,
    className,
    ...props
}: ModalProps) => {
    const [animateClass, setAnimateClass] = useState(animate ? 'animate' : '')

    useEffect(() => {
        if (animate) {
            if (show) {
                setTimeout(() => setAnimateClass(''), 100)
            } else {
                setAnimateClass('animate')
            }
        }

        preventScrollOnBody({
            show: show,
            pageBody: document.querySelector('body'),
            modalContainer: document.querySelector('.root-portal'),
        })
    }, [show])
    return (
        show && (
            <Portal>
                <ModalStyles
                    {...props}
                    className={`modal fade show ${className} rounded ${animateClass}`}
                >
                    {children}
                </ModalStyles>
                <Div className="modal-backdrop fade show"></Div>
            </Portal>
        )
    )
}
