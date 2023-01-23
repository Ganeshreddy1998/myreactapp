import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeadingLinkLayout from "./HeadingLinkLayout";

export default {
  title: "organisms/HeadingLinkLayout/HeadingLinkLayout",
  component: HeadingLinkLayout,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof HeadingLinkLayout>;

const Template: ComponentStory<typeof HeadingLinkLayout> = (args) => (
  <HeadingLinkLayout {...args} />
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
  heading: "hi",
};
