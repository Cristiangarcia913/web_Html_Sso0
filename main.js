// Manejo de pestañas en la página de comandos
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones y paneles
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Mostrar el panel correspondiente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Gráfico de cuota de mercado (para comparativa.html)
    if (document.getElementById('marketShareChart')) {
        const ctx = document.getElementById('marketShareChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Windows', 'macOS', 'Linux', 'Otros'],
                datasets: [{
                    data: [72.13, 15.46, 2.91, 9.5],
                    backgroundColor: [
                        '#0078d7',
                        '#000000',
                        '#f1502f',
                        '#6c757d'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
});