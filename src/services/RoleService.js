import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Create new role
const create = role => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(role)
    };

    url = API_URLS.ROLE_URL_CREATE;
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

// Deactivate role
const deactivate = id => {
    var putObject = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.ROLE_URL_DEACTIVATE(id);
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

// Retrieve all roles
const retrieveAll = () => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.ROLE_URL_ALL;
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

// Retrieve by id
const retrieveById = id => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.ROLE_URL_RETRIEVE_BY_ID(id);
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

// Retrieve by name
const retrieveByName = name => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.ROLE_URL_RETRIEVE_BY_NAME(name);
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

export const roleService = {
    create,
    deactivate,
    retrieveAll,
    retrieveById,
    retrieveByName
 }