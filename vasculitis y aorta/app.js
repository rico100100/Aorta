// Vasculitis Medical Application - Enhanced Interactive Functionality with Histological Data
class VasculitisApp {
  constructor() {
    this.data = {
      "vasculitis": [
        {
          "id": 1,
          "nombre": "Arteritis de Takayasu",
          "predominio": "Arterial (95-98%)",
          "patologia": "Estenosis progresiva concéntrica (70-90%), Oclusión completa (60-80%), Aneurismas fusiformes/saculares (30-35%), Lesiones en 'skip'",
          "histologia": "**Panarteritis granulomatosa**. Infiltrado linfoplasmocitario en adventicia y media. Destrucción de láminas elásticas (preserva limitante elástica interna). Células gigantes multinucleadas. Hiperplasia vasa vasorum. Fibrosis transmural en fase crónica.",
          "clinica": "Fase sistémica: fiebre, astenia, pérdida peso, mialgias. Fase oclusiva: enfermedad sin pulso, claudicación MMSS, diferencia TA bilateral >10mmHg, HTA renovascular, soplos vasculares, AIT, amaurosis fugax",
          "etiologia": "Autoinmune. Asociación HLA-B52. Predisposición genética. Factores ambientales",
          "epidemiologia": "Incidencia: 0.8-2.6/millón/año. Edad: 15-35 años (pico 25 años). Sexo: ♀:♂ = 8-9:1. Etnia: Mayor en asiáticas",
          "tipo": "arterial",
          "tipoHistologico": "granulomatosa",
          "elasticaInterna": "preservada_relativa",
          "riesgo": "alto",
          "patron": "Estenosis > Aneurismas (relación 3:1)",
          "presentacion": "Subaguda - claudicación progresiva"
        },
        {
          "id": 2,
          "nombre": "Arteritis de Células Gigantes",
          "predominio": "Arterial (100%)",
          "patologia": "Estenosis segmentaria focal (85-90%), Oclusión arterial aguda (20-30%), Aneurismas raros pero graves (5-10%), Aortitis tardía (15%)",
          "histologia": "**Panarteritis granulomatosa segmentaria**. Infiltrado mononuclear (linfocitos, macrófagos) próximo a lámina elástica interna. Células gigantes multinucleadas (50% casos). **Fragmentación y destrucción de lámina elástica interna**. Hiperplasia intimal. Lesiones 'parcheadas'.",
          "clinica": "Craneofacial: cefalea temporal, claudicación mandibular. Visual: amaurosis fugax, diplopía, ceguera súbita. Sistémico: PMR (50%), fiebre, VSG↑. Hipersensibilidad cuero cabelludo",
          "etiologia": "Autoinmune. Asociación HLA-DR4. Factores infecciosos (virus, mycoplasma). Factores ambientales",
          "epidemiologia": "Incidencia: 18-22/100,000 >50años. Edad: >50 años (pico 70-80). Sexo: ♀:♂ = 2-3:1. Etnia: Caucásicos, nórdicos",
          "tipo": "arterial",
          "tipoHistologico": "granulomatosa",
          "elasticaInterna": "destruida",
          "riesgo": "alto",
          "patron": "Oclusión aguda > Dilatación aneurismática",
          "presentacion": "Aguda - ceguera súbita"
        },
        {
          "id": 3,
          "nombre": "Poliarteritis Nodosa",
          "predominio": "Arterial (100%)",
          "patologia": "Microaneurismas múltiples (80-90%), Necrosis fibrinoide transmural, Trombosis in situ (40-50%), 'Rosario aneurismático'",
          "histologia": "**Arteritis necrotizante segmentaria y focal**. **Necrosis fibrinoide transmural** de capa media. Infiltrado neutrofílico intenso con linfocitos y eosinófilos. **Destrucción completa de elástica interna**. Arquitectura vascular rota. NO hay granulomas. Coexistencia lesiones en diferentes estadios.",
          "clinica": "Sistémico: fiebre, pérdida peso, mialgias. Cutáneo: livedo reticularis, úlceras, gangrena. Neurológico: mononeuritis múltiple. Renal: HTA, hematuria (sin glomerulonefritis). GI: dolor abdominal, hemorragia",
          "etiologia": "Multifactorial. Primaria (idiopática). Secundaria (VHB 30%). Inmunodepositos arterias medianas",
          "epidemiologia": "Incidencia: 1-4/millón/año. Edad: 40-60 años (pico 5ª-6ª década). Sexo: ♂:♀ = 2:1. Prevalencia: 1/33,000 habitantes",
          "tipo": "arterial",
          "tipoHistologico": "necrotizante",
          "elasticaInterna": "destruida",
          "riesgo": "alto",
          "patron": "Aneurismas > Estenosis (patrón característico)",
          "presentacion": "Aguda - infarto orgánico"
        },
        {
          "id": 4,
          "nombre": "Enfermedad de Behçet",
          "predominio": "Venoso (75-80%)",
          "patologia": "Venoso: TVP bilateral, trombosis cava, Budd-Chiari. Arterial: Aneurismas pulmonares (20%), aneurismas aórticos. Trombosis inflamatoria (no trombofilia)",
          "histologia": "**Vasculitis oclusiva mediada por inmunidad**. Infiltrado perivascular con linfocitos T (CD4+ y CD8+) y células HLA-DR+. **Predominio neutrofílico en lesiones iniciales**. Vasculitis leucocitoclástica, linfocítica o granulomatosa (rara). **Afecta capilares y vénulas preferentemente**. NO hay necrosis fibrinoide típica.",
          "clinica": "Mucocutáneo: aftas orales recurrentes (98%), úlceras genitales. Ocular: uveítis bilateral, hipopión. Vascular: TVP, trombosis venosa cerebral. Neurológico: meningoencefalitis, trombosis senos",
          "etiologia": "Autoinmune/autoinflamatoria. Asociación HLA-B51 (44-80%). Agregación familiar. Genes IL-10, IL-23R, ERAP1",
          "epidemiologia": "Prevalencia: 6.4-420/100,000. Edad: 25-30 años (pico 3ª-4ª década). Sexo: Variable geográfico. Etnia: Ruta de la seda (Turquía, Medio Oriente)",
          "tipo": "venoso",
          "tipoHistologico": "oclusiva",
          "elasticaInterna": "no_relevante",
          "riesgo": "extremo",
          "patron": "Único con predominio venoso claro",
          "presentacion": "Crónica - trombosis recurrente"
        },
        {
          "id": 5,
          "nombre": "Síndrome de Cogan",
          "predominio": "Arterial (90-95%)",
          "patologia": "Aneurismas aórticos toracoabdominales (40-50%), Insuficiencia aórtica severa, Estenosis coronarias ostiales, Aortitis proximal progresiva",
          "histologia": "**Aortitis granulomatosa**. Infiltrado inflamatorio transmural de grandes vasos (aorta). Afectación preferente de **adventicia y media**. **Preservación relativa de lámina elástica interna**. Células gigantes ocasionales. Fibrosis progresiva de pared aórtica.",
          "clinica": "Ocular: queratitis intersticial bilateral no sifilítica. Audiovestibular: hipoacusia neurosensorial, vértigo, acúfenos. Cardiovascular: soplo diastólico, ICC. Sistémico: fiebre, cefalea, mialgias",
          "etiologia": "Autoinmune. Autoanticuerpos anti-oído interno. Anti-péptidos Cogan. Desencadenante infeccioso probable",
          "epidemiologia": "Prevalencia: Desconocida (~380 casos descritos). Edad: 20-30 años (mediana). Sexo: Sin predominio. Etnia: Caucásica principalmente",
          "tipo": "arterial",
          "tipoHistologico": "granulomatosa",
          "elasticaInterna": "preservada_relativa",
          "riesgo": "alto",
          "patron": "Insuficiencia > Estenosis aórtica",
          "presentacion": "Crónica - pérdida auditiva progresiva"
        },
        {
          "id": 6,
          "nombre": "Necrosis Quística de la Media",
          "predominio": "Arterial (100%)",
          "patologia": "Aneurismas fusiformes progresivos (90-95%), Disección aórtica tipo A/B (40-50%), Pérdida fibras elásticas mediales, Ectasia anuloaórtica",
          "histologia": "**Degeneración NO inflamatoria de capa media**. **Fragmentación y pérdida masiva de fibras elásticas**. Separación elementos elástico-fibromusculares por espacios 'quísticos'. **NO hay necrosis verdadera ni inflamación**. Acumulación material basófilo amorfo. **NO afecta láminas elásticas externa/interna**.",
          "clinica": "Cardiovascular: soplo diastólico (IA), disnea de esfuerzo. Disección aguda: dolor torácico desgarrante. Aneurisma: asintomático hasta rotura. Asociaciones: válvula aórtica bicúspide",
          "etiologia": "Degenerativo/Genético. Síndrome de Marfan (50%). Ehlers-Danlos vascular. Degeneración no inflamatoria. Válvula aórtica bicúspide",
          "epidemiologia": "Incidencia: 2.6-3.5/100,000/año. Edad: Pico 65-70 años. Sexo: Variable según etiología. Genética: 50% asociado a conectivopatías",
          "tipo": "arterial",
          "tipoHistologico": "degenerativa",
          "elasticaInterna": "no_afectada",
          "riesgo": "extremo",
          "patron": "Dilatación > Disección",
          "presentacion": "Aguda - disección aórtica"
        }
      ],
      "abreviaturas": {
        "TVP": "Trombosis Venosa Profunda",
        "HTA": "Hipertensión Arterial",
        "PMR": "Polimialgia Reumática",
        "VSG": "Velocidad de Sedimentación Globular",
        "VHB": "Virus de Hepatitis B",
        "ICC": "Insuficiencia Cardíaca Congestiva",
        "IA": "Insuficiencia Aórtica",
        "MMSS": "Miembros Superiores",
        "MMII": "Miembros Inferiores",
        "AIT": "Accidente Isquémico Transitorio",
        "GI": "Gastrointestinal",
        "ACV": "Accidente Cerebrovascular"
      },
      "terminosHistologicos": {
        "Panarteritis": "Inflamación que afecta todas las capas de la pared arterial",
        "Granulomatosa": "Presencia de granulomas con células gigantes multinucleadas",
        "Necrotizante": "Con necrosis (muerte celular) de la pared vascular",
        "Necrosis fibrinoide": "Necrosis con depósito de material eosinófilo similar a fibrina",
        "Lámina elástica interna": "Capa de fibras elásticas entre íntima y media arterial",
        "Vasa vasorum": "Pequeños vasos que nutren la pared de las arterias grandes",
        "Leucocitoclástica": "Vasculitis con destrucción de neutrófilos",
        "Infiltrado mononuclear": "Infiltrado inflamatorio de linfocitos y macrófagos",
        "Células gigantes": "Células multinucleadas características de inflamación granulomatosa",
        "Adventicia": "Capa externa de la pared vascular",
        "Media": "Capa muscular media de la pared arterial",
        "Íntima": "Capa interna de la pared vascular"
      }
    };

    this.filteredData = [...this.data.vasculitis];
    this.currentFilters = {
      search: '',
      predominio: 'all',
      histologico: 'all'
    };
    this.init();
  }

