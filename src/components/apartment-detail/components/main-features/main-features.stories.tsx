import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MainFeatures, MainFeaturesProps } from './main-features'
import { MainFeatureItem } from './main-feature-item'
import { Icon } from './../../../icon/index'
import Button from '../../../button/index'

export default {
    title: 'Example/Main Features',
    component: MainFeatures,
} as Meta

const Template: Story<MainFeaturesProps> = ({ ...args }: MainFeaturesProps) => {
    const onClick = () => {
        alert('click on button')
    }
    return (
        <MainFeatures>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
            >
                <span>Check-in: 3:00 - 7:00PM Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
                actionButton={
                    <Button variant="inline-link" onClick={onClick}>
                        Read More
                    </Button>
                }
                onActionClick={onClick}
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
            <MainFeatureItem
                bulletIcon={<Icon variant="icon-search" />}
                title="title"
                actionButton={
                    <Button variant="inline-link" onClick={onClick}>
                        Read More
                    </Button>
                }
                onActionClick={onClick}
            >
                <span>Check-in: 3:00 - 7:00PM</span>
                <br />
                <span>Check-Out: 3:00 - 7:00PM</span>
            </MainFeatureItem>
        </MainFeatures>
    )
}

export const Primary = Template.bind({})
