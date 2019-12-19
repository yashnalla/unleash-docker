'use strict';
const unleash = require('unleash-server');
const cors = require('cors');
unleash.start({
	adminAuthentication: 'none',
	enableLegacyRoutes: false,
	preHook: app => {
		console.log('configuring cors');
		app.use(cors({origin: 'https://ci.foo.redhat.com\:1337'}));
	}
}).then(unleash =>{
  console.log('server started');
});
