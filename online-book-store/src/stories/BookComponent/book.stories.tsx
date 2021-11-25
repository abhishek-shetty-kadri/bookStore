import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { createContext } from "react";
import ShowBooks from "../../BookStore/ShowBooks/ShowBooks";

export default {
  title: "Learn/BookExample",
  component: ShowBooks,
} as ComponentMeta<typeof ShowBooks>;

const Template: ComponentStory<typeof ShowBooks> = (args) => <ShowBooks />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

