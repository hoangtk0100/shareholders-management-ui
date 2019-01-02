
const updateOrCreateHeader = header => {
    if (header === null || header === undefined) {
        header = {
            method: 'GET',
            headers: {
            }
        }
    }
    let user = window.localStorage.getItem('userSession');
    if (user === null) {
        window.location= '#login';
    }
    if (header.headers === null || header.headers === undefined) {
        header.headers = {};
    }

    header.headers['Authorization'] = user;
    console.log(header);
    return header;
}

const checkAuthorizedStatus = responseData => {
    if (responseData && responseData.status === 401) {
        window.location = '#login';
    }
}

export const ahihi = {
    updateOrCreateHeader,
    checkAuthorizedStatus
};