import axios from "axios";

export default {
    getLocation: function() {
        return axios.get(`https://open.mapquestapi.com/staticmap/v5/map?key=${ApiKey}&location=${locationInput}`)
    },
    getTestingSites: function(lat, lng) {
        return axios.get(`https://discover.search.hereapi.com/v1/discover?apikey=${discoverApiKey}&q=Covid&at=${locationLat},${locationLng}&limit=5`)
    }

}