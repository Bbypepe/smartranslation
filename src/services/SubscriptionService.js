import subscriptionConfig from '../config/subscriptionConfig';

// Service for handling subscription logic
export const getAvailablePlans = () => {
    return subscriptionConfig.plans;
};

export const getTrialPeriod = () => {
    return subscriptionConfig.trialPeriod;
};
