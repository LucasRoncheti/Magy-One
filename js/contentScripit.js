// funções que injetam conteúdo na página principal 
var mainDiv = document.getElementById(`MainDiv`)
let inícioContent = () => {

  mainDiv.innerHTML =
    `

            <div class="scanlines"></div>



           

            <div class="MainTextDesktop"> 
                <img class="imageLogoMain" src="images/logoColorMain.png" alt="Logo Magy One"></img>
                <h1>O Melhor do Rock Nacional</h1>
                <div class="socialLinks">
                <a href="https://www.instagram.com/magyone.banda/" target="_blank"> <img src="images/insta.png"></a>
                <a href="https://www.youtube.com/@magyoneoficial/videos" target="_blank"> <img src="images/you.png"></a>
                <a href="https://wa.me/5527999773842"><img src="images/whats.png"></a>
                </div>
            </div>

          

            <footer class='footerinicio'> 
              <p class="infoText">Magy One 2023</p>
             
              <p class="infoText"> Desenvolvido por <a href="https://www.instagram.com/lucasroncheti.designer/" target="_blank" ><strong><em>Lucas Roncheti Designer</em></strong></a> </p>
            </footer>
    `
  loadGiffAnotherScene()
}


let midiaContent = () => {

  mainDiv.innerHTML =

    `   
   
    <div class="midiaContent" >
    <h2> Teaser Magy One </h2><br>
    <div class='bcgBlackMidia'> teste</div>
    <video  controls>
      <source src="videos/magyhd.mp4" >
      <source src="videos/magyhd.avi" >
      <source src="videos/magyhd.mov" >
      
    </video>


    <h2> Sobre a MAGY ONE </h2>

    <p>A MAGY ONE é uma banda capixaba que vem conquistando destaque no cenário musical. Com um repertório eclético que abrange grandes clássicos do rock nacional e  até mesmo da MPB, eles oferecem interpretações únicas e uma voz marcante que cativam cada vez mais fãs a cada apresentação. Mas o talento da banda não se limita a covers; eles também têm um lado autoral, com composições originais que trazem frescor ao cenário musical.</p>

    <p>Em cima do palco, a MAGY ONE entrega performances empolgantes, cheias de energia e um profundo comprometimento com a música. Eles já se apresentaram em diversos eventos e casas de shows pelo Espírito Santo, incluindo locais icônicos na região metropolitana. A cada show, o público é recebido com uma apresentação impecável, garantindo que a noite seja memorável e marcante.</p>
    
    <p>O reconhecimento da banda no cenário musical capixaba é evidente: suas músicas "Sacanagem" e "Fantoche" foram indicadas ao Prêmio da Música Capixaba 2023 em várias categorias, incluindo melhor composição, melhor videoclipe e melhor música. A banda também foi indicada como a melhor banda e a revelação da música capixaba.</p>
    
    <p>Com influências que vão desde o POP ROCK até o BLUES e a MPB, a MAGY ONE oferece apresentações que ficam gravadas na memória. Se você procura uma experiência musical única, esta é a sua chance de testemunhar o talento de uma das melhores bandas da cena musical capixaba. Não perca a oportunidade de ver a MAGY ONE em ação!</p>
    



    <h2> Nossa Galeria </h2>
    <div id="containerGalleryMain" class="containerGalleryMain">
        <div class="buttonsContainer" id="buttonsContainer">

              <div onclick="galleryContentFotos();selectButtonFotos()" class="buttonImgVideoSelected" id="buttonImg"> <p>Fotos</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
              </svg></div>
              <div onclick="galleryContentVideo();selectButtonVideo()" class="buttonImgVideoUnselected " id="buttonVideo"><p>Vídeos</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                  </svg>
            </div>

        </div>

            <div onclick="expandDivContent()" class="buttonMore" id="buttonMore"><p>Mais </p>
        
            </div>

            <div id="gallery" class="galleryContainer">
                
            
            </div>

          
    </div>


    <div id="imgfullContainer" class="imgfullContainer"> </div>


    <h2> Conheça Nossas Músicas Autorais </h2><br>

     <iframe style="border-radius:12px" 
     src="https://open.spotify.com/embed/artist/2wAU9aENzfNnLGwfgTUsOc?utm_source=generator&theme=0" 
     width="100%" height="372" frameBorder="0" allowfullscreen="" 
     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
     loading="lazy"></iframe>

     <h2> Ouça nossa playlist no Spotify </h2><br>
     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3ykDKpriiAh0QaRoAjNUz2?utm_source=generator" width="100%" height="372" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     
     
      
    
    <a href="https://drive.google.com/open?id=1BNctsudNliEHHS7b5mP5OTORYhi2Z0Er&authuser=lucasroncheti%40gmail.com&usp=drive_fs" target="_blank">
     
     <button > Midia para Flyers 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
      </svg></button> 
      </a>
      
  </div>

 



    
    `
  loadGiffAnotherScene()
  galleryContentFotos()

}

