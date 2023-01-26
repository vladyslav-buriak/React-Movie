import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieSelectCard } from "../components";
import { movie } from "./stub";

export default {
  title: "Movie Select",
  component: MovieSelectCard,
} as ComponentMeta<typeof MovieSelectCard>;

const Template: ComponentStory<typeof MovieSelectCard> = (args) => (
  <MovieSelectCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  selected: movie[0],
  removeMovie:()=>{}
};
