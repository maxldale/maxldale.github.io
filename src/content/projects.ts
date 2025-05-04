import type { BadgeProps, ProjectInfo, ProjectProps, RawProjectInfo } from "../types";
import { boxyIconProps, iconBadgeProps, roundedIconProps } from "../utils";

const personalPassion: BadgeProps = {
	label:"Personal Passion",
	iconProps: undefined,
	customClasses: "bg-pink-400 text-white",
};

const javaBadge: BadgeProps = iconBadgeProps("Java", roundedIconProps("java-icon.svg"));
const kotlinBadge: BadgeProps = iconBadgeProps("Kotlin", boxyIconProps("kotlin-logo.png"));
const scalaBadge: BadgeProps = iconBadgeProps("Scala", boxyIconProps("scala-logo.png"));
const reactBadge: BadgeProps = iconBadgeProps("React", roundedIconProps("react-logo.svg"));
const expoBadge: BadgeProps = iconBadgeProps("Expo", boxyIconProps("expo-logo.svg"));

const soundAndLights: RawProjectInfo = {
    title:"Sound/Light Designer/Technician/Operator",
    synopsis: "Academic, community & professional productions",
    description:"Passion-driven work in lighting and sound design for performances (high school and university) - requiring planning, a large bandwidth for processing information in real-time, and adaptability to all situations and surprises.",
    badgeProps:[personalPassion],
    actionText:undefined,
    actionUrl:undefined,
};

const soccerReferee: RawProjectInfo = {
    title:"Soccer Referee",
    synopsis: "Recreational, Select, & Travel Teams (U8-U16)",
    description:"Passion-driven officiating of youth soccer matches for several age groups and skill levels - demanding attention to detail, precision, and effective communication.",
    badgeProps:[personalPassion],
    actionText:undefined,
    actionUrl:undefined,
};

const dotTap: RawProjectInfo = {
    title:"DotTap",
    synopsis: "Android high-score game",
    description:"My first Android app — a tap-based high score game built in Java/Kotlin. Users earn points by quickly tapping shrinking dots. Retired, but fully published to Google Play at the time.",
    badgeProps: [javaBadge, kotlinBadge],
    actionText:undefined,
    actionUrl:undefined,
};

const newsVis: RawProjectInfo = {
    title:"NewsVis",
    synopsis:"Aggregator of news articles from major news organizations.",
    description:"A Java desktop app built at a hackathon to scrape and analyze news articles using TF-IDF. I focused on data cleaning and relevance scoring. We placed 4th overall.",
    badgeProps: [javaBadge],
    actionText:undefined,
    actionUrl:undefined,
};

const core: RawProjectInfo = {
    title:"CORe",
    synopsis:"Compute On Request engine",
    description:"A Scala framework for real-time UI updates and simulation management using the Akka Actor System. It's a prototype addressing visual lag and CPU underutilization.",
    badgeProps: [scalaBadge],
    actionText:undefined,
    actionUrl:undefined,
};

const hindsightIs2020: RawProjectInfo = {
    title:"Hindsight is 2020",
    synopsis:"Cross-platform golf-style maze game",
    description:"A maze-based scoring game built in TypeScript with React/Expo. Users trace a hidden path with limited information. Still under development.",
    badgeProps: [reactBadge, expoBadge],
    actionText: "Check it out!",
    actionUrl: "https://hindsightis2020.maxldale.com",
};

const rawProjectInfo: Array<RawProjectInfo> = [
    soundAndLights,
    soccerReferee,
    dotTap,
    newsVis,
    core,
    hindsightIs2020,
];

const projectInfo: Array<ProjectInfo> = rawProjectInfo.map((projectInfo, index) => ({
    ...projectInfo,
    id: index,
}));

export const projectProps: ProjectProps = {
    projects: projectInfo,
}