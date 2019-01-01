// API url
const API_URL = 'http://localhost:8080';

// Role's urls
const ROLE_URL_CREATE = API_URL + '/persons/create';
const ROLE_URL_DEACTIVATE = id => { return API_URL + 'roles/deactivate/' + id; }
const ROLE_URL_ALL = API_URL + '/roles/all';
const ROLE_URL_RETRIEVE_BY_ID = id => { return API_URL + '/roles/showById/' + id; }
const ROLE_URL_RETRIEVE_BY_NAME = name => { return API_URL + '/roles/showByName/' + name; }

// Person's urls
const PERSON_URL_CREATE = API_URL + '/persons/create';
const PERSON_URL_UPDATE = API_URL + '/persons/update';
const PERSON_URL_DEACTIVATE = id => { return API_URL + 'persons/deactivate/' + id; }
const PERSON_URL_ALL = API_URL + '/persons/all';
const PERSON_URL_RETRIEVE_BY_ID = id => { return API_URL + '/persons/showById/' + id; }
const PERSON_URL_RETRIEVE_BY_USERNAME = username => { return API_URL + '/persons/showByUsername/' + username; }
const PERSON_URL_RETRIEVE_BY_PERSONAL_ID = personalId => { return API_URL + '/persons/showByPersonalId/' + personalId; }
const PERSON_URL_RETRIEVE_BY_PHONE_NUMBER = phoneNumber => { return API_URL + '/persons/showByPhoneNumber/' + phoneNumber; }

// Login url
const URL_LOGIN = API_URL + '/auth/login';

// Stage's urls
const STAGE_URL_CREATE = API_URL + '/stages/create';
const STAGE_URL_UPDATE = API_URL + '/stages/update';
const STAGE_URL_DEACTIVATE = id => { return API_URL + 'stages/deactivate/' + id; }
const STAGE_URL_ALL = API_URL + '/stages/all';
const STAGE_URL_RETRIEVE_BY_ID = id => { return API_URL + '/stages/showById/' + id; }
const STAGE_URL_RETRIEVE_BY_PERIOD = period => { return API_URL + '/stages/showByPeriod/' + period; }

// Quarter's urls
const QUARTER_URL_CREATE = API_URL + '/quarters/create';
const QUARTER_URL_UPDATE = API_URL + '/quarters/update';
const QUARTER_URL_DEACTIVATE = id => { return API_URL + 'quarters/deactivate/' + id; }
const QUARTER_URL_ALL = API_URL + '/quarters/all';
const QUARTER_URL_RETRIEVE_BY_ID = id => { return API_URL + '/quarters/showById/' + id; }
const QUARTER_URL_RETRIEVE_BY_PERIOD = period => { return API_URL + '/quarters/showByPeriod/' + period; }

// Person - Quarter's urls
const PERSON_QUARTER_URL_ALL = API_URL + '/personQuarters/all';
const PERSON_QUARTER_URL_RETRIEVE_BY_ID = id => { return API_URL + '/personQuarters/showById/' + id; }
const PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_ID = personId => { return API_URL + '/personQuarters/showByPersonId/' + personId; }
const PERSON_QUARTER_URL_RETRIEVE_BY_QUARTER_ID = quarterId => { return API_URL + '/personQuarters/showByQuarterId/' + quarterId; }
const PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_PERIOD = (personId, period) => { return API_URL + '/personQuarters/showByPersonPeriod/' + personId + '/' + period; }
const PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_QUARTER = (personId, quarterId) => { return API_URL + '/personQuarters/showByPersonQuarter/' + personId + '/' + quarterId; }

// Share - period's urls
const SHARE_PERIOD_URL_ADD = API_URL + '/sharePeriods/add';
const SHARE_PERIOD_URL_SUBTRACT = API_URL + '/sharePeriods/subtract';
const SHARE_PERIOD_URL_BONUS = API_URL + '/sharePeriods/bonus';

