import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StatefulAlert } from '../alerts/alert.component'
import { useSessionStorage } from '../hooks/session-storage/use-session-storage'
import { Icon } from '../icon'

const Div = styled.div`
    z-index: 19;
    position: sticky;
    .alert-notification,
    .badge {
        margin-top: 10px;
        right: 74px;
        @media (max-width: 991px) {
            right: 10px;
        }
    }
    .alert-notification {
        max-width: 428px;
        min-width: 275px;
        margin-left: 10px;
        transition: right 0.3s ease 0.3s;
        &.dismissed {
            transition: right 0.3s;
            display: block;
            right: -450px;
        }
    }
    .badge {
        padding: 10px 8px;
        border-radius: 30px;
        font-size: 20px;
        cursor: pointer;
        opacity: 1;
        transition: margin-top 0.3s ease 0.3s, opacity 0.1s ease 0.2s;
        &.dismissed {
            margin-top: 50px;
            margin-right: -450px;
            opacity: 0;
            display: block;
            transition: margin-top 0.3s, opacity 0.1s ease 0.2s,
                margin-right 0.3s ease 0.5s;
        }
    }
`

export type StickyNotificationProps = {
    children: ReactNode
    storageProvider: () => Storage
    variant?: 'primary' | 'custom'
    backgroundColor?: string
    isMaximized?: boolean
}
const STICKY_NOTIFICATION_IS_CLOSED = '__mkt_notification_status__'
export const StickyNotification = ({
    children,
    storageProvider,
    variant = 'primary',
    backgroundColor = '',
    isMaximized,
}: StickyNotificationProps) => {
    const { getItem, setItem } = useSessionStorage(storageProvider())
    const [isDismissed, setDismiss] = useState(
        !getItem(STICKY_NOTIFICATION_IS_CLOSED)
            ? false
            : getItem(STICKY_NOTIFICATION_IS_CLOSED)
    )
    const handleDismiss = () => {
        setItem(STICKY_NOTIFICATION_IS_CLOSED, !isDismissed)
        setDismiss(!isDismissed)
    }
    useEffect(() => {
        if (isMaximized) {
            setDismiss(false)
        }
    }, [])
    return (
        <Div>
            <StatefulAlert
                variant={variant}
                isDismissable={true}
                handleDismiss={handleDismiss}
                isDismissed={isDismissed}
                className="alert-notification position-fixed"
                backgroundColor={backgroundColor}
            >
                {children}
            </StatefulAlert>
            <StatefulAlert
                variant={variant}
                isDismissed={!isDismissed}
                className="badge position-fixed"
                onClick={handleDismiss}
                backgroundColor={backgroundColor}
            >
                <Icon variant="icon-notification" />
            </StatefulAlert>
        </Div>
    )
}
