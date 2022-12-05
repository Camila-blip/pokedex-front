import { Button } from "./button";

export default function BtnSubmit({children}){
    return(
        <>
            <Button type="submit">{children}</Button>
        </>
    );
}
