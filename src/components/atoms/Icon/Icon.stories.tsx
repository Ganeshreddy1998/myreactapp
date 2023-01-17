import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({
  name: "covid",
});
