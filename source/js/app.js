
addEventListener('resize', ()=> location.reload())

function app(){    
    const navMenu = document.querySelector('.listMenu')    
    const  btnMenu = document.querySelector('.buttonMenu')
    btnMenu.addEventListener ('click', () => {        
        navMenu.style.display === 'none' ||navMenu.style.display === '' ?  navMenu.style.display = 'block' :  navMenu.style.display = 'none';       
    })
    
}
app()


