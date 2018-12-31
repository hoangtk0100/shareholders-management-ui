// import React, { Component } from 'react';
import fetch from 'cross-fetch';
import { API_CONST } from '../API';

const login = user => {
    var postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    let url = API_CONST.LOGIN_URL

    return fetch(url, postObject)
        .then(responseData => {
            if (responseData.status >= 400) {
                throw new Error(responseData.statusText);
            }
            return responseData.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            throw new Error(err);
        });
}
export const loginService = {
    login
}

// import React, { Component } from 'react';
// import fetch from 'cross-fetch';
// import API_URL from '../API';

// function login(user){
//     var postObject = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     };

    
//     return fetch(API_URL + '/login?version=1.0',postObject)
//     .then(responseData => {
//         console.log('======= fetch API to login');
//         console.log(responseData.statusText);
//         if (responseData.status >= 400) {
//             throw new Error(responseData.statusText);
//         }
//         return responseData.json(); // This is a MUST, do not remove.
//     })
//     .then(data => {
//         console.log('data');
//         return data;
//     })
//     .catch(err => {
//         throw new Error(err);
//         //console.error(err);
//         // return err;
//     });
// }
// export const loginService = {
//     login
// }
