import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'd073b1e6b4mshf40490b347ceccbp14ad57jsn454d872c264d',
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));
    }
    catch (error) {
        console.error(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028`, {
            params: {
                lat: lat,
                lon: lng
            },
            headers: {
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
                'x-rapidapi-key': 'd073b1e6b4mshf40490b347ceccbp14ad57jsn454d872c264d',
            }
        });
        return data;
    }
    catch (error) {
        console.error(error);
    }
};