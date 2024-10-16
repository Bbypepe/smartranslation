import axios from 'axios';
import apiConfig from '../config/apiConfig';

// Translation service logic for text and voice
export const translateText = async (text, sourceLang, targetLang) => {
    try {
        const response = await axios.post(`${apiConfig.translationApi.baseURL}/translate`, {
            apiKey: apiConfig.translationApi.apiKey,
            text,
            sourceLang,
            targetLang,
        }, {
            timeout: apiConfig.translationApi.timeout,
        });
        return response.data;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};
