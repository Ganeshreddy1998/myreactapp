import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "./Tag";

export default {
  title: "Atoms/Tag/Tag",
  component: Tag,

  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "tag",
};
