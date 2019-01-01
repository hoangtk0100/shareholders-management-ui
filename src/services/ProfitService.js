import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Create a new profit
const create = profit => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(profit)
    };

    url = API_URLS.PROFIT_URL_CREATE;
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
}

// Retrieve all stages
const retrieveAll = () => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PROFIT_URL_ALL;
    return fetch(url, getObject)
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
}

// Retrieve profit by id
const retrieveById = id => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PROFIT_URL_RETRIEVE_BY_ID(id);
    return fetch(url, getObject)
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
}

// Retrieve profit by period
const retrieveByPeriod = period => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PROFIT_URL_RETRIEVE_BY_PERIOD(period);
    return fetch(url, getObject)
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
}

export const profitService = {
    create,
    retrieveAll,
    retrieveById,
    retrieveByPeriod
 }