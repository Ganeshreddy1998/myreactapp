import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Homepage from ".";

export default {
  title: "Pages/Homepage",
  component: Homepage,
  argTypes: {
    // color: { control: "color" },
  },
} as ComponentMeta<typeof Homepage>;
const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage></Homepage>
);

export const Primary = Template.bind({});
// Primary.args = {

// };
