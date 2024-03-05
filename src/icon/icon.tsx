import * as icons from './icons';

type Props = {
    name: "Lock" | "Dropdown" | "Loading";
    size: "small" | "medium" | "large",
    color?: string
    fill?: string;
}

export function Icon(props: Props) {
    const GotIcon = icons[props.name];
console.log(GotIcon)
    // @ts-ignore
    return <GotIcon size={props.size} fill={props.fill ?? "none"} />;
}