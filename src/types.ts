
export interface IconProps {
    icon: string,
    iconCustomClasses: string,
};

export interface BadgeProps {
    label: string,
    iconProps: IconProps | undefined,
    customClasses: string,
};


export interface ProjectInfo {
    id: number,
    title: string,
    synopsis: string,
    badgeProps: Array<BadgeProps>,
    description: string,
    actionText: string|undefined,
    actionUrl: string|undefined,
}


export type ProjectTileProps = Omit<ProjectInfo, 'description' | 'actionText' | 'actionUrl' >;

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

export type ProjectModalProps = Omit<ProjectInfo, 'synopsis' | 'badgeProps'>;