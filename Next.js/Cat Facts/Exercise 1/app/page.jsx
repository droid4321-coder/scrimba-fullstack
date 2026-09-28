//now we fetching a random fact and rendering it on page. Getting all facts and mapping them to the page.
async function getCatFacts() {
    const res = await fetch("https://catfact.ninja/facts")
    const data = await res.json()
    return await data.data
}

//by using searchParams we can get the parameter value from the search to be able to filter the content based on the search function. Its an object that has the prop named after the input name.
export default async function Home({ searchParams }) {
    const {search} = await searchParams
    console.log(search);
    const catFacts = await getCatFacts()
    const timestamp = new Date().toLocaleTimeString()

    const filteredFacts = search ? catFacts.filter((item) => {
       return item.fact.toLowerCase().includes(search.toLowerCase())
    }) : catFacts

    console.log(filteredFacts.length);

    //filtering by value, if query is falsy, leave facts alone, else, .filter including objects where fact contains the query. Good, job interview thought process.

    const catFactElements = catFacts.map((item, index) => {
        return (
            <div key={index} className="fact-card">
                <p className="fact-text">{item.fact}</p>
            </div>
        )
    })

    const filteredCatFactElements = filteredFacts.map((item, index) => {
        return (
            <div key={index} className="fact-card">
                <p className="fact-text">{item.fact}</p>
            </div>
        )
    })

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                {/* <div className="fact-card">
                    <p className="timestamp">Rendered at: {timestamp}</p>
                    <p className="fact-text">{catFact.fact}</p>
                </div> */}

                <div className="search">
                    <form action="">
                        <label htmlFor="search">Search bar!  
                            <input type="text" name="search" id="search" placeholder="search here!" autoComplete="off"/>
                        </label>
                    </form>
                </div>

                <div className="facts-list">
                    {filteredCatFactElements}
                </div>
            </main>
        </div>
    )
}
