
export interface IconProps {
    icon: string,
    iconCustomClasses: string,
};

export function hasIcon(iconProps: IconProps|undefined): iconProps is IconProps {
    return iconProps !== undefined;
}

export interface BadgeProps {
    label: string,
    iconProps: IconProps | undefined,
    customClasses: string,
};

export interface ProjectTileProps<IdType> {
    id: IdType,
    title: string,
    synopsis: string,
    badgeProps: Array<BadgeProps>,
}

export interface ProjectInfo<IdType> extends ProjectTileProps<IdType> {
    description: string,
}

export interface ProjectProps<IdType> {
    projects: Array<ProjectInfo<IdType>>,
}