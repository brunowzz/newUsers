import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatars from "../../assets/avatars.svg"
import Arrow from "../../assets/arrow-left.svg"
import Trash from "../../assets/trash.svg"
import {
  Container,
  Image,
  ContainerItens,
  Title,
  User, 
  Button
} from "./styles.js"

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3003/user")
      setUsers(newUsers)

    }
    fetchUsers()
  }, [users])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3003/user/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image src={Avatars} alt="logo-peoples" />
      <ContainerItens>
        <Title> Usuários! </Title>
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name} </p>
              <p> {user.age} </p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt="trash" /> </button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage}> <img src={Arrow} alt="arrow"/> Voltar </Button>
      </ContainerItens>
    </Container>
  )

}

export default Users;
