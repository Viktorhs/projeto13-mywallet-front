import { Form, Button } from "../Login/Login"
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postNewOperation } from "../../services/mywallet";

export default function Output(){
    const navigate = useNavigate()
    const [waiting, setWaiting] = useState(false)

    const [form, setForm] = useState({
        value: '',
        description: '',
        type: 'output'
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function submitOutput(e) {
        setWaiting(true)
        e.preventDefault();
        const promise = postNewOperation(form)
        promise.catch(() => {
            setWaiting(false)
        })
        promise.then((r) => {
            navigate('/wallet')
        })
    }

    return(
    <Container>
        <h1>Nova saída</h1>
        <Form onSubmit={submitOutput} active={waiting}>
            <input type="number" name="value" placeholder="Valor" onChange={handleForm} value={form.value} inputMode="numeric" disabled={waiting}/>
            <input type="text" name="description" placeholder="Descrição" onChange={handleForm} value={form.description} disabled={waiting}/>

            <Button type="submit" active={waiting} disabled={waiting}>
                {waiting ? <ThreeDots color="#FFFFFF" height={13} width={51} /> : 'Salvar saída'}
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
    }`