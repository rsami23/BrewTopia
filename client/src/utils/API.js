import axios from "axios";

export default {
    createBeer: function(beer_data) {
        return axios.post("api/beers", beer_data);
    }
}