// Profit's urls
const PROFIT_URL_CREATE = API_URL + '/profits/create';
const PROFIT_URL_ALL = API_URL + '/profits/all';
const PROFIT_URL_RETRIEVE_BY_ID = id => { return API_URL + '/profits/showById/' + id; }
const PROFIT_URL_RETRIEVE_BY_PERIOD = period => { return API_URL + '/profits/showByPeriod/' + period; }

// Person - Profit's urls
const PERSON_PROFIT_URL_ALL = API_URL + '/personProfits/all';
const PERSON_PROFIT_URL_RETRIEVE_BY_ID = id => { return API_URL + '/personProfits/showById/' + id; }
const PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_ID = personId => { return API_URL + '/personProfits/showByPersonId/' + personId; }
const PERSON_PROFIT_URL_RETRIEVE_BY_PROFIT_ID = profitId => { return API_URL + '/personProfits/showByProfitId/' + profitId; }
const PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_PROFIT = (personId, profitId) => { return API_URL + '/personProfits/showByPersonProfit/' + personId + '/' + profitId; }

// Activity's urls
const ACTIVITY_URL_CREATE = API_URL + '/activities/create';
const ACTIVITY_URL_ALL = API_URL + '/activities/all';
const ACTIVITY_URL_RETRIEVE_BY_ID = id => { return API_URL + '/activities/showById/' + id; }
const ACTIVITY_URL_RETRIEVE_BY_PERSON_ID = personId => { return API_URL + '/activities/showByPersonId/' + personId; }

export const API_URLS = {
   API_URL,
   ROLE_URL_CREATE,
   ROLE_URL_DEACTIVATE,
   ROLE_URL_ALL,
   ROLE_URL_RETRIEVE_BY_ID,
   ROLE_URL_RETRIEVE_BY_NAME,
   PERSON_URL_CREATE,
   PERSON_URL_UPDATE,
   PERSON_URL_DEACTIVATE,
   PERSON_URL_ALL,
   PERSON_URL_RETRIEVE_BY_ID,
   PERSON_URL_RETRIEVE_BY_USERNAME,
   PERSON_URL_RETRIEVE_BY_PERSONAL_ID,
   PERSON_URL_RETRIEVE_BY_PHONE_NUMBER,
   URL_LOGIN,
   STAGE_URL_CREATE,
   STAGE_URL_UPDATE,
   STAGE_URL_DEACTIVATE,
   STAGE_URL_ALL,
   STAGE_URL_RETRIEVE_BY_ID,
   STAGE_URL_RETRIEVE_BY_PERIOD,
   QUARTER_URL_CREATE,
   QUARTER_URL_UPDATE,
   QUARTER_URL_DEACTIVATE,
   QUARTER_URL_ALL,
   QUARTER_URL_RETRIEVE_BY_ID,
   QUARTER_URL_RETRIEVE_BY_PERIOD,
   PERSON_QUARTER_URL_ALL,
   PERSON_QUARTER_URL_RETRIEVE_BY_ID,
   PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_ID,
   PERSON_QUARTER_URL_RETRIEVE_BY_QUARTER_ID,
   PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_PERIOD,
   PERSON_QUARTER_URL_RETRIEVE_BY_PERSON_QUARTER,
   SHARE_PERIOD_URL_ADD,
   SHARE_PERIOD_URL_SUBTRACT,
   SHARE_PERIOD_URL_BONUS,
   PROFIT_URL_CREATE,
   PROFIT_URL_ALL,
   PROFIT_URL_RETRIEVE_BY_ID,
   PROFIT_URL_RETRIEVE_BY_PERIOD,
   PERSON_PROFIT_URL_ALL,
   PERSON_PROFIT_URL_RETRIEVE_BY_ID,
   PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_ID,
   PERSON_PROFIT_URL_RETRIEVE_BY_PROFIT_ID,
   PERSON_PROFIT_URL_RETRIEVE_BY_PERSON_PROFIT,
   ACTIVITY_URL_CREATE,
   ACTIVITY_URL_ALL,
   ACTIVITY_URL_RETRIEVE_BY_ID,
   ACTIVITY_URL_RETRIEVE_BY_PERSON_ID
};