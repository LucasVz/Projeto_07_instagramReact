export default function Navbar() {
  return (
    <nav class="menu">
      <div class="menu-box">
        <div class="mobile">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div class="divisao"></div>
          <a href="#"><img src="/img/logo.png" alt="Logo" /></a>
        </div>
        <a class="mostrar-mobile" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a class="mostrar-mobile" href="#"><img src="/img/logo.png" alt="Logo" /></a>

        <label class="mobile" for="pesquisa">
          <input id="pesquisa" placeholder="Pesquisar" type="text" />
        </label>

        <div class="icones" placeholder="pesquisar">
          <a href="#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon class="mobile" name="compass-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon class="mobile" name="heart-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon class="mobile" name="person-outline"></ion-icon>
          </a>
        </div>
      </div>
    </nav>
  );
}