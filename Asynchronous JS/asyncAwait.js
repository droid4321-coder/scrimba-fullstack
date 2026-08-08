async function fetchAPI() {
    const api = await fetch("https://apis.scrimba.com/bored/api/activity");
    console.log(api);
    const data = await api.json();
    console.log(data);
    console.log(`Suggested Activity: ${data.activity}`);
    return data;
}

fetchAPI();