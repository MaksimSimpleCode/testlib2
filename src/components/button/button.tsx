 // @ts-ignore
import style from './style.module.scss';
import classNames from "classnames";
import {Icon} from "../../icon/icon";

export type Props ={
    text: string;
    size: "small" | "medium" | "large";
    variant: "default" | "backless" | "primary" | "success" | "secondary" | "successSecondary" | "danger" | "dangerSecondary" | "disabled"; // background color
    border: boolean;
    dropdownIcon: boolean;
    link: boolean;
    icon: boolean; // Замочек
    loading: boolean;
}

const cx = classNames.bind(style);

const  Button =(props: Props) =>{

    const styles = cx({
        [style.button]: true,
        [style[props.size]]: true,
        [style[props.loading ? "loading" : props.link ? "backless" : props.variant]]: true,
        [style.disableBorder]: props.link || !props.border,
        [style.link]: !props.loading && props.link,
    })
    
    console.log(style.link || props.border)
    return (
        <button className={styles}>
            {props.loading ? <Icon size={props.size} name="Loading" /> : ""}
            {!props.loading && props.icon ? <Icon size={props.size} name="Lock"/> : ""}
            {props.text}
            {!props.loading && props.dropdownIcon ? <Icon size={props.size} name="Dropdown"/> : ""}
        </button>
    )
}


export default Button;