import { useState } from 'react'
import './App.css'
import MeuBotao from './components/MeuBotao'
import Personagens from './components/Personagens'

function App() {
  const [numeroPersonagems, setNumeroPersonagens] = useState(3)
  const [personagens, setPersonagens] = useState([
    {
      name: 'Hedy Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    },
    {
      name: 'Freddy Nelson',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    },
    {
      name: 'XPTO',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
  ])

  function adicionarPersonagem() {
    const novoPersonagem = {
      name: `Novo Personagem ${numeroPersonagems + 1}`,
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    setPersonagens([...personagens, novoPersonagem])
    setNumeroPersonagens(numeroPersonagems + 1)
  }

  return (
    <div>
      <h1>Bem vindo ao meu app!</h1>
      <MeuBotao onClick={adicionarPersonagem} />
      <Personagens personagens={personagens} />
    </div>
  )
}

export default App
