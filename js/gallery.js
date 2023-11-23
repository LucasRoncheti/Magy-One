

//insere todas as thumbs no container da galeria 
let galleryContentFotos = () => {
    var galleryContent = document.getElementById('gallery');
    return galleryContent.innerHTML = galleryData.map((x) => {
      let { id, thumbnail,alt } = x;
      return `<div id="${id}" onclick="imgOpen(${id})" class="thumbNailDiv"><img src="${thumbnail}" alt="${alt}"></div>
                    `;
    }).join('');
  };

  //abre a imagem em alta definição
  let imgOpen = (id) => {
    let imgfullcontainer = document.getElementById('imgfullContainer')
    imgfullcontainer.style.display = 'block'
    imgfullcontainer.innerHTML = `
      <div id="imgFull" class="imgFull">
        <div onclick="closeImg()" class="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentcolor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
        <div id="spinner" class="spinner">
        <img style='width:36vw;height:auto' class='spinnerImg' src="images/spin.gif" alt="Logo magy One gif">
        </div>
        <img id="imgFullImg" src="images/Galery/ampliadas/${id}.jpg" alt="">
      </div>
    `
    let spinner = document.getElementById('spinner')
    spinner.style.display = "block"
  
    let imgFullImg = document.getElementById('imgFullImg')
    imgFullImg.onload = () => {
      spinner.style.display = "none"
    }
  
    let imgfull = document.getElementById('imgFull')
    imgfull.style.display = "flex"
  }
  
//fecha a imagem em alta definição
  let closeImg=()=>{
    let imgfullcontainer = document.getElementById('imgfullContainer')
    imgfullcontainer.style.display = 'none'
    let imgfull = document.getElementById('imgFull')
    imgfull.style.display = "none"
  }



//insere todas as thumbs dos VIDEOS  no container da galeria 
let galleryContentVideo = () => {
    var galleryContent = document.getElementById('gallery');
  
    return galleryContent.innerHTML = galleryDataVideos.map((x) => {
      let { id, thumbnail,alt } = x;
      return `<div id="${id}" onclick="videoOpen(${id})" class="thumbNailDiv"><img src="${thumbnail}" alt="${alt}">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-play-circle svgVideo " viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
      </svg>

    </div>
       `;
       
    }).join('');
    
  };

    //abre os vídeos 
    let videoOpen = (id) => {
      let imgfullcontainer = document.getElementById('imgfullContainer')
      imgfullcontainer.style.display = 'block'
      imgfullcontainer.innerHTML = `
        <div id="videoOpen" class="videoOpen">
        <div onclick='closeVideo()' class='closeVideo' id='closeVideo'>X</div>
          <video class='videosGalerry'  autoplay  controls >
            <source src="images/Galery/videos/${id}.mp4" >
            Your browser does not support the video tag.
          </video>
        </div>
      `
      
    }
  // o próprio nome já diz tudo 
    let closeVideo = ()=>{
      let imgfullcontainer = document.getElementById('imgfullContainer')
      imgfullcontainer.style.display = 'none'
      imgfullcontainer.innerHTML = `
      
    `
    }





 //expande e recolhe a div container das thumbnails 
  
    var conditionDiv = 0

 
  let expandDivContent = () =>{
    
    if(conditionDiv == 0){
      let div=document.getElementById('gallery')
      div.style.height = 'auto'
      document.getElementById('buttonMore').innerHTML = 'Menos'
      conditionDiv = 1

    }else{
      let div=document.getElementById('gallery')
      div.style.height = '60vw'
      document.getElementById('buttonMore').innerHTML = 'Mais'
      conditionDiv = 0
    }
   
  }



