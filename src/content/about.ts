import type { AboutProps } from "../types";
import { singleLine } from "../utils"

const introduction = singleLine`
    I’m originally from Monterey, California, but grew up across Pensacola (FL), Misawa (Japan),
    and Pennsylvania before eventually settling in Columbia, Maryland
    — which became home for the next 20 years.
`;

const academics = singleLine`
    I studied Computer Science (B.Sc.) and German (B.A.) at the University of Maryland, College Park,
    and completed an exchange semester at the Munich University of Applied Sciences (MUAS),
    taking five computer science courses — three of them entirely in German.
`;

const professionalCareer = singleLine`
    My professional path has ranged from running a landscaping business for over a decade,
    to internships in big data analytics and dashboard design, to working in Germany as a software developer
    in the automotive space. I contributed to the prototyping and certification of the first CARB (California Air Resources Board) -compliant software
    for a new California emissions regulation.
`;

const miscellaneous = singleLine`
    I also worked as a university transit driver and dispatcher, earned my CDL, and contributed to research
    in autonomous systems through UMD’s FIRE program — focusing on SLAM-based navigation in simulated environments.
`;

export const aboutConfig: AboutProps = {
	paragraphs:[
		introduction,
        academics,
        professionalCareer,
        miscellaneous
    ],
};