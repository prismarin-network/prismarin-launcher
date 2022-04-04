import React from 'react';
import DefaultComponent from "./DefaultComponent";

export default {
  title: 'DefaultComponent',
  component: DefaultComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <DefaultComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Test User",
};
