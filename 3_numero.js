function calcularNomina() {
    const pagoPorHora = 10000;
    const horasInput = document.getElementById("horas").value.trim();

    if (horasInput === "") {
        document.getElementById("resultado").innerHTML =
            "<p>Por favor ingrese las horas trabajadas.</p>";
        return;
    }

    const horasArray = horasInput.split(",").map(h => parseInt(h.trim())).filter(h => !isNaN(h))
    if (horasArray.length === 0) {
        document.getElementById("resultado").innerHTML =
            "<p>Entrada no válida.</p>";
        return;
    }

    if (horasArray.length === 50) {
        document.getElementById("resultado").innerHTML =
            "<p>Solo se permiten maximo 50 obreros.</p>";
        return;
    } 
    
    let totalNomina = 0;
    let detalle = "<h3>Detalle de Pago por Obrero</h3><ul>";
    horasArray.forEach((horas, index) => {
        const pago = horas * pagoPorHora;
        totalNomina += pago;
        detalle += `<li>Obrero ${index + 1}: ${horas} horas -> Pago: ${pago.toLocaleString()} COP</li>`;
    });

    detalle += `</ul>`;
    detalle += `<h3>Total nómina: ${totalNomina.toLocaleString()} COP</h3>`;
    
        document.getElementById("resultado").innerHTML = detalle;
    }
