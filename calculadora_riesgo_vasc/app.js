// Risk Calculator Application JavaScript

class RiskCalculator {
    constructor() {
        this.initializeEventListeners();
        this.initializeTabs();
        this.initializeCalculators();
    }

    initializeEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Calculator form listeners
        this.initializeFormListeners('vsg-cri');
        this.initializeFormListeners('rcri');
        this.initializeFormListeners('vsgne-aaa');
    }

    initializeFormListeners(calculatorType) {
        const form = document.getElementById(`${calculatorType}-form`);
        if (form) {
            form.addEventListener('change', () => {
                this.calculateScore(calculatorType);
            });
        }
    }

    initializeTabs() {
        // Show first tab by default
        this.switchTab('vsg-cri');
    }

    initializeCalculators() {
        // Initialize all calculators with default values
        this.calculateScore('vsg-cri');
        this.calculateScore('rcri');
        this.calculateScore('vsgne-aaa');
    }

    switchTab(tabName) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });

        // Show selected tab content
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // Activate selected button
        const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    }

    calculateScore(calculatorType) {
        const form = document.getElementById(`${calculatorType}-form`);
        if (!form) return;

        let totalScore = 0;
        const formData = new FormData(form);

        // Handle radio buttons for age (VSG-CRI)
        if (calculatorType === 'vsg-cri') {
            const ageValue = formData.get('age');
            if (ageValue) {
                const ageInput = form.querySelector(`input[name="age"][value="${ageValue}"]`);
                if (ageInput) {
                    totalScore += parseInt(ageInput.dataset.points);
                }
            }
        }

        // Handle checkboxes
        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            totalScore += parseInt(checkbox.dataset.points);
        });

        // Update display
        this.updateScoreDisplay(calculatorType, totalScore);
        this.updateRiskInterpretation(calculatorType, totalScore);
        this.updateClinicalNotes(calculatorType, totalScore);
    }

    updateScoreDisplay(calculatorType, score) {
        const scoreElement = document.getElementById(`${calculatorType}-score`);
        if (scoreElement) {
            scoreElement.textContent = score;
        }
    }

    updateRiskInterpretation(calculatorType, score) {
        const interpretation = this.getInterpretation(calculatorType, score);
        const interpretationElement = document.getElementById(`${calculatorType}-interpretation`);
        
        if (interpretationElement) {
            // Remove existing risk classes
            interpretationElement.className = 'risk-interpretation';
            
            // Add new risk class
            interpretationElement.classList.add(interpretation.cssClass);
            
            // Update content
            const categoryElement = interpretationElement.querySelector('.risk-category');
            const percentageElement = interpretationElement.querySelector('.risk-percentage');
            const descriptionElement = interpretationElement.querySelector('.risk-description');
            
            if (categoryElement) categoryElement.textContent = interpretation.category;
            if (percentageElement) percentageElement.textContent = interpretation.risk;
            if (descriptionElement) descriptionElement.textContent = interpretation.description;
        }
    }

    updateClinicalNotes(calculatorType, score) {
        const notes = this.getClinicalNotes(calculatorType, score);
        const notesElement = document.getElementById(`${calculatorType}-notes`);
        
        if (notesElement) {
            notesElement.textContent = notes;
        }
    }

    getInterpretation(calculatorType, score) {
        const interpretations = {
            'vsg-cri': [
                {range: [0, 3], risk: '2.6%', category: 'Muy Bajo', cssClass: 'risk-very-low', description: 'Riesgo de complicaciones cardíacas mayores'},
                {range: [4, 4], risk: '3.5%', category: 'Bajo', cssClass: 'risk-low', description: 'Riesgo de complicaciones cardíacas mayores'},
                {range: [5, 5], risk: '6.0%', category: 'Intermedio', cssClass: 'risk-intermediate', description: 'Riesgo de complicaciones cardíacas mayores'},
                {range: [6, 6], risk: '6.6%', category: 'Intermedio', cssClass: 'risk-intermediate', description: 'Riesgo de complicaciones cardíacas mayores'},
                {range: [7, 7], risk: '8.9%', category: 'Alto', cssClass: 'risk-high', description: 'Riesgo de complicaciones cardíacas mayores'},
                {range: [8, 999], risk: '14.3%', category: 'Muy Alto', cssClass: 'risk-very-high', description: 'Riesgo de complicaciones cardíacas mayores'}
            ],
            'rcri': [
                {range: [0, 0], risk: '0.4%', category: 'Clase I (Muy Bajo)', cssClass: 'risk-very-low', description: 'Riesgo de eventos cardíacos mayores'},
                {range: [1, 1], risk: '0.9%', category: 'Clase II (Bajo)', cssClass: 'risk-low', description: 'Riesgo de eventos cardíacos mayores'},
                {range: [2, 2], risk: '6.6%', category: 'Clase III (Intermedio)', cssClass: 'risk-intermediate', description: 'Riesgo de eventos cardíacos mayores'},
                {range: [3, 999], risk: '≥11.0%', category: 'Clase IV (Alto)', cssClass: 'risk-high', description: 'Riesgo de eventos cardíacos mayores'}
            ],
            'vsgne-aaa': [
                {range: [0, 0], risk: '8%', category: 'Bajo', cssClass: 'risk-low', description: 'Riesgo de mortalidad hospitalaria'},
                {range: [1, 1], risk: '25%', category: 'Intermedio Bajo', cssClass: 'risk-intermediate', description: 'Riesgo de mortalidad hospitalaria'},
                {range: [2, 2], risk: '37%', category: 'Intermedio', cssClass: 'risk-intermediate', description: 'Riesgo de mortalidad hospitalaria'},
                {range: [3, 3], risk: '60%', category: 'Alto', cssClass: 'risk-high', description: 'Riesgo de mortalidad hospitalaria'},
                {range: [4, 4], risk: '80%', category: 'Muy Alto', cssClass: 'risk-very-high', description: 'Riesgo de mortalidad hospitalaria'},
                {range: [5, 999], risk: '87%', category: 'Extremo', cssClass: 'risk-extreme', description: 'Riesgo de mortalidad hospitalaria'}
            ]
        };

        const calcInterpretations = interpretations[calculatorType];
        if (!calcInterpretations) return null;

        for (const interp of calcInterpretations) {
            if (score >= interp.range[0] && score <= interp.range[1]) {
                return interp;
            }
        }

        return calcInterpretations[calcInterpretations.length - 1];
    }

    getClinicalNotes(calculatorType, score) {
        const notes = {
            'vsg-cri': {
                'very-low': 'Basado en la puntuación VSG-CRI, se estima un riesgo muy bajo de complicaciones cardíacas perioperatorias. Considere estrategias de optimización estándar y monitoreo rutinario.',
                'low': 'Riesgo bajo de complicaciones cardíacas según VSG-CRI. Se recomienda optimización médica estándar y considerar betabloqueadores si están indicados.',
                'intermediate': 'Riesgo intermedio de complicaciones cardíacas. Considere evaluación cardíaca adicional, optimización médica intensiva y monitoreo perioperatorio estrecho.',
                'high': 'Riesgo alto de complicaciones cardíacas. Se recomienda evaluación cardiológica preoperatoria, optimización médica máxima y considerar revascularización si está indicada.',
                'very-high': 'Riesgo muy alto de complicaciones cardíacas. Requiere evaluación cardiológica especializada, optimización médica intensiva y considerar la necesidad de la cirugía versus opciones alternativas.',
                'extreme': 'Riesgo extremo de complicaciones cardíacas. Considere evaluación multidisciplinaria para determinar si los beneficios de la cirugía superan los riesgos.'
            },
            'rcri': {
                'very-low': 'Clasificación de riesgo Clase I según RCRI. Riesgo muy bajo de eventos cardíacos perioperatorios. No requiere evaluación cardíaca adicional rutinaria.',
                'low': 'Clasificación Clase II según RCRI. Riesgo bajo que puede manejarse con cuidados perioperatorios estándar y optimización médica básica.',
                'intermediate': 'Clasificación Clase III según RCRI. Riesgo intermedio que requiere evaluación cardíaca adicional y optimización médica preoperatoria.',
                'high': 'Clasificación Clase IV según RCRI. Riesgo alto que requiere evaluación cardiológica especializada y considerar estrategias de reducción de riesgo.',
                'extreme': 'Riesgo muy alto según RCRI. Requiere manejo multidisciplinario y evaluación cuidadosa del balance riesgo-beneficio.'
            },
            'vsgne-aaa': {
                'very-low': 'Riesgo bajo de mortalidad hospitalaria en reparación de AAA roto. Considere abordaje endovascular si es anatómicamente factible.',
                'low': 'Riesgo bajo de mortalidad hospitalaria. Buen candidato para reparación tanto abierta como endovascular según anatomía.',
                'intermediate': 'Riesgo intermedio de mortalidad. Prefiera abordaje endovascular si es técnicamente factible. Considere optimización preoperatoria rápida.',
                'high': 'Riesgo alto de mortalidad hospitalaria. Fuertemente favorezca reparación endovascular. Requiere manejo en centro especializado.',
                'very-high': 'Riesgo muy alto de mortalidad. Considere reparación endovascular urgente si es factible. Discuta pronóstico con familia.',
                'extreme': 'Riesgo extremo de mortalidad hospitalaria. Considere cuidadosamente la viabilidad de la intervención. Requiere discusión multidisciplinaria urgente.'
            }
        };

        const interpretation = this.getInterpretation(calculatorType, score);
        if (!interpretation) return '';

        const calcNotes = notes[calculatorType];
        if (!calcNotes) return '';

        // Map CSS class to note key
        const noteKey = interpretation.cssClass.replace('risk-', '').replace('-', '-');
        
        if (noteKey === 'very-low') return calcNotes['very-low'];
        if (noteKey === 'low') return calcNotes['low'];
        if (noteKey === 'intermediate') return calcNotes['intermediate'];
        if (noteKey === 'high') return calcNotes['high'];
        if (noteKey === 'very-high') return calcNotes['very-high'];
        if (noteKey === 'extreme') return calcNotes['extreme'];

        return calcNotes['very-low']; // Default
    }
}

