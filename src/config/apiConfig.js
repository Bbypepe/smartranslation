// Configuration for API endpoints used in the Smart Translation app
const apiConfig = {
    translationApi: {
        baseURL: 'https://api.translationapp.com',
        apiKey: 'your-api-key-here', // يجب استبدال 'your-api-key-here' بمفتاح API الخاص بك
        timeout: 5000, // وقت انتهاء الطلبات بالمللي ثانية
    },
    voiceChangeApi: {
        baseURL: 'https://api.voicechangerapp.com',
        apiKey: 'your-api-key-here',
        timeout: 5000,
    }
};

export default apiConfig;
