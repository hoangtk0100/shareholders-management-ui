import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';

// Set default url
let url = '';

// Create a new person
const create = person => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(person)
    };

    url = API_URLS.PERSON_URL_CREATE;
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

// Update person
const update = person => {
    var putObject = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(person)
    };

    url = API_URLS.PERSON_URL_UPDATE;
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

// Deactivate person
const deactivate = id => {
    var putObject = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_URL_DEACTIVATE(id);
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

// Retrieve all persons
const retrieveAll = () => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_URL_ALL;
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

// Retrieve person by id
const retrieveById = id => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_URL_RETRIEVE_BY_ID(id);
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

// Retrieve person by username
const retrieveByUsername = username => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    url = API_URLS.PERSON_URL_RETRIEVE_BY_USERNAME(username);
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

// Retrieve person by personal id
const retrieveByPersonalId = personalId => {
   var getObject = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };

   url = API_URLS.PERSON_URL_RETRIEVE_BY_PERSONAL_ID(personalId);
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

// Retrieve person by phone number
const retrieveByPhoneNumber = phoneNumber => {
   var getObject = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };

   url = API_URLS.PERSON_URL_RETRIEVE_BY_PHONE_NUMBER(phoneNumber);
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

export const userService = {
    create,
    update,
    deactivate,
    retrieveAll,
    retrieveById,
    retrieveByUsername,
    retrieveByPersonalId,
    retrieveByPhoneNumber
 }