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
  title: "60% off on your first order",
  subTitle: "Your health is our first priority",
  buttonText: "Book Now",
  imageUrl: "images/family.png",
};
