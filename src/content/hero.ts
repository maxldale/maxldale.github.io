import type { HeroProps } from "../types";
import { singleLine } from "../utils";

const imageSource = "/avatar.png";
const imageAltText = "Illustration of Maxl";

const primaryIntroduction = "Hi, I’m Maxl (Mock-syl).";

const secondaryIntroduction = singleLine`
    I explore an ever-growing constellation of questions — not just for answers,
    but for the unexpected journeys they bring along the way.
`;

const hook = "Curiosity leads, wonder draws.";

export const heroConfig: HeroProps = {
	imageSource,
	imageAltText,
	primaryIntroduction,
	secondaryIntroduction,
	hook,
};