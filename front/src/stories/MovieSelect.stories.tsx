import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieSelect } from "../components";
import { movies } from "./stub";

export default {
  title: "Movie Select",
  component: MovieSelect,
} as ComponentMeta<typeof MovieSelect>;

const Template: ComponentStory<typeof MovieSelect> = (args) => (
  <MovieSelect {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  movies: movies[0],
};
