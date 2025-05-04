import type { AboutProps } from "../types";
import { singleLine } from "../utils"

const introduction = singleLine`
    I am originally from Monterey, California, but was raised in several places including Pensacola (Florida), Misawa (Japan),
    and Pennsylvania before eventually settling in Columbia (Maryland).
    After twenty years there, I’ve come to think of it as home — or at least a familiar waypoint.
`;

const academics = singleLine`
    I studied Computer Science (B.Sc.) and German (B.A.) at the University of Maryland, College Park, where I also spent a semester
    abroad as an exchange student at the Munich University of Applied Sciences (MUAS).
    During this exchange semester, I completed five computer science courses — three taught entirely in German
    — which deepened both my technical foundation and my appreciation for multilingual contexts.
`;

const professionalCareer = singleLine`
    Professionally, my path has been as nonlinear as it’s been hands-on.
    I started my own landscaping business and ran it successfully for over a decade, even while pursuing computer science internships
    — from working on big data analytics at the Johns Hopkins Applied Physics Lab to developing internal dashboards for a major construction firm.
    After graduation, I moved to Germany to work as a software developer in the automotive software space.
    One highlight: helping prototype, deploy, maintain, and certify a compliance product for a new California emissions regulation
    — our software was the first to be officially certified for meeting compliance requirements.
`;

const miscellaneous = singleLine`
    In parallel with my studies, I worked as a driver and dispatcher for the university’s ShuttleUM transit service, earning my CDL (Commercial Drivers License) and assisting with vehicle maintenance.
    I also participated in the FIRE (First-Year Innovation & Research Experience) program, where I researched autonomous systems.
    My work focused on building a simulation environment for testing and validating agents using SLAM (Simultaneous Localization and Mapping) to navigate and map unfamiliar terrain.
`;

export const aboutConfig: AboutProps = {
	paragraphs:[
		introduction,
        academics,
        professionalCareer,
        miscellaneous
    ],
};