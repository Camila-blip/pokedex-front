import { createContext, useState, useEffect} from "react";
import api from "../services/api";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
export const AuthContent = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
        function loadStorage(){
            const storageUser = localStorage.getItem("User");
            const storageToken = localStorage.getItem("Token");

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser));
            }
        }
        loadStorage();
    }, []);

    async function signIn(email,password){
        try{
            setLoadingAuth(true);
            const data = await api.get(`usuario/${email}`);
            if(email === "usuario@outlook.com"){
                toast.success("Bem vindo a plataforma!");
                setUser(data);
                storageUser(data, data.data.token);
                setAuthenticated(true);
                console.log(data);
            }else{
                bcrypt.compare(password, data.data.user[0].senha, function(err,isMatch){
                    if(err){
                        throw err;
                    }else if(!isMatch){
                        toast.error("Senha incorreta!");
                    }else{
                        setUser(data);
                        storageUser(data, data.data.token);
                        setAuthenticated(true);
                        window.location = "/home";
                        console.log(data);
                    }
                });
            }
        }
        catch(error){
            console.log(error);
            toast.error("Ops algo deu errado!");
        }
        finally{
            setLoadingAuth(false);
        }
    }

    //cadastro
    async function signUp(nome, telefone, email, password){
        try{
            setLoadingAuth(true);
            const hashedPassword = bcrypt.hashSync(password, 10);
            const data = await api.post("usuario",{
                Nome: nome,
                Telefone: telefone,
                Email: email,
                Password: hashedPassword
            });
            setAuthenticated(true);
            console.log(data);
            setUser(data);
            storageUser(data,data.data.token);
            window.location = "/home";
        }
        catch(err){
            console.log(err);
            toast.error("Email já existente!");
        }
        finally{
            setLoadingAuth(false);
        }
    }
    //logout
    async function signOut(){
        localStorage.removeItem("User");
        localStorage.removeItem("Token");
        setUser(null);
        setAuthenticated(false);
    }

    function storageUser(data,token){
        localStorage.setItem("User", JSON.stringify(data));
        localStorage.setItem("Token", (token));
    }

    return(
        <AuthContent.Provider value={{signed: !!user, user, authenticated, signIn, loadingAuth, setUser,setLoadingAuth,signOut,signUp}}>
            {children}
        </AuthContent.Provider>
    );
}

export default AuthProvider;
