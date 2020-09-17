import axios from "axios";
import { get } from 'lodash';

const getLatestRates = async () => {
    try {
        const response = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
        return get(response, 'data.rates', null);
    } catch {
        return null;
    }
};

export default getLatestRates;