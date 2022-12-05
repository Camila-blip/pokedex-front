import { createContext, useState, useEffect} from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContent = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        function loadStorage(){
            const storageUser = localStorage.getItem("User");
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    //cadastro
    async function signUp(nome, telefone, email, password){
        try{
            setLoadingAuth(true);
            const data = await api.post("usuario",{
                Nome: nome,
                Telefone: telefone,
                Email: email,
                Password: password
            });
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success("Bem vindo a plataforma!");
        }
        catch(err){
            toast.error("Ops algo deu errado no cadastro");
        }
        finally{
            setLoadingAuth(false);
        }

    }

    function storageUser(data){
        localStorage.setItem("User", JSON.stringify(data));
    }

    return(
        <AuthContent.Provider value={{signed: !!user, user,  loadingAuth, setUser,loading,setLoadingAuth,signUp}}>
            {children}
        </AuthContent.Provider>
    );
}

export default AuthProvider;
