import React, { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Peoples from "../../assets/peoples.svg"
import Arrow from "../../assets/arrow.svg"
import {
  Container,
  Image,
  ContainerItens,
  Title,
  InputLabel,
  Input,
  Button,
} from "./styles.js"

function App() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3003/user",
      {
        name: inputName.current.value,
        age: inputAge.current.value
      })
    setUsers([...users, newUser])

    navigate("/usuarios")
  }

  return (
    <Container>
      <Image src={Peoples} alt="logo-peoples" />
      <ContainerItens>
        <Title> Olá! </Title>

        <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome" required />

        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder="Idade" required />

        <Button onClick={addNewUser}> Cadastrar <img src={Arrow} alt="arrow" /> </Button>


      </ContainerItens>
    </Container>
  )

}

export default App;
