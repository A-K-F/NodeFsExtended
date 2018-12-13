'use strict';

const util = require('util');
var fs = require('fs');


Object.keys(fs).forEach((methodName) => {
	if (!/^.*Sync$/.test(methodName)) {return;};
	var fsAsyncMethod = methodName.replace(/^(.*)Sync$/, '$1');
	fs[fsAsyncMethod] = util.promisify(fs[fsAsyncMethod]);
});

module.exports = {...fs};