let dateContentFirst = () => {
  mainDiv.innerHTML = `
<div onLoad="adicionarClasses()" class='bodyDivDate'>
  <div class='containerDivsDate'>
    <div id='dateContent' class='dateContent'>

    </div>
    <div class='imgDate'>
      <img src='images/imgDate.png'>
    </div>
  </div>
</div>


`
  loadGiffAnotherScene()
  dateContent()

}


let dateContent = () => {
  let divContent = document.getElementById("dateContent");
  loadGiffAnotherScene();
  let dadosIndex = 0;

  function addClassToNextDiv() {
    if (dadosIndex < dados.length) {
      let { DAY, MONTH, HOUSE, HOUR, LOCATION, LINK } = dados[dadosIndex];
      let newDiv = document.createElement("div");
      newDiv.classList.add("dateContainer");
      newDiv.innerHTML = `

        <p style="margin:auto;"> Atualizando Agenda, Volte em breve... </p>
    
   
      `;
      divContent.appendChild(newDiv);
      dadosIndex++;
      setTimeout(addClassToNextDiv, 300); // Chama a função novamente após 0,5 segundos
    }
  }

  setTimeout(addClassToNextDiv, 1000);
};




let contactContent = () => {
  mainDiv.innerHTML =
    `
  <div class="contactDiv">
  <div class="socialMedia">
    <h2>Nos Siga nas Redes Sociais </h2>

    <a href="https://www.instagram.com/magyone.banda/" target="_blank">
    <div class="social">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
      <p> <strong> @magyoneoficial</strong> </p>
      <strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </strong> 
    </div>
  </a>
    
    <a href="https://www.youtube.com/@magyoneoficial/videos" target="_blank">
    <div class="social">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
      </svg>
      <p> <strong> @magyoneoficial</strong> </p>
      <strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </strong> 
    </div>
  </a>

    <h2>Nosso Whatsapp</h2>

    <a href="https://wa.me/5527999773842">
    <div class="social">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
      <p> <strong>+55 27 99977-3842</strong> </p>
      <strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </strong> 
    </div>
  </a>
    
    <div class="info">
      <p class="infoText">Cnpj:41.544.613/0001-77</p>
      <p class="infoText">Rua Joana Darc n Cariacica - ES</p>
      <p class="infoText">E-mail:contato@magyone.com.br <br> Fone: (27)99977-3842
      </p><br><br>

      <footer> 
      <p style='font-size:0.6em;' class="infoText">Magy One 2023</p>
      <p style='font-size:0.6em;' class="infoText"> Desenvolvido por <a href="https://www.instagram.com/lucasroncheti.designer/" target="_blank"><strong><em>Lucas Roncheti Designer</em></strong></a> </p>
      </footer>
    </div>

  </div>
</div>
  `
  loadGiffAnotherScene()
}




inícioContent()





/* <div class="date">
<p><strong>${DAY}</strong></p>
<p><strong>${MONTH}</strong></p>
</div>
<div class="location">
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
   <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
   <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
 </svg><span></span>
  <strong>${HOUSE}</strong>
</p>
<p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
  </svg><span></span>
  ${HOUR} h
</p>
<p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg><span></span>
  ${LOCATION}
</p>
</div>
<a href="${LINK}" target="_blank">
<div class="moreInfo">
  <p>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  </p>
</div>
</a> */