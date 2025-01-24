const pages = document.querySelectorAll('.page');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
next.addEventListener('click', () => {
        for(let i=0; i<pages.length; i++){
            if('active' === pages[i].classList[1] && i!=pages.length-1) {
                pages[i].classList.remove('active');
                pages[i+1].classList.add('active');
                break;
            }
        }
})
prev.addEventListener('click', () => {
    for(let i=0; i<pages.length; i++){
        if('active' === pages[i].classList[1] && i!=0) {
            pages[i].classList.remove('active');
            pages[i-1].classList.add('active');
            break;
        }
    }
})
pages.forEach(child => {
    child.addEventListener('click',()=>{
        pages.forEach(element => {
            element.classList.remove('active');
        })
        child.classList.add('active');
    });
});