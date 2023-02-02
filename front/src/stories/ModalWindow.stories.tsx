import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalWindow } from "../components";
export default {
  title: "Modal Window",
  component: ModalWindow,
} as ComponentMeta<typeof ModalWindow>;

const Template: ComponentStory<typeof ModalWindow> = (args) => (
  <ModalWindow {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  open: false,
  title: "My movie recommend",
  link:'http://localhost:3000/recommend?name=moviesList&id=4444,5555,6666,7777',
  setOpen: ()=>{alert()},
};
