
export interface IconProps {
    icon: string,
    iconCustomClasses: string,
};

export interface BadgeProps {
    label: string,
    iconProps: IconProps | undefined,
    customClasses: string,
};

export interface ProjectTileProps {
    id: number,
    title: string,
    synopsis: string,
    badgeProps: Array<BadgeProps>,
}

export interface ProjectInfo extends ProjectTileProps {
    description: string,
}

export type RawProjectInfo = Omit<ProjectInfo, 'id'>;

export interface ProjectProps {
    projects: Array<ProjectInfo>,
}

export interface HeroProps {
    imageSource: string,
    imageAltText: string,
    primaryIntroduction: string,
    secondaryIntroduction: string,
    hook: string,
}

export interface AboutProps {
    paragraphs: Array<String>,
}