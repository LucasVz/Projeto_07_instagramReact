export default function Seguir() {
    const seguir =[
        {
            imagem: "/img/badvibesmemes.png",
            usuario: "bad.vibes.memes"
        },
        {
            imagem: "/img/chibirdart.png",
            usuario: "chibirdart"
        },
        {
            imagem: "/img/razoesparaacreditar.png",
            usuario: "razoesparaacreditar"
        }

    ]
    return (
        <div>
            {seguir.map((s) => (<div class="seguir">
                <div class="seguir-perfil">
                    <img src={s.imagem} alt=""/>
                    <div>
                        <h4>{s.usuario}</h4>
                        <h5>Segue você</h5>
                    </div>
                </div>
                <span>Seguir</span>
            </div>
            ))}
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
				Termos • Localizações • Contas mais relevantes • Hashtags •
				Idioma</p>
			<p>© 2021 INSTAGRAM DO FACEBOOK</p>
            
        </div>
    )
}
