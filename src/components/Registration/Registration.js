import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/mywallet"
import { Container, Form, Button, StyledLink } from "../Login/Login";

export default function Registration(){
    const navigate = useNavigate()
    const [waiting, setWaiting] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function login(e) {
        setWaiting(true)
        e.preventDefault();
        if(form.password !== form.confirmPassword){
            alert("Por favor verifique a senha")
            setWaiting(false)
            return 
        }
        const promise = postRegister({
            name: form.name,
            email: form.email,
            password: form.password})
        promise.catch(() => {
            alert('Erro no cadastro tente novamente mais tarde')
            setWaiting(false)
        })
        promise.then((r) => {
            navigate('/')
        })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={login} active={waiting}>
                <input type="text" name="name" placeholder="Nome" onChange={handleForm} value={form.description} disabled={waiting}/>
                <input type="email" name="email" placeholder="E-mail" onChange={handleForm} value={form.description} disabled={waiting}/>
                <input type="password" name="password" placeholder="Senha" onChange={handleForm} value={form.description} disabled={waiting}/>
                <input type="password" name="confirmPassword" placeholder="Confirme a senha" onChange={handleForm} value={form.description} disabled={waiting}/>

                <Button type="submit" active={waiting} disabled={waiting}>
                    {waiting ? <ThreeDots color="#FFFFFF" height={13} width={51} /> : 'Cadastrar'}
                </Button>
            </Form>
            <StyledLink to='/'>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}