import { Form, Button } from "../Login/Login"
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/mywallet"
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";

export default function Input(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [waiting, setWaiting] = useState(false)

    const [form, setForm] = useState({
        valor: '',
        descricao: '',
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function submitInput(e) {
        setWaiting(true)
        e.preventDefault();
        const promise = postLogin(form) //alterar função
        promise.catch(() => {
            setWaiting(false)
        })
        promise.then((r) => {
            navigate('/wallet')
        })
    }

    return(        
    <Container>
        <h1>Nova entrada</h1>
        <Form onSubmit={submitInput} active={waiting}>
            <input type="number" name="valor" placeholder="Valor" onChange={handleForm} value={form.description} inputMode="numeric" disabled={waiting}/>
            <input type="text" name="descricao" placeholder="Descrição" onChange={handleForm} value={form.description} disabled={waiting}/>

            <Button type="submit" active={waiting} disabled={waiting}>
                {waiting ? <ThreeDots color="#FFFFFF" height={13} width={51} /> : 'Salvar entrada'}
            </Button>
        </Form>
    </Container>)
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 326px;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        padding-top: 25px;
        margin-bottom: 40px;

        color: #FFFFFF;
    }
`