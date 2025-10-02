
document.addEventListener('DOMContentLoaded', function() {
    
    
    const mainContainer = document.querySelector('.container');

    
    setTimeout(() => {
        if (mainContainer) {
            mainContainer.classList.add('visible');
        }
    }, 100); 

});