
var condition = 0

let selectButtonVideo = () =>{
    let buttonVideo = document.getElementById('buttonVideo')
    let buttonImg = document.getElementById('buttonImg')
    if(condition ==0){

    buttonVideo.classList.add( 'buttonImgVideoSelected')
    buttonVideo.classList.remove( 'buttonImgVideoUnselected')
  
    buttonImg.classList.remove( 'buttonImgVideoSelected')
    buttonImg.classList.add( 'buttonImgVideoUnselected')
    conditionDiv=1
    expandDivContent()
    condition = 1
    

    }
  
  
}


let selectButtonFotos = () =>{
    let buttonVideo = document.getElementById('buttonVideo')
    let buttonImg = document.getElementById('buttonImg')
    if(condition ==1){
        

            buttonVideo.classList.remove( 'buttonImgVideoSelected')
            buttonVideo.classList.add( 'buttonImgVideoUnselected')
        
            buttonImg.classList.add( 'buttonImgVideoSelected')
            buttonImg.classList.remove( 'buttonImgVideoUnselected') 
            conditionDiv=1
            expandDivContent()
            condition=0
            
    
     

    }
  
  
}




