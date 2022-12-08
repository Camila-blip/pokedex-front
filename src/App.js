import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import AuthProvider  from "./contexts/auth";
import PokemonProvider  from "./contexts/pokemon";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <AuthProvider>
            <PokemonProvider>
                <BrowserRouter>
                    <Routes/>
                    <ToastContainer autoClose={3000}/>
                </BrowserRouter>
            </PokemonProvider>
        </AuthProvider>
    );
}

export default App;
