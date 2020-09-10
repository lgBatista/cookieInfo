const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    .wrapper {
      font-family: 'Open Sans', sans-serif;
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      background: rgba(0, 0, 0, 0.8);
      color: #FFF;
      height:80px;
      display:flex;
      transition:all .4s ease;
      opacity:1;
    }
    .wrapper.hidden {
      bottom:-100%;
      opacity:0;
    }
    a{
      color: #FFF;
    }
    .container{
      max-width:1500px;
      padding:18px 15px;
      width:100%;
      margin:0 auto;
      font-size:13px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    #btn-accept{
      margin-left:20px;
      color:#004789;
      background:#FFF;
      border:0 none;
      font-size:14px;
      padding:12px 24px;
      border-radius: 10px;
      cursor:pointer;
    }
    #btn-close{
      border-radius:50%;
      background:#686D72;
      min-width:30px;
      min-height:30px;
      font-weight:900;
      line-height:30px;
      text-align:center;
      cursor:pointer;
      margin-left:10px;
    }
    @media (max-width:610px){
      .wrapper{
        height:150px;
      }
      .container{
        flex-wrap: wrap;
      }
      #btn-accept{
        margin-left:0;
        margin-top:10px;
      }
      #btn-close{
        position:absolute;
        right:0;
        top:-15px;
      }
    }
  </style>

  <div class="wrapper">
    <div class="container">
      <span>Usamos cookies para segurança, melhor experiência e personalização de conteúdo de acordo com a nossa <a id="link" href="#" title="Leia sobre a nossa Política de Privacidade">Política de Privacidade</a>. Ao continuar a navegação em nosso site, você concorda com o uso dessas informações.</span>
      <button id="btn-accept">Aceitar</button>
      <span id="btn-close">X</span>
    </div>
  </div>
`

var url = '';
class CookieInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    url = this.attributes.url.value
  }

  connectedCallback() {
    const session = Boolean(this.attributes.session || this.attributes.session?.value == 'true')
    const prevAccepted = session ? sessionStorage.getItem("acceptedCookie") : localStorage.getItem("acceptedCookie")

    //  VERIFICA SE O COOKIE JA FOI ACEITO
    if (!prevAccepted) {

      const link = this.shadowRoot.querySelector('#link')
      link.setAttribute('href', url)

      // BOTÃO DE CONFIRMAR 
      const confirmButton = this.shadowRoot.querySelector('#btn-accept');
      confirmButton.addEventListener('click', () => {
        this.shadowRoot.querySelector('.wrapper').setAttribute('class', 'wrapper hidden');
        !this.attributes.fixed &&
          (session ? sessionStorage.setItem("acceptedCookie", true) : localStorage.setItem("acceptedCookie", true))
      })

      // BOTÃO DE CANCELAR
      const cancelButton = this.shadowRoot.querySelector('#btn-close');
      cancelButton.addEventListener('click', () => {
        this.shadowRoot.querySelector('.wrapper').setAttribute('class', 'wrapper hidden');
      })
    }
  }
}

// DEFINIR O ELEMENTO
customElements.define('cookie-info', CookieInfo);