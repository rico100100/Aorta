// Datos del menú de navegación con URLs exactas
const menuData = {
    titulo: "Indice Aorta y Temas relacionados",
    enlaces: [
        {texto: "Embriología del Sistema Vascular", url: "embriologia-del-sistema-vascular/index.html"},
        {texto: "Comparación fármacos hipolipemiantes", url: "comparacion-farmacos-hipolipemiantes/index.html"},
        {texto: "2025 ESVS reparación Aorta ascendente", url: "2025-esvs-reparacion-ao-asc/index.html"},
        {texto: "2025 ESVS trauma vascular", url: "2025-esvs-trauma-vascular/index.html"},
        {texto: "2024 ESVS Manejo Aneurismas Aorto-Ilíaco", url: "2024 ESVS Manejo Aneurismas Aorto-Ilíacos/index.html"},
        {texto: "World Society of the Abdominal Compartment Syndrome (WSACS) 2013", url: "WSACS2013/index.html"},
        {texto: "Análisis Exhaustivo de la Infección de Endoprótesis Aórtica Abdominal", url: "analisis-exhaustivo-de-la-infeccion-de-endoprotesis-aortica-abdominal/index.html"},
        {texto: "2020 ESVS INFECCION PROTESIS - RESUMEN DE RECOMENDACIONES", url: "2020-esvs-infeccion-protesis-resumen-de-recomendaciones/index.html"},
        {texto: "Sistemas de Clasificación de Infección de Prótesis Vasculares", url: "sistemas-de-clasificacion-de-infeccion-de-protesis-vasculares/index.html"},
        {texto: "Técnicas remoción endoprótesis infrarrenal abierto", url: "tecnicas-remocion-endoprotesis-infrarrenal-abierto/index.html"},
        {texto: "Vasculitis y enfermedades vasculares 09-2025", url: "vasculitis y aorta/index.html"},
        {texto: "Vasculitis y Vasculopatías Asociadas", url: "vasculitis/index.html"},
        {texto: "Trastornos del Tejido Conectivo Asociados a Aneurismas y Síndrome Aórtico Agudo", url: "trastornos-del-tejido-conectivo-asociados-a-aneurismas-y-sindrome-aortico-agudo/index.html"},
        {texto: "Trastornos del Tejido Conectivo con Compromiso Vascular", url: "trastornos-del-tejido-conectivo-con-compromiso-vascular/index.html"},
        {texto: "Tumores vasculares abdominales", url: "tumores/index.html"},
        {texto: "Calculadoras de Riesgo Vascular", url: "calculadora_riesgo_vasc/index.html"},
        {texto: "Score de Fragilidad", url: "scorefragil/index.html"},
        {texto: "Preguntas", url: "preguntas1/index.html"}
    ]
};

/**
 * Función para mostrar modal de confirmación de navegación
 */
function showNavigationModal(title, url) {
    // Crear modal si no existe
    let modal = document.getElementById('navigationModal');
    if (!modal) {
        modal = createNavigationModal();
        document.body.appendChild(modal);
    }
    
    // Actualizar contenido del modal
    const modalTitle = modal.querySelector('.modal-title');
    const modalUrl = modal.querySelector('.modal-url');
    const confirmButton = modal.querySelector('.modal-confirm');
    
    modalTitle.textContent = title;
    modalUrl.textContent = url;
    
    // Configurar el botón de confirmación para navegar a la URL
    confirmButton.onclick = () => {
        hideNavigationModal();
        // Abrir en nueva pestaña
        window.open(url, '_blank');
    };
    
    // Mostrar modal
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    
    // Enfocar el botón de confirmación
    setTimeout(() => confirmButton.focus(), 100);
}

/**
 * Función para crear el modal de navegación
 */
function createNavigationModal() {
    const modal = document.createElement('div');
    modal.id = 'navigationModal';
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
                    🔗 <strong>Navegando a contenido médico</strong>
                </p>
                <p class="modal-info">
                    Se abrirá en una nueva pestaña: <code class="modal-url"></code>
                </p>
                <p class="modal-note">
                    <em>Está a punto de acceder al contenido médico especializado correspondiente.</em>
                </p>
            </div>
            <div class="modal-footer">
                <button class="btn btn--outline modal-cancel" type="button">Cancelar</button>
                <button class="btn btn--primary modal-confirm" type="button">Continuar</button>
            </div>
        </div>
    `;
    
    // Agregar event listeners
    const closeButton = modal.querySelector('.modal-close');
    const cancelButton = modal.querySelector('.modal-cancel');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeButton, cancelButton, overlay].forEach(element => {
        element.addEventListener('click', () => hideNavigationModal());
    });
    
    // Cerrar con Escape
    modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideNavigationModal();
        }
    });
    
    return modal;
}

/**
 * Función para ocultar el modal
 */
function hideNavigationModal() {
    const modal = document.getElementById('navigationModal');
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
    link.href = enlace.url;
    link.className = 'menu-link';
    link.setAttribute('data-url', enlace.url);
    link.setAttribute('data-title', enlace.texto);
    link.setAttribute('target', '_blank');
    
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
    
    // Prevenir navegación por defecto para mostrar confirmación
    event.preventDefault();
    
    // Obtener datos del enlace
    const title = link.getAttribute('data-title');
    const url = link.getAttribute('data-url');
    
    // Agregar clase de estado activo temporalmente
    link.classList.add('menu-link--active');
    
    // Mostrar modal de confirmación de navegación
    showNavigationModal(title, url);
    
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
            <li style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">
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