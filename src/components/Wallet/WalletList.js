import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { deleteOperation } from "../../services/mywallet"

export default function WalletList({date, children, value, operation, id, reaload, setReaload}) {
    const navigate = useNavigate()
    const valor = Number(value)

    function realoadPage(){
        if(reaload === true){
            setReaload(false)
        }
        if(reaload === false){
            setReaload(true)
        }
    }

    function deleteValue(id){
        if(window.confirm("deseja apagar?")){
            const promisse = deleteOperation(id)
            promisse.catch(() => {
                alert('Erro de comunicação com o servidor')
            })
            promisse.then((r) => {
                navigate('/wallet')
                realoadPage()
            })
        }

    }

    return(
        <Value isPositive={operation !== "output"}>
            <span>
                <p>{date}</p>
                <h2>{children}</h2>
            </span>
            
            <span>
                <h3>{valor.toFixed(2)}</h3>
                <h6 onClick={() => deleteValue(id)}>x</h6>
            </span>
            

        </Value>
    )
}

const Value = styled.li`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        margin-right: 11px
    }
    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000
    }
    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        margin-right: 10px;
        color: ${(props) => typeof props.isPositive !== 'boolean' || props.isPositive ? '#03AC00' : "#C70000"};
    }
    h6{
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #C6C6C6;
        cursor: pointer;
    }
`