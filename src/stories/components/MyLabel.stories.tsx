import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/Etiquetas/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  label: "Basic label",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "h1",
  label: "All caps label",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "h2",
  label: "Secondary label",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h2",
  label: "custom font color label",
  fontColor: '#5517ac'
};