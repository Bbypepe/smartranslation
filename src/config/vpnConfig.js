// Configuration for VPN connection
const vpnConfig = {
    vpnEnabled: true, // هل يتم تمكين الـ VPN افتراضيًا
    server: 'vpn-server-address.com', // عنوان الـ VPN
    username: 'your-vpn-username', // اسم المستخدم الخاص بـ VPN
    password: 'your-vpn-password', // كلمة مرور الـ VPN
    protocol: 'openvpn', // نوع البروتوكول المستخدم (مثال: openvpn)
    port: 1194, // المنفذ المستخدم للاتصال بالـ VPN
};

export default vpnConfig;
