import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography/Typography",
  component: Typography,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
};
