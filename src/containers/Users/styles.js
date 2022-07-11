import styled from "styled-components"
import Bg1 from "../../assets/bgscreen2.svg"

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background: url('${Bg1}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    width: 328.92px;
    height: 176.26;
    margin: 30px 0 44.74px 0;
`

export const User = styled.li`
    width: 342px;
    height: 58px;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFFFF;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`