// Datos del menú de navegación
const menuData = {
    titulo: "Indice Aorta y Temas relacionados",
    enlaces: [
        {texto: "Embriología del Sistema Vascular", url: "embriologia-del-sistema-vascular"},
        {texto: "Comparación fármacos hipolipemiantes", url: "comparacion-farmacos-hipolipemiantes"},
        {texto: "2025 ESVS reparación Aorta ascendente", url: "2025-esvs-reparacion-ao-asc"},
        {texto: "2025 ESVS trauma vascular", url: "2025-esvs-trauma-vascular"},
        {texto: "2024 ESVS Manejo Aneurismas Aorto-Ilíaco", url: "2024-esvs-manejo-aneurismas-aorto-iliacos"},
        {texto: "World Society of the Abdominal Compartment Syndrome (WSACS) 2013", url: "wsacs2013"},
        {texto: "Análisis Exhaustivo de la Infección de Endoprótesis Aórtica Abdominal", url: "analisis-exhaustivo-infeccion-endoprotesis"},
        {texto: "2020 ESVS INFECCION PROTESIS - RESUMEN DE RECOMENDACIONES", url: "2020-esvs-infeccion-protesis"},
        {texto: "Sistemas de Clasificación de Infección de Prótesis Vasculares", url: "sistemas-clasificacion-infeccion-protesis"},
        {texto: "Técnicas remoción endoprótesis infrarrenal abierto", url: "tecnicas-remocion-endoprotesis"},
        {texto: "Vasculitis y enfermedades vasculares 09-2025", url: "vasculitis-aorta"},
        {texto: "Vasculitis y Vasculopatías Asociadas", url: "vasculitis"},
        {texto: "Trastornos del Tejido Conectivo Asociados a Aneurismas y Síndrome Aórtico Agudo", url: "trastornos-tejido-conectivo-aneurismas"},
        {texto: "Trastornos del Tejido Conectivo con Compromiso Vascular", url: "trastornos-tejido-conectivo-vascular"},
        {texto: "Tumores vasculares abdominales", url: "tumores"},
        {texto: "Calculadoras de Riesgo Vascular", url: "calculadora-riesgo-vascular"},
        {texto: "Score de Fragilidad", url: "score-fragilidad"},
        {texto: "Preguntas", url: "preguntas"}
    ]
};

/**
 * Función para mostrar modal de demostración
 */
function showDemoModal(title, url) {
    // Crear modal si no existe
    let modal = document.getElementById('demoModal');
    if (!modal) {
        modal = createDemoModal();
        document.body.appendChild(modal);
    }
    
    // Actualizar contenido del modal
    const modalTitle = modal.querySelector('.modal-title');
    const modalUrl = modal.querySelector('.modal-url');
    
    modalTitle.textContent = title;
    modalUrl.textContent = url;
    
    // Mostrar modal
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    
    // Enfocar el botón de cerrar
    const closeButton = modal.querySelector('.modal-close');
    setTimeout(() => closeButton.focus(), 100);
}

/**
 * Función para crear el modal de demostración
 */
