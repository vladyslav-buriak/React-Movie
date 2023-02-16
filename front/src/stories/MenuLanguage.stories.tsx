import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  {MenuLanguage} from "../components/navigation/MenuLanguage";

export default {
  title: "Menu LAnguage",
  component: MenuLanguage,
} as ComponentMeta<typeof MenuLanguage>;

const Template: ComponentStory<typeof MenuLanguage> = (args) => (
  <MenuLanguage {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  setLanguage: () => {
    alert("work");
  },
};
