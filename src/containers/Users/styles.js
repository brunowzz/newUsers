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

export const ContainerItens = styled.div`
    width: 414px;
    min-height: 748px;
    height: 100%;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%); 
    backdrop-filter: blur(45px);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px 74px 36px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFFFF;
    margin-bottom: 81px;
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

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    background: transparent;
    border: 1px solid #FFFFFFFF;
    cursor: pointer;
    font-style: normal;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    border-radius: 14px;
`
