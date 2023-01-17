import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BookNowcontainer from "./BookNowContainer";

export default {
  title: "Organisms/BookNowcontainer/BookNowcontainer",
  component: BookNowcontainer,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof BookNowcontainer>;

const Template: ComponentStory<typeof BookNowcontainer> = (args) => (
  <BookNowcontainer {...args} />
);

export const Header = Template.bind({});
Header.args = {
  title: "Header",
};

export const Title = Template.bind({});
Title.args = {
  title: "title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  buttonText: "Subtitle",
};

export const button = Template.bind({});
button.args = {
  buttonLink: "#",
};
