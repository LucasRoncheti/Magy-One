var estado = 0,
    vw = $(window).width();
$("#hamburger").click(function() {
  var delay_time = 0;
  $(this).toggleClass('open');
  console.log(estado);
  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x:-vw,
      ease: Expo.easeInOut
    });


    
    $("li").each(function() {
      TweenMax.to($(this), 1.2, {
        x:-vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x:0,
      ease: Expo.easeInOut
    });
    $("li").each(function() {
      TweenMax.to($(this), 1, {
        x:0,
        /*
        x:vw,
        scaleX: 2.3,
        */
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .02;
    });
  }
});


delay_time = 0
$("li").click(function() {
  estado = 0;
  $("#hamburger").removeClass('open');
  TweenMax.to($("#bg-menu-mobile"), 1.2, {
    x:0,
    ease: Expo.easeInOut
  });
  $("li").each(function() {
    TweenMax.to($(this), 1, {
      x:0,
      delay: delay_time,
      ease: Expo.easeInOut
    });
    delay_time += .02;
  });
  // adiciona essa linha com setTimeout para atrasar a execução
  setTimeout(function() {
    $('#ulnames').css('display', 'none');
  }, 1000); // atraso de 1 segundo (1000 milissegundos)
  
  estado = 0;
  TweenMax.to($("#bg-menu-mobile"), 1.2, {
    x:0,
    ease: Expo.easeInOut
  });
});





let displayBlock = () =>{
  let ul= document.getElementById('ulnames')
  if(estado==0){
    ul.style.display = 'block'
  } else{
    ul.style.display = 'none'
  }

}