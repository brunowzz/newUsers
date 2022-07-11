import React from "react"
import { Button as ContainerButton} from "./styles.js"

export default function Button({children, ...props}){
    return <ContainerButton {...props}> {children} </ContainerButton>
}