import styled from "styled-components"

export default function WalletList({date, children, value, operation}) {

    return(
        <Value isPositive={operation !== "output"}>
            <span>
                <p>{date}</p>
                <h2>{children}</h2>
            </span>
            
            <h3>{value.toFixed(2)}</h3>
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
        color: ${(props) => typeof props.isPositive !== 'boolean' || props.isPositive ? '#03AC00' : "#C70000"};
    }
`