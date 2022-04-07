import React from 'react';
import UserAvatar from "./UserAvatar";

const Component = {
    title: 'Common/UserAvatar',
    component: UserAvatar,
    argTypes: {
        activityStatus: { control: { type: 'inline-radio', options: ['ONLINE', 'OFFLINE', 'IDLE'] } },
    },
}

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});

export const Online = Template.bind({});
Online.args = {
    activityStatus: "ONLINE",
};

export const Offline = Template.bind({});
Offline.args = {
    activityStatus: "OFFLINE",
};

export const Idle = Template.bind({});
Idle.args = {
    activityStatus: "IDLE",
};

export const Large = Template.bind({});
Large.args = {
    size: "2rem"
};

export default Component
