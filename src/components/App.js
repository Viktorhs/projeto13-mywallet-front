import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../CSS/GlobalStyle"
import Login from "./Login/Login";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import Registration from "./Registration/Registration";


export default function App(){

    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}