  init() {
    this.renderTable();
    this.renderAbbreviations();
    this.renderHistologicTerms();
    this.setupEventListeners();
    this.addTooltips();
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentFilters.search = e.target.value;
        this.applyFilters();
      });
    }

    // Predominio filter
    const filterSelect = document.getElementById('filter');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.currentFilters.predominio = e.target.value;
        this.applyFilters();
      });
    }

    // Histologic filter
    const histologicFilter = document.getElementById('histologic-filter');
    if (histologicFilter) {
      histologicFilter.addEventListener('change', (e) => {
        this.currentFilters.histologico = e.target.value;
        this.applyFilters();
      });
    }
  }

  applyFilters() {
    let filtered = [...this.data.vasculitis];

    // Apply search filter
    if (this.currentFilters.search.trim() !== '') {
      const searchTerm = this.currentFilters.search.toLowerCase().trim();
      filtered = filtered.filter(disease => 
        disease.nombre.toLowerCase().includes(searchTerm) ||
        disease.clinica.toLowerCase().includes(searchTerm) ||
        disease.patologia.toLowerCase().includes(searchTerm) ||
        disease.etiologia.toLowerCase().includes(searchTerm) ||
        disease.histologia.toLowerCase().includes(searchTerm)
      );
    }

    // Apply predominio filter
    if (this.currentFilters.predominio !== 'all') {
      filtered = filtered.filter(disease => 
        disease.tipo === this.currentFilters.predominio
      );
    }

    // Apply histologic filter
    if (this.currentFilters.histologico !== 'all') {
      filtered = filtered.filter(disease => 
        disease.tipoHistologico === this.currentFilters.histologico
      );
    }

    this.filteredData = filtered;
    this.renderTable();
  }

  renderTable() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) return;

    if (this.filteredData.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="empty-state">
            No se encontraron patologías que coincidan con los criterios de búsqueda y filtrado.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = this.filteredData.map(disease => `
      <tr data-disease-id="${disease.id}">
        <td>
          <div class="disease-name">${disease.nombre}</div>
        </td>
        <td>
          <span class="predominio-${disease.tipo}">${disease.predominio}</span>
        </td>
        <td>
          <div class="pathology-content">${this.truncateText(disease.patologia, 120)}</div>
        </td>
        <td>
          <div class="histology-content">${this.formatHistology(disease.histologia)}</div>
        </td>
        <td>
          <div class="clinical-content">${this.truncateText(disease.clinica, 120)}</div>
        </td>
        <td>
          <div class="etiology-content">${this.truncateText(disease.etiologia, 100)}</div>
        </td>
        <td>
          <div class="epidemiology-content">${this.truncateText(disease.epidemiologia, 100)}</div>
        </td>
        <td>
          <span class="risk-badge risk-${disease.riesgo}">${disease.riesgo}</span>
        </td>
      </tr>
    `).join('');

    this.addTableInteractions();
  }

  formatHistology(histologyText) {
    // Format histology text to highlight key terms and make it more readable
    const formatted = histologyText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\. /g, '.<br>')
      .substring(0, 200);
    
    return formatted + (histologyText.length > 200 ? '...' : '');
  }

  addTableInteractions() {
    const tableRows = document.querySelectorAll('#table-body tr[data-disease-id]');
    
    tableRows.forEach(row => {
      row.addEventListener('click', (e) => {
        const diseaseId = parseInt(row.dataset.diseaseId);
        const disease = this.data.vasculitis.find(d => d.id === diseaseId);
        if (disease) {
          this.showDiseaseModal(disease);
        }
      });

      row.style.cursor = 'pointer';
      row.title = 'Haga clic para ver información detallada incluyendo histología completa';
    });
  }

  showDiseaseModal(disease) {
    // Create enhanced modal with histological information
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const elasticStatus = this.getElasticStatusText(disease.elasticaInterna);
    const histologyFormatted = disease.histologia.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    modalContent.innerHTML = `
      <div class="modal-header">
        <h2>${disease.nombre}</h2>
        <button class="close-modal" aria-label="Cerrar">&times;</button>
      </div>
      <div class="modal-body">
        <div class="detail-grid">
          <div class="detail-section">
            <h3>Predominio Circulatorio</h3>
            <p><span class="predominio-${disease.tipo}">${disease.predominio}</span></p>
          </div>
          <div class="detail-section">
            <h3>Características Histológicas Detalladas</h3>
            <div class="histology-detail">
              <p><strong>Tipo histológico:</strong> ${disease.tipoHistologico}</p>
              <p><strong>Afectación de elástica interna:</strong> ${elasticStatus}</p>
              <div style="margin-top: 12px;">
                ${histologyFormatted}
              </div>
            </div>
          </div>
          <div class="detail-section">
            <h3>Patología Vascular Específica</h3>
            <p>${disease.patologia}</p>
          </div>
          <div class="detail-section">
            <h3>Manifestaciones Clínicas</h3>
            <p>${disease.clinica}</p>
          </div>
          <div class="detail-section">
            <h3>Etiología</h3>
            <p>${disease.etiologia}</p>
          </div>
          <div class="detail-section">
            <h3>Datos Epidemiológicos</h3>
            <p>${disease.epidemiologia}</p>
          </div>
          <div class="detail-section">
            <h3>Patrón Hemodinámico</h3>
            <p>${disease.patron}</p>
          </div>
          <div class="detail-section">
            <h3>Presentación Clínica</h3>
            <p>${disease.presentacion}</p>
          </div>
          <div class="detail-section">
            <h3>Nivel de Riesgo</h3>
            <p><span class="risk-badge risk-${disease.riesgo}">${disease.riesgo}</span></p>
          </div>
        </div>
      </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal functionality
    const closeButton = modalContent.querySelector('.close-modal');
    const closeModal = () => {
      document.body.removeChild(modal);
    };

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // ESC key to close
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  getElasticStatusText(status) {
    const statusMap = {
      'destruida': 'Destrucción completa de lámina elástica interna',
      'preservada_relativa': 'Preservación relativa de lámina elástica interna',
      'no_afectada': 'Lámina elástica interna no afectada',
      'no_relevante': 'No relevante (afecta principalmente capilares/vénulas)'
    };
    return statusMap[status] || status;
  }

  renderAbbreviations() {
    const abbreviationsList = document.getElementById('abbreviations-list');
    if (!abbreviationsList) return;

    const abbreviationsHTML = Object.entries(this.data.abreviaturas)
      .map(([term, definition]) => `
        <div class="abbreviation-item">
          <span class="abbreviation-term">${term}:</span>
          <span class="abbreviation-definition">${definition}</span>
        </div>
      `).join('');

    abbreviationsList.innerHTML = abbreviationsHTML;
  }

  renderHistologicTerms() {
    const histologicTermsList = document.getElementById('histologic-terms');
    if (!histologicTermsList) return;

    const histologicHTML = Object.entries(this.data.terminosHistologicos)
      .map(([term, definition]) => `
        <div class="abbreviation-item">
          <span class="abbreviation-term">${term}:</span>
          <span class="abbreviation-definition">${definition}</span>
        </div>
      `).join('');

    histologicTermsList.innerHTML = histologicHTML;
  }

  addTooltips() {
    // Add tooltips to medical and histological terms
    const medicalTerms = {
      ...this.data.abreviaturas,
      ...this.data.terminosHistologicos
    };

    // This would enhance the application by adding interactive tooltips
    // For now, maintaining the basic functionality
  }

  truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + '...';
  }

  // Utility method to export filtered data (for potential future use)
  exportFilteredData() {
    return {
      filters: this.currentFilters,
      data: this.filteredData,
      totalCount: this.data.vasculitis.length,
      filteredCount: this.filteredData.length
    };
  }

  // Method to reset all filters
  resetFilters() {
    this.currentFilters = {
      search: '',
      predominio: 'all',
      histologico: 'all'
    };
    
    // Reset form controls
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const histologicFilter = document.getElementById('histologic-filter');
    
    if (searchInput) searchInput.value = '';
    if (filterSelect) filterSelect.value = 'all';
    if (histologicFilter) histologicFilter.value = 'all';
    
    this.applyFilters();
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new VasculitisApp();
  
  // Make app instance globally available for debugging
  window.VasculitisApp = app;
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl + R to reset filters
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      app.resetFilters();
    }
    
    // Focus search with Ctrl + F
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault();
      const searchInput = document.getElementById('search');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VasculitisApp;
}