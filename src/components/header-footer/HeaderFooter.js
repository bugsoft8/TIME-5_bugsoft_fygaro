const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
        width: 100%;
        height: 90px;
        background-color: #1B1919;
        display: flex;
        padding: 0 80px;
        position: sticky;
        top: 0;
        z-index: 9999;
    }
    .header_logo {
        width: 157px;
        height: 44px;
        margin-top: 8px;
    }
    .nav_content {
        width: 543px;
        height: 83px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 7px 43px 0 186px ;
    }
    .nav_searchbar {
        width: 543px;
        position: relative; 
    }
    .nav_searchbar >img {
        z-index: 1;
        position: absolute;
        left: 0;
        margin: 12px 0 0 20px;
    }
    .searchBarHeader {
        background-color: #F5F3F4;
        width: 543px;
        height: 40px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 0px 28px 2px rgba(0, 0, 0, 0.11); 
        padding-left: 50px;
        transition: padding 0.3s ease-in-out;
    }
    .nav_btns {
        width: 472px;
        display: flex;
        justify-content: space-between; 
    }
    .btn_nav {
        height: 40px;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 10px 10px 0 0;
        border-color: transparent;
    }
    .profile_options {
        width: 350px;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 9px;
    }
    .vertical_line {
        border-left: 2px solid;
        height: 30px;
    }
    .profile_btns {
        width: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn_header {
        padding: 0;
        height: 36px;
        background-color: transparent;
    }
    .btn_shopprofile {
        width: 199px;
        border-radius: 100px;
        border-color: transparent;
    }
    .btn_user {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 100px 0 0 100px ;
        border-color: transparent;
    }
    .btn_cart {
        width: 50px;
        border-radius: 0 100px 100px 0 ;
        border-color: transparent;
    }
    /* ------------- buttons animation------------ */
    .btn_change:hover {
        filter: grayscale(100%) invert(100%);
    }
    .btn_nav:hover {
        background-color: #0A0C0B;
        cursor: pointer;
    }
    .btn_header:hover {
        background-color: #0A0C0B;
        cursor: pointer;
    }
  </style>
    <link rel="stylesheet" href="../../assets/reset/reset.css">
    <link rel="stylesheet" href="../../assets/colors/colors.css">
    <link rel="stylesheet" href="../../assets/fonts/fonts.css">
  <header>
    <img class="header_logo" src="../../assets/images/logo--white.svg" alt="logo_fygaro">
    <div class="nav_content">
        <div class="nav_searchbar">
            <img src="../../assets/icons/search_icon.svg" alt="search_icon">
            <form>
                <input class="searchBarHeader color_gray-dark" type="text" placeholder="                          Barbearias                   |                   Produtos    ">
            </form>
        </div>
        <div class="nav_btns">
            <a href="../../pages/Page_barbearia/Page_barbearia.html">
                <button class="btn_nav btn_change">
                    <img  src="../../assets/icons/header_barbershop.svg" alt="barbershop_btn">
                    <p class="font_btn-primaty color_primary">BARBEARIAS</p>
                </button>
            </a>
            <a href="../../pages/page_home/index.html">
                <button class="btn_nav btn_change">
                    <img src="../../assets/icons/header_home.svg" alt="home_btn">
                    <p class="font_btn-primaty color_primary">HOME</p>
                </button>
            </a>
            <a href="../../pages/page_product/index.html">
                <button class="btn_nav btn_change">
                    <img src="../../assets/icons/header_produtos.svg" alt="products_btn">
                    <p class="font_btn-primaty color_primary">PRODUTOS</p>
                </button>
            </a>
        </div>
    </div>
    <div class="profile_options">
        <a href="#">
            <button class="btn_change btn_header btn_shopprofile font_btn-primaty color_primary">LISTAR A SUA EMPRESA</button>
        </a>
        <div class="profile_btns">
            <a href="../../pages/Page_user/page_user.html">
                <button class="btn_header btn_user btn_change">
                    <img src="../../assets/icons/header_profile.svg" alt="profile_btn">
                </button>
            </a>
            <div class="vertical_line color_primary"></div>
            <a href="../../pages/Carrinho_vazio/Carrinho_vazio.html">
                <button class="btn_header btn_cart btn_change">
                    <img src="../../assets/icons/header_cart.svg" alt="cart_btn">
                </button>
            </a>
        </div>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

// ---------------footer------------------- //

const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
  footer {
    height: 85px;
    background-color: #1B1919;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    }
    .footer_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 165px;
    }
    .content_list {
        width: 467px;
        display: flex;
        justify-content: space-between;
    }
    .content_icons {
        width: 132px;
        display: flex;
        justify-content: space-between;
    }
</style>
<link rel="stylesheet" href="../../assets/reset/reset.css">
<link rel="stylesheet" href="../../assets/colors/colors.css">
<link rel="stylesheet" href="../../assets/fonts/fonts.css">
<footer>
    <div class="footer_content">
        <ul class="content_list">
            <a href="#">
                <li class="list_iten font_slide-price color_gray-white--input">Política de Privacidade</li>
            </a>
            <a href="#">
                <li class="list_iten font_slide-price color_gray-white--input">Termos</li>
            </a>
            <a href="#">
                <li class="list_iten font_slide-price color_gray-white--input">Trabalhe Conosco</li>
            </a>
            <a href="#">
                <li class="list_iten font_slide-price color_gray-white--input">Contato</li>
            </a>
        </ul>
        <div class="content_icons">
            <img src="../../assets/icons/footer_instagram.svg" alt="instagram_icon">
            <img src="../../assets/icons/footer_facebook.svg" alt="facebook_icon">
            <img src="../../assets/icons/footer_whatsapp.svg" alt="whatsapp_icon">
        </div>
    </div>
    <p class="footer_rigths font_slide-descri--2 color_gray-white--input">© 2023 Fygaro Inc. Todos os direitos reservados</p>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);