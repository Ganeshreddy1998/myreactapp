import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WhyChooseUs from ".";

export default {
  title: "Pages/WhyChooseUs",
  component: WhyChooseUs,
  argTypes: {
    // color: { control: "color" },
  },
} as ComponentMeta<typeof WhyChooseUs>;
const Template: ComponentStory<typeof WhyChooseUs> = (args) => (
  <WhyChooseUs></WhyChooseUs>
);

export const Primary = Template.bind({});
// Primary.args = {

// };
