import Storys from "./Storys";
import Posts from "./Posts";
import ConteudoPerfil from './ConteudoPerfil';
import Seguir from './Seguir';

export default function Conteudo(){
    return (
        <div class="conteudo">
            <Storys />
            <Posts />
            <div class="conta" >
                <ConteudoPerfil />
                <Seguir />
            </div>
        </div>
    )
}