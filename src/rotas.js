import {
    BrowserRouter  as Router,
    Routes,
    Route
} from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default function Rotas(){

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<SignIn />}/>
                <Route exact path="/register" element={<SignUp />}/>
                <Route exact path="/home" element={<Home />} isPrivate/>
            </Routes>
        </Router>
    );
}
