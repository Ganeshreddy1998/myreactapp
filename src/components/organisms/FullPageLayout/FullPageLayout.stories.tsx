import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FullPagelayout from "./FullPageLayout";

export default {
  title: "Organisms/FullPagelayout/FullPagelayout",
  component: FullPagelayout,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof FullPagelayout>;

const Template: ComponentStory<typeof FullPagelayout> = (args) => (
  <FullPagelayout {...args} />
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
};
