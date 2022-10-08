import React, { ReactElement } from 'react'
import { ListItem, ListItemProps } from './../../../list/item'
import { Icon } from './../../../icon/index'
import styled from 'styled-components'
import useScreenSize from '../../../hooks/use-screen-size/use-screen-size'
import { ButtonProps, Button } from '../../../button/index'

export type MainFeatureItemProps = {
    actionButton?: ReactElement<ButtonProps>
    onActionClick?: () => void
} & ListItemProps
const ActionContainer = styled.div`
    @media (max-width: 576px) {
        display: none;
    }
`

const Container = styled.div`
    color: var(--paragraph-color);
`

const ArrowIndicator = styled.div`
    margin-left: 15px;
    .btn-inline-link {
        text-decoration: none;
        color: #000;
        &:focus {
            color: #000;
        }
    }
    @media (min-width: 576px) {
        display: none;
    }
`

export const MainFeatureItem = ({
    children,
    bulletIcon,
    subTitle,
    title,
    actionButton,
    onActionClick,
    onClick,
}: MainFeatureItemProps) => {
    const screenType = useScreenSize()
    return (
        <ListItem
            className="col col-sm-6 col-md-4 p-3"
            title={title}
            bulletIcon={bulletIcon}
            subTitle={subTitle}
            onClick={() => {
                if (onClick && screenType === 'Mobile') {
                    onClick()
                }
            }}
        >
            <Container className="d-flex justify-content-between">
                <div>
                    {children}
                    {actionButton && (
                        <ActionContainer>
                            {React.cloneElement(actionButton, {
                                ...actionButton.props,
                                onClick: onActionClick,
                            })}
                        </ActionContainer>
                    )}
                </div>
                {actionButton && (
                    <ArrowIndicator>
                        <Button
                            variant="inline-link"
                            icon={<Icon variant="icon-Chevron-Right" />}
                            onClick={onActionClick}
                        ></Button>
                    </ArrowIndicator>
                )}
            </Container>
        </ListItem>
    )
}
