import React, { useState, useRef } from "react"
import Peoples from "./assets/peoples.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import { 
  Container,
  Image,  
  ContainerItens,
  Title,
  InputLabel,
  Input,
  Button,
  User } from "./Styles.js"

async function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value
      }
    ])
  }

  async function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <Container>
      <Image src={Peoples} alt="logo-peoples"/>
      <ContainerItens>
        <Title> Olá! </Title>

        <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar <img src={Arrow} alt="arrow"/> </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name} </p>
              <p> {user.age} </p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt="trash"/> </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  )

}

export default App;
