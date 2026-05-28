import './Personagens.css'

function Personagens({ personagens }) {
    return (
        <div className="personagens">
            {personagens.map((personagem) => (
                <div key={personagem.name} className="personagem">
                    <img src={personagem.imageUrl} alt={personagem.name} style={{ width: personagem.imageSize }} />
                    <p>{personagem.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Personagens