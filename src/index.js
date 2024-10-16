import dotenv from 'dotenv';
import vpnConfig from '../config/vpnConfig';

dotenv.config(); // تحميل محتويات ملف .env

// تحديث تكوين VPN باستخدام البيانات من .env
vpnConfig.server = process.env.VPN_SERVER;
vpnConfig.username = process.env.VPN_USERNAME;
vpnConfig.password = process.env.VPN_PASSWORD;

console.log(`VPN Server: ${vpnConfig.server}`);
console.log(`Translation API Key: ${process.env.TRANSLATION_API_KEY}`);
