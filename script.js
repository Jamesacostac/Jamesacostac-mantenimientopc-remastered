// Simulación de chat con IA
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatButton = document.querySelector('.chat-input button');
    
    // Respuestas predefinidas del chatbot (simulando IA)
    const botResponses = [
        "Para ese problema, te recomiendo reiniciar el equipo primero. ¿Ya lo intentaste?",
        "Parece que podría ser un problema de software. ¿Podrías describir con más detalle el mensaje de error?",
        "Ese es un problema común. Te recomiendo ver nuestro tutorial de 'Limpieza interna de laptop' en la sección de videos.",
        "Para ese tipo de problema, es mejor contactar con uno de nuestros técnicos especializados. ¿Quieres que te pongamos en contacto?",
        "Podría tratarse de un problema de sobrecalentamiento. ¿Has notado si el ventilador hace ruido extraño?",
        "Te sugiero actualizar los controladores de tu dispositivo. ¿Necesitas ayuda con el proceso?",
        "Ese problema a veces se soluciona liberando espacio en el disco duro. ¿Cuánto espacio libre tienes actualmente?"
    ];
    
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse() {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        return botResponses[randomIndex];
    }
    
    chatButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simular tiempo de respuesta de la IA
            setTimeout(function() {
                addMessage(getBotResponse(), false);
            }, 1000);
        }
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            chatButton.click();
        }
    });

    // Funcionalidad para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showFormMessage('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, ingresa una dirección de correo electrónico válida.', 'error');
            return;
        }
        
        // Simulación de envío exitoso
        showFormMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
        contactForm.reset();
        
        // Aquí normalmente se enviarían los datos a un servidor
        console.log('Datos del formulario:');
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Servicio:', document.getElementById('service').value);
        console.log('Mensaje:', message);
    });
    
    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(function() {
            formMessage.style.opacity = '0';
            setTimeout(function() {
                formMessage.className = 'form-message';
                formMessage.style.opacity = '1';
            }, 1000);
        }, 5000);
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Función para desplazarse a las secciones de video
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
});
