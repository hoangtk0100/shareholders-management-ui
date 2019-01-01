import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Add shares
const add = sharePeriod => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(sharePeriod)
    };

    url = API_URLS.SHARE_PERIOD_URL_ADD;
    return fetch(url, postObject)
                .then(responseData => {
                    if (responseData.status >= 400) {
                        throw new Error(responseData.statusText);
                    }

                    return responseData.json();
                })
                .then(data => {
                    if (data.errorCode === 0) {
                        return data;
                    }
                })
                .catch(err => {
                    throw new Error(err);
                });
};


// Subtract shares
const subtract = sharePeriod => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(sharePeriod)
    };

    url = API_URLS.SHARE_PERIOD_URL_SUBTRACT;
    return fetch(url, postObject)
                .then(responseData => {
                    if (responseData.status >= 400) {
                        throw new Error(responseData.statusText);
                    }

                    return responseData.json();
                })
                .then(data => {
                    if (data.errorCode === 0) {
                        return data;
                    }
                })
                .catch(err => {
                    throw new Error(err);
                });
};


// Bonus shares
const bonus = sharePeriod => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(sharePeriod)
    };

    url = API_URLS.SHARE_PERIOD_URL_BONUS;
    return fetch(url, postObject)
                .then(responseData => {
                    if (responseData.status >= 400) {
                        throw new Error(responseData.statusText);
                    }

                    return responseData.json();
                })
                .then(data => {
                    if (data.errorCode === 0) {
                        return data;
                    }
                })
                .catch(err => {
                    throw new Error(err);
                });
};

export const sharePeriodService = {
    add,
    subtract,
    bonus
 }