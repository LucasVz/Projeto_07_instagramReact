export default function Perfil(props) {
    return (
        <div>
            <div class="perfil">
                <img src={props.imagem} alt={props.nome} />
                <div>
                    <h4>{props.perfil}</h4>
                    <p>{props.nome}</p>
                </div>

            </div>
            <div class="sugestoes">
                <h5>Sugestões para você</h5>
                <h6>Ver tudo</h6>
            </div>
        </div>
    )
}
