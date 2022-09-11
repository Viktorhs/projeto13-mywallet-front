import { useState, useContext } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/mywallet"
import UserContext from "../../contexts/UserContext";

export default function Login(){

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [waiting, setWaiting] = useState(false)
    const [wrongData, SetWrongData] = useState(false)

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        if(wrongData === true){
            SetWrongData(false)
        }
    }

    function login(e) {
        setWaiting(true)
        e.preventDefault();
        const promise = postLogin(form)
        promise.catch(() => {
            setWaiting(false)
            SetWrongData(true)
        })
        promise.then((r) => {
            const dados = {
                name: r.data.name,
                token: r.data.token
            }

            localStorage.removeItem("mywallet")
            let mywalletInf = JSON.stringify(dados)
            setUser(dados)
            localStorage.setItem("mywallet", mywalletInf)

            setUser(dados)
            navigate('/wallet')
        })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={login} active={waiting}>
                <input type="email" name="email" placeholder="E-mail" onChange={handleForm} value={form.description} disabled={waiting}/>
                <input type="password" name="password" placeholder="Senha" onChange={handleForm} value={form.description} disabled={waiting}/>

                <Button type="submit" active={waiting} disabled={waiting}>
                    {waiting ? <ThreeDots color="#FFFFFF" height={13} width={51} /> : 'Entrar'}
                </Button>
            </Form>
            { wrongData ? <p>Senha ou E-mail invalido</p> : <></>}
            <StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        margin-bottom: 24px;

        color: #FFFFFF;
    }

    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 50px;

        color: #FF63C2;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        padding: 0 15px;
        opacity: ${(props) => typeof props.active !== 'boolean' || props.active ? '0.8' : ""};
        border: 0;

        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color:  #000000;
        
        margin-bottom: 13px;
    }

    input::placeholder{
        color:  #000000;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

` 

const Button = styled.button`

    width: 326px;
    height: 46px;

    background: #A328D6;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;

    opacity: ${(props) => typeof props.active !== 'boolean' || props.active ? '0.7' : ""};

    &:active{
    filter: brightness(${(props) => typeof props.active !== 'boolean' || props.active ? '' : '90%'});
    transform: translateY(${(props) => typeof props.active !== 'boolean' || props.active ? '' : '1px'});
}

`

const StyledLink = styled(Link)`
    margin-top: 36px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    text-decoration-line: none;
    color: #ffffff;
`

export { Container, Form, Button, StyledLink }