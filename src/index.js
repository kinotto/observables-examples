
/*require('./operators/interval')();
require('./operators/forkjoin')();
require('./operators/from')();
require('./operators/interval')();
require('./operators/of')();
require('./operators/range')();
require('./operators/timer')();
require('./operators/merge')();

require('./creation/setTimeout')();
require('./creation/setInterval')();*/
const rx = require('rxjs');
const createSubscriber = require('./utilities/createSubscriber');
const requireFolder = require('./utilities/requireFolder');

requireFolder('operators', rx, createSubscriber);
requireFolder('creation', rx, createSubscriber);