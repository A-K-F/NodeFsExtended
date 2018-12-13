'use strict';

const util = require('util');
var fs = require('fs');


fs.mkdir = util.promisify(fs.mkdir);

fs.rmdir = util.promisify(fs.rmdir);

module.exports = {...fs};
