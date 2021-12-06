export default function Posts() {
    const posts = [
        {
            perfil: "/img/meowed.png",
            usuario: "meowed",
            foto: "/img/gato-telefone 1.png",
            perfilcomentando: "img/respondeai.png",
            curtidas: "respondeai",
            numeroCurtidas: "133.290",
            comentando: "respondeai",
            comentario: "Lindo 👏👏👏👏"
        },
        {
            perfil: "/img/perfil.jpg",
            usuario: "LucasVz",
            foto: "/img/dog.jpg",
            perfilcomentando: "img/respondeai.png",
            curtidas: "respondeai",
            numeroCurtidas: "14.234",
            comentando: "respondeai",
            comentario: "👏👏👏👏"
        },
        {
            perfil: "/img/meowed.png",
            usuario: "meowed",
            foto: "/img/gato-telefone 1.png",
            perfilcomentando: "img/respondeai.png",
            curtidas: "respondeai",
            numeroCurtidas: "12.263",
            comentando: "respondeai",
            comentario: "Lindo 👏👏👏👏"
        }
    ]

    return (
        <div>
            {posts.map(post)}
        </div>
    );
}

function post(p) {
    return (
        <article class="post">
            <div class="post-topo">
                <div>
                    <img src={p.perfil} alt="" />
                    <h2>{p.usuario}</h2>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="foto" src={p.foto} alt="" />
            <div class="post-ferramentas">
                <div>
                    <ion-icon class="post-icons hover" name="heart-outline"></ion-icon>
                    <ion-icon class="post-icons hover" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="post-icons hover" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon class="post-icons hover" name="bookmark-outline"></ion-icon>
            </div>
            <div class="curtidas">
                <img class="img-curtida" src={p.perfilcomentando} alt="logo" />
                <p>Curtido por <strong>{p.curtidas}</strong> e <strong>outras {p.numeroCurtidas} pessoas</strong> </p>
            </div>
            <div class="comentarios">
                <p><strong>{p.comentando}</strong> {p.comentario}</p>
                <ion-icon class="like hover" name="heart-outline"></ion-icon>
            </div>
            <div class="comentar">
                <ion-icon class="post-icons hover" name="happy-outline"></ion-icon>
                <label class="barra-comentar" for="comentar">
                    <input id="comantar" placeholder="Adicione um comentário..." type="text" />
                </label>
                <button>Publicar</button>
            </div>
        </article>
    )
}