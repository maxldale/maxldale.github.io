import type { BadgeProps, IconProps } from "./types";

export function singleLine(strings: TemplateStringsArray) {
    return strings[0].replace(/\s+/g, " ").trim();
}

export function hasIcon(iconProps: IconProps|undefined): iconProps is IconProps {
    return iconProps !== undefined;
}


export function roundedIconProps(icon: string): IconProps{
    return {
        icon,
        iconCustomClasses: "rounded-full mx-2",
    };
}

export function boxyIconProps(icon: string): IconProps{
    return {
        icon,
        iconCustomClasses: "mx-2",
    };
}

export function iconBadgeProps(label: string, iconProps: IconProps): BadgeProps{
    return {
        label,
        iconProps,
        customClasses: "bg-zinc-100 text-black",
    };
};
