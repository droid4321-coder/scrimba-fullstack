//event source is an interface used to receive push notifications from server side events. It allows a persistent one way connection where the server can send events to the client. It needs the path to the endpoint, in this case, /temp/live

const eventSource = new EventSource("/temp/live")

const tempDisplay = document.getElementById("temp-display");

//this will take an event as a parameter and looks for the data for temperature
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const temperature = data.temp;

    tempDisplay.textContent = temperature;
}
eventSource.onerror = () => {
    console.log("Connection failed...");
}