// Enhanced form interaction handlers
class FormInteractionHandler {
    constructor() {
        this.initializeAgeGroupHandling();
        this.initializeTooltips();
        this.initializeFormValidation();
    }

    initializeAgeGroupHandling() {
        // Handle VSG-CRI age group radio buttons - ensure only one can be selected
        const ageInputs = document.querySelectorAll('input[name="age"]');
        ageInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // Uncheck other age inputs
                    ageInputs.forEach(otherInput => {
                        if (otherInput !== e.target) {
                            otherInput.checked = false;
                        }
                    });
                }
            });
        });
    }

    initializeTooltips() {
        // Add hover effects and additional information
        const labels = document.querySelectorAll('.checkbox-label');
        labels.forEach(label => {
            label.addEventListener('mouseenter', () => {
                label.style.transform = 'translateX(5px)';
            });
            
            label.addEventListener('mouseleave', () => {
                label.style.transform = 'translateX(0)';
            });
        });
    }

    initializeFormValidation() {
        // Add visual feedback for form interactions
        const checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const label = e.target.closest('.checkbox-label');
                if (label) {
                    if (e.target.checked) {
                        label.classList.add('selected');
                    } else {
                        label.classList.remove('selected');
                    }
                }
            });
        });
    }
}

// Utility functions for enhanced user experience
class UXEnhancements {
    constructor() {
        this.initializeAnimations();
        this.initializeKeyboardNavigation();
        this.initializeAccessibility();
    }

