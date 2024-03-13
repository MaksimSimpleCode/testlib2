type Props = {
    text: string;
    size: "small" | "medium" | "large";
    variant: "default" | "backless" | "primary" | "success" | "secondary" | "successSecondary" | "danger" | "dangerSecondary" | "disabled";
    border: boolean;
    dropdownIcon: boolean;
    link: boolean;
    icon: boolean;
    loading: boolean;
};
export declare function Button(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
