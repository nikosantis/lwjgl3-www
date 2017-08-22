// @flow
import AR from '../services/asyncRoute';

// Import causes routes to be code-split
// We have to specify each route name/path in order to be statically analyzed by webpack
export const Home = AR(() => import(/* webpackChunkName: "route-home" */ './home'));
export const Guide = AR(() => import(/* webpackChunkName: "route-guide" */ './guide'));
export const Download = AR(() => import(/* webpackChunkName: "route-download" */ './download'));
export const Customize = AR(() => import(/* webpackChunkName: "route-customize" */ './customize'));
export const Browse = AR(() => import(/* webpackChunkName: "route-browse" */ './browse'));
export const Source = AR(() => import(/* webpackChunkName: "route-source" */ './source'));
export const License = AR(() => import(/* webpackChunkName: "route-license" */ './license'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development' && !ASYNC_ROUTES) {
  require('./home');
  require('./guide');
  require('./download');
  require('./customize');
  require('./browse');
  require('./source');
  require('./license');
}
