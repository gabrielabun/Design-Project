//this is for my fade in text as you scroll down on all my pages//
const fadeobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeupanim')
        }
    })
})


const fadeElements = document.querySelectorAll('.fadeup');
fadeElements.forEach((el) => fadeobserver.observe(el)); 