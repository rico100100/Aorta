// Aplicación REBOA y ECMO - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, #hero');

    // Variables de estado
    let isMenuOpen = false;
    let lastScrollTop = 0;

    // Inicialización
    init();

    function init() {
        setupNavigation();
        setupScrollEffects();
        setupMobileMenu();
        setupSmoothScrolling();
        highlightActiveSection();
    }

    // Configuración de navegación
    function setupNavigation() {
        // Agregar event listeners a los enlaces de navegación
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Cerrar menú móvil si está abierto
                    if (isMenuOpen) {
                        toggleMobileMenu();
                    }
                    
                    // Scroll suave a la sección
                    scrollToSection(targetSection);
                    
                    // Actualizar estado activo
                    updateActiveLink(this);
                }
            });
        });
    }

    // Scroll suave a sección específica
    function scrollToSection(targetSection) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Actualizar enlace activo
    function updateActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Efectos de scroll
    function setupScrollEffects() {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Efecto de navbar al hacer scroll
            handleNavbarScroll(scrollTop);
            
            // Destacar sección activa
            highlightActiveSection();
            
            // Animaciones de elementos al entrar en viewport
            handleScrollAnimations();
            
            lastScrollTop = scrollTop;
        });
    }

    // Manejo del navbar al hacer scroll
    function handleNavbarScroll(scrollTop) {
        if (scrollTop > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }

        // Auto-hide navbar en móvil al hacer scroll hacia abajo
        if (window.innerWidth <= 768) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
    }

    // Destacar sección activa en navegación
    function highlightActiveSection() {
        const scrollTop = window.pageYOffset;
        const navbarHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Configuración del menú móvil
    function setupMobileMenu() {
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !navbar.contains(e.target)) {
                toggleMobileMenu();
            }
        });

        // Cerrar menú al redimensionar ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMobileMenu();
            }
        });
    }

    // Toggle del menú móvil
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (navMenu) {
            navMenu.classList.toggle('active', isMenuOpen);
        }
        
        if (navToggle) {
            navToggle.classList.toggle('active', isMenuOpen);
        }

        // Prevenir scroll del body cuando el menú está abierto
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    // Scroll suave para todos los enlaces internos
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement && targetId !== '#') {
                    e.preventDefault();
                    scrollToSection(targetElement);
                }
            });
        });
    }

    // Animaciones al hacer scroll
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.step-card, .zone-card, .device-card, .stat-card');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Verificar si elemento está en viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Funcionalidad específica para tablas comparativas
    function setupComparativeTables() {
        const tables = document.querySelectorAll('.comparison-table');
        
        tables.forEach(table => {
            // Hacer las tablas más interactivas en móvil
            if (window.innerWidth <= 768) {
                makeTableResponsive(table);
            }
        });
    }

    // Hacer tabla responsive en móvil
    function makeTableResponsive(table) {
        const headers = Array.from(table.querySelectorAll('th'));
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        
        rows.forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            cells.forEach((cell, index) => {
                if (headers[index]) {
                    cell.setAttribute('data-label', headers[index].textContent);
                }
            });
        });
    }

    // Funcionalidad para cards interactivas
    function setupInteractiveCards() {
        const cards = document.querySelectorAll('.step-card, .zone-card, .device-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            });
        });
    }

    // Funcionalidad para botones de acción
    function setupActionButtons() {
        const actionButtons = document.querySelectorAll('.btn');
        
        actionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Agregar efecto de ripple
                createRippleEffect(this, e);
                
                // Si es un enlace externo, abrir en nueva pestaña
                if (this.getAttribute('target') === '_blank') {
                    // Ya está configurado en el HTML
                    return;
                }
            });
        });
    }

    // Crear efecto ripple en botones
    function createRippleEffect(button, event) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Funcionalidad para tooltips informativos
    function setupTooltips() {
        const elements = document.querySelectorAll('[data-tooltip]');
        
        elements.forEach(element => {
            element.addEventListener('mouseenter', showTooltip);
            element.addEventListener('mouseleave', hideTooltip);
        });
    }

    // Mostrar tooltip
    function showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        setTimeout(() => {
            tooltip.classList.add('show');
        }, 10);
    }

    // Ocultar tooltip
    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    // Funcionalidad de búsqueda (si se necesita en el futuro)
    function setupSearch() {
        const searchInput = document.querySelector('#search-input');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                performSearch(searchTerm);
            });
        }
    }

    // Realizar búsqueda en contenido
    function performSearch(term) {
        const searchableElements = document.querySelectorAll('.card, .step-card, .zone-card');
        
        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(term)) {
                element.style.display = 'block';
                element.style.opacity = '1';
            } else {
                element.style.opacity = term ? '0.3' : '1';
            }
        });
    }

    // Lazy loading para imágenes (si las hubiera)
    function setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Funcionalidad para impresión
    function setupPrintFunctionality() {
        const printButton = document.querySelector('#print-button');
        
        if (printButton) {
            printButton.addEventListener('click', function() {
                window.print();
            });
        }
    }

    // Manejo de errores para enlaces externos
    function setupExternalLinks() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Agregar rel="noopener noreferrer" para seguridad
                this.rel = 'noopener noreferrer';
                
                // Opcional: tracking de clicks externos
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'external_link',
                        event_label: this.href
                    });
                }
            });
        });
    }

    // Performance: throttle function para eventos de scroll
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Aplicar throttling a eventos de scroll
    const throttledScrollHandler = throttle(function() {
        highlightActiveSection();
        handleScrollAnimations();
    }, 100);

    // Reemplazar el listener de scroll original
    window.removeEventListener('scroll', setupScrollEffects);
    window.addEventListener('scroll', throttledScrollHandler);

    // Inicializar funcionalidades adicionales
    setupComparativeTables();
    setupInteractiveCards();
    setupActionButtons();
    setupTooltips();
    setupSearch();
    setupLazyLoading();
    setupPrintFunctionality();
    setupExternalLinks();

    // Manejo de redimensión de ventana
    window.addEventListener('resize', throttle(function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Reconfigurar tablas responsive
        setupComparativeTables();
    }, 250));

    // Manejo del estado de carga
    window.addEventListener('load', function() {
        // Ocultar loader si existe
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }

        // Inicializar animaciones iniciales
        const heroElements = document.querySelectorAll('.hero h1, .hero-subtitle, .stat-card');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Accesibilidad: manejo de teclado
    document.addEventListener('keydown', function(e) {
        // Cerrar menú móvil con Escape
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Navegación con teclado
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Quitar indicador de navegación por teclado al usar mouse
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Funcionalidad para modo oscuro (opcional)
    function setupDarkMode() {
        const darkModeToggle = document.querySelector('#dark-mode-toggle');
        
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('darkMode', isDark);
            });
        }

        // Cargar preferencia guardada
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    // Inicializar modo oscuro
    setupDarkMode();

    // Registro de Service Worker para PWA (opcional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Analytics de uso (opcional)
    function trackUserInteraction(action, element) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'user_interaction',
                event_label: element
            });
        }
    }

    // Tracking de secciones visitadas
    function trackSectionView(sectionId) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'section_view', {
                event_category: 'content',
                event_label: sectionId
            });
        }
    }

    // Funcionalidad de compartir (si se necesita)
    function setupSocialSharing() {
        const shareButtons = document.querySelectorAll('[data-share]');
        
        shareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.getAttribute('data-share');
                const url = window.location.href;
                const title = document.title;
                
                let shareUrl = '';
                
                switch(platform) {
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                        break;
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                        break;
                    case 'linkedin':
                        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                        break;
                }
                
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });
    }

    setupSocialSharing();

    console.log('Aplicación REBOA y ECMO inicializada correctamente');
});