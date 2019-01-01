import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Create a new quarter
const create = quarter => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(quarter)
    };

    url = API_URLS.QUARTER_URL_CREATE;
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

// Update quarter
const update = quarter => {
    var putObject = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(quarter)
    };

    url = API_URLS.QUARTER_URL_CREATE;
    return fetch(url, putObject)
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

// Deactivate quarter
const deactivate = id => {
    var putObject = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.QUARTER_URL_DEACTIVATE(id);
    return fetch(url, putObject)
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

// Retrieve all quarters
const retrieveAll = () => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.QUARTER_URL_ALL;
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

// Retrieve quarter by id
const retrieveById = id => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.QUARTER_URL_RETRIEVE_BY_ID(id);
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

// Retrieve quarter by period
const retrieveByPeriod = period => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.QUARTER_URL_RETRIEVE_BY_PERIOD(period);
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

export const quarterService = {
    create,
    update,
    deactivate,
    retrieveAll,
    retrieveById,
    retrieveByPeriod
 }