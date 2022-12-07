import {Switch} from "react-router-dom";
import Route from "./Route";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/register" component={SignUp}/>
            <Route exact path="/home" component={Home} isPrivate/>
        </Switch>
    );
}
