import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CommonlyBookedTest from "./CommonlyBookedTest";

export default {
  title: "Pages/CommonlyBookedTest",
  component: CommonlyBookedTest,
  argTypes: {
    // color: { control: "color" },
  },
} as ComponentMeta<typeof CommonlyBookedTest>;
const Template: ComponentStory<typeof CommonlyBookedTest> = (args) => (
  <CommonlyBookedTest></CommonlyBookedTest>
);

export const Primary = Template.bind({});
// Primary.args = {

// };
