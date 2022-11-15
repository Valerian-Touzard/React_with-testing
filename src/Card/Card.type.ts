import { MouseEventHandler } from "react";

type CardProps= {
    title: string;
    body: string;
    footer?: string; // optional
    buttonLabel?: string; // optional
    buttonAction?: MouseEventHandler; // optional
};

export default CardProps;