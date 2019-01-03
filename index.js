#!/usr/bin/env node

const replace = require('replace-in-file');
const path = require('path');

const options = {
  files: path.join(process.cwd(), 'node_modules/@microsoft/sp-build-common/lib/SPBuildRig.js'),
  from: />=8\.9\.4 <9\.0\.0/g,
  to: '>=8.9.4',
};

(async() => {
	try {
	  console.log('Current working directory: ' + process.cwd());
	  
	  const changes = await replace(options)
	  console.log('Modified files:', changes.join(', '));
	}
	catch (error) {
	  console.error('Error occurred:', error);
	}
})();
