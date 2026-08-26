import getStockData from './fakeStockAPI.js';

let previousPrice = null;

/*
Also:

const {name, sym, price, time } = stockData;

const priceDirectionIcon = price > prevPrice ? "green.svg" : price < prevPrice ? "red.svg" : "grey.svg"

at bottom:
prevPrice = price;
*/

function renderStockTicker(stockData) {
    let currentPrice = Number(stockData.price);
    
    // 1. Captura de elementos del DOM
    const stockDisplayName = document.getElementById("name");
    const stockDisplaySymbol = document.getElementById("symbol");
    const stockDisplayPrice = document.getElementById("price");
    const stockDisplayPriceIcon = document.getElementById("price-icon");
    const stockDisplayTime = document.getElementById("time");

    // 2. Renderizado de textos principales
    stockDisplayName.textContent = `Name: ${stockData.name}`;
    stockDisplaySymbol.textContent = `Symbol: ${stockData.sym}`;
    stockDisplayPrice.textContent = `Price: ${currentPrice}`;
    stockDisplayTime.textContent = `Time: ${stockData.time}`;

    // 3. Limpieza de clases CSS del segundo anterior
    stockDisplayPriceIcon.classList.remove("up", "down");

    // 4. Lógica de comparación de tendencias
    if (previousPrice !== null) {
        if (previousPrice < currentPrice) {
            stockDisplayPriceIcon.textContent = "▲";
            stockDisplayPriceIcon.classList.add("up"); // Aplica tu clase CSS verde
        } else if (previousPrice > currentPrice) {
            stockDisplayPriceIcon.textContent = "▼";
            stockDisplayPriceIcon.classList.add("down"); // Aplica tu clase CSS roja
        } else {
            stockDisplayPriceIcon.textContent = "▶";
        }
    }

    // 5. Acoplamos el icono visual volviendo a meterlo dentro de price sin destruirlo
    stockDisplayPrice.appendChild(stockDisplayPriceIcon);

    // 6. Actualización del precio previo para el siguiente ciclo
    previousPrice = currentPrice;
}

// Intervalo controlado cada 1.5 segundos
const intervalId = setInterval(() => {
    renderStockTicker(getStockData());
}, 1500);
