import { POSITRON } from '@carto/react/basemaps';

export const initialState = {
  viewState: {
    latitude: 37.7537487,
    longitude: -122.2547929,
    zoom: 10,
    pitch: 3,
    bearing: 0,
    dragRotate: false,
  },
  basemap: POSITRON,
  credentials: {
    username: 'kyle-se',
    apiKey: 'eyFg36VV5D7XSXr0xKH5sQ',
    serverUrlTemplate: 'https://{user}.carto.com',
  },
  googleApiKey: '', // only required when using a Google Basemap
};

export const oauthInitialState = {
  oauthApp: {
    clientId: 'TYPE HERE YOUR OAUTH CLIENT ID',
    scopes: [
      'user:profile', // to load avatar photo
      'datasets:metadata', // to list all your datasets,
      'dataservices:geocoding', // to use geocoding through Data Services API
      'dataservices:isolines', // to launch isochrones or isodistances through Data Services API
    ],
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },
  token: null,
  userInfo: null,
};
