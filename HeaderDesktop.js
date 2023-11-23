

//funções que mudam o style da lista quando passa o mouse sobre elas 

var transition = '0.3s'

let changeColorHover =(listMenu)=>{
    let listMenuID = document.getElementById(listMenu)
    let listName = listMenuID.querySelector('p')
    let listSpan = listMenuID.querySelector('span')
    
  
    listName.style.transition = transition
    listName.style.color = '#ef0094',
    
    listSpan.style.transition = transition
    listSpan.style.backgroundColor = '#ef0094'
    
}
let changeColorUnHover =(listMenu)=>{
    let listMenuID = document.getElementById(listMenu)
    let listName = listMenuID.querySelector('p')
    let listSpan = listMenuID.querySelector('span')
    
  

    listName.style.color = 'white',
    
    listSpan.style.backgroundColor = 'white'
}