function createDemoModal() {
    const modal = document.createElement('div');
    modal.id = 'demoModal';
    modal.className = 'modal hidden';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-describedby', 'modal-description');
    
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title" class="modal-title"></h2>
                <button class="modal-close" type="button" aria-label="Cerrar modal">×</button>
            </div>
            <div class="modal-body">
                <p id="modal-description" class="modal-description">
                    ✅ <strong>Enlace funcional demostrado</strong>
                </p>
                <p class="modal-info">
                    Este enlace navegaría a: <code class="modal-url"></code>
                </p>
                <p class="modal-note">
                    <em>En un entorno de producción, este enlace abriría el contenido médico correspondiente en una nueva pestaña.</em>
                </p>
            </div>
            <div class="modal-footer">
                <button class="btn btn--primary modal-ok" type="button">Entendido</button>
            </div>
        </div>
    `;
    
    // Agregar event listeners
    const closeButton = modal.querySelector('.modal-close');
    const okButton = modal.querySelector('.modal-ok');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeButton, okButton, overlay].forEach(element => {
        element.addEventListener('click', () => hideDemoModal());
    });
    
    // Cerrar con Escape
    modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideDemoModal();
        }
    });
    
    return modal;
}

/**
 * Función para ocultar el modal
 */
function hideDemoModal() {
    const modal = document.getElementById('demoModal');
    if (modal) {
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    }
}

/**
 * Función para crear un elemento de menú con numeración
 * @param {Object} enlace - Objeto con texto y url del enlace
 * @param {number} index - Índice del elemento (para numeración)
 * @returns {HTMLElement} - Elemento li del menú
 */
function createMenuItem(enlace, index) {
    // Crear el elemento li
    const listItem = document.createElement('li');
    listItem.className = 'menu-item';
    
    // Crear el elemento anchor
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'menu-link';
    link.setAttribute('data-url', enlace.url);
    link.setAttribute('data-title', enlace.texto);
    
    // Agregar atributos de accesibilidad
    link.setAttribute('aria-describedby', `item-${index + 1}-description`);
    
    // Crear el número del item
    const itemNumber = document.createElement('span');
    itemNumber.className = 'item-number';
    itemNumber.textContent = (index + 1).toString();
    itemNumber.setAttribute('aria-label', `Elemento número ${index + 1}`);
    
    // Crear el texto del enlace
    const linkText = document.createElement('span');
    linkText.className = 'link-text';
    linkText.textContent = enlace.texto;
    linkText.id = `item-${index + 1}-description`;
    
    // Ensamblar el enlace
    link.appendChild(itemNumber);
    link.appendChild(linkText);
    listItem.appendChild(link);
    
    return listItem;
}

/**
 * Función para generar todo el menú de navegación
 */
function generateMenu() {
    const menuList = document.getElementById('menuList');
    
    if (!menuList) {
        console.error('No se encontró el elemento del menú');
        return;
    }
    
    // Limpiar el menú existente
    menuList.innerHTML = '';
    
    // Crear un fragmento de documento para mejorar el rendimiento
    const fragment = document.createDocumentFragment();
    
    // Generar cada elemento del menú
    menuData.enlaces.forEach((enlace, index) => {
        const menuItem = createMenuItem(enlace, index);
        fragment.appendChild(menuItem);
    });
    
    // Agregar todos los elementos al DOM de una vez
    menuList.appendChild(fragment);
    
    // Agregar información de accesibilidad al menú
    menuList.setAttribute('role', 'list');
    menuList.setAttribute('aria-label', `Menú de navegación con ${menuData.enlaces.length} elementos`);
}

/**
 * Función para manejar clics en los enlaces del menú
 */
function handleMenuClick(event) {
    // Verificar si el clic fue en un enlace del menú
    const link = event.target.closest('.menu-link');
    
    if (!link) return;
    
    // Prevenir navegación por defecto
    event.preventDefault();
    
    // Obtener datos del enlace
    const title = link.getAttribute('data-title');
    const url = link.getAttribute('data-url');
    
    // Agregar clase de estado activo temporalmente
    link.classList.add('menu-link--active');
    
    // Mostrar modal de demostración
    showDemoModal(title, url);
    
    // Remover la clase después de un breve momento
    setTimeout(() => {
        link.classList.remove('menu-link--active');
    }, 300);
}

/**
 * Función para inicializar la aplicación
 */
function initializeApp() {
    // Generar el menú
    generateMenu();
    
    // Agregar event listeners
    const menuContainer = document.querySelector('.navigation-menu');
    if (menuContainer) {
        menuContainer.addEventListener('click', handleMenuClick);
    }
    
    // Agregar navegación por teclado mejorada
    setupKeyboardNavigation();
    
    // Agregar indicador de carga completada
    document.body.setAttribute('data-app-loaded', 'true');
    
    console.log(`Menú inicializado con ${menuData.enlaces.length} elementos`);
}

/**
 * Función para configurar navegación por teclado
 */
function setupKeyboardNavigation() {
    const menuList = document.getElementById('menuList');
    
    if (!menuList) return;
    
    menuList.addEventListener('keydown', (event) => {
        const currentLink = event.target.closest('.menu-link');
        
        if (!currentLink) return;
        
        const allLinks = Array.from(menuList.querySelectorAll('.menu-link'));
        const currentIndex = allLinks.indexOf(currentLink);
        
        let targetIndex = currentIndex;
        
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                targetIndex = (currentIndex + 1) % allLinks.length;
                break;
                
            case 'ArrowUp':
                event.preventDefault();
                targetIndex = currentIndex > 0 ? currentIndex - 1 : allLinks.length - 1;
                break;
                
            case 'Home':
                event.preventDefault();
                targetIndex = 0;
                break;
                
            case 'End':
                event.preventDefault();
                targetIndex = allLinks.length - 1;
                break;
                
            case 'Enter':
            case ' ':
                event.preventDefault();
                currentLink.click();
                break;
                
            default:
                return;
        }
        
        if (event.key !== 'Enter' && event.key !== ' ') {
            allLinks[targetIndex].focus();
        }
    });
}

/**
 * Función para manejar errores
 */
function handleError(error) {
    console.error('Error en la aplicación:', error);
    
    // Mostrar mensaje de error al usuario si es necesario
    const menuList = document.getElementById('menuList');
    if (menuList && menuList.children.length === 0) {
        menuList.innerHTML = `
            <li style="text-align: center; color: rgba(255,255,255,0.8); padding: 2rem;">
                <p>Error al cargar el menú. Por favor, recarga la página.</p>
            </li>
        `;
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeApp();
    } catch (error) {
        handleError(error);
    }
});

// Manejar errores no capturados
window.addEventListener('error', (event) => {
    console.error('Error no capturado:', event.error);
});

// Exportar funciones para testing (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateMenu,
        createMenuItem,
        menuData
    };
}