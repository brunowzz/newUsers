import React from "react"
import { ContainerItens as Container} from './styles.js'

export default function ContainerItens({children, isBlur}) {
    return <Container isBlur={isBlur}> {children} </Container>
}