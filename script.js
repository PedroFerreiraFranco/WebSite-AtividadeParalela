   // Captura o evento de submit do formulário
   document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Chama a função para enviar a mensagem
    sendMessage();
});

// Função para enviar mensagem pelo WhatsApp
function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = '5535998085210'; // Novo número de WhatsApp
    const whatsappMessage = encodeURIComponent(`Olá, meu nome é ${name}. Mensagem: ${message}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Abre a URL do WhatsApp
    window.open(whatsappURL, '_blank');

    // Limpa os campos do formulário
    document.getElementById('contactForm').reset();
}