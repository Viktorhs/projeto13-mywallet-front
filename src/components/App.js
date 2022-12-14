import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../CSS/GlobalStyle"
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Wallet from "./Wallet/Wallet";
import Output from "./Output/Output";
import Input from "./Input/Input";


export default function App(){

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Registration/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
                <Route path="saida" element={<Output/>}/>
                <Route path="entrada" element={<Input/>}/>
            </Routes>
        </BrowserRouter>
    )
}