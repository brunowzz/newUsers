import styled from "styled-components"
import Bg1 from "../../assets/bgscreen1.svg"

export const Container = styled.div `
    height: 100vh;
    background: url('${Bg1}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img `
    width: 328.92px;
    height: 176.26;
    margin: 30px 0 44.74px 0;
`

export const ContainerItens = styled.div `
    width: 414px;
    height: 100vh;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px 74px 36px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1 `
    text-align: center;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFFFF;
    margin-bottom: 81px;
`

export const InputLabel = styled.p `
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 23px;
`

export const Input = styled.input `
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline: none;
    border: none;
    padding: 15px 0 15px 25px;
    margin-bottom: 34px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
`

export const Button = styled.button `
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 132px;
    cursor: pointer;
    font-style: normal;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }
`