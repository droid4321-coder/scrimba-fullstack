export default function Entry() {
    return (
        <article className="journal-entry">

            <div className="img-container">
                <img className="main-img" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
            </div>
            
            
            <div className="info-container">
                <div className="location-container">
                    <img src="./../src/assets/marker.png" alt="marker icon" className="marker-img" />
                    <span className="location-text">JAPAN</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank" className="maps-link">View on Google Maps</a>
                </div>
                    <h2 className="poi-text">Mount Fuji</h2>
                    <p className="date-text"><b>12 Jan, 2021 - 24 Jan, 2021</b></p>
                    <p className="description-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}