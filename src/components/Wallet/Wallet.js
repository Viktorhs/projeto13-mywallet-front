import styled from "styled-components"
import  {RiLogoutBoxRLine} from "react-icons/ri"
import {IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5"
import { useState } from "react"
import WalletList from "./WalletList"
import { Link, useNavigate } from "react-router-dom"

export default function Wallet(){

    const navigate = useNavigate()
    const [totalBalance, setTotalBalance] = useState({
        value: 2000,
        isPositive: false
    })
    const [test, setTest] = useState([1])

    return(
        <Container>
            <Header>
                <h1>Ola, Fulano</h1>
                <span><RiLogoutBoxRLine/></span>
            </Header>

            {test.length === 0 ? 
            <WalletBox>
                <h5>Não há registros de entrada ou saída</h5>
            </WalletBox> 
            :
            <WalletBox>
                <ul>
                    <WalletList value={200} date ={"06/11"} operation={"input"}>teste</WalletList>
                    <WalletList value={200} date ={"06/11"} operation={"output"}>teste</WalletList>
                </ul>
                <Balance isPositive={totalBalance.isPositive}>
                    <h2>SALDO</h2>
                    <h3>{totalBalance.value.toFixed(2)}</h3>
                </Balance>
            </WalletBox>}
            <Buttons>
                <Link to="entrada">                
                    <div>
                    <span><IoAddCircleOutline/></span>
                    <p>Nova entrada</p>
                    </div>
                </Link>
                <Link to="/saida">
                    <div>
                        <span><IoRemoveCircleOutline/></span>
                        <p>Nova saida</p>
                    </div>
                </Link>
                
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Header = styled.div`
    width: 100vw;
    padding: 25px 24px 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;

    span{
        cursor: pointer;
    }
`
const WalletBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 22px 24px 13px 24px;
    padding: 23px 0 12px 0;
    border-radius: 5px;
    background-color: #FFFFFF;

    div, ul{
        padding: 0 16px;
    }

    ul{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0px;
        padding-top: 23px;
        width: 100%;
        height: 94%;
        
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-y: auto;
    }

    h5{
        width: 180px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }

`
const Balance = styled.div`
    position: absolute;
    bottom: 12px;
    left: 0;
    z-index: 4;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    
    h3{
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${(props) => typeof props.isPositive !== 'boolean' || props.isPositive ? '#03AC00' : "#C70000"};
    }
    
    
`
const Buttons = styled.div`
    width:  100%;
    height: 143px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;


    div{
        min-width: 155px;
        width: 48%;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;

        padding: 9px 0 9px 10px;
        cursor: pointer;

        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        width: 50%;
    }
    div span{
        font-size: 25px;
    }
`