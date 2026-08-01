//exporting this functions as default

export default function getMatchingTripsArr(arr, keyword) {
    return arr.filter(function (trip) {
        return trip.description.toLowerCase().includes(keyword);
    })
}

//dang nice search function
//also we can export default from here and it works