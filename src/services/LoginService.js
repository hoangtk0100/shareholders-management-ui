import fetch from 'cross-fetch';
import { API_URLS } from '../APIs';
import { ahihi} from '../utils/ahihi';

const login = user => {
    var getObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    };

    let url = API_URLS.URL_LOGIN;
    ahihi.updateOrCreateHeader(getObject);
    return fetch(url, getObject)
                .then(responseData => {
                    if (responseData.status >= 400) {
                        throw new Error(responseData.statusText);
                    }
                    console.log(responseData.json());
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

export const loginService = {
    login
}
