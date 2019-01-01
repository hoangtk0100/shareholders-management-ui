import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Retrieve all person - profits
const retrieveAll = () => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_PROFIT_URL_ALL;
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

// Retrieve person - profit by id
const retrieveById = id => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_PROFIT_URL_RETRIEVE_BY_ID(id);
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

// Retrieve person - profit by person id
const retrieveByPersonId = personId => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_ID(personId);
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

// Retrieve person - profit by profit id
const retrieveByProfitId = profitId => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_PROFIT_URL_RETRIEVE_BY_PROFIT_ID(profitId);
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
// Retrieve person - profit by person profit
const retrieveByPersonProfit = (personId, profitId) => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_PROFIT(personId, profitId);
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

export const personProfitService = {
    retrieveAll,
    retrieveById,
    retrieveByPersonId,
    retrieveByProfitId,
    retrieveByPersonProfit
 }