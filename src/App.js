import React from 'react';
import SubscriptionPlans from './components/SubscriptionPlans';
import TranslateStream from './components/TranslateStream';
import VoiceChanger from './components/VoiceChanger';
import SmartKeyboard from './components/SmartKeyboard';
import logo from '../assets/logo.png';  // استيراد الشعار

const App = () => {
    return (
        <div>
            <img src={logo} alt="Smart Translation Logo" style={{ width: '150px', display: 'block', margin: '0 auto' }} />
            <h1>Smart Translation App</h1>
            <SubscriptionPlans />
            <TranslateStream />
            <VoiceChanger />
            <SmartKeyboard />
        </div>
    );
};

export default App;
