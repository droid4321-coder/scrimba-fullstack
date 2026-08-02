//function randomPrice() {
//    //random number between 0 and 3 with 2 decimal places
//    return (Math.random * 3).toFixed(2);
//}

function getStockData() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return {
        name: "StockExample",
        sym: "SE",
        price: (Math.random() * 3).toFixed(2),
        time: `${hours}:${minutes}:${seconds}` //return time in format hh:mm:ss
        //also new Date().toLocaleTimeString()
    }
}

//console.log(getStockData());

//very important error correction --- NEVER use parentheses when exporting a function. It will not work well. Ask me how I know lol :)
export default getStockData