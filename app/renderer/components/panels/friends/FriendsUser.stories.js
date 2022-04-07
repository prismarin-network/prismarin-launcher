import React from 'react';
import FriendsUser from "./FriendsUser";

const Component = {
    title: 'Panels/Friends/FriendsUser',
    component: FriendsUser,
}

const Template = (args) => <FriendsUser {...args} />;

export const Stacked = () => (
    <div className="flex flex-col gap-6">
        <FriendsUser username="ReaperMaga" activity={{activityStatus: "ONLINE", tagLine: "In game: FrostBite"}} />
        <FriendsUser username="leVenour" activity={{activityStatus: "IDLE", tagLine: "Idle"}} />
        <FriendsUser username="Savje" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 5d ago"}} />
        <FriendsUser username="Tsuki" activity={{activityStatus: "OFFLINE", tagLine: "Last seen 8d ago"}} />
    </div>
);

export const Online = Template.bind({});
Online.args = {
    username: "ReaperMaga",
    activity: {
        activityStatus: "ONLINE",
        tagLine: "In game: FrostBite",
    }
};

export const Offline = Template.bind({});
Offline.args = {
    username: "ReaperMaga",
    activity: {
        activityStatus: "OFFLINE",
        tagLine: "Last seen 5d ago",
    }
};

export const Idle = Template.bind({});
Idle.args = {
    username: "ReaperMaga",
    activity: {
        activityStatus: "IDLE",
        tagLine: "Idle",
    }
};

export default Component
