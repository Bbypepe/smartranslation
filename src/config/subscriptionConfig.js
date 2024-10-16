// Subscription plans configuration for Smart Translation app
const subscriptionConfig = {
    plans: [
        {
            id: 'basic',
            name: 'Basic Plan',
            price: 25, // السعر بالدولار شهريًا
            features: ['Text translation', 'Voice translation'],
        },
        {
            id: 'pro',
            name: 'Pro Plan',
            price: 75,
            features: ['Text and voice translation', 'Real-time voice changer'],
        },
        {
            id: 'premium',
            name: 'Premium Plan',
            price: 130,
            features: [
                'Text translation',
                'Voice translation',
                'Real-time voice changer',
                'Viewer message translation',
            ],
        },
    ],
    trialPeriod: 3, // فترة التجربة المجانية بالأيام
};

export default subscriptionConfig;
