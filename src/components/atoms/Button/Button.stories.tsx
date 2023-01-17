import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Button/Button",
  component: Button,
  argTypes: {
    // color: { control: "color" },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "white",
  children: "Button",
};
