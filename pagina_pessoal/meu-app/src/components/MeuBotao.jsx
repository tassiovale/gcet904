import './MeuBotao.css'

function MeuBotao({ onClick }) {
  return (
    <button className="botao" onClick={onClick}>
      Adicionar novo personagem
    </button>
  )
}

export default MeuBotao