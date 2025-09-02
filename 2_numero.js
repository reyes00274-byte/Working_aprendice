function calcular() {
    const precioBarra = 12500;
    const descuento = 0.60;
    const barras = parseInt(document.getElementById("barras").value);

    if (isNaN(barras) || barras <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido de barras.";
        return;
    }

    const precioConDescuento = precioBarra * (1 - descuento);
    const total = precioConDescuento * barras;

    document.getElementById("resultado").innerHTML =
        `<p>Precio habitual de una barra: <b>${precioBarra.toLocaleString()} COP</b></p>
        <p> Descuento aplicado: <b>$${(descuento * 100).toFixed(2)}%</b></p>
        <p>Precio final por barra: <b>${precioConDescuento.toLocaleString()} COP</b></p>
        <p>Total a pagar por ${barras} barras: <b>${total.toLocaleString()} COP</b></p>
        `;
}