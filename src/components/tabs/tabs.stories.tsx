import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Tabs, TabsProps } from './'
import { Icon } from '../icon'

export default {
    title: 'Example/Tabs',
    component: Tabs,
} as Meta

const { Panel } = Tabs

const Template: Story<TabsProps> = ({ ...args }: TabsProps) => {
    const [activeTab, setActiveTab] = React.useState('Tab-1')
    return (
        <Tabs
            defaultActiveKey={activeTab}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            mountOnEnter={false}
        >
            <Panel
                label={
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="mr-2">Tab-1</span>
                        <Icon variant="icon-Amenities" />
                    </div>
                }
                tabKey="Tab-1"
            >
                <h2>Content of Tab Pane 1</h2>
                <img
                    src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-por-que-vemos-tan-felices-a-los-gatos-en-cajas-de-carton.png"
                    alt="Gato 1"
                    height={300}
                    width={300}
                />
            </Panel>
            <Panel label="Tab 2" tabKey="Tab-2">
                <h2>Content of Tab Pane 2</h2>
                <img
                    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 3" tabKey="Tab-3">
                <h2>Content of Tab Pane 3</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 4" tabKey="Tab-4">
                <h2>Content of Tab Pane 4</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 5" tabKey="Tab-5">
                <h2>Content of Tab Pane 5</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 6" tabKey="Tab-6">
                <h2>Content of Tab Pane 6</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 7" tabKey="Tab-7">
                <h2>Content of Tab Pane 6</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
            <Panel label="Tab 8" tabKey="Tab-8">
                <h2>Content of Tab Pane 6</h2>
                <img
                    src="https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg"
                    alt="Gato 1"
                    height={300}
                />
            </Panel>
        </Tabs>
    )
}

export const Primary = Template.bind({})

Primary.args = {} as TabsProps
