export const SITE_URL = 'https://localhost:44300';
//export const SITE_URL = 'http://35.221.177.4';
export const LOGIN_URL = `${SITE_URL}/#/login`;

export const API_URL = `${SITE_URL}/api`;
export const ADMIN_URL = `${SITE_URL}/admin`;

const fb = {
   url: 'https://www.facebook.com',
   id: '285921658793697',
   secret: 'e21467494d13abf65a60e05b04de5f44',
   version: 'v3.2',
   page: '/oauth/facebook'
}

export const FB_LOGIN_URL = 
   `${fb.url}/${fb.version}/dialog/oauth?&response_type=token&display=popup&client_id=${fb.id}`
   + `&display=popup&redirect_uri=${SITE_URL}${fb.page}&scope=email`;

export const GOOGLE_API = {
   client_id: '753186496069-b926t1274man4v2n2ivplt17nie2ik5o'
}


export default { SITE_URL, LOGIN_URL, API_URL, ADMIN_URL, FB_LOGIN_URL, GOOGLE_API };
