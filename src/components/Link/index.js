import { LinkHref } from "./link";

export default function Link({children,to}){
    return(
        <LinkHref to={to}>{children}</LinkHref>
    );
}