    initializeAnimations() {
        // Smooth transitions for score updates
        const scoreElements = document.querySelectorAll('.score-value');
        scoreElements.forEach(element => {
            element.style.transition = 'all 0.3s ease-in-out';
        });

        // Animate risk interpretation changes
        const interpretationElements = document.querySelectorAll('.risk-interpretation');
        interpretationElements.forEach(element => {
            element.style.transition = 'all 0.3s ease-in-out';
        });
    }

    initializeKeyboardNavigation() {
        // Enhanced keyboard navigation for tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach((button, index) => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' && index < tabButtons.length - 1) {
                    tabButtons[index + 1].focus();
                    tabButtons[index + 1].click();
                } else if (e.key === 'ArrowLeft' && index > 0) {
                    tabButtons[index - 1].focus();
                    tabButtons[index - 1].click();
                }
            });
        });
    }

    initializeAccessibility() {
        // Add ARIA labels and improve accessibility
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.setAttribute('role', 'form');
            form.setAttribute('aria-label', 'Risk calculation form');
        });

        const scoreDisplays = document.querySelectorAll('.score-display');
        scoreDisplays.forEach(display => {
            display.setAttribute('role', 'status');
            display.setAttribute('aria-live', 'polite');
        });
    }
}

// Print and export functionality
class ExportManager {
    constructor() {
        this.addExportButtons();
    }

    addExportButtons() {
        // Add export buttons to each calculator (optional enhancement)
        const resultsPanels = document.querySelectorAll('.results-panel');
        resultsPanels.forEach(panel => {
            const exportButton = document.createElement('button');
            exportButton.textContent = 'Exportar Resultado';
            exportButton.className = 'btn btn--outline btn--sm';
            exportButton.style.marginTop = '15px';
            exportButton.addEventListener('click', () => this.exportResults(panel));
            panel.appendChild(exportButton);
        });
    }

    exportResults(panel) {
        // Simple text export functionality
        const scoreValue = panel.querySelector('.score-value').textContent;
        const riskCategory = panel.querySelector('.risk-category').textContent;
        const riskPercentage = panel.querySelector('.risk-percentage').textContent;
        const clinicalNotes = panel.querySelector('.clinical-notes p').textContent;

        const exportText = `
Resultado del Cálculo de Riesgo Cardiovascular
================================================
Puntuación: ${scoreValue}
Categoría de Riesgo: ${riskCategory}
Porcentaje de Riesgo: ${riskPercentage}

Notas Clínicas:
${clinicalNotes}

Generado el: ${new Date().toLocaleString('es-ES')}
`;

        // Create downloadable text file
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `riesgo-cardiovascular-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main calculator
    const calculator = new RiskCalculator();
    
    // Initialize form interaction enhancements
    const formHandler = new FormInteractionHandler();
    
    // Initialize UX enhancements
    const uxEnhancements = new UXEnhancements();
    
    // Initialize export manager
    const exportManager = new ExportManager();
    
    console.log('Calculadoras de Riesgo Cardiovascular inicializadas correctamente');
});