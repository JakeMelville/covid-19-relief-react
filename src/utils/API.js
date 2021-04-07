import axios from "axios";


export default {
    getLatLng: function (q) {
        return axios.get('http://www.mapquestapi.com/geocoding/v1/address?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&location=' + q)
    },
    getTestingSites: function (locationLat, locationLng) {
        return axios.get(`https://discover.search.hereapi.com/v1/discover?apikey=2E2hXtlLTixuNk2K6LWH7tzmKtQscKlf74M2DC_PX4A&q=Covid&at=${locationLat},${locationLng}&limit=5`)
    }

}