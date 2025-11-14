document.addEventListener('DOMContentLoaded', function() {
    
    // Lógica de Animação de Entrada 
    const mainContainer = document.querySelector('.container');
    
    setTimeout(() => {
        if (mainContainer) {
            mainContainer.classList.add('visible');
        }
    }, 100); 


    // --- LÓGICA DO DROPDOWN ---
    const whatsappToggle = document.getElementById('whatsapp-toggle');
    const whatsappOptions = document.getElementById('whatsapp-options');

    if (whatsappToggle && whatsappOptions) {
        whatsappToggle.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            
            whatsappOptions.classList.toggle('show');
            whatsappToggle.classList.toggle('active');

            e.stopPropagation();

            
            if (whatsappOptions.classList.contains('show')) {
                document.addEventListener('click', closeDropdown);
            } else {
                document.removeEventListener('click', closeDropdown);
            }
        });

        
        function closeDropdown(e) {
            if (!whatsappOptions.contains(e.target) && e.target !== whatsappToggle) {
                whatsappOptions.classList.remove('show');
                whatsappToggle.classList.remove('active');
                document.removeEventListener('click', closeDropdown);
            }
        }
    }
});