import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "molecules/SeachBar/SeachBar",
  component: SearchBar,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Search = Template.bind({});
Search.args = {
  placeholder: "Search for lab test, packages",
};
