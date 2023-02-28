import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "../components/Select";


export default {
  title: " Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select  />
);

export const Primary = Template.bind({});

