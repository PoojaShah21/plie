const baseUrl = 'http://3.7.81.243/projects/plie-api/public/api/';

const BaseSetting = {
  name: 'Pile',
  appVersionCode: '1',
  api: `${baseUrl}`,

  endpoints: {
    login: 'login',
    eventList: 'events-listing',
  },
};

export default BaseSetting;
