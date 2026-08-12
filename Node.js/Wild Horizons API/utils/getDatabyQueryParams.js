export const getDataByQueryParams = (parsedUrl, paramName, dataArray) => {
    const queryValue = parsedUrl.searchParams.get(paramName);

    if (queryValue === null) {
        return dataArray;
    }

    return dataArray.filter(item => {
        if (item[paramName] !== undefined && item[paramName] !== null ) {
            return item[paramName].toString().toLowerCase() === queryValue.toLowerCase()
        }
        return false;
    });
};

/* Official Scrimba Solution

export const GetDataByQueryParams = (data, queryObj) => {
    
    const {continent, country, is_open_to_public } = queryObj

    if (continent) {
    data = data.filter(destination => {
        destination.continent.toLowerCase() === continent.toLowerCase()
        })}

    if (country) {
    data = data.filter(destination => {
        destination.country.toLowerCase() === country.toLowerCase()
        })}

    if (is_open_to_public) {
    data = data.filter(destination => {
        console.log(destination.is_open_to_public, is_open_to_public)
        /when we run this, it says we are comparing a boolean to a string, therefore we need to JSON.parse
        return destination.is_open_to_public === JSON.parse(is_open_to_public)
        })}
    }

*/