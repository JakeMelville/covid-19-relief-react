import axios from "axios";

export default {
  getLatLng: function (q) {
    console.log("getLatLng q: ", q);
    return axios.get(
      "http://www.mapquestapi.com/geocoding/v1/address?key=WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My&location=" +
        q
    );
  },
  getTestingSites: function (locate) {
    console.log("getTestingSites locate: ", locate);
    return axios.get(
      `https://discover.search.hereapi.com/v1/discover?apikey=2E2hXtlLTixuNk2K6LWH7tzmKtQscKlf74M2DC_PX4A&q=Covid&at=${locate}&limit=5`
    );
  },
  getVaccineSites: function (dropDown) {
    console.log('getvaccinesites', dropDown);
    return axios.get(
      `https://www.vaccinespotter.org/api/v0/states.json`
    );
  },
  getPatients: function () {
    return axios.get("/api/patient");
  },

  getPatient: function (id) {
    return axios.get("/api/patient/" + id);
  },

  deletePatient: function (id) {
    return axios.delete("/api/patient/" + id);
  },
  
  savePatient: function (patientData) {
    return axios.post("/api/patient", patientData);
  },
};
