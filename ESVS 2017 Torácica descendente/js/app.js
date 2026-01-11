/**
 * ESVS 2017 App Logic
 */

// Abbreviation Data (Parsed and Translated)
const abbreviations = [
    { code: "AAA", meaning: "Aneurisma de Aorta Abdominal" },
    { code: "AAS", meaning: "Síndromes Aórticos Agudos" },
    { code: "AAST", meaning: "Asociación Americana para la Cirugía de Trauma" },
    { code: "AD", meaning: "Disección Aórtica" },
    { code: "ATBAD", meaning: "Disección Aórtica Tipo B Aguda" },
    { code: "CA", meaning: "Arteria Celíaca" },
    { code: "CAD", meaning: "Enfermedad de Arteria Coronaria" },
    { code: "CCA", meaning: "Arteria Carótida Común" },
    { code: "COPD", meaning: "Enfermedad Pulmonar Obstructiva Crónica (EPOC)" },
    { code: "CSF", meaning: "Líquido Cefalorraquídeo" },
    { code: "CT", meaning: "Tomografía Computarizada" },
    { code: "CTA", meaning: "Angiografía por Tomografía Computarizada" },
    { code: "CTBAD", meaning: "Disección Aórtica Tipo B Crónica" },
    { code: "DSA", meaning: "Angiografía por Sustracción Digital" },
    { code: "DTA", meaning: "Aorta Torácica Descendente" },
    { code: "DTAA", meaning: "Aneurisma de Aorta Torácica Descendente" },
    { code: "ECG", meaning: "Electrocardiograma" },
    { code: "EDS", meaning: "Síndrome de Ehlers-Danlos" },
    { code: "EJVES", meaning: "European Journal of Vascular and Endovascular Surgery" },
    { code: "ESR", meaning: "Velocidad de Sedimentación Globular" },
    { code: "ESVS", meaning: "Sociedad Europea de Cirugía Vascular" },
    { code: "FL", meaning: "Falsa Luz" },
    { code: "GCA", meaning: "Arteritis de Células Gigantes" },
    { code: "IMH", meaning: "Hematoma Intramural" },
    { code: "IRAD", meaning: "Registro Internacional de Disección Aórtica" },
    { code: "IVUS", meaning: "Ultrasonido Intravascular" },
    { code: "LDS", meaning: "Síndrome de Loeys-Dietz" },
    { code: "LHB", meaning: "Bypass de Corazón Izquierdo" },
    { code: "LSA", meaning: "Arteria Subclavia Izquierda" },
    { code: "MAP", meaning: "Presión Arterial Media" },
    { code: "MEP", meaning: "Potenciales Evocados Motores" },
    { code: "MFS", meaning: "Síndrome de Marfan" },
    { code: "MRA", meaning: "Angiografía por Resonancia Magnética" },
    { code: "MRI", meaning: "Imagen por Resonancia Magnética" },
    { code: "NSF", meaning: "Fibrosis Sistémica Nefrogénica" },
    { code: "OR", meaning: "Reparación Abierta" },
    { code: "PAU", meaning: "Úlcera Aórtica Penetrante" },
    { code: "PET", meaning: "Tomografía por Emisión de Positrones" },
    { code: "PMR", meaning: "Polimialgia Reumática" },
    { code: "RCT", meaning: "Ensayo Clínico Aleatorizado" },
    { code: "SCI", meaning: "Isquemia de la Médula Espinal" },
    { code: "SMA", meaning: "Arteria Mesentérica Superior" },
    { code: "SSEP", meaning: "Potenciales Evocados Somatosensoriales" },
    { code: "TA", meaning: "Arteritis de Takayasu" },
    { code: "TAAA", meaning: "Aneurisma de Aorta Toracoabdominal" },
    { code: "TAI", meaning: "Lesión Aórtica Torácica" },
    { code: "TBAD", meaning: "Disección Aórtica Tipo B" },
    { code: "TEVAR", meaning: "Reparación Endovascular Torácica" },
    { code: "TL", meaning: "Luz Verdadera" },
    { code: "TOE", meaning: "Ecocardiografía Transesofágica" },
    { code: "TS", meaning: "Síndrome de Turner" },
    { code: "TTE", meaning: "Ecocardiografía Transtorácica" },
    { code: "WC", meaning: "Comité de Redacción" }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    initAbbreviationSearch();
    initSettingsPanel();
    initSidebar();
    initFilters();
    // loadContentPlaceholder(); // Placeholder content replaced by static HTML
});

/* =========================================
   Abbreviation Search Logic
   ========================================= */
function initAbbreviationSearch() {
    const searchInput = document.getElementById('abbrev-search');
    const resultWindow = document.getElementById('abbreviation-window');
    const resultContent = document.getElementById('abbrev-content');
    const closeBtn = document.getElementById('close-abbrev');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toUpperCase().trim();

        if (query.length === 0) {
            resultWindow.classList.add('hidden');
            return;
        }

        const match = abbreviations.find(item => item.code === query || item.code.startsWith(query));

        if (match) {
            resultContent.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-3xl font-bold text-esvs-blue dark:text-blue-400 mb-1">${match.code}</span>
                    <span class="text-base leading-snug">${match.meaning}</span>
                </div>
            `;
            resultWindow.classList.remove('hidden');
        } else {
            // Optional: Show "No found" or keep hidden to avoid annoyance
            if (query.length > 1) {
                resultContent.innerHTML = `<span class="text-gray-500 italic">No encontrado</span>`;
                resultWindow.classList.remove('hidden');
            } else {
                resultWindow.classList.add('hidden');
            }
        }
    });

    closeBtn.addEventListener('click', () => {
        resultWindow.classList.add('hidden');
        searchInput.value = '';
    });
}

/* =========================================
   Settings Panel (Theme & Font)
   ========================================= */
function initSettingsPanel() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const fontDisplay = document.getElementById('font-size-display');
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.getElementById('body-element');

    // Toggle Panel
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsPanel.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
            settingsPanel.classList.add('hidden');
        }
    });

    // Font Size Logic
    let currentZoom = 100;

    const updateZoom = () => {
        body.style.fontSize = `${currentZoom}%`; // Using % of base size (16px or 18px mobile)
        fontDisplay.textContent = `${currentZoom}%`;
    };

    fontIncrease.addEventListener('click', () => {
        if (currentZoom < 150) {
            currentZoom += 10;
            updateZoom();
        }
    });

    fontDecrease.addEventListener('click', () => {
        if (currentZoom > 70) {
            currentZoom -= 10;
            updateZoom();
        }
    });

    // Theme Logic
    // Themes map to extensive Tailwind classes or CSS variables if strictly using Tailwind darkMode 'class'.
    // Since we need custom colors (Red, Blue, Green, Purple), we'll add specific classes to body
    // and use CSS variables or Tailwind's arbitrary values for primary colors.
    // For simplicity with Tailwind, we'll implement Dark Mode standard, and for colored themes we might tint the background.

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;

            // Reset
            body.classList.remove('dark');
            body.className = body.className.replace(/theme-\w+/g, ''); // Remove old theme classes

            if (theme === 'dark') {
                body.classList.add('dark');
            } else if (theme !== 'light') {
                // For colored themes, we can add a class that we can hook into with CSS
                // But for now, let's keep it simple: Pure Light or Dark is professional.
                // The user asked for "claro, oscuro, rojo y azul, verde, morado".
                // We will implement a data-attribute on body to handle refined styling via CSS or specialized Tailwind classes.
                body.setAttribute('data-theme', theme);
                applyColoredTheme(theme);
            } else {
                body.removeAttribute('data-theme');
                resetColoredTheme();
            }
        });
    });
}

function applyColoredTheme(theme) {
    const body = document.getElementById('body-element');
    // Remove existing bg colors
    body.classList.remove('bg-gray-50', 'bg-blue-50', 'bg-red-50', 'bg-green-50', 'bg-purple-50');

    switch (theme) {
        case 'blue': body.classList.add('bg-blue-50'); break;
        case 'red': body.classList.add('bg-red-50'); break;
        case 'green': body.classList.add('bg-green-50'); break;
        case 'purple': body.classList.add('bg-purple-50'); break;
        default: body.classList.add('bg-gray-50');
    }
}

function resetColoredTheme() {
    const body = document.getElementById('body-element');
    body.classList.remove('bg-blue-50', 'bg-red-50', 'bg-green-50', 'bg-purple-50');
    body.classList.add('bg-gray-50');
}


/* =========================================
   Sidebar & Navigation
   ========================================= */
function initSidebar() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.getElementById('chapter-nav');

    const toggleMenu = () => {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    };

    mobileBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Chapters Structure
    const chapters = [
        { id: "capitulo-1", title: "1. Introducción" },
        { id: "capitulo-2", title: "2. Aspectos Generales" },
        { id: "capitulo-3", title: "3. Síndrome Aórtico Agudo" },
        { id: "capitulo-4", title: "4. Aneurismas (DTAA)" },
        { id: "capitulo-5", title: "5. Aneurismas Toracoabdominales" },
        { id: "capitulo-6", title: "6. Enfermedades Inflamatorias" },
        { id: "capitulo-7", title: "7. Coartación" },
        { id: "capitulo-8", title: "8. Enfermedades Genéticas" },
        { id: "capitulo-9", title: "9. Tumores" },
        { id: "capitulo-10", title: "10. Seguimiento" },
        { id: "comparativa", title: "Comparativa ESVS vs SVS" },
        { id: "capitulo-11", title: "11. Protección Renal (SVS)" },
        { id: "capitulo-12", title: "12. Técnicas de Acceso (SVS)" }
    ];

    chapters.forEach(chap => {
        const a = document.createElement('a');
        a.href = `#${chap.id}`;
        a.className = "block px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors truncate";
        a.textContent = chap.title;
        a.addEventListener('click', () => {
            // On mobile, close menu after click
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
        navLinks.appendChild(a);
    });
}

/* =========================================
   Filter Recommendation Logic
   ========================================= */
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn, .filter-btn-mobile');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            const allCards = document.querySelectorAll('.recommendation-card');

            // Visual Active State
            buttons.forEach(b => {
                if (b.dataset.filter === filter) {
                    b.classList.add('ring-2', 'ring-offset-2', 'ring-blue-500');
                } else {
                    b.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-500');
                }
            });

            allCards.forEach(card => {
                const cardClass = card.dataset.class; // I, IIa, IIb, III

                if (filter === 'all') {
                    card.style.display = 'block';
                    // Re-animate fade in
                    card.classList.add('animate-fadeIn');
                } else {
                    // Check partial match (e.g. filter "IIa" matches data-class="IIa")
                    // If filter is "II", it might capture both IIa and IIb if we wanted, but usage is specific.
                    if (cardClass === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

/* =========================================
   Placeholder Content Loader
   ========================================= */
function loadContentPlaceholder() {
    const container = document.getElementById('injected-content');
    // Ideally this will be replaced by the actual parsed content
    container.innerHTML = `
        <div id="intro" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introducción</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                La Sociedad Europea de Cirugía Vascular (ESVS) designó al Comité de Redacción (WC) de Aorta Torácica Descendente (DTA) para producir el presente documento de guía de práctica clínica...
            </p>
            
            <div class="recommendation-card my-6 p-4 rounded-lg shadow-lg border-l-4 border-recommendation-i-border bg-recommendation-i dark:bg-green-900 dark:border-green-500" data-class="I">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase text-green-800 dark:text-green-200 bg-green-200 dark:bg-green-800 px-2 py-1 rounded">Clase I</span>
                    <span class="text-xs font-bold text-gray-500 dark:text-gray-400">Nivel B</span>
                </div>
                <p class="font-semibold text-gray-800 dark:text-gray-100">
                    Se recomienda el abandono del tabaco para todos los pacientes con patología de la aorta torácica descendente.
                </p>
            </div>
            
             <div class="recommendation-card my-6 p-4 rounded-lg shadow-lg border-l-4 border-recommendation-iib-border bg-recommendation-iib dark:bg-orange-900 dark:border-orange-500" data-class="IIb">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase text-orange-800 dark:text-orange-200 bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded">Clase IIb</span>
                    <span class="text-xs font-bold text-gray-500 dark:text-gray-400">Nivel C</span>
                </div>
                <p class="font-semibold text-gray-800 dark:text-gray-100">
                    Se puede considerar la reparación endovascular para pacientes seleccionados con un riesgo quirúrgico alto.
                </p>
            </div>
        </div>
        
        <div id="general" class="mb-12 scroll-mt-24">
             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Aspectos Generales</h2>
             <p class="text-gray-700 dark:text-gray-300 mb-4">
                La aorta torácica descendente se origina en el istmo...
             </p>
             <!-- More content -->
        </div>
    `;
}
