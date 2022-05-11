import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        //request data
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: '11.847676',
              tr_latitude: '12.838442',
              bl_longitude:'109.095887',
              tr_longitude: '109.149359',
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '7915e683bemsh20e6184ac461325p15693cjsn0294159ebdbb'
            }
          });

        return data;
    }
    catch (error) {
        console.log(error)
    }
}