const pesoProductoInput = document.getElementById('peso-Producto');
const precioProductoInput = document.getElementById('precio-Producto');
const cantidadProductoInput = document.getElementById('cantidad-Producto');
const calcularButton = document.getElementById('calcular');
const resultadoPrecio = document.getElementById('resultado-precio');
const resultadoPesoTotal = document.getElementById('resultado-peso-total');

calcularButton.addEventListener('click', calcular);

function calcular(event) {
    event.preventDefault();
    const pesoProducto = parseFloat(pesoProductoInput.value);
    const precioProducto = parseFloat(precioProductoInput.value);
    const cantidadProducto = parseInt(cantidadProductoInput.value);

    const precioTotal = pesoProducto * precioProducto * cantidadProducto;
    const pesoTotal = pesoProducto * cantidadProducto;

    resultadoPrecio.textContent = `El precio total es: $${precioTotal.toFixed(2)}`;
    resultadoPesoTotal.textContent = `El peso total es: ${pesoTotal.toFixed(2)} g`;
    }
