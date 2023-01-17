import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./Link";

export default {
  title: "Atoms/Link/Link",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  href: "#",
  children: "home",
  active: true,
};
