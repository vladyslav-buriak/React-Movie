import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../components";
import { movies } from "./stub";

export default {
  title: "Movie Card",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  movies: movies,
};
