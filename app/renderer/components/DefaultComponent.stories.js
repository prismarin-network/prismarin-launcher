import React from 'react';
import DefaultComponent from "./DefaultComponent";

const Component = {
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

export